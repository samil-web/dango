# Implementation Guide: Weight Loss Tracking App

## Tech Stack Selection

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **UI**: Tailwind CSS + Shadcn/ui (gives you beautiful, accessible components)
- **Backend**: Supabase (provides auth, database, and real-time features without complex backend setup)
- **State Management**: Tanstack Query (React Query) for server state
- **Forms**: React Hook Form + Zod for validation

## Step-by-Step Implementation

### Step 1: Project Setup & Authentication (1-2 days)

```bash
# Create new Next.js project with app router
npx create-next-app@latest dango-fitness --typescript --tailwind --app

# Install key dependencies
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
npm install @tanstack/react-query
npm install react-hook-form @hookform/resolvers zod
npm install @radix-ui/react-icons
```

1. Set up Supabase project (I'll guide you through this)
2. Implement authentication routes
3. Create protected layout

### Step 2: Core Data Models (1 day)

```typescript
// types/index.ts
interface User {
  id: string;
  email: string;
  target_weight: number;
  starting_weight: number;
  height: number;
}

interface WeightEntry {
  id: string;
  user_id: string;
  weight: number;
  date: string;
  notes?: string;
}

interface MealPlan {
  id: string;
  user_id: string;
  daily_calories: number;
  protein_target: number;
  meals: Meal[];
}
```

### Step 3: Dashboard Layout (2-3 days)

1. Create responsive layout with Tailwind
2. Implement navigation
3. Set up protected routes
4. Create loading states

### Step 4: Weight Tracking Module (3-4 days)

1. Create weight entry form
2. Implement weight tracking graph
3. Add 7-day average calculation
4. Create progress visualization

### Step 5: Meal Planning System (3-4 days)

1. Implement calorie calculator
2. Create meal schedule setup
3. Add basic food logging
4. Show daily nutrition summary

### Step 6: Basic Workout Tracking (3-4 days)

1. Create workout session form
2. Implement exercise library
3. Add progress tracking
4. Create workout schedule

## Detailed First Week Plan

### Day 1: Project Setup

1. **Morning**: Initial project setup

```bash
# Create project
npx create-next-app@latest dango-fitness --typescript --tailwind --app

# Install Shadcn/ui
npx shadcn-ui@latest init

# Add initial components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add form
```

2. **Afternoon**: Authentication Setup
   - Set up Supabase project
   - Implement auth routes
   - Create protected layout

### Day 2: Core Layout & Navigation

1. Create app shell

```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
```

2. Implement navigation
3. Set up dashboard layout

### Day 3: Weight Tracking - Part 1

1. Create database tables
2. Implement weight entry form
3. Set up data fetching with React Query

### Day 4: Weight Tracking - Part 2

1. Add weight graph visualization
2. Implement 7-day average
3. Create progress indicators

### Day 5: Testing & Refinement

1. Add error handling
2. Implement loading states
3. Add form validation
4. Test user flows

## Key Files Structure

```
dango-fitness/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── weight/
│   │   ├── meals/
│   │   └── workouts/
│   ├── api/
│   └── layout.tsx
├── components/
│   ├── ui/
│   ├── forms/
│   └── charts/
├── lib/
│   ├── supabase/
│   ├── utils/
│   └── validators/
└── types/
```

## Development Tips

### 1. State Management

- Use React Query for server state
- Use React Context for global UI state
- Keep form state local with React Hook Form

### 2. API Structure

```typescript
// lib/api.ts
export const api = {
  weight: {
    add: async (data: WeightEntry) => {
      // Implementation
    },
    getHistory: async (userId: string) => {
      // Implementation
    }
  },
  meals: {
    // Meal-related endpoints
  }
};
```

### 3. Error Handling

- Implement error boundaries
- Use toast notifications for user feedback
- Add form validation with Zod

### 4. Testing

- Start with simple component tests
- Add integration tests for critical flows
- Use Playwright for E2E testing

## Next Steps

Let me know if you want to start with the project setup, and I'll guide you through each step in detail. We'll begin with:

1. Setting up the Next.js project
2. Configuring Supabase
3. Creating the authentication system

Which would you like to tackle first?
