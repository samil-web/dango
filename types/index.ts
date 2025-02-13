export interface User {
  id: string;
  email: string;
  target_weight: number;
  starting_weight: number;
  height: number;
  created_at: string;
  updated_at: string;
}

export interface WeightEntry {
  id: string;
  user_id: string;
  weight: number;
  date: string;
  notes?: string;
  created_at: string;
}

export interface MealPlan {
  id: string;
  user_id: string;
  daily_calories: number;
  protein_target: number;
  created_at: string;
  updated_at: string;
}

export interface Meal {
  id: string;
  meal_plan_id: string;
  name: string;
  calories: number;
  protein: number;
  scheduled_time: string;
  created_at: string;
}

export interface WorkoutSession {
  id: string;
  user_id: string;
  date: string;
  notes?: string;
  created_at: string;
}

export interface Exercise {
  id: string;
  workout_session_id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  created_at: string;
}
