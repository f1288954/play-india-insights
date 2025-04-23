
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ title, children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-10", className)}>
      <h2 className="text-3xl font-bold mb-6 text-google-blue">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
