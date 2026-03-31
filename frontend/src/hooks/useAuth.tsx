import { useState, useEffect } from 'react';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      // 1. Check for a common global Tangram/Memberstack authentication object
      const hasGlobalAuth = 
        typeof window !== 'undefined' && (
          // @ts-ignore
          window.current_user || 
          // @ts-ignore
          window.current_user_data ||
          // @ts-ignore
          window.Tangram?.currentUser || 
          // @ts-ignore
          window.tangram?.user ||
          // @ts-ignore
          window.$memberstackDom?.getCurrentMember
        );

      if (hasGlobalAuth) {
        setIsLoggedIn(true);
        return;
      }

      // 2. Check for common Local Storage keys injected by Tangram/Marketplace tools
      const lookForKeys = [
        'tangram_token', 
        'tangram_user', 
        'tg_user', 
        'tg_session', 
        'user_token', 
        'auth_token', 
        'memberstack',
        'supabase.auth.token' // standard Supabase just in case
      ];

      for (const key of lookForKeys) {
        if (localStorage.getItem(key)) {
          setIsLoggedIn(true);
          return;
        }
      }

      // 3. Check for specific cookies discovered via Tangram
      if (
        document.cookie.includes('tangram') || 
        document.cookie.includes('session=') || 
        document.cookie.includes('user.id=') ||
        document.cookie.includes('logged_in=true')
      ) {
        setIsLoggedIn(true);
        return;
      }

      // 4. Fallback check for a data-attribute injected onto the root node
      const rootDiv = document.getElementById('root');
      if (rootDiv && rootDiv.getAttribute('data-logged-in') === 'true') {
        setIsLoggedIn(true);
        return;
      }
      
      // If we reach here, we didn't detect an active login session
      setIsLoggedIn(false);
    };

    checkAuthStatus();

    // Since Tangram might take a solid second or two to fetch the session from its backend 
    // and populate `window.current_user`, we must poll for it instead of only checking once!
    const interval = setInterval(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const forceLogin = urlParams.get('force_login') === 'true';

      const hasGlobalAuth = 
        forceLogin ||
        (typeof window !== 'undefined' && (
          // @ts-ignore
          window.current_user || 
          // @ts-ignore
          window.current_user_data ||
          // @ts-ignore
          window.Tangram?.currentUser || 
          // @ts-ignore
          window.tangram?.user ||
          // @ts-ignore
          window.$memberstackDom?.getCurrentMember
        ));

      if (hasGlobalAuth) {
        setIsLoggedIn(true);
        clearInterval(interval);
      }
    }, 500);

    // Stop polling after 10 seconds to save memory
    setTimeout(() => clearInterval(interval), 10000);

    window.addEventListener('storage', checkAuthStatus);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  return { isLoggedIn };
}
