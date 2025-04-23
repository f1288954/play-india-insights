
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, Navigation as NavIcon, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

const Navigation = ({ items, className }: NavigationProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("sticky top-0 z-50 bg-white/80 backdrop-blur-sm", className)}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <NavIcon className="h-6 w-6 text-google-blue" />
          <span className="font-bold text-lg">Google Play India Insights</span>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            {items.map((item) => (
              <li key={item.href}>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2"
                >
                  {item.icon}
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <NavIcon className="h-5 w-5 text-google-blue" />
          <span className="font-bold text-lg">Google Play India</span>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="mt-8">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.href}>
                    <Button 
                      variant="ghost" 
                      onClick={() => scrollToSection(item.href)}
                      className="w-full justify-start"
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        {item.label}
                        <ChevronRight className="ml-auto h-4 w-4" />
                      </div>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navigation;
