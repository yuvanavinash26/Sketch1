/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { VideoShowcase } from './components/VideoShowcase';
import { CourseGrid } from './components/CourseGrid';
import { HowItWorks } from './components/HowItWorks';
import { Outcomes } from './components/Outcomes';
import { Mentors } from './components/Mentors';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { MentorSessionModal } from './components/MentorSessionModal';
import { Course, Mentor, PricingPlan } from './types';

export default function App() {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);
  const [selectedCourseForEnrollment, setSelectedCourseForEnrollment] = useState<string | undefined>(undefined);
  const [selectedPlanForEnrollment, setSelectedPlanForEnrollment] = useState<string>('guided');
  const [isAnnualPlan, setIsAnnualPlan] = useState<boolean>(true);
  const [selectedMentorForSession, setSelectedMentorForSession] = useState<Mentor | null>(null);

  const handleStartLearning = () => {
    setSelectedCourseForEnrollment(undefined);
    setSelectedPlanForEnrollment('guided');
    setEnrollmentOpen(true);
  };

  const handleBrowseCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourseForDetail(course);
  };

  const handleEnrollCourse = (course: Course) => {
    setSelectedCourseForEnrollment(course.id);
    setSelectedPlanForEnrollment('guided');
    setEnrollmentOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan, isAnnual: boolean) => {
    setSelectedPlanForEnrollment(plan.id);
    setIsAnnualPlan(isAnnual);
    setEnrollmentOpen(true);
  };

  const handleRequestMentorSession = (mentor: Mentor) => {
    setSelectedMentorForSession(mentor);
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#0B1E3D] selection:bg-[#FFB547]/30 selection:text-[#0B1E3D] relative flex flex-col font-sans">
      {/* Interactive Cursor Glow & Magnetic Feedback */}
      <CustomCursor />

      {/* Dynamic Ambient Background Effects & Grid Matrix */}
      <BackgroundEffects />

      {/* Sticky Top Navigation Bar */}
      <Navbar
        onStartLearning={handleStartLearning}
        onBrowseCourses={handleBrowseCourses}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onStartLearning={handleStartLearning}
          onBrowseCourses={handleBrowseCourses}
        />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Cursor-Responsive Video Showcase ("See what real skill building looks like") */}
        <VideoShowcase />

        {/* 4. Course Grid */}
        <CourseGrid
          onSelectCourse={handleSelectCourse}
          onEnrollCourse={handleEnrollCourse}
        />

        {/* 4. How It Works */}
        <HowItWorks />

        {/* 5. Outcomes & Metrics */}
        <Outcomes />

        {/* 6. Mentors */}
        <Mentors
          onRequestSession={handleRequestMentorSession}
        />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. Pricing */}
        <Pricing
          onSelectPlan={handleSelectPlan}
        />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Final CTA */}
        <FinalCTA
          onStartLearning={handleStartLearning}
        />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <EnrollmentModal
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        initialCourseId={selectedCourseForEnrollment}
        initialPlanId={selectedPlanForEnrollment}
        isAnnual={isAnnualPlan}
      />

      <CourseDetailModal
        course={selectedCourseForDetail}
        onClose={() => setSelectedCourseForDetail(null)}
        onEnroll={(course) => {
          setSelectedCourseForDetail(null);
          handleEnrollCourse(course);
        }}
      />

      <MentorSessionModal
        mentor={selectedMentorForSession}
        onClose={() => setSelectedMentorForSession(null)}
      />
    </div>
  );
}
