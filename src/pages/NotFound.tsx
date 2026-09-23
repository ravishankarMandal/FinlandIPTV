import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-blue-800">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-600">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-md bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
      >
        Back to Home
      </Link>
    </div>
  );
}