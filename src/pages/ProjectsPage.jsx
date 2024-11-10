import React from 'react';

export const ProjectsPage = () => {
  return (
    <>
      <div id="Projects" className="flex flex-col items-center gap-6 mt-20 px-4">
        
        {/* Centered Title */}
        <h1 className="font-bold text-4xl text-pink-400 mb-6 text-center">Projects</h1>  
        
        {/* Responsive Grid for Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-blue-900 rounded-xl p-4 flex flex-col items-center text-white w-full">
            <h2 className="text-xl font-bold">To Do List</h2>
            <img src="/Images/todo_screenshot.png" alt="To Do List Screenshot" className="w-auto rounded-b-xl" />
            <i className="fab fa-github text-3xl"></i>
          </div>
          <div className="bg-blue-900 rounded-xl p-4 flex flex-col items-center text-white w-full">
            <h2 className="text-xl font-bold">Landing Page</h2>
            <img src="/Images/02landing.jpg" alt="Landing Page Screenshot" className="w-auto rounded-b-xl" />
            <i className="fab fa-github text-3xl"></i>
          </div>
          <div className="bg-blue-900 rounded-xl p-4 flex flex-col items-center text-white w-full">
            <h2 className="text-xl font-bold">Weather Map</h2>
            <img src="/Images/weather_screenshot.png" alt="Weather Map Screenshot" className="w-auto rounded-b-xl" />
            <i className="fab fa-github text-3xl"></i>
          </div>
        </div>
        
      </div>
    </>
  );
};
