
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
        "p-6 rounded-xl shadow-xl transform", 
        animationClass,
        color,
        className
      )}
    >
      {children}
    </div>
  );
};

export default FloatingIsland;
