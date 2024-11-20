import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // ShadCN/UI Card component
import { TriangleAlert } from "lucide-react";

function UnauthPage() {
  const [countdown, setCountdown] = useState(5); // Set initial countdown to 3 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1); // Decrease countdown every second
    }, 1000);

    const redirectTimer = setTimeout(() => {
      window.history.back(); // Redirects to the previous page
    }, 5000); // 3-second delay

    return () => {
      clearInterval(timer); // Cleanup the interval
      clearTimeout(redirectTimer); // Cleanup the timeout
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="max-w-md p-6">
        <CardContent className="text-center">
          <TriangleAlert className="mx-auto mb-4 h-12 w-12 text-red-600" />
          <h1 className="text-2xl font-bold text-red-600">
            You don't have access to view this page
          </h1>
          <p className="text-gray-500 mt-2">
            Redirecting you back in {countdown} second
            {countdown !== 1 ? "s" : ""}...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default UnauthPage;
