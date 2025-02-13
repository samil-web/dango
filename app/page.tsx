import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dango</h1>
        <p className="text-xl mb-8">Your personal weight loss journey starts here</p>
        
        <div className="flex gap-4 justify-center">
          <Link 
            href="/auth/login"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
