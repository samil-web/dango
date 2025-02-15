import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DailyGoals() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Daily Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Workout Plan</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p>Today's Focus: Lower Body</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Squats: 3 sets x 12 reps</li>
                  <li>Lunges: 3 sets x 10 reps each leg</li>
                  <li>Deadlifts: 3 sets x 10 reps</li>
                </ul>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Meal Plan</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p>Target Calories: 2000 kcal</p>
                <div className="mt-2 space-y-1">
                  <p>Breakfast: Oatmeal with fruits</p>
                  <p>Lunch: Grilled chicken salad</p>
                  <p>Dinner: Salmon with vegetables</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
