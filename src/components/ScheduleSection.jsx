import React from "react";
import scheduleImage from "../assets/stats.webp";
const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* left */}
        <div className="w:full md:w-1/2">
          <img className="w-full h-auto" src={scheduleImage} alt="" />
        </div>
        {/* right */}
        <div className="w-full md:w-1/2">
          <span className="text-orange-500 font-semibold">SCHEDULE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6">
            Stream Your Business <br /> With Smart Scheduling Solutions
          </h2>
          <p className="text-gray-600 mb-8">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver expectional customre experiences through
            seamless calendar management.
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Explore schedule features
            <span className="size:8">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;