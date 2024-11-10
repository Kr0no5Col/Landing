export const StudiesPage = () => {
  return (
    <div id="Studies" className="flex flex-col items-center gap-6 mt-20 px-4 text-white">
      
      {/* Centered Title */}
      <h1 className="font-bold text-4xl text-pink-400 mb-6 text-center">Studies</h1>  

      {/* Horizontal Icon Row Below Title */}
      <div className="flex flex-row items-center gap-4 mb-8">
        <img src="./Images/icon _Javascript (JS)_.png" alt="JavaScript Icon" className="w-16 h-16" />
        <img src="./Images/icon _file type html_.png" alt="HTML Icon" className="w-16 h-16" />
        <img src="./Images/icon _file type css_.png" alt="CSS Icon" className="w-16 h-16" />
      </div>

      {/* Timeline for Study Certificates */}
      <div className="relative md:w-2/3">
        {/* Timeline Line (Visible only on medium and larger screens) */}
        <div className="hidden md:block absolute border-l-2 border-pink-400 h-full left-1/2 transform -translate-x-1/2"></div>

        <div className="flex flex-col gap-12">
          {[
            { title: "ADVANCED DIPLOMA OF INFORMATION TECHNOLOGY - REACH COLLEGE ", date: "MAY 2022 To MAY 2023" },
            { title: "DIPLOMA IN FRONT-END DEVELOPMENT WITH REACT JS - MARIA LUISA DE MORENO INTERNATIONAL FOUNDATION", date: "JUL 2022 To SEP 2022" },
            { title: "DIPLOMA OF INFORMATION TECHNOLOGY - DANFORD COLLEGE", date: "MAY 2021 To APR 2022" },
            { title: "CERTIFICATE IV IN INFORMATION OF TECHNOLOGY NETWORKING - DANFORD COLLEGE", date: "APR 2020 To JAN 2021" },
            { title: "ICT SKILL ASSESSMENT - ACS ", date: "APR 2026" },
            { title: "BACHELOR DEGREE IN COMPUTER ENGINEERING - UNICIENCIA UNIVERSITY", date: "FEB 2011 To DEC 2014" }
          ].map((entry, index) => (
            <div key={index} className={`relative flex flex-col items-center ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} gap-4`}>
              {/* Timeline Point Icon */}
              <div className="w-4 h-4 rounded-full bg-pink-400 border-2 border-white absolute left-1/2 transform -translate-x-1/2"></div>
              
              {/* Certificate Card */}
              <div className="border-2 rounded-lg border-pink-400 p-4 text-center max-w-xs md:max-w-md">
              <img src="./Images/graduation.png" alt="Academic Icon" className="w-12 h-12 mb-4" /> {/* Adjust the path as needed */}
                <h2 className="font-semibold">{entry.title}</h2>
                <h3 className="text-sm text-gray-400">{entry.date}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Attribution Section */}
      <div className="mt-10 text-center text-xs text-gray-400">
        <a href="https://www.flaticon.com/free-icons/academic" title="academic icons" target="_blank" rel="noopener noreferrer">
          Academic icons created by Candy Design - Flaticon
        </a>
      </div>
    </div>
  );
};


