"use client";

import React, { useState } from 'react';

export function ConsultationForm({ onSuccess }: { onSuccess?: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Request Received!</h2>
        <p className="text-white/70 max-w-md mx-auto">
          Thank you for reaching out. A dedicated consultant will contact you shortly to discuss your requirements.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <h2 className="text-xl md:text-xl font-semibold text-white mb-2 pr-8 leading-tight">
        Get The Best Deal For Your High-Value Secured Loan
      </h2>
      <p className="text-[10px] md:text-xs text-white/40 mb-4 leading-relaxed pr-4 font-light">
        IBSFINCORP, operated by Incetto Business Solutions Private Limited, acts as a strategic loan consulting firm and Corporate DSA. Final approval, interest rates, and terms are determined solely by partner Banks and NBFCs.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">Full Name</label>
          <input required type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 md:py-2.5 text-white placeholder-white/30 outline-none focus:border-gold-500 transition-colors text-sm" />
        </div>

        <div>
          <label className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">Mobile Number</label>
          <input required type="tel" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 md:py-2.5 text-white placeholder-white/30 outline-none focus:border-gold-500 transition-colors text-sm" />
        </div>

        <div>
          <label className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">Loan Type</label>
          <div className="relative">
            <select required defaultValue="" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 md:py-2.5 text-white appearance-none outline-none focus:border-gold-500 transition-colors text-sm [&>option]:bg-dark-900 [&>option]:text-white cursor-pointer">
              <option value="" disabled hidden></option>
              <option value="lap">Loan Against Property (LAP)</option>
              <option value="las">Loan Against Securities (LAS)</option>
              <option value="business">Business Loan</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">Loan Amount Required</label>
            <input required type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 md:py-2.5 text-white placeholder-white/30 outline-none focus:border-gold-500 transition-colors text-sm" />
          </div>
          <div>
            <label className="block text-white text-[11px] md:text-xs mb-1 ml-1 font-medium">City</label>
            <input required type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 md:py-2.5 text-white placeholder-white/30 outline-none focus:border-gold-500 transition-colors text-sm" />
          </div>
        </div>

        <button type="submit" className="w-full bg-white text-dark-900 font-normal rounded-full py-2.5 md:py-3 mt-1 hover:bg-gray-100 transition-colors text-sm cursor-pointer">
          Check Eligibility Today
        </button>

        <div className="mt-4 space-y-2 pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5 shrink-0">
              <input required type="checkbox" className="appearance-none w-3.5 h-3.5 rounded border border-white/40 checked:bg-white/30 checked:border-white transition-all peer cursor-pointer" />
              <svg className="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-[10px] md:text-[11px] text-white/70 group-hover:text-white/90 transition-colors leading-snug">
              I agree to the Privacy Policy and Terms & Conditions and consent to being contacted via Call, SMS or WhatsApp.
            </span>
          </label>
          <label className="flex items-start gap-2.5 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5 shrink-0">
              <input required type="checkbox" className="appearance-none w-3.5 h-3.5 rounded border border-white/40 checked:bg-white/30 checked:border-white transition-all peer cursor-pointer" />
              <svg className="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-[10px] md:text-[11px] text-white/70 group-hover:text-white/90 transition-colors leading-snug">
              I understand that loan approvals and terms are determined by partner Banks and NBFCs.
            </span>
          </label>
        </div>
      </form>
    </>
  );
}
