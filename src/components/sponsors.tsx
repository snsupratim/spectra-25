// sponsor.tsx
import React from 'react';

export const Sponsor = () => {
  return (
    <div className="bg-black text-white flex items-start justify-between h-48"> {/* Adjusted height */}
      {/* Left Section: Title and Placeholder Boxes */}
      <div className="flex flex-col space-y-3 pl-8 pt-4"> {/* Adjusted spacing and padding */}
        <h1 className="text-5xl font-bold tracking-wide">Title Sponsors</h1> {/* Larger font, added tracking */}
        <div className="flex space-x-3"> {/* Reduced spacing between placeholders */}
          {/* Placeholder boxes for images */}
          <div className="border-2 border-white w-16 h-12 flex items-center justify-center text-sm">
            img
          </div>
          <div className="border-2 border-white w-16 h-12 flex items-center justify-center text-sm">
            img
          </div>
          <div className="border-2 border-white w-16 h-12 flex items-center justify-center text-sm">
            img
          </div>
        </div>
      </div>

      {/* Right Section: Anime Character Image */}
      <div className="w-1/4 pr-4 pt-2"> {/* Adjusted width and padding */}
        {/* Replace this with your actual image */}
        <img
          src="/img/swordman.webp" // Placeholder image; replace with your anime character image
          alt="Anime Character"
          className="object-cover h-44 w-full transform -rotate-12" // Added rotation and adjusted height
        />
      </div>
    </div>
  );
};