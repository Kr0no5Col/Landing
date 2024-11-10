import React from 'react';

export const StudiesPage = () => {
  return (
    <>
      <div id="Studies" className="flex flex-col items-center gap-6 mt-20 px-4">
        
        {/* Centered Title */}
        <h1 className="font-bold text-4xl text-pink-400 mb-6 text-center">Studies</h1>  
        
        {/* Horizontal Icon Row Below Title  */}
        <div className="flex flex-row items-center gap-4">
          <img src="./Images/icon _Javascript (JS)_.png" alt="JavaScript Icon" className="w-16 h-16" />
          <img src="./Images/icon _file type html_.png" alt="HTML Icon" className="w-16 h-16" />
          <img src="./Images/icon _file type css_.png" alt="CSS Icon" className="w-16 h-16" />
        </div>

        {/* Study Certificates */}
        <div className="text-white flex flex-col gap-6 md:w-2/3">
          <div className="border-2 rounded-lg border-pink-400 p-6 text-center">
            <h2>CERTIFICATE IV IN INFORMATION TECHNOLOGY NETWORKING - DANFORD COLLEGE</h2>
            <h3>APR 2020 To JAN 2021.</h3>
          </div>
          <div className="border-2 rounded-lg border-pink-400 p-6 text-center">
            <h2>DIPLOMA OF INFORMATION TECHNOLOGY - DANFORD COLLEGE</h2>
            <h3>APR 2020 To JAN 2021.</h3>
          </div>
          <div className="border-2 rounded-lg border-pink-400 p-6 text-center">
            <h2>ADVANCE DIPLOMA OF INFORMATION TECHNOLOGY | REACH COLLEGE</h2>
            <h3>APR 2020 To JAN 2021.</h3>
          </div>
          <div className="border-2 rounded-lg border-pink-400 p-6 text-center">
            <h2>DIPLOMA IN FRONT-END DEVELOPMENT WITH REACT JS | MARIA LUISA DE MORENO INTERNATIONAL FOUNDATION</h2>
            <h3>APR 2020 To JAN 2021.</h3>
          </div>
          <div className="border-2 rounded-lg border-pink-400 p-6 text-center">
            <h2>INFORMATION AND TECHNOLOGY ENGINEER | IT SUPPORT UNICIENCIA UNIVERSITY</h2>
            <h3>APR 2020 To JAN 2021.</h3>
          </div>
        </div> 
        
      </div>
    </>
  );
};




