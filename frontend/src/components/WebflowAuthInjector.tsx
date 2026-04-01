import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '../hooks/useAuth';
import UserDropdown from './UserDropdown';

export default function WebflowAuthInjector() {
  const { isLoggedIn } = useAuth();
  const [targetNode, setTargetNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let portalTarget: HTMLElement | null = null;
    
    console.log('--- REACT AUTH INJECTOR MOUNTED ---', { isLoggedIn });

    const findAndInject = () => {
      const loginBtns = Array.from(document.querySelectorAll('a[href*="/login"]'));
      if (loginBtns.length === 0) return false;

      let injected = false;
      console.log('--- FOUND LOGIN BUTTONS ---', loginBtns.length);

      loginBtns.forEach((btn, index) => {
        const container = btn.parentElement;
        if (!container) return;

        if (isLoggedIn) {
          // Hide ALL login/signup links in every discovered container (mobile & desktop)
          const allButtons = container.querySelectorAll('a[href*="/login"], a[href*="/registration"], a[href*="/signup"]');
          allButtons.forEach(b => {
            (b as HTMLElement).style.display = 'none';
          });

          // Only mount the React portal to the desktop container (usually has "button" in its class name)
          // Or if there's only 1 container, just use it.
          if (container.className.includes('button') || loginBtns.length === 1 || index === loginBtns.length - 1) {
            portalTarget = document.getElementById('react-auth-portal');
            if (!portalTarget) {
              portalTarget = document.createElement('div');
              portalTarget.id = 'react-auth-portal';
              portalTarget.style.display = 'flex';
              portalTarget.style.alignItems = 'center';
              portalTarget.style.marginLeft = '1rem';
              portalTarget.style.position = 'relative';
              container.appendChild(portalTarget);
            }
            setTargetNode(portalTarget);
            injected = true;
          }
        } else {
          // Restore ALL buttons
          const allButtons = container.querySelectorAll('a[href*="/login"], a[href*="/registration"], a[href*="/signup"]');
          allButtons.forEach(b => {
            (b as HTMLElement).style.display = '';
          });
          const pt = document.getElementById('react-auth-portal');
          if (pt) pt.remove();
          setTargetNode(null);
          injected = true;
        }
      });
      return injected;
    };

    // React is sometimes shockingly fast. We actively poll for the DOM to settle up to 20 times.
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const success = findAndInject();
      if (success || attempts > 20) clearInterval(interval);
    }, 250);

    return () => {
      clearInterval(interval);
      // Clean up sequence...
      if (portalTarget) portalTarget.remove();
    };
  }, [isLoggedIn]);

  // Only render the Dropdown portal if we're authenticated AND successfully found the Webflow DOM node
  if (!isLoggedIn || !targetNode) return null;

  return createPortal(
    <div className="relative pointer-events-auto z-[9999]">
      <UserDropdown />
    </div>, 
    targetNode
  );
}
