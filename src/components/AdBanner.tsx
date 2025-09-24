import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  adKey: string;
  format?: 'banner' | 'native' | 'popunder' | 'interstitial';
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

const AdBanner: React.FC<AdBannerProps> = ({
  adKey,
  format = 'banner',
  width = 728,
  height = 90,
  style = {}
}) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adRef.current) return;

    // Create script element for Adsterra ad
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      atOptions = {
        'key' : '${adKey}',
        'format' : '${format}',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;

    // Add the configuration script
    adRef.current.appendChild(script);

    // Add the Adsterra invoke script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = `//www.topcreativeformat.com/${adKey}/invoke.js`;
    adRef.current.appendChild(invokeScript);

    // Cleanup function
    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
    };
  }, [adKey, format, width, height]);

  return (
    <div style={{
      textAlign: 'center',
      margin: '2rem auto',
      padding: '1rem',
      background: 'rgba(26, 26, 29, 0.5)',
      borderRadius: '8px',
      border: '1px solid var(--purple-lavender)',
      minHeight: `${height}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }}>
      <div ref={adRef} />
    </div>
  );
};

export default AdBanner;