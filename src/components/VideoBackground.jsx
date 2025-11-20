import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const VideoBackground = ({ 
  videoSrc, 
  posterSrc, 
  overlayOpacity = 0.5,
  children 
}) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      video.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    };

    video.addEventListener('canplay', handleCanPlay);
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Video or Poster Image */}
      {!prefersReducedMotion ? (
        <>
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster={posterSrc}
            preload="metadata"
            aria-label="Background video"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          
          {/* Fallback image if video fails to load */}
          {posterSrc && !isVideoLoaded && (
            <img
              src={posterSrc}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </>
      ) : (
        /* Show static image for users who prefer reduced motion */
        <img
          src={posterSrc}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Dark overlay for text readability */}
      <div 
        className="absolute inset-0 bg-navy" 
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;

