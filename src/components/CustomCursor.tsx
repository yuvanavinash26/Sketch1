import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<{
    text: string | null;
    variant: 'default' | 'button' | 'video' | 'card';
    visible: boolean;
  }>({
    text: null,
    variant: 'default',
    visible: false,
  });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid cursor trail
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Spotlight slower spring for ambient aura
  const auraX = useSpring(mouseX, { damping: 40, stiffness: 180 });
  const auraY = useSpring(mouseY, { damping: 40, stiffness: 180 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!cursorState.visible) {
        setCursorState((prev) => ({ ...prev, visible: true }));
      }

      // Check hovered element cursor tags
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const videoTarget = target.closest('[data-cursor="video"]');
      const buttonTarget = target.closest('button, a, [role="button"], input, select');
      const cardTarget = target.closest('[data-cursor="card"]');

      if (videoTarget) {
        const customText = videoTarget.getAttribute('data-cursor-text') || '▶ Watch Demo';
        setCursorState({
          text: customText,
          variant: 'video',
          visible: true,
        });
      } else if (buttonTarget) {
        setCursorState({
          text: null,
          variant: 'button',
          visible: true,
        });
      } else if (cardTarget) {
        const customText = cardTarget.getAttribute('data-cursor-text') || null;
        setCursorState({
          text: customText,
          variant: 'card',
          visible: true,
        });
      } else {
        setCursorState({
          text: null,
          variant: 'default',
          visible: true,
        });
      }
    };

    const handleMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, visible: false }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, cursorState.visible]);

  if (!cursorState.visible) return null;

  return (
    <>
      {/* 1. Large Ambient Mouse Spotlight Aura in the Background */}
      <motion.div
        aria-hidden="true"
        style={{
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="pointer-events-none fixed top-0 left-0 z-10 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(255,181,71,0.07)_0%,rgba(14,165,233,0.03)_40%,transparent_70%)] blur-2xl"
      />

      {/* 2. Interactive Cursor Center Target */}
      <motion.div
        aria-hidden="true"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale:
            cursorState.variant === 'video'
              ? 1
              : cursorState.variant === 'button'
              ? 1.8
              : cursorState.variant === 'card'
              ? 1.4
              : 1,
          opacity: cursorState.visible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center select-none"
      >
        {cursorState.variant === 'video' ? (
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1E3D] text-[#FFB547] text-xs font-bold font-mono tracking-wide shadow-2xl border border-[#FFB547]/40 backdrop-blur-md whitespace-nowrap animate-pulse">
            <span>{cursorState.text || '▶ PLAY REEL'}</span>
          </div>
        ) : cursorState.variant === 'button' ? (
          <div className="w-9 h-9 rounded-full bg-[#FFB547]/30 border border-[#0B1E3D]/40 backdrop-blur-2xs" />
        ) : (
          <div className="relative flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0B1E3D] shadow-xs" />
            <div className="absolute w-7 h-7 rounded-full border border-[#0B1E3D]/25" />
          </div>
        )}
      </motion.div>
    </>
  );
};
