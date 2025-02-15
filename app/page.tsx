import { DashboardLayout } from '@/components/layouts/DashboardLayout';
import { DailyGoals } from '@/components/dashboard/DailyGoals';
import { Statistics } from '@/components/dashboard/Statistics';
import { AICoachAdvice } from '@/components/dashboard/AICoachAdvice';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <DailyGoals />
          <Statistics />
        </div>
        <div className="space-y-6">
          <AICoachAdvice />
        </div>
      </div>
    </DashboardLayout>
  );
}
