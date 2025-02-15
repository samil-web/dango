import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { WeightEntry } from '@/app/types';

const weightFormSchema = z.object({
  weight: z.number().min(20).max(500),
  date: z.string(),
  notes: z.string().optional(),
});

type WeightFormValues = z.infer<typeof weightFormSchema>;

interface WeightFormProps {
  onSubmit: (data: Omit<WeightEntry, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => Promise<void>;
}

export function WeightForm({ onSubmit }: WeightFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<WeightFormValues>({
    resolver: zodResolver(weightFormSchema),
    defaultValues: {
      weight: undefined,
      date: new Date().toISOString().split('T')[0],
      notes: '',
    },
  });

  const handleSubmit = async (data: WeightFormValues) => {
    try {
      setIsSubmitting(true);
      await onSubmit({
        weight: data.weight,
        date: data.date,
        notes: data.notes,
      });
      form.reset();
    } catch (error) {
      console.error('Failed to submit weight entry:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="weight" className="text-sm font-medium">
          Weight (kg)
        </label>
        <input
          type="number"
          id="weight"
          step="0.1"
          className="w-full rounded-md border px-3 py-2"
          {...form.register('weight', { valueAsNumber: true })}
        />
        {form.formState.errors.weight && (
          <p className="text-sm text-red-500">{form.formState.errors.weight.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="date" className="text-sm font-medium">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="w-full rounded-md border px-3 py-2"
          {...form.register('date')}
        />
        {form.formState.errors.date && (
          <p className="text-sm text-red-500">{form.formState.errors.date.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="text-sm font-medium">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          className="w-full rounded-md border px-3 py-2"
          rows={3}
          {...form.register('notes')}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-4 py-2 text-white disabled:opacity-50"
      >
        {isSubmitting ? 'Saving...' : 'Save Weight Entry'}
      </button>
    </form>
  );
}
