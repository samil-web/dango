import { WeightForm } from './components/weight-form';

export default function WeightPage() {
  const handleSubmitWeight = async (data: {
    weight: number;
    date: string;
    notes?: string;
  }) => {
    // TODO: Implement weight entry submission to Supabase
    console.log('Submitting weight entry:', data);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Track Your Weight</h1>
      
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Add New Weight Entry</h2>
        <WeightForm onSubmit={handleSubmitWeight} />
      </div>

      {/* TODO: Add weight history graph */}
      <div className="mt-8 bg-card rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Weight History</h2>
        <p className="text-muted-foreground">Weight history graph coming soon...</p>
      </div>
    </div>
  );
}
