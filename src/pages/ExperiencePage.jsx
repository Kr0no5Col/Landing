import React from 'react';

export const ExperiencePage = () => {
  return (
    <div id="Experience" className="flex flex-col items-center gap-6 mt-20 px-4 text-white">
      
      {/* Centered Title */}
      <h1 className="font-bold text-4xl text-pink-400 mb-6 text-center">Experience</h1>

      {/* Timeline for Experience Entries */}
      <div className="relative md:w-2/3">
        {/* Timeline Line (Visible only on medium and larger screens) */}
        <div className="hidden md:block absolute border-l-2 border-blue-400 h-full left-1/2 transform -translate-x-1/2"></div>

        <div className="flex flex-col gap-12">
          {[
            { year: "2022", title: "IT SUPPORT ENGINEER | FORTITUDE NICSA GLOBAL" },
            { year: "SEP 2021 To APR 2022", title: "IT SUPPORT | MONASH UNIVERSITY" },
            { year: "AUG 2015 To FEB 2019", title: "HELP DESK SUPPORT | MICROSOFT" },
          ].map((experience, index) => (
            <div key={index} className={`relative flex flex-col items-center ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} gap-4`}>
              {/* Shining Timeline Dot */}
              <div className="shining-dot absolute left-1/2 transform -translate-x-1/2"></div>

              {/* Experience Card */}
              <div className="border-2 rounded-lg border-blue-400 p-6 text-center max-w-xs md:max-w-sm flex flex-col items-center">
                {/* Icon at the Top */}
                <img src="./Images/working.png" alt="Experience Icon" className="w-12 h-12 mb-4" />

                <h3 className="text-lg text-blue-400 mt-2">{experience.title}</h3>
                <h2 className="font-semibold text-2xl text-gray-300">{experience.year}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



