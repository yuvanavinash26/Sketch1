import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, BarChart2, Users, ArrowUpRight, Check, BookOpen, Layers } from 'lucide-react';
import { COURSES } from '../data/courses';
import { Course, CourseCategory } from '../types';

interface CourseGridProps {
  onSelectCourse: (course: Course) => void;
  onEnrollCourse: (course: Course) => void;
}

const CATEGORIES: CourseCategory[] = [
  'All',
  'Development',
  'AI & Machine Learning',
  'Data Analytics',
  'Design',
  'Cloud & DevOps'
];

export const CourseGrid: React.FC<CourseGridProps> = ({ onSelectCourse, onEnrollCourse }) => {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>('All');

  const filteredCourses = activeCategory === 'All'
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory);

  return (
    <section id="courses" className="py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FFB547]">
            Structured Curriculum
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0B1E3D] tracking-tight leading-tight text-balance">
            Choose the skill you want to build.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Structured programs designed around practical skills, not passive watching. Each track culminates in a production capstone and defense.
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="mt-10 flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/60 rounded-xl max-w-fit">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1E3D] ${
                activeCategory === category
                  ? 'bg-white text-[#0B1E3D] shadow-xs font-semibold'
                  : 'text-[#64748B] hover:text-[#0B1E3D]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                key={course.id}
                className="group relative flex flex-col bg-white rounded-2xl border border-[#E5EAF1] shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-slate-300 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => onSelectCourse(course)}
              >
                {/* Course Visual Hero Banner (Clean Domain Geometric Graphic) */}
                <div className="relative h-44 w-full bg-[#0B1E3D] overflow-hidden p-6 flex flex-col justify-between">
                  {/* Subtle Grid & Gradient Mesh */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FFB547_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div 
                    className="absolute -right-12 -top-12 w-44 h-44 rounded-full blur-2xl opacity-20 transition-transform duration-500 group-hover:scale-125"
                    style={{ backgroundColor: course.accentColor }}
                  />

                  {/* Top Banner Row: Category Text (Zero-Pill Discipline) & Featured Indicator */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                      <span>{course.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{course.level}</span>
                    </div>

                    {course.featured && (
                      <span className="text-[11px] font-semibold text-[#FFB547] bg-[#FFB547]/10 px-2.5 py-0.5 rounded border border-[#FFB547]/20">
                        Marquee Track
                      </span>
                    )}
                  </div>

                  {/* Graphic Center Title Emblem */}
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white mb-2 group-hover:bg-[#FFB547] group-hover:text-[#0B1E3D] transition-colors duration-200">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">Track ID: {course.id}</span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Course Title */}
                    <h3 className="text-xl font-bold font-display text-[#0B1E3D] group-hover:text-[#142B52] transition-colors tracking-tight flex items-start justify-between gap-2">
                      <span>{course.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#0B1E3D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 text-sm text-[#64748B] leading-relaxed line-clamp-2">
                      {course.shortDescription}
                    </p>

                    {/* Capstone Box Preview */}
                    <div className="mt-4 p-3 rounded-xl bg-[#F7F9FC] border border-[#E5EAF1] text-xs">
                      <div className="font-semibold text-[#0B1E3D] flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#FFB547]" />
                        <span>Capstone Deliverable:</span>
                      </div>
                      <p className="mt-1 text-slate-600 font-medium truncate">
                        {course.capstoneProject.title}
                      </p>
                    </div>
                  </div>

                  {/* Metadata Row (Clean unboxed text with separators per Zero-Pill discipline) */}
                  <div className="mt-6 pt-4 border-t border-[#E5EAF1] flex items-center justify-between text-xs text-[#64748B]">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 font-medium text-[#0B1E3D]">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.duration}</span>
                      </div>
                      <span aria-hidden="true">·</span>
                      <div className="flex items-center gap-1 font-medium text-[#0B1E3D]">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>{course.rating}</span>
                        <span className="text-slate-400">({course.reviewCount})</span>
                      </div>
                    </div>

                    <span className="font-medium text-slate-500">{course.studentCount} learners</span>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="mt-5 grid grid-cols-2 gap-2 pt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCourse(course);
                      }}
                      className="px-3 py-2 text-xs font-semibold text-[#0B1E3D] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-center"
                    >
                      View Syllabus
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEnrollCourse(course);
                      }}
                      className="px-3 py-2 text-xs font-semibold text-[#0B1E3D] bg-[#FFB547] hover:bg-[#ffa726] rounded-lg transition-colors cursor-pointer text-center shadow-xs"
                    >
                      Enroll Now
                    </button>
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
