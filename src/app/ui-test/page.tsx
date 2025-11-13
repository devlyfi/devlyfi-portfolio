import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function UITestPage() {
  return (
    <div className="container-custom py-12 space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-2">Devlyfi UI Components</h1>
        <p className="text-muted-foreground">Custom styled shadcn/ui components with brand colors</p>
      </div>

      {/* Button Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="gradient">Gradient Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </div>
        
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </section>

      {/* Card Component */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>This is a card description with custom styling</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here. Notice the hover effect with subtle lift and border color change.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Card</CardTitle>
              <CardDescription>Web Development</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Custom web applications built with modern technologies and best practices.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Card</CardTitle>
              <CardDescription>E-commerce Platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p>A full-featured e-commerce solution with payment integration and inventory management.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Components</h2>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Contact Form Example</CardTitle>
            <CardDescription>Styled form inputs with custom focus states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="What is this about?" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here..." />
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Send Message</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Interactive States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive States</h2>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Hover & Focus States</CardTitle>
            <CardDescription>Try hovering and focusing on these elements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Hover over the input to see border color change</Label>
              <Input placeholder="Hover me..." />
            </div>
            
            <div className="space-y-2">
              <Label>Click to focus and see the primary color ring</Label>
              <Input placeholder="Focus me..." />
            </div>
            
            <div className="flex gap-2">
              <Button>Hover for scale effect</Button>
              <Button variant="gradient">Gradient with shadow</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
