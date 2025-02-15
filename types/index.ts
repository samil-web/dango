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

export interface UserProfile extends User {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  activity_level: 'sedentary' | 'light' | 'moderate' | 'very_active' | 'extra_active';
  image_url?: string;
}

export interface Goal {
  id: string;
  user_id: string;
  type: 'weight' | 'exercise' | 'meal';
  target: number;
  current: number;
  deadline: string;
  created_at: string;
  updated_at: string;
}

export interface AICoachAdvice {
  id: string;
  user_id: string;
  type: 'workout' | 'diet' | 'general';
  advice: string;
  context: {
    recent_weight?: number;
    weight_trend?: 'gaining' | 'losing' | 'maintaining';
    workout_consistency?: number;
    diet_adherence?: number;
  };
  created_at: string;
}

export interface Statistics {
  weight_loss: {
    total: number;
    by_month: { [key: string]: number };
    by_week: { [key: string]: number };
  };
  workout_completion: number;
  meal_plan_adherence: number;
  streak_days: number;
}
