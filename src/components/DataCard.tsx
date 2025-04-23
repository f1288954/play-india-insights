
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DataCardProps {
  title: string;
  content: React.ReactNode;
  expandedContent?: React.ReactNode;
  className?: string;
  color?: string;
  icon?: React.ReactNode;
}

const DataCard = ({ title, content, expandedContent, className, color = "border-google-blue", icon }: DataCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={cn("transition-all duration-300 hover:shadow-lg", color, className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {icon && <span className="text-2xl">{icon}</span>}
            {title}
          </CardTitle>
          {expandedContent && (
            <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)} className="p-0 h-8 w-8">
              {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {content}
        {expanded && expandedContent && (
          <div className="mt-4 pt-4 border-t">
            {expandedContent}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DataCard;
