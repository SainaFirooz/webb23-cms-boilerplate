import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-black text-gray-300 rounded-lg hover:bg-custombg transition-colors">
          Back to home page
        </button>
      </Link>
    </div>
  );
}
