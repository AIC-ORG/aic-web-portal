import { luckGuy } from '@/app/layout';
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return <div className={`${luckGuy.className} font-black ${className}`}>ARIEL WAYZ</div>;
};

export default Logo;
