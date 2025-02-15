export interface User {
  id: string;
  email: string;
  target_weight?: number;
  starting_weight?: number;
  height?: number;
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
  updated_at: string;
}

export interface MealPlan {
  id: string;
  user_id: string;
  daily_calories: number;
  protein_target: number;
  created_at: string;
  updated_at: string;
}

export type Period = '1w' | '1m' | '3m' | '6m' | '1y' | 'all';

