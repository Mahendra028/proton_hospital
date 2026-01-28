import React from "react";

export default function OurStory() {
  return (
    <section className="bg-[#fbf9f5] py-24">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* LABEL */}
        <p className="text-sm tracking-[0.25em] text-gray-500 mb-5">
         <span className="text-lg">✚</span>Our Story
      </p>
        {/* HEADING */}
        <h2 className="max-w-3xl mx-auto mb-16 text-3xl font-normal leading-snug text-black">
          <span className="text-red-700"> Empowering healthier </span> lives through quality,
          <br />
          integrity, and excellence
        </h2>

        {/* ICON CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">

          {/* CARD 1 */}
          <div className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 hover:shadow-2xl">
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
            <p className="text-sm font-normal text-center text-black">
              Superior Health<br />Care
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 hover:shadow-2xl">
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 21s-4-2.5-4-5a4 4 0 118 0c0 2.5-4 5-4 5z" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <p className="text-sm font-normal text-center text-black">
              Personalized<br />Attention
            </p>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 hover:shadow-2xl">
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20" />
            </svg>
            <p className="text-sm font-normal text-center text-black">
              Comfortable<br />Environment
            </p>
          </div>

          {/* CARD 4 */}
          <div className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 hover:shadow-2xl">
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9v9H3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v-3" />
            </svg>
            <p className="text-sm font-normal text-center text-black">
              Patient-Centered<br />Care
            </p>
          </div>

          {/* CARD 5 */}
          <div className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 hover:shadow-2xl">
            <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="8" cy="7" r="4" />
              <circle cx="16" cy="7" r="4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 21c0-4 4-7 6-7s6 3 6 7" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 21c0-4 4-7 6-7" />
            </svg>
            <p className="text-sm font-normal text-center text-black">
              Expert Medical<br />Team
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
