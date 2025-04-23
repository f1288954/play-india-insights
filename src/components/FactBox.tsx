
import React from 'react';
import { cn } from '@/lib/utils';

interface FactBoxProps {
  fact: string;
  source?: string;
  className?: string;
  color?: string;
}

const FactBox = ({ fact, source, className, color = "bg-google-blue" }: FactBoxProps) => {
  return (
    <div className={cn("p-4 rounded-lg text-white font-medium", color, className)}>
      <p>{fact}</p>
      {source && <p className="text-sm mt-2 opacity-80">Source: {source}</p>}
    </div>
  );
};

export default FactBox;
