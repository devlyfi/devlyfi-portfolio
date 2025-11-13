'use client';

import Link from 'next/link';
import { ServiceCardProps } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Palette, 
  Brain, 
  Briefcase, 
  Link as LinkIcon, 
  Settings,
  LucideIcon
} from 'lucide-react';

// Icon mapping for service icons
const iconMap: Record<string, LucideIcon> = {
  code: Code,
  smartphone: Smartphone,
  cloud: Cloud,
  palette: Palette,
  brain: Brain,
  briefcase: Briefcase,
  link: LinkIcon,
  settings: Settings,
};

export function ServiceCard({ service, variant = 'preview' }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Code;
  const isPreview = variant === 'preview';

  return (
    <Link href={`/services/${service.slug}`} className="block group">
      <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/40">
        <CardHeader>
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {service.title}
          </CardTitle>
          <CardDescription className="text-base">
            {service.description}
          </CardDescription>
        </CardHeader>
        
        {!isPreview && service.features && service.features.length > 0 && (
          <CardContent>
            <ul className="space-y-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-muted-foreground">
                  <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
