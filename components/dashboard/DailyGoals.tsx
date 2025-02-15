import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DailyGoals() {
  return (
    <div className="space-y-4">
      <Card className="bg-white/80 backdrop-blur-sm border-none">
        <CardHeader className="border-b border-teal-100">
          <CardTitle className="text-teal-700">Daily Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Workout Plan</h3>
              <div className="bg-teal-50/50 rounded-xl p-4 shadow-sm">
                <p className="text-teal-800 font-medium mb-3">Today's Focus: Lower Body</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-teal-600">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                    Squats: 3 sets x 12 reps
                  </li>
                  <li className="flex items-center text-teal-600">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                    Lunges: 3 sets x 10 reps each leg
                  </li>
                  <li className="flex items-center text-teal-600">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                    Deadlifts: 3 sets x 10 reps
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Meal Plan</h3>
              <div className="bg-teal-50/50 rounded-xl p-4 shadow-sm">
                <p className="text-teal-800 font-medium mb-3">Target Calories: 2000 kcal</p>
                <div className="space-y-3">
                  <div className="flex items-center text-teal-600">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                    <p>Breakfast: Oatmeal with fruits</p>
                  </div>
                  <div className="flex items-center text-teal-600">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                    <p>Lunch: Grilled chicken salad</p>
                  </div>
                  <div className="flex items-center text-teal-600">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                    <p>Dinner: Salmon with vegetables</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
