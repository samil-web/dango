import { DashboardLayout } from '@/components/layouts/DashboardLayout';
import { DailyGoals } from '@/components/dashboard/DailyGoals';
import { Statistics } from '@/components/dashboard/Statistics';
import { AICoachAdvice } from '@/components/dashboard/AICoachAdvice';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <DailyGoals />
          <Statistics />
        </div>
        <div>
          <AICoachAdvice />
        </div>
      </div>
    </DashboardLayout>
  );
}
