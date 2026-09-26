import React, { useState } from 'react';
import { X, Calendar, Clock, Star, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { Mentor } from '../types';

interface MentorSessionModalProps {
  mentor: Mentor | null;
  onClose: () => void;
}

export const MentorSessionModal: React.FC<MentorSessionModalProps> = ({ mentor, onClose }) => {
  const [topic, setTopic] = useState('architecture');
  const [date, setDate] = useState('2026-10-05');
  const [timeSlot, setTimeSlot] = useState('17:00 UTC');
  const [submitted, setSubmitted] = useState(false);

  if (!mentor) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0B1E3D]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E5EAF1] z-10 overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E5EAF1] flex items-center justify-between bg-[#F7F9FC]">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm border ${mentor.avatarBg}`}>
              {mentor.initials}
            </div>
            <div>
              <h3 className="font-bold text-base text-[#0B1E3D] font-display">
                Request Mentor Session
              </h3>
              <p className="text-xs text-[#64748B]">{mentor.name} · {mentor.role}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold font-display text-[#0B1E3D]">
              Session Request Logged!
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-xs mx-auto">
              {mentor.name} has been notified. A Google Meet calendar placeholder for {date} at {timeSlot} has been added to your cohort dashboard.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#0B1E3D] text-white text-xs font-semibold hover:bg-[#142B52] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1E3D] mb-1.5">
                Session Focus Area
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#0B1E3D] bg-white focus:outline-none focus:ring-2 focus:ring-[#FFB547]"
              >
                <option value="architecture">Pull Request & System Architecture Review</option>
                <option value="career">Career Strategy & Promotion Roadmap</option>
                <option value="capstone">Capstone Defense Dry Run</option>
                <option value="interview">Technical Mock Interview & Feedback</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1E3D] mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-[#0B1E3D] focus:outline-none focus:ring-2 focus:ring-[#FFB547]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1E3D] mb-1.5">
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-[#0B1E3D] bg-white focus:outline-none focus:ring-2 focus:ring-[#FFB547]"
                >
                  <option value="15:00 UTC">15:00 UTC (10:00 AM EST)</option>
                  <option value="17:00 UTC">17:00 UTC (12:00 PM EST)</option>
                  <option value="20:00 UTC">20:00 UTC (3:00 PM EST)</option>
                  <option value="23:00 UTC">23:00 UTC (6:00 PM EST)</option>
                </select>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
              <span>Included for all Guided and Pro Accelerator enrolled learners.</span>
            </div>

            <div className="pt-3 border-t border-[#E5EAF1] flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl font-semibold text-xs text-[#0B1E3D] bg-[#FFB547] hover:bg-[#ffa726] transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Confirm Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
