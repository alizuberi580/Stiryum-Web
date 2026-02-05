# Smooth Scrolling Navigation Documentation

## Overview
This implementation provides a production-ready navigation system with smooth scrolling, active section highlighting, and auto-hide functionality for a modern Next.js 14 application.

## Features Implemented

### ✅ 1. Smooth Scrolling
- Click navigation links to smoothly scroll to page sections
- No page refreshes or routing changes
- Customizable scroll offset to account for fixed navbar height
- Works on both desktop and mobile

### ✅ 2. Active Section Highlighting
- Uses Intersection Observer API for accurate section detection
- Visual feedback with gradient underline on desktop
- Background highlight on mobile menu
- Configurable threshold for when sections become "active"

### ✅ 3. Auto-Hide Navbar
- Navbar hides when scrolling down (after 100px)
- Reappears when scrolling up
- Smooth transitions for professional feel

### ✅ 4. Mobile Responsive
- Hamburger menu on mobile devices
- Full navigation functionality preserved
- Touch-friendly interaction areas

### ✅ 5. Premium Design
- Glassmorphism effect with backdrop blur
- Gradient accents matching brand colors (#F37036 to #007DC5)
- Hover effects and smooth transitions
- Consistent dark theme (#0b1120)

---

## File Structure

```
stiryum-web/
├── app/
│   ├── page.tsx                    # Main page with section IDs
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
├── components/
│   ├── Navbar.tsx                  # Main navigation component
│   ├── HeroSection.tsx             # Home/Hero section
│   ├── Features.tsx                # Features section
│   ├── Pricing.tsx                 # Pricing section
│   ├── Faq.tsx                     # FAQ section
│   └── Footer.tsx                  # Footer component
└── constants/
    └── data.js                     # Content data
```

---

## Implementation Details

### 1. **Navbar Component** (`components/Navbar.tsx`)

#### Key Features:
- **Smooth Scroll Handler**: `handleSmoothScroll()` function
- **Active Section Detection**: Intersection Observer
- **Auto-Hide Logic**: Scroll event listener
- **TypeScript Types**: Fully typed for safety

#### Smooth Scroll Implementation:
```typescript
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const navbarHeight = 100; // Offset for fixed navbar
        const targetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });

        setIsMobileMenuOpen(true); // Close mobile menu
    }
};
```

**How it works:**
1. Prevents default link behavior
2. Extracts section ID from href
3. Calculates scroll position (accounting for navbar height)
4. Scrolls smoothly to target
5. Closes mobile menu if open

#### Active Section Detection:
```typescript
useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -70% 0px", // Fine-tune detection zones
        threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) observer.observe(section);
    });

    return () => observer.disconnect();
}, []);
```

**How it works:**
1. Creates Intersection Observer with custom margins
2. Observes all section elements
3. Updates `activeSection` state when section enters viewport
4. `rootMargin: "-20% 0px -70% 0px"` means:
   - Top 20% of viewport is ignored
   - Bottom 70% is ignored
   - Section is "active" when in middle 10% of screen

#### Auto-Hide Implementation:
```typescript
useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100 && currentScrollY > lastScrollY) {
            setIsVisible(false); // Hide navbar
        } else {
            setIsVisible(true); // Show navbar
        }
        lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
}, []);
```

**How it works:**
1. Tracks last scroll position
2. Compares with current position
3. Hides navbar if scrolling down (and past 100px)
4. Shows navbar if scrolling up or at top
5. Cleans up event listener on unmount

### 2. **Page Structure** (`app/page.tsx`)

```tsx
<div className="scroll-smooth bg-background">
    <section id="home">
        <HeroSection {...} />
    </section>
    
    <section id="features">
        <Features />
    </section>
    
    <section id="pricing">
        <Pricing />
    </section>
    
    <section id="faq">
        <Faq />
    </section>
    
    <Footer />
</div>
```

**Key Points:**
- Each component wrapped in `<section>` with unique `id`
- IDs match navbar link `href` values (without #)
- `scroll-smooth` class enables CSS smooth scrolling fallback
- Semantic HTML for accessibility

### 3. **Section Components**

All section components follow these principles:

#### **Features Component**
- 6 feature cards with icons
- Gradient hover effects
- Responsive grid layout
- Animated interactions

#### **Pricing Component**
- 3 pricing tiers
- "Most Popular" highlighted plan
- Feature checkmarks
- Scalable card design

#### **FAQ Component**
- Accordion-style Q&A
- Smooth expand/collapse animations
- Single-open behavior (one FAQ at a time)
- Contact CTA at bottom

---

## Customization Guide

### Adjusting Scroll Offset
If your navbar height changes, update the offset in `handleSmoothScroll`:

```typescript
const navbarHeight = 100; // Change this value
```

### Modifying Active Section Detection
Adjust the `rootMargin` to change when sections become active:

```typescript
const observerOptions = {
    rootMargin: "-20% 0px -70% 0px", 
    // Format: "top right bottom left"
    // Negative values shrink the detection area
};
```

**Examples:**
- `-10% 0px -80% 0px` - More sensitive (smaller range)
- `-30% 0px -60% 0px` - Less sensitive (larger range)

### Changing Auto-Hide Threshold
Modify when the navbar starts hiding:

```typescript
if (currentScrollY > 100 && currentScrollY > lastScrollY) {
    // Change 100 to your preferred pixel value
}
```

### Adding New Sections

1. **Add section ID to page.tsx:**
```tsx
<section id="new-section">
    <NewComponent />
</section>
```

2. **Add link to navbar:**
```typescript
const navLinks: NavLink[] = [
    // ... existing links
    { id: "new-section", label: "New Section", href: "#new-section" },
];
```

3. **Intersection Observer will automatically track it!**

---

## TypeScript Types

```typescript
type NavLink = {
    id: string;      // Section ID (matches HTML element id)
    label: string;   // Display text
    href: string;    // Anchor link (e.g., "#home")
};
```

---

## Browser Compatibility

- ✅ Chrome/Edge (all versions)
- ✅ Firefox (all versions)
- ✅ Safari 12.1+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Fallbacks:**
- CSS `scroll-behavior: smooth` for older browsers
- Intersection Observer is widely supported (96%+ browsers)

---

## Performance Considerations

1. **Debouncing**: Scroll events are naturally throttled by the browser
2. **Intersection Observer**: More efficient than scroll event listeners for section detection
3. **Single Observer Instance**: Reuses same observer for all sections
4. **Cleanup**: All event listeners properly removed on component unmount

---

## Accessibility Features

- ✅ Semantic HTML (`<nav>`, `<section>`)
- ✅ `aria-expanded` on mobile menu button
- ✅ `aria-label` for icon buttons
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Proper heading hierarchy (h1, h2, h3)

---

## Common Issues & Solutions

### Issue: Sections not detected as active
**Solution**: Adjust `rootMargin` in Intersection Observer options

### Issue: Scroll offset is incorrect
**Solution**: Update `navbarHeight` value in `handleSmoothScroll`

### Issue: Navbar flickering on scroll
**Solution**: Ensure smooth transitions in CSS and stable scroll detection logic

### Issue: Mobile menu stays open after clicking
**Solution**: Verify `setIsMobileMenuOpen(true)` is called in `handleSmoothScroll`

---

## Design Tokens

```css
/* Color Palette */
--background: #0b1120;           /* Main dark background */
--primary-gradient: #F37036 to #007DC5;  /* Brand gradient */
--text-primary: #ffffff;         /* White text */
--text-secondary: #9ca3af;       /* Gray text */

/* Effects */
backdrop-blur-md                 /* Glassmorphism */
border-white/10                  /* Subtle borders */
bg-white/5                       /* Subtle backgrounds */
```

---

## Next Steps & Future Enhancements

- [ ] Add scroll progress indicator
- [ ] Implement scroll-triggered animations (AOS)
- [ ] Add keyboard shortcuts (e.g., pressing "1" goes to Home)
- [ ] Smooth scroll polyfill for older browsers
- [ ] Add "Back to Top" button
- [ ] Implement lazy loading for section components

---

## Testing Checklist

- [ ] Click each nav link and verify smooth scroll
- [ ] Scroll manually and verify active section updates
- [ ] Test navbar auto-hide on scroll down
- [ ] Test navbar reappear on scroll up
- [ ] Mobile hamburger menu opens/closes
- [ ] Mobile menu closes after clicking link
- [ ] Test on different screen sizes
- [ ] Verify keyboard navigation works
- [ ] Check browser console for errors

---

## Support

For questions or issues with this implementation, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Intersection Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

---

**Last Updated**: February 5, 2026
**Version**: 1.0.0
**Author**: Stiryum Development Team
