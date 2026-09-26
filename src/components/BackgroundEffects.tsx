import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const BackgroundEffects: React.FC = () => {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  // Parallax subtle shifts
  const orb1Y = useTransform(scrollY, [0, 2000], [0, 180]);
  const orb2Y = useTransform(scrollY, [0, 2500], [0, -220]);
  const orb3Y = useTransform(scrollY, [1000, 3500], [-80, 140]);
  const gridY = useTransform(scrollY, [0, 3000], [0, 80]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Subtle Fine Engineering Dot Grid Matrix */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#0B1E3D_1.25px,transparent_1.25px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
      />

      {/* 2. Top-Center Deep Navy Gradient Atmosphere */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute -top-[18%] left-1/2 -translate-x-1/2 w-[1000px] h-[750px] rounded-full bg-gradient-to-b from-[#142B52]/15 via-[#0B1E3D]/8 to-transparent blur-[120px] will-change-transform"
      />

      {/* 3. Hero Warm Amber Glow Orb (Right Top) */}
      <motion.div
        animate={
          mounted
            ? {
                scale: [1, 1.08, 0.98, 1],
                opacity: [0.12, 0.18, 0.14, 0.12],
                x: [0, 15, -10, 0],
              }
            : {}
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ y: orb2Y }}
        className="absolute top-[8%] right-[-10%] sm:right-[2%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#FFB547]/25 via-[#ffa726]/12 to-transparent blur-[110px] will-change-transform"
      />

      {/* 4. Left Cool Sapphire Accent Glow (Mid-page) */}
      <motion.div
        animate={
          mounted
            ? {
                scale: [0.95, 1.06, 1, 0.95],
                opacity: [0.08, 0.14, 0.09, 0.08],
                y: [0, -20, 10, 0],
              }
            : {}
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ y: orb3Y }}
        className="absolute top-[42%] -left-[15%] sm:-left-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#38BDF8]/20 via-[#142B52]/10 to-transparent blur-[130px] will-change-transform"
      />

      {/* 5. Delicate Micro Accent Orb (Near Pricing/Testimonials) */}
      <div className="absolute top-[72%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#FFB547]/10 via-[#F59E0B]/5 to-transparent blur-[120px]" />

      {/* 6. Soft Linear Horizon Accent Line */}
      <div className="absolute top-[28%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B1E3D]/5 to-transparent opacity-60" />
      <div className="absolute top-[64%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B1E3D]/5 to-transparent opacity-40" />

      {/* 7. Ultra-fine Grain Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] mix-blend-overlay" />
    </div>
  );
};
