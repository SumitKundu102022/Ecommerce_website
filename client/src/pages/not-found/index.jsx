import { Card, CardContent } from "@/components/ui/card"; // ShadCN/UI Card component
import { Search } from "lucide-react";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="max-w-md p-6">
        <CardContent className="text-center">
          <Search className="mx-auto mb-4 h-12 w-12 text-gray-500" />
          <h1 className="text-2xl font-bold text-gray-800">
            Page doesn't exist
          </h1>
          <p className="text-gray-500 mt-2">
            The page you're looking for was not found.
          </p>
        </CardContent>
          </Card>
          {/* <Search /> */}
    </div>  
  );
}

export default NotFound;
