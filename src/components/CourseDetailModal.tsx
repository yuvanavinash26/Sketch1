import React from 'react';
import { X, Clock, Star, Users, CheckCircle2, Layers, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose, onEnroll }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0B1E3D]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#E5EAF1] z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Hero Area */}
        <div className="p-6 sm:p-8 bg-[#0B1E3D] text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span>{course.category}</span>
            <span>·</span>
            <span>{course.level}</span>
            <span>·</span>
            <span className="text-[#FFB547]">{course.duration}</span>
          </div>

          <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight pr-10">
            {course.title}
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {course.fullDescription}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-[#FFB547] fill-[#FFB547]" />
              <span className="font-bold text-white">{course.rating}</span>
              <span>({course.reviewCount} reviews)</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-slate-400" />
              <span>{course.studentCount} learners completed</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Capstone Deliverable Spotlight */}
          <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#E5EAF1]">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B1E3D]">
              <Layers className="w-4 h-4 text-[#FFB547]" />
              <span>Marquee Capstone Deliverable</span>
            </div>
            
            <h4 className="mt-1 text-lg font-bold font-display text-[#0B1E3D]">
              {course.capstoneProject.title}
            </h4>

            <p className="mt-2 text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {course.capstoneProject.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {course.capstoneProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-white border border-[#E5EAF1] text-[#0B1E3D] text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Week-by-Week Syllabus */}
          <div>
            <h4 className="text-base font-bold font-display text-[#0B1E3D] mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0B1E3D]" />
              <span>Curriculum & Weekly Milestones</span>
            </h4>

            <div className="space-y-4">
              {course.syllabusWeeks.map((week, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-[#E5EAF1] bg-white">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#FFB547] bg-[#0B1E3D] px-2 py-0.5 rounded">
                      {week.week}
                    </span>
                    <span className="text-xs font-semibold text-[#0B1E3D]">
                      {week.title}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-2 border-t border-slate-100">
                    {week.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div>
            <h4 className="text-sm font-bold font-display text-[#0B1E3D] mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Recommended Prerequisites</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.prerequisites.map((prereq, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  ✓ {prereq}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 sm:p-6 border-t border-[#E5EAF1] bg-[#F7F9FC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#64748B] text-center sm:text-left">
            <span>Includes 1-on-1 mentor reviews, code evaluations & verified credential.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#0B1E3D] bg-[#FFB547] hover:bg-[#ffa726] transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Enroll in Track</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
