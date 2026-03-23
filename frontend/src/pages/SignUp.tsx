import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  // null = first step viewing options. 'shopper' | 'vendor' = second step form.
  const [accountType, setAccountType] = useState<'shopper' | 'vendor' | null>(null);

  const getGoogleSignUpLink = () => {
    if (accountType === 'shopper') {
      return 'https://app.farmersmarketsocal.com/signup/google?role_id=role_bsajfr9fvie8r1wa';
    }
    return 'https://app.farmersmarketsocal.com/signup/google?role_id=role_p9l3sqpgt8wovdth';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white sm:bg-secondary py-12 px-4 sm:px-6 lg:px-8">
      {/* We use broader padding and wider max-width to match the expansiveness of the screenshots */}
      <div className="max-w-[560px] w-full bg-white sm:p-12 sm:rounded-2xl sm:shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:border sm:border-gray-100">
        
        {/* Title stays at the top */}
        <div className="mb-10">
          <h2 className="text-[32px] sm:text-[36px] font-bold text-[#0f172a] tracking-tight leading-[1.15]">
            Let's get you started with a<br />Farmers Market SoCal account
          </h2>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Account Type Selection Block */}
          <div className="space-y-4">
            <h3 className="text-[15px] font-medium text-gray-600">Account Type</h3>
            
            <div className="flex flex-col gap-4">
              
              {/* Shopper Card - Hidden if Vendor is selected */}
              {accountType !== 'vendor' && (
                <div 
                  onClick={() => setAccountType('shopper')}
                  className={`relative flex cursor-pointer rounded-xl border p-5 transition-all duration-200 ${accountType === 'shopper' ? 'border-[#043326] bg-[#043326]/5' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex w-full items-center gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#0f172a]">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[16px] font-medium text-[#0f172a]">Join as a Shopper</p>
                      <p className="mt-1 text-[15px] text-gray-500">An account to shop and buy from vendors</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Vendor Card - Hidden if Shopper is selected */}
              {accountType !== 'shopper' && (
                <div 
                  onClick={() => setAccountType('vendor')}
                  className={`relative flex cursor-pointer rounded-xl border p-5 transition-all duration-200 ${accountType === 'vendor' ? 'border-[#043326] bg-[#043326]/5' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex w-full items-center gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#0f172a]">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[16px] font-medium text-[#0f172a]">Join as a Vendor</p>
                      <p className="mt-1 text-[15px] text-gray-500">An account for vendors to manage their online store</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
            
            {/* If an account is selected, let them go back via a subtle button or text */}
            {accountType && (
              <div className="flex justify-end mt-2">
                <button type="button" onClick={() => setAccountType(null)} className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Change account type
                </button>
              </div>
            )}
          </div>

          {/* Expanded Form - Only shows when account type is selected */}
          {accountType && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500 pt-2 space-y-6">
              
              {/* Google Auth Button positioned right above Full Name */}
              <a
                href={getGoogleSignUpLink()}
                className="w-full flex justify-center items-center gap-3 py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-[15px] font-semibold text-gray-700 hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign up with Google
              </a>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-[13px]">
                  <span className="px-4 bg-white text-gray-500 font-medium tracking-wide">or sign up with email</span>
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[14px] font-semibold text-[#0f172a] mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-[#0f172a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043326]/20 focus:border-[#043326] sm:text-[15px] transition-all"
                    placeholder="Full name..."
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[14px] font-semibold text-[#0f172a] mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-[#0f172a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043326]/20 focus:border-[#043326] sm:text-[15px] transition-all"
                    placeholder="Input email..."
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[14px] font-semibold text-[#0f172a] mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-[#0f172a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043326]/20 focus:border-[#043326] sm:text-[15px] transition-all"
                    placeholder="+1 (202) 456 7578...."
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-[14px] font-semibold text-[#0f172a] mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-[#0f172a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043326]/20 focus:border-[#043326] sm:text-[15px] transition-all"
                    placeholder="input password"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-[14px] font-semibold text-[#0f172a] mb-2">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-[#0f172a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043326]/20 focus:border-[#043326] sm:text-[15px] transition-all"
                    placeholder="confirm password"
                  />
                </div>
              </div>

              {/* Terms and Conditions Text */}
              <div className="pt-2 text-center">
                <p className="text-[13px] text-gray-500">
                  By signing up to {accountType === 'shopper' ? 'buy from vendors' : 'sell'}, you agree to our terms and conditions
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent text-[16px] font-semibold rounded-lg text-white bg-[#043326] hover:bg-[#032a1f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#043326] transition-all duration-200"
                >
                  Sign up
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
