
import React from 'react';
import { cn } from '@/lib/utils';

interface IslandProps {
  className?: string;
  children: React.ReactNode;
  color: string;
  animationDelay?: string;
}

const Island = ({ className, children, color, animationDelay = "animate-float" }: IslandProps) => {
  return (
    <div 
      className={cn(
        "relative p-6 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105", 
        animationDelay,
        color,
        className
      )}
      style={{
        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
      }}
    >
      {children}
    </div>
  );
};

export default Island;
