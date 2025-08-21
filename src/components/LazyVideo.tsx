import React, { useState, useRef, useEffect } from 'react';

interface LazyVideoProps {
  videoSrc: string;
  placeholderSrc: string;
  className?: string;
  style?: React.CSSProperties;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  delay?: number;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  videoSrc,
  placeholderSrc,
  className = '',
  style = {},
  autoPlay = true,
  loop = true,
  muted = true,
  delay = 500
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start loading after delay
    const timer = setTimeout(() => {
      console.log('LazyVideo: Starting video load');
      setShouldLoadVideo(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      const video = videoRef.current;
      
      const handleLoad = () => {
        console.log('LazyVideo: Video loaded');
        setVideoLoaded(true);
        setVideoError(false);
      };

      const handleError = (e: any) => {
        console.error('LazyVideo: Video failed to load', e);
        setVideoError(true);
      };

      video.addEventListener('canplay', handleLoad);
      video.addEventListener('loadeddata', handleLoad);
      video.addEventListener('error', handleError);

      // Fallback timeout
      const timeout = setTimeout(() => {
        if (!videoLoaded) {
          console.warn('LazyVideo: Timeout - falling back to image');
          setVideoError(true);
        }
      }, 8000);

      return () => {
        video.removeEventListener('canplay', handleLoad);
        video.removeEventListener('loadeddata', handleLoad);
        video.removeEventListener('error', handleError);
        clearTimeout(timeout);
      };
    }
  }, [shouldLoadVideo, videoLoaded]);

  return (
    <div style={{ position: 'relative', ...style }} className={className}>
      {/* Placeholder Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${placeholderSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: videoLoaded && !videoError ? 0 : 1,
          transition: 'opacity 1s ease-in-out',
          zIndex: videoLoaded && !videoError ? 0 : 1
        }}
      />

      {/* Video Element */}
      {shouldLoadVideo && !videoError && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: videoLoaded ? 1 : 0
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={`${process.env.PUBLIC_URL}${videoSrc}`} type="video/mp4" />
        </video>
      )}

      {/* Loading Indicator */}
      {shouldLoadVideo && !videoLoaded && !videoError && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '0.9rem',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            width: '16px',
            height: '16px',
            border: '2px solid rgba(255,255,255,0.3)',
            borderTop: '2px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          Loading video...
        </div>
      )}

      {/* Error Indicator (development only) */}
      {process.env.NODE_ENV === 'development' && videoError && (
        <div style={{
          position: 'absolute',
          top: '60px',
          right: '20px',
          background: 'rgba(220, 38, 38, 0.9)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '0.8rem',
          zIndex: 2
        }}>
          Video failed - using image
        </div>
      )}
    </div>
  );
};

export default LazyVideo;