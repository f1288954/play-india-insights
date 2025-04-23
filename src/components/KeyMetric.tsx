
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface KeyMetricProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

const KeyMetric = ({ title, value, description, icon, className }: KeyMetricProps) => {
  return (
    <Card className={cn("transition-all duration-300 hover:shadow-lg border-2", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          {icon && <div className="text-2xl">{icon}</div>}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-1">{value}</div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardContent>
    </Card>
  );
};

export default KeyMetric;
