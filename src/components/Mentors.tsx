import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Linkedin, Calendar, Check, ArrowRight } from 'lucide-react';
import { MENTORS } from '../data/mentors';
import { Mentor } from '../types';

interface MentorsProps {
  onRequestSession: (mentor: Mentor) => void;
}

export const Mentors: React.FC<MentorsProps> = ({ onRequestSession }) => {
  return (
    <section id="mentors" className="py-24 md:py-32 bg-[#F7F9FC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FFB547]">
            Active Practitioners
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0B1E3D] tracking-tight leading-tight text-balance">
            Learn from people who've done the work.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Staff-level engineers and design leads from high-growth technology teams who conduct line-by-line pull request reviews, unblock architecture decisions, and help you think like a senior builder.
          </p>
        </div>

        {/* Mentor Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENTORS.map((mentor) => (
            <div
              key={mentor.id}
              className="group relative flex flex-col justify-between bg-white rounded-2xl border border-[#E5EAF1] p-6 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Header: Avatar, Rating & LinkedIn */}
                <div className="flex items-start justify-between">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-display font-extrabold text-xl shadow-xs border transition-transform duration-300 group-hover:scale-105 ${mentor.avatarBg}`}>
                    {mentor.initials}
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1 text-xs font-bold text-[#0B1E3D]">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{mentor.rating}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {mentor.sessionsHeld}+ reviews
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="mt-5">
                  <h3 className="text-lg font-bold font-display text-[#0B1E3D] group-hover:text-[#142B52] transition-colors">
                    {mentor.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0B1E3D]/80">
                    {mentor.role}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                    {mentor.companyPast}
                  </p>
                </div>

                {/* Biography */}
                <p className="mt-3 text-xs text-[#64748B] leading-relaxed line-clamp-3">
                  {mentor.bio}
                </p>

                {/* Quote Box */}
                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-700 italic">
                  "{mentor.quote}"
                </div>

                {/* Expertise Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium group-hover:bg-[#0B1E3D]/5 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#E5EAF1]">
                <button
                  type="button"
                  onClick={() => onRequestSession(mentor)}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-[#0B1E3D] bg-slate-100 hover:bg-[#FFB547] rounded-xl transition-all cursor-pointer shadow-2xs group/btn"
                >
                  <Calendar className="w-3.5 h-3.5 text-slate-600 group-hover/btn:text-[#0B1E3D]" />
                  <span>Request AMA Session</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Mentor Commitment Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B1E3D] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold font-display text-white">
              Are you a senior tech lead or staff practitioner?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Join our selective mentor fellowship. Guide ambitious learners through real pull requests.
            </p>
          </div>
          <button
            type="button"
            onClick={() => alert("Thank you for your interest in joining Skillnest's Mentor Fellowship! Applications for the upcoming cohort are open.")}
            className="px-5 py-2.5 rounded-xl bg-white text-[#0B1E3D] text-xs font-semibold hover:bg-slate-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            Apply to Mentor
          </button>
        </div>

      </div>
    </section>
  );
};
