# Video Optimization Guide

## Current Issue
The current video file `petronas_tower.mp4` is 32.9MB, which is too large for web delivery and causes slow loading on mobile devices.

## Required Optimizations

### 1. Compress the Current Video
You need to compress the existing video to reduce its size significantly. Recommended tools:

**Using FFmpeg (Recommended):**
```bash
# Install FFmpeg first
# For Mac: brew install ffmpeg
# For Windows: Download from https://ffmpeg.org/download.html

# Compress for web (target: under 5MB)
ffmpeg -i petronas_tower.mp4 -vcodec libx264 -crf 28 -preset fast -vf scale=1920:1080 -acodec aac -b:a 128k petronas_tower_optimized.mp4

# Create WebM version (better compression)
ffmpeg -i petronas_tower.mp4 -c:v libvpx-vp9 -crf 30 -b:v 2M -c:a libopus -b:a 128k petronas_tower.webm

# Create mobile-optimized version (smaller)
ffmpeg -i petronas_tower.mp4 -vcodec libx264 -crf 32 -preset fast -vf scale=1280:720 -acodec aac -b:a 96k petronas_tower_mobile.mp4
```

**Alternative Online Tools:**
- CloudConvert.com
- VideoSmaller.com
- HandBrake (desktop app)

### 2. Create Required Images
Create these placeholder images in `/public/images/`:

1. **petronas_tower_poster.jpg** - A still frame from the video (under 200KB)
2. **petronas_tower_fallback.jpg** - Same image, optimized for slower connections (under 100KB)

### 3. Final File Structure
```
/public/
  /videos/
    petronas_tower.webm          # WebM version (preferred, ~2-3MB)
    petronas_tower.mp4           # MP4 version (fallback, ~3-5MB)
    petronas_tower_mobile.mp4    # Mobile version (optional, ~1-2MB)
  /images/
    petronas_tower_poster.jpg    # Video poster image (~200KB)
    petronas_tower_fallback.jpg  # Fallback image (~100KB)
```

### 4. Target File Sizes
- **WebM**: 2-3MB (primary)
- **MP4**: 3-5MB (fallback)
- **Mobile MP4**: 1-2MB (optional)
- **Poster Image**: 200KB max
- **Fallback Image**: 100KB max

### 5. Video Settings Recommendations
- **Resolution**: 1920x1080 (desktop), 1280x720 (mobile)
- **Frame Rate**: 30fps or lower
- **Bitrate**: 2-4 Mbps for desktop, 1-2 Mbps for mobile
- **Audio**: 128kbps or lower
- **Length**: Keep as short as possible while maintaining impact

## After Optimization
Once you've created the optimized files, the website will:
- Load much faster on mobile devices
- Use appropriate video formats based on browser support
- Show a poster image while loading
- Provide a play button on slow connections
- Fall back to a static image if video fails

## Performance Impact
These optimizations should reduce initial page load time by 80-90% and improve mobile experience significantly.