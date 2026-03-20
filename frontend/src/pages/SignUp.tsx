import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[420px] w-full space-y-8 bg-white p-8 sm:p-10 rounded-2xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] border border-gray-100">
        <div className="text-center">
          <Link to="/" className="text-2xl font-bold text-primary inline-block mb-3">
            FarmersMarketSoCal
          </Link>
          <h2 className="text-[28px] sm:text-3xl font-bold text-textMain tracking-tight mb-2">
            Create an account
          </h2>
          <p className="text-[14px] sm:text-[15px] text-textMuted">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary hover:text-[#043326]">
              Sign in
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[14px] font-semibold text-textMain mb-1.5">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none relative block w-full px-3.5 py-2.5 border border-gray-300 placeholder-gray-400 text-textMain rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm transition-shadow"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[14px] font-semibold text-textMain mb-1.5">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-3.5 py-2.5 border border-gray-300 placeholder-gray-400 text-textMain rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm transition-shadow"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-[14px] font-semibold text-textMain mb-1.5">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-3.5 py-2.5 border border-gray-300 placeholder-gray-400 text-textMain rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm transition-shadow"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent text-[15px] font-medium rounded-lg text-white bg-primary hover:bg-[#043326] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors shadow-sm"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-500 font-medium tracking-wide">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => alert("Google Login Triggered")}
              className="w-full flex justify-center items-center gap-3 py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-[15px] font-medium text-textMain hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
