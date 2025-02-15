import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AICoachAdvice() {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-none">
      <CardHeader className="border-b border-teal-100">
        <CardTitle className="text-teal-700">AI Coach Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-teal-50/50 p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-teal-700 mb-2">Workout Analysis</h3>
            <p className="text-teal-600">Your consistency in lower body workouts is excellent. Consider adding more upper body exercises to maintain balance.</p>
          </div>

          <div className="bg-teal-50/50 p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-teal-700 mb-2">Nutrition Tips</h3>
            <p className="text-teal-600 mb-2">Based on your meal logs:</p>
            <ul className="space-y-2">
              <li className="flex items-center text-teal-600">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                Increase protein intake by 20g daily
              </li>
              <li className="flex items-center text-teal-600">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                Add more fiber-rich vegetables
              </li>
              <li className="flex items-center text-teal-600">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                Consider pre-workout snacks
              </li>
            </ul>
          </div>

          <div className="bg-teal-50/50 p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-teal-700 mb-2">Progress Insights</h3>
            <p className="text-teal-600">You're on track with your weight loss goals. Your current rate of loss is sustainable and healthy.</p>
          </div>

          <button className="w-full bg-teal-500 text-white py-3 px-4 rounded-xl hover:bg-teal-600 transition-colors font-medium mt-4">
            Get Detailed Analysis
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
