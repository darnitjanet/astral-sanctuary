import React, { useEffect, useRef } from 'react';

interface AdsterraAdProps {
  type: 'banner300x250' | 'banner728x90' | 'nativeBanner' | 'inPagePush';
  style?: React.CSSProperties;
  className?: string;
}

const AdsterraAd: React.FC<AdsterraAdProps> = ({ type, style = {}, className = '' }) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adRef.current) return;

    const loadAd = () => {
      const currentRef = adRef.current;
      if (!currentRef) return;

      // Clear previous content
      currentRef.innerHTML = '';

      // Add unique container ID for each ad type
      const containerId = `ad-container-${type}-${Date.now()}`;

      switch (type) {
        case 'banner300x250':
          // 300x250 Banner
          const script1 = document.createElement('script');
          script1.type = 'text/javascript';
          script1.innerHTML = `
            window.atOptions = {
              'key' : 'c976bef33560e7143188938465a83608',
              'format' : 'iframe',
              'height' : 250,
              'width' : 300,
              'params' : {}
            };
          `;
          currentRef.appendChild(script1);

          const invokeScript1 = document.createElement('script');
          invokeScript1.type = 'text/javascript';
          invokeScript1.src = '//www.highperformanceformat.com/c976bef33560e7143188938465a83608/invoke.js';
          invokeScript1.async = true;
          currentRef.appendChild(invokeScript1);
          break;

        case 'banner728x90':
          // 728x90 Leaderboard
          const script2 = document.createElement('script');
          script2.type = 'text/javascript';
          script2.innerHTML = `
            window.atOptions = {
              'key' : 'aa38e43b3aff27145399465766520d46',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
          `;
          currentRef.appendChild(script2);

          const invokeScript2 = document.createElement('script');
          invokeScript2.type = 'text/javascript';
          invokeScript2.src = '//www.highperformanceformat.com/aa38e43b3aff27145399465766520d46/invoke.js';
          invokeScript2.async = true;
          currentRef.appendChild(invokeScript2);
          break;

        case 'nativeBanner':
          // Native Banner
          const script3 = document.createElement('script');
          script3.type = 'text/javascript';
          script3.src = '//pl27721413.revenuecpmgate.com/aa/05/7e/aa057e36a9621fde8cc3126b5f44378a.js';
          script3.async = true;
          currentRef.appendChild(script3);
          break;

        case 'inPagePush':
          // In-page Push
          const div = document.createElement('div');
          div.id = 'container-ce39cab98e37d54be02658758207101d';
          currentRef.appendChild(div);

          const script4 = document.createElement('script');
          script4.async = true;
          script4.setAttribute('data-cfasync', 'false');
          script4.src = '//pl27721412.revenuecpmgate.com/ce39cab98e37d54be02658758207101d/invoke.js';
          currentRef.appendChild(script4);
          break;
      }

      console.log(`Ad attempting to load: ${type}`);

      // Add error handling for scripts
      const scripts = currentRef.querySelectorAll('script');
      scripts.forEach(script => {
        script.addEventListener('error', () => {
          console.error(`Failed to load ad script for ${type}`);
        });
        script.addEventListener('load', () => {
          console.log(`Successfully loaded script for ${type}`);
        });
      });
    };

    // Load ad after a short delay to ensure DOM is ready
    const timer = setTimeout(loadAd, 500);

    return () => {
      clearTimeout(timer);
      const currentRef = adRef.current;
      if (currentRef) {
        currentRef.innerHTML = '';
      }
    };
  }, [type]);

  const getAdStyle = () => {
    const baseStyle: React.CSSProperties = {
      margin: '1.5rem auto',
      padding: '0.5rem',
      background: 'rgba(26, 26, 29, 0.5)',
      borderRadius: '8px',
      border: '1px solid rgba(180, 130, 255, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      ...style
    };

    switch (type) {
      case 'banner300x250':
        return { ...baseStyle, minHeight: '250px', minWidth: '300px' };
      case 'banner728x90':
        return { ...baseStyle, minHeight: '90px', minWidth: '728px', maxWidth: '100%' };
      case 'nativeBanner':
      case 'inPagePush':
        return { ...baseStyle, minHeight: '50px' };
      default:
        return baseStyle;
    }
  };

  return (
    <div className={`adsterra-ad ${className}`} style={getAdStyle()}>
      <div style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
        fontSize: '10px',
        color: 'rgba(255,255,255,0.3)',
        zIndex: 1
      }}>
        Ad: {type}
      </div>
      <div ref={adRef} />
    </div>
  );
};

export default AdsterraAd;