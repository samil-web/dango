import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Statistics() {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-none">
      <CardHeader className="border-b border-teal-100">
        <CardTitle className="text-teal-700">Statistics (1 min)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-teal-700 mb-4">Weight Loss Progress</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-teal-50/50 p-4 rounded-xl shadow-sm">
                <p className="text-sm text-teal-600 mb-1">Total</p>
                <p className="text-2xl font-bold text-teal-700">-5.2 kg</p>
              </div>
              <div className="bg-teal-50/50 p-4 rounded-xl shadow-sm">
                <p className="text-sm text-teal-600 mb-1">This Month</p>
                <p className="text-2xl font-bold text-teal-700">-2.1 kg</p>
              </div>
              <div className="bg-teal-50/50 p-4 rounded-xl shadow-sm">
                <p className="text-sm text-teal-600 mb-1">This Week</p>
                <p className="text-2xl font-bold text-teal-700">-0.5 kg</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-teal-700 mb-3">AI Coach Advice</h3>
            <div className="bg-teal-50/50 rounded-xl p-4 shadow-sm">
              <p className="text-sm text-teal-600 mb-2">Based on your progress:</p>
              <p className="text-teal-700">Great job maintaining consistency! Consider increasing your water intake and adding more protein to your meals.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
