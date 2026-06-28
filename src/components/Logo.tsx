import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 32, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Crown Base */}
      <path
        d="M10 40 L10 48 C10 50 11 52 13 52 L51 52 C53 52 54 50 54 48 L54 40 Z"
        fill="currentColor"
      />

      {/* Crown Points */}
      <path
        d="M8 40 L12 28 L18 36 L24 20 L32 36 L40 20 L46 36 L52 28 L56 40 Z"
        fill="currentColor"
      />

      {/* Decorative Circles */}
      <circle cx="12" cy="28" r="2.5" fill="#10b981" />
      <circle cx="24" cy="20" r="3" fill="#10b981" />
      <circle cx="32" cy="36" r="2.5" fill="#10b981" />
      <circle cx="40" cy="20" r="3" fill="#10b981" />
      <circle cx="52" cy="28" r="2.5" fill="#10b981" />

      {/* Tooth at bottom (dental element) */}
      <path
        d="M28 44 C28 42 26 42 26 44 L26 48 L30 48 L30 44 C30 42 28 42 28 44 Z"
        fill="#10b981"
      />
      <path
        d="M36 44 C36 42 34 42 34 44 L34 48 L38 48 L38 44 C38 42 36 42 36 44 Z"
        fill="#10b981"
      />
    </svg>
  );
};

export default Logo;
