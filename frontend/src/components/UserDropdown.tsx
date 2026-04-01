import React, { useState, useRef, useEffect } from 'react';

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-[#004e44] hover:text-[#003830] transition-colors font-medium text-[15px] px-1"
      >
        Shopper Account
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-[120%] w-[200px] bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-[#e5e7eb] py-2 flex flex-col items-start z-[99999]" style={{ minWidth: '180px' }}>
          <a 
            href="https://app.farmersmarketsocal.com/transactions" 
            className="w-full text-left px-5 py-3 text-[15px] text-[#004e44] hover:bg-gray-50 transition-colors"
          >
            Transactions
          </a>
          <a 
            href="https://app.farmersmarketsocal.com/messages" 
            className="w-full text-left px-5 py-3 text-[15px] text-[#004e44] hover:bg-gray-50 transition-colors"
          >
            Messages
          </a>
          <a 
            href="https://app.farmersmarketsocal.com/settings" 
            className="w-full text-left px-5 py-3 text-[15px] text-[#004e44] hover:bg-gray-50 transition-colors"
          >
            Profile
          </a>
          <button 
            onClick={() => {
              sessionStorage.clear();
              localStorage.clear();
              document.cookie.split(";").forEach((c) => {
                document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
              });
              window.location.href = 'https://app.farmersmarketsocal.com/logout';
            }} 
            className="w-full text-left px-5 py-3 text-[15px] text-[#004e44] hover:bg-gray-50 transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
