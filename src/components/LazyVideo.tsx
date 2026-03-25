import React, { useState, useRef, useEffect } from 'react';

interface LazyVideoProps {
  videoSrc: string;
  placeholderSrc: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  delay?: number;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  videoSrc,
  placeholderSrc,
  className = '',
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
    const timer = setTimeout(() => setShouldLoadVideo(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      const video = videoRef.current;

      const handleLoad = () => {
        setVideoLoaded(true);
        setVideoError(false);
      };
      const handleError = () => setVideoError(true);

      video.addEventListener('canplay', handleLoad);
      video.addEventListener('loadeddata', handleLoad);
      video.addEventListener('error', handleError);

      const timeout = setTimeout(() => {
        if (!videoLoaded) setVideoError(true);
      }, 8000);

      return () => {
        video.removeEventListener('canplay', handleLoad);
        video.removeEventListener('loadeddata', handleLoad);
        video.removeEventListener('error', handleError);
        clearTimeout(timeout);
      };
    }
  }, [shouldLoadVideo, videoLoaded]);

  const isReady = videoLoaded && !videoError;

  return (
    <div className={`relative ${className}`}>
      {/* Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${placeholderSrc})`,
          opacity: isReady ? 0 : 1,
          zIndex: isReady ? 0 : 1
        }}
      />

      {/* Video */}
      {shouldLoadVideo && !videoError && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: videoLoaded ? 1 : 0, zIndex: videoLoaded ? 1 : 0 }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Loading */}
      {shouldLoadVideo && !videoLoaded && !videoError && (
        <div className="absolute top-5 right-5 z-[2] bg-black/70 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Loading video...
        </div>
      )}
    </div>
  );
};

export default LazyVideo;
