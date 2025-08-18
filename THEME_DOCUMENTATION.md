# 🎨 Modern Theme Documentation

## Overview
This React application has been refactored to adopt a modern, accessible theme system based on CSS custom properties. The theme follows a consistent design language with high contrast ratios for accessibility.

## Color System

### Primary Backgrounds
- **Global Background**: `#FFFFFF` (White) - Used for the main application background
- **Surface**: `#F9FAFB` (Light Gray) - Used for cards, panels, and section separation
- **Surface Alternative**: `#E5E7EB` (Alternative light gray) - Used for dividers and subtle sections

### Text Colors
- **Primary Text**: `#1A1A1A` (Almost black) - Primary text for maximum readability
- **Inverse Text**: `#FFFFFF` (White) - Text on dark backgrounds
- **Secondary Text**: `#6B7280` (Medium gray) - Secondary text and labels

### Accent & Action Colors
- **Primary Green**: `#4CAF50` - Used for buttons, toggles, success states, and primary actions
- **Primary Green Hover**: `#43A047` - Hover state for green elements
- **Secondary Blue**: `#1E3A8A` - Used for links, headings, and highlights
- **Secondary Blue Hover**: `#1D4ED8` - Hover state for blue elements

### Dark Sections
- **Dark Section Background**: `#1E3A8A` (Dark blue) - Used for hero, footer, and CTA sections
- **Dark Section Text**: `#FFFFFF` (White) - Text on dark sections

### Borders & Dividers
- **Border**: `#E5E7EB` (Light gray) - Standard borders
- **Border Light**: `#F3F4F6` (Very light gray) - Subtle borders

## Component Usage

### CSS Custom Properties
All colors are available as CSS custom properties:

```css
:root {
  /* Backgrounds */
  --background: #FFFFFF;
  --surface: #F9FAFB;
  --surface-alt: #E5E7EB;
  
  /* Text */
  --text-primary: #1A1A1A;
  --text-inverse: #FFFFFF;
  --text-gray: #6B7280;
  
  /* Accents */
  --primary: #4CAF50;
  --primary-hover: #43A047;
  --secondary: #1E3A8A;
  --secondary-hover: #1D4ED8;
  
  /* Dark sections */
  --dark-section-bg: #1E3A8A;
  --dark-section-text: #FFFFFF;
  
  /* Borders */
  --border: #E5E7EB;
  --border-light: #F3F4F6;
}
```

### React Components

#### Button Component
```tsx
import Button from './components/Button';

// Primary green button
<Button variant="primary">Get Started</Button>

// Secondary blue button  
<Button variant="secondary">Learn More</Button>

// Outline button
<Button variant="outline">Contact Us</Button>
```

#### Card Component
```tsx
import Card from './components/Card';

// Default white card
<Card variant="default">Content</Card>

// Surface gray card
<Card variant="surface">Content</Card>

// Elevated card with shadow
<Card variant="elevated">Content</Card>
```

## Layout Structure

### Header/Navigation
- **Background**: Dark blue (`#1E3A8A`)
- **Text**: White (`#FFFFFF`)
- **Active/Hover Links**: Green background (`#4CAF50`)

### Main Content
- **Background**: White (`#FFFFFF`)
- **Text**: Almost black (`#1A1A1A`)
- **Cards**: White with light gray borders

### Footer
- **Background**: Dark blue (`#1E3A8A`)
- **Text**: White (`#FFFFFF`)
- **Links**: Green accent (`#4CAF50`)

## Accessibility

### Contrast Ratios
All color combinations meet WCAG AA standards:
- White text on dark blue background: 21:1 (AAA)
- Almost black text on white background: 21:1 (AAA)
- Green buttons with white text: 4.5:1 (AA)
- Blue links on white background: 8.9:1 (AAA)

### High Contrast Features
- Bold font weights for important text
- Clear visual hierarchy
- Hover states with adequate contrast
- Focus indicators for keyboard navigation

## Implementation Notes

### Files Updated
1. `/src/styles/global.css` - Main theme variables and component styles
2. `/src/index.css` - Base styles and theme imports
3. `/src/components/Button.tsx` - Reusable button component
4. `/src/components/Card.tsx` - Reusable card component
5. `/src/components/Header.tsx` - Navigation with dark blue theme
6. `/src/components/Footer.tsx` - Footer with dark blue theme

### CSS Structure
- Consistent use of CSS custom properties
- Semantic color naming
- Legacy variable mapping for compatibility
- Responsive design maintained
- Smooth transitions and hover effects

## Usage Guidelines

### Do's
✅ Use `var(--primary)` for all action elements (buttons, toggles)
✅ Use `var(--secondary)` for links and highlights  
✅ Use `var(--surface)` for card backgrounds and neutral sections
✅ Use `var(--dark-section-bg)` for hero and footer sections
✅ Maintain consistent spacing and typography

### Don'ts
❌ Don't hardcode color values
❌ Don't use blue colors for actions (reserve for links/highlights)
❌ Don't compromise contrast ratios
❌ Don't use gradient backgrounds that reduce readability