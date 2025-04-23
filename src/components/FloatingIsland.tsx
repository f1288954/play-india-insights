
import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingIslandProps {
  className?: string;
  children: React.ReactNode;
  color: string;
  animationClass?: string;
}

const FloatingIsland = ({ 
  className, 
  children, 
  color, 
  animationClass = "transition-all duration-300 hover:scale-105" 
}: FloatingIslandProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-3xl shadow-xl transform", 
        animationClass,
        color,
        className
      )}
      style={{
        clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
      }}
    >
      {children}
    </div>
  );
};

export default FloatingIsland;
