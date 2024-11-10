import React from "react";

export const ContactoPage = () => {
  const handleDatePrompt = () => {
    // Ask for a specific date
    const date = prompt("Eres un hielito? pon tu fecha de cumple (e.g., YYYY/MM/DD):");
    
  
    if (date == '12/01/2022') {
      window.location.href = "https://www.youtube.com/watch?v=o2tdLOK7-PE"; 
  };
  };
  return (
    <div id="Contact" className="my-20">
      <div className="flex flex-row gap-10 justify-center">
        <a href="https://www.facebook.com/andres.espitia.9674/">
          <img
            src="/Images/LogoFacebook.png"
            alt="logo facebook"
            className="w-10"
          />
        </a>
        <a href="https://www.instagram.com/andresespitia93/">
          <img src="/Images/LogoInstagram.png" alt="logo Ig" className="w-10" />
        </a>
        <a href="https://www.linkedin.com/in/andres-espitia-551931b8">
          <img
            src="/Images/LogoLinked.png"
            alt="logo Linkelind"
            className="w-10"
          />
        </a>
        <a href="https://github.com/Kr0no5Col">
          <img
            src="/Images/LogoGithuh.png"
            alt="logo GitHub"
            className="w-10"
          />
        </a>
        
        {/* New Icon with date prompt */}
        <div onClick={handleDatePrompt} className="cursor-pointer">
          <img
            src="/Images/fluent-emoji--ice.svg" // Replace with the path to your new icon
            alt="calendar icon"
            className="w-10"
          />
        </div>
      </div>
      
      <h1 className="text-white text-center mt-6">
        © Develop by Andres Espitia
      </h1>
      <h1 className="text-white text-center mt-2">2024</h1>
    </div>
  );
};

