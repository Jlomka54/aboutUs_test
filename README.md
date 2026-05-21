# Fulgor Milano About Us Page

I created this page as a responsive, mobile-first About Us layout for Fulgor Milano. The work focuses on accurate HTML/CSS structure, clean styling, adaptive behavior across viewport sizes, image handling for different pixel densities, and a simple interactive burger menu.

## What I Built

I built a static page with:

- a responsive hero section with adaptive background images;
- a mobile and tablet burger menu with JavaScript open and close behavior;
- responsive content sections with `1x` and `2x` images;
- an embedded video block;
- a review call-to-action section;
- a structured footer with product, help, about, tools, and social links;
- scalable typography for mobile, tablet, desktop, and large displays.

## Key Requirements Covered

I used a mobile-first approach, starting from small screens and progressively enhancing the layout with `min-width` breakpoints up to ultrawide viewports.

The HTML and CSS are organized into clear sections, with reusable class names and predictable layout rules. The code is kept simple and maintainable, without unnecessary dependencies.

The layout includes responsive behavior for phones, tablets, desktops, and large screens. I adjusted spacing, typography, content width, image sizes, navigation behavior, and hero height across multiple breakpoints.

I also added basic cross-browser-friendly CSS patterns, including responsive images with `srcset`, CSS fallbacks for background images, and standard semantic HTML elements.

## Responsive Details

The page uses breakpoints for:

- `320px+`
- `480px+`
- `640px+`
- `768px+`
- `1024px+`
- `1280px+`
- `1440px+`
- `1600px+`
- `1920px+`
- `2560px+`
- `3200px+`

At `1440px`, the hero section is set to `417px` height as required. Larger viewport sizes continue to scale the hero section, typography, layout width, and media presentation.

## Images And Performance

I organized the images into separate density folders:

- `assets/x1`
- `assets/x2`

For content images, I used `srcset` so the browser can choose the correct image for `1x` or `2x` screens. For large background images, I used `image-set()` where appropriate while keeping normal image URLs as a fallback.

The video is loaded from:

```text
assets/video.mp4
```

## Navigation

I added a burger menu for phones and tablets. The menu:

- opens and closes with JavaScript;
- blocks page scrolling while open;
- closes on link click;
- closes on outside click;
- closes on `Escape`;
- switches back to desktop navigation from `1024px`.

The navigation icons are SVG buttons, not plain text characters, which improves accessibility and maintainability.

## Project Structure

```text
aboutUs_test/
  assets/
    video.mp4
    x1/
      bg_footer_x1.jpg
      bg_header_x1.jpg
      main_1_x1.jpg
      main_2_x1.jpg
      main_3_x1.jpg
      main_4_x1.jpg
    x2/
      bg_footer_x2.jpg
      bg_header_x2.jpg
      main_1_x2.jpg
      main_2_x2.jpg
      main_3_x2.jpg
      main_4_x2.jpg
  index.html
  script.js
  style.css
  README.md
```

## About BEM

The current structure is partially BEM-like because the classes are semantic and section-based, but it is not a strict BEM implementation yet. A full BEM refactor would rename classes such as `hero-overlay`, `nav-links`, and `footer-content` into names like `hero__overlay`, `navbar__links`, and `footer__content`.

## Git Workflow

The project is prepared to be managed through Git. The expected flow is:

```bash
git add .
git commit -m "Build responsive about us page"
git remote add origin <repository-url>
git push -u origin main
```

After pushing the project to the repository, the repository link should be sent in Telegram to the manager, Amina.

## Notes

I aimed to keep the layout close to pixel-perfect where practical while still making it flexible enough for real responsive behavior. The code is dependency-free and can be opened directly in a browser.
