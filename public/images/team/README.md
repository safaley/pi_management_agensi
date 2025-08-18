# Team Photos Replacement Guide

## How to Replace Team Photos

To replace the sample team photos with your actual team members:

### 1. Photo Requirements
- **Format**: JPG or PNG recommended
- **Aspect Ratio**: 1:1 (square) or 4:3 works best
- **Resolution**: 400x400px minimum (higher resolution is fine)
- **File Size**: Keep under 500KB for optimal loading

### 2. File Naming Convention
Replace the existing files with your photos using these exact names:

```
siti-rahman.jpg     → Your Managing Director photo
ahmad-hassan.jpg    → Your Operations Manager photo  
priya-sharma.jpg    → Your HR Specialist photo
mohamed-ali.jpg     → Your Legal Compliance Officer photo
fatima-wong.jpg     → Your Client Relations Manager photo
```

### 3. Steps to Replace:
1. **Prepare your photos**: Resize them to 400x400px (optional but recommended)
2. **Rename your files** to match the names above
3. **Replace the files** in this folder (`images/team/`)
4. **Keep the same file extensions** (.jpg or .png)

### 4. Adding More Team Members:
If you want to add more team members:

1. **Add new photos** to this folder with descriptive names
2. **Update the HTML** in `about.html` - look for the team section
3. **Duplicate the team member structure** and update:
   - Image source path
   - Alt text
   - Name and role

### 5. Photo Tips:
- **Professional headshots** work best
- **Consistent lighting** across all photos
- **Same background style** (if possible)
- **Clear, high-quality images**
- **Smiling, approachable expressions**

### Current Team Structure:
- **Siti Rahman** - Managing Director
- **Ahmad Hassan** - Operations Manager  
- **Priya Sharma** - HR Specialist
- **Mohamed Ali** - Legal Compliance Officer
- **Fatima Wong** - Client Relations Manager

### Technical Notes:
- Photos display with `object-fit: contain` so they won't be cropped
- Cards are fixed size (300x400px) so all team members appear uniformly
- Photos are duplicated in the HTML for infinite scrolling effect
- If you change file names, update both sets in the HTML file

---
**Need Help?** The photos are referenced in `/about.html` in the "Meet Our Team" section.