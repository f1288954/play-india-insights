
import React from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface CategoryTabProps {
  tabs: TabItem[];
  className?: string;
  defaultValue?: string;
}

const CategoryTab = ({ tabs, className, defaultValue }: CategoryTabProps) => {
  return (
    <Tabs defaultValue={defaultValue || tabs[0].value} className={cn("w-full", className)}>
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="flex items-center gap-2">
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-6">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CategoryTab;
