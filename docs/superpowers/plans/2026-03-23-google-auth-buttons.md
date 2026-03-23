# Google Auth Buttons Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add environment-specific Google Sign Up/Log In buttons to the registration and login pages according to the provided Slack designs and specifications.

**Architecture:** We will modify `SignUp.tsx` to include an "Account Type" state (Shopper vs Vendor) if it doesn't already exist, or integrate with existing state, to dynamically construct the Google OAuth URL with the correct `role_id`. We will insert the "Sign up with Google" button above the "Full Name" field. Similarly, we will modify `SignIn.tsx` to include a "Continue with Google" button above the "Email" field that links to the login URL.

**Tech Stack:** React, Tailwind CSS, TypeScript, React Router

---

### Task 1: Update `SignIn.tsx` to include "Continue with Google" button

**Files:**
- Modify: `/home/sk/Downloads/SOCALL/frontend/src/pages/SignIn.tsx`

- [ ] **Step 1: Write the failing test** (Skip if no test suite handles UI components directly)

- [ ] **Step 2: Write minimal implementation**

We will add the "Continue with Google" button above the Email field and remove it from the bottom.

```tsx
// Find the start of the form in SignIn.tsx
        <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Add Google Button Here */}
          <a
            href="https://app.farmersmarketsocal.com/login"
            className="w-full flex justify-center items-center gap-3 py-2.5 px-4 mb-4 border border-gray-300 rounded-lg shadow-sm bg-white text-[15px] font-medium text-textMain hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </a>

          <div className="space-y-4">
// ... Also remove the bottom "Or continue with" section
```

- [ ] **Step 3: Commit**
```bash
git add frontend/src/pages/SignIn.tsx
git commit -m "feat: add Google login button to SignIn page"
```

### Task 2: Update `SignUp.tsx` to include Account Type state and dynamic Google Sign up button

**Files:**
- Modify: `/home/sk/Downloads/SOCALL/frontend/src/pages/SignUp.tsx`

- [ ] **Step 1: Write the failing test** (Skip if no test suite handles UI components directly)

- [ ] **Step 2: Write minimal implementation**

Add state for account type, building the account type selector, and updating the Google sign-up link.

```tsx
import React, { useState } from 'react';
// ... inside component ...
  const [accountType, setAccountType] = useState<'shopper' | 'vendor'>('shopper');

  const getGoogleSignUpLink = () => {
    if (accountType === 'shopper') {
      return 'https://app.farmersmarketsocal.com/signup/google?role_id=role_bsajfr9fvie8r1wa';
    }
    return 'https://app.farmersmarketsocal.com/signup/google?role_id=role_p9l3sqpgt8wovdth';
  };

// ... inside the form, at the top:
        <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-6">
            <label className="block text-[14px] font-semibold text-textMain mb-2">Account Type</label>
            <div className="grid gap-3 sm:grid-cols-2 mb-4">
              <div 
                onClick={() => setAccountType('shopper')}
                className={`cursor-pointer border p-3 rounded-lg flex items-center gap-3 transition-colors ${accountType === 'shopper' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-gray-200 hover:border-primary/30'}`}
              >
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-textMain">Join as a Shopper</h3>
                  <p className="text-xs text-textMuted">An account to shop and buy from vendors</p>
                </div>
              </div>
              <div 
                onClick={() => setAccountType('vendor')}
                className={`cursor-pointer border p-3 rounded-lg flex items-center gap-3 transition-colors ${accountType === 'vendor' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-gray-200 hover:border-primary/30'}`}
              >
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-textMain">Join as a Vendor</h3>
                  <p className="text-xs text-textMuted">Set up shop and sell your products</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href={getGoogleSignUpLink()}
            className="w-full flex justify-center items-center gap-3 py-2.5 px-4 mb-4 border border-gray-300 rounded-lg shadow-sm bg-white text-[15px] font-medium text-textMain hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </a>

// ... Remove the bottom "Or continue with" section
```

- [ ] **Step 3: Commit**
```bash
git add frontend/src/pages/SignUp.tsx
git commit -m "feat: add Account Type selector and dynamic Google sign up button"
```
