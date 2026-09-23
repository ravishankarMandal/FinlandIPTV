import { useLocation } from "react-router-dom";

export const FinlandPages = () => {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Finland TV</h1>

      {selectedPlan ? (
        <div className="mx-auto mt-6 max-w-md rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">
            Selected Subscription: {selectedPlan.duration}
          </h2>
          <p className="mt-2 text-2xl font-bold text-blue-600">
            {selectedPlan.price}
          </p>
        </div>
      ) : (
        <p className="mt-4 text-gray-600">No specific plan selected.</p>
      )}
    </div>
  );
};