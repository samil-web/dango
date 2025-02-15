import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Statistics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics (1 min)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Weight Loss Progress</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Total</p>
                <p className="text-xl font-bold">-5.2 kg</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-xl font-bold">-2.1 kg</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">This Week</p>
                <p className="text-xl font-bold">-0.5 kg</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">AI Coach Advice</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Based on your progress:</p>
              <p className="mt-1">Great job maintaining consistency! Consider increasing your water intake and adding more protein to your meals.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
