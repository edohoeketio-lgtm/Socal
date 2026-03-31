import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '../hooks/useAuth';
import UserDropdown from './UserDropdown';

export default function WebflowAuthInjector() {
  const { isLoggedIn } = useAuth();
  const [targetNode, setTargetNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let portalTarget: HTMLElement | null = null;
    
    const findAndInject = () => {
      // Unbeatable generic selector: find the literal "Login" link instead of gambling on Webflow's class names
      const loginBtn = document.querySelector('a[href*="/login"]') as HTMLElement;
      if (!loginBtn) return false; // Return false if not found yet

      const container = loginBtn.parentElement;
      if (!container) return false;

      if (isLoggedIn) {
        // Brutally hide ALL login/signup related links located in that exact container
        const originalButtons = container.querySelectorAll('a[href*="/login"], a[href*="/registration"], a[href*="/signup"]');
        originalButtons.forEach(btn => {
          (btn as HTMLElement).style.display = 'none';
          (btn as HTMLElement).style.visibility = 'hidden';
        });

        // Create and jam our Dropdown container right into that nav slot
        portalTarget = document.getElementById('react-auth-portal');
        if (!portalTarget) {
          portalTarget = document.createElement('div');
          portalTarget.id = 'react-auth-portal';
          portalTarget.style.display = 'flex';
          portalTarget.style.alignItems = 'center';
          portalTarget.style.marginLeft = '1rem';
          // Force layout into Webflow's native flex behavior
          portalTarget.style.position = 'relative';
          container.appendChild(portalTarget);
        }
        setTargetNode(portalTarget);
      } else {
        // If logged out, make sure the login buttons are fully enabled
        const originalButtons = container.querySelectorAll('a[href*="/login"], a[href*="/registration"], a[href*="/signup"]');
        originalButtons.forEach(btn => {
          (btn as HTMLElement).style.display = '';
          (btn as HTMLElement).style.visibility = '';
        });
        
        const pt = document.getElementById('react-auth-portal');
        if (pt) pt.remove();
        setTargetNode(null);
      }
      return true; // Return true if successful
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
