import React from 'react';
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="bg-white border-b border-gray-100 py-4 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-[20px] font-bold text-primary flex items-center gap-2 tracking-tight">
          FarmersMarketSoCal
        </Link>
        <div className="flex gap-4 sm:gap-6 items-center">
          {isLoggedIn ? (
            <UserDropdown />
          ) : (
            <>
              <Link to="/login" className="text-[14px] sm:text-[15px] font-medium text-textMain hover:text-primary transition-colors">
                Sign In
              </Link>
              <Link to="/register" className="bg-primary hover:bg-[#043326] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-[14px] font-medium transition-colors shadow-sm">
                Join Now
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
