import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AICoachAdvice() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Coach Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Workout Analysis</h3>
            <p>Your consistency in lower body workouts is excellent. Consider adding more upper body exercises to maintain balance.</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Nutrition Tips</h3>
            <p>Based on your meal logs:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Increase protein intake by 20g daily</li>
              <li>Add more fiber-rich vegetables</li>
              <li>Consider pre-workout snacks</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Progress Insights</h3>
            <p>You're on track with your weight loss goals. Your current rate of loss is sustainable and healthy.</p>
          </div>

          <div className="mt-4">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
              Get Detailed Analysis
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
