# Devlyfi UI Components

Custom styled shadcn/ui components with Devlyfi brand colors and enhanced interactions.

## Components

### Button

Enhanced button component with multiple variants and sizes.

**Variants:**
- `default` - Primary brand color (#0354C4) with shadow effects
- `gradient` - Gradient from primary-400 to primary-600 (NEW)
- `outline` - 2px border with primary color, fills on hover
- `secondary` - Secondary background color
- `ghost` - Transparent with hover effect
- `link` - Text link style
- `destructive` - Red destructive action

**Sizes:**
- `sm` - Small (h-8, text-xs)
- `default` - Default (h-10)
- `lg` - Large (h-12, text-base)
- `xl` - Extra Large (h-14, text-lg) (NEW)
- `icon`, `icon-sm`, `icon-lg` - Icon button sizes

**Custom Features:**
- Scale animation on hover (1.02x) and active (0.98x)
- Enhanced shadow effects (shadow-primary, shadow-primary-lg)
- Smooth 300ms transitions
- Rounded-lg border radius (8px)

**Usage:**
```tsx
import { Button } from '@/components/ui/button';

<Button>Default</Button>
<Button variant="gradient">Gradient</Button>
<Button variant="outline" size="lg">Large Outline</Button>
```

---

### Card

Enhanced card component with hover effects.

**Custom Features:**
- Hover lift effect (-translate-y-1)
- Border color changes to primary/20 on hover
- Enhanced shadow on hover (shadow-sm → shadow-md)
- Smooth 300ms transitions
- Rounded-xl border radius (12px)

**Sub-components:**
- `CardHeader` - Card header with title and description
- `CardTitle` - Card title
- `CardDescription` - Card description text
- `CardContent` - Main card content area
- `CardFooter` - Card footer for actions
- `CardAction` - Action button area in header

**Usage:**
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

### Input

Enhanced input field with custom focus states.

**Custom Features:**
- 2px border (border-2) for better visibility
- Primary color border on focus
- Primary/20 ring on focus with 3px width
- Hover effect (border-primary/50)
- Enhanced shadow on focus
- Rounded-lg border radius (8px)
- Height increased to h-10 for better touch targets
- Smooth 300ms transitions

**Usage:**
```tsx
import { Input } from '@/components/ui/input';

<Input placeholder="Enter text..." />
<Input type="email" placeholder="your.email@example.com" />
```

---

### Textarea

Enhanced textarea with custom focus states.

**Custom Features:**
- 2px border (border-2) for better visibility
- Primary color border on focus
- Primary/20 ring on focus with 3px width
- Hover effect (border-primary/50)
- Enhanced shadow on focus
- Rounded-lg border radius (8px)
- Minimum height of 24 (min-h-24)
- Smooth 300ms transitions

**Usage:**
```tsx
import { Textarea } from '@/components/ui/textarea';

<Textarea placeholder="Type your message..." />
```

---

### Label

Enhanced label component with better typography.

**Custom Features:**
- Font-semibold for better readability
- Smooth color transitions (200ms)
- Better contrast with text-foreground

**Usage:**
```tsx
import { Label } from '@/components/ui/label';

<Label htmlFor="email">Email Address</Label>
<Input id="email" type="email" />
```

---

## Design Principles

### Brand Colors
All components use the Devlyfi primary color (#0354C4) and its variants:
- Primary: #0354C4
- Primary-400: #3387FF (lighter)
- Primary-600: #02439D (darker)

### Border Radius
- Buttons: `rounded-lg` (8px)
- Cards: `rounded-xl` (12px)
- Inputs/Textareas: `rounded-lg` (8px)

### Shadows
- `shadow-primary`: Custom shadow with primary color tint
- `shadow-primary-lg`: Larger shadow for hover states
- Standard shadows: `shadow-sm`, `shadow-md`

### Transitions
- All interactive elements use smooth transitions (300ms for most, 200ms for labels)
- Scale animations on buttons (hover: 1.02x, active: 0.98x)
- Lift effect on cards (hover: -translate-y-1)

### Hover States
- Buttons: Scale + shadow enhancement
- Cards: Lift + border color change + shadow enhancement
- Inputs/Textareas: Border color change to primary/50

### Focus States
- Primary color border
- Primary/20 ring with 3px width
- Enhanced shadow
- Maintains accessibility with visible focus indicators

---

## Accessibility

All components maintain WCAG 2.1 AA compliance:
- Proper focus indicators
- Keyboard navigation support
- ARIA attributes where needed
- Color contrast ratios meet standards
- Disabled states clearly indicated

---

## Testing

To view all components in action, visit `/ui-test` in development mode:

```bash
npm run dev
```

Then navigate to `http://localhost:3000/ui-test`

---

## Customization

All components use CSS variables defined in `src/styles/globals.css`. To customize:

1. Modify the CSS variables in `:root`
2. Update the `--primary` color values
3. Adjust `--radius` for border radius
4. Components will automatically use the new values

---

## Notes

- All components are built on top of shadcn/ui
- Uses Radix UI primitives for accessibility
- Fully typed with TypeScript
- Compatible with Next.js 14+ App Router
- Supports dark mode (via CSS variables)
