import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '../hooks/useAuth';
import UserDropdown from './UserDropdown';

export default function WebflowAuthInjector() {
  const { isLoggedIn } = useAuth();
  const [targetNode, setTargetNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Run an interval to look for the Webflow nav container since it might load asynchronously
    let container: HTMLElement | null = null;
    
    const findAndInject = () => {
      container = document.querySelector('.navbar_menu-buttons');
      if (!container) return;

      if (isLoggedIn) {
        // Hide existing Webflow fallback buttons (Login / Sign Up) if they exist
        const originalButtons = container.querySelectorAll('a');
        originalButtons.forEach(btn => {
          (btn as HTMLElement).style.display = 'none';
        });

        // Create our target container if it doesn't already exist
        let portalTarget = document.getElementById('react-auth-portal');
        if (!portalTarget) {
          portalTarget = document.createElement('div');
          portalTarget.id = 'react-auth-portal';
          // Match standard top-nav alignment logic
          portalTarget.style.display = 'flex';
          portalTarget.style.alignItems = 'center';
          portalTarget.style.marginLeft = '1rem';
          container.appendChild(portalTarget);
        }
        setTargetNode(portalTarget);
      } else {
        // Restore existing buttons if logged out
        const originalButtons = container?.querySelectorAll('a');
        originalButtons?.forEach(btn => {
          (btn as HTMLElement).style.display = '';
        });
        
        const portalTarget = document.getElementById('react-auth-portal');
        if (portalTarget) {
          portalTarget.remove();
        }
        setTargetNode(null);
      }
    };

    // Attempt immediately and once per 500ms for up to 5 seconds to catch delayed DOM loads
    findAndInject();
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (!container) findAndInject();
      if (container || attempts > 10) clearInterval(interval);
    }, 500);

    return () => {
      clearInterval(interval);
      if (container) {
        const originalButtons = container.querySelectorAll('a');
        originalButtons.forEach(btn => {
          (btn as HTMLElement).style.display = '';
        });
      }
      const portalTarget = document.getElementById('react-auth-portal');
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
