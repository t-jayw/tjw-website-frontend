import React from 'react';

import watchlogo from '../assets/watchlogo-1024 copy.png';  // adjust the path to match your file structure


const ChronoLogPage = () => {
  return (
    <div class="chronolog-page">
      <h2>ChronoLog</h2>
      <img src={watchlogo} alt="ChronoLog Logo" />
      <p>
        <ul>
          <li>
            ChronoLog is an iOS (for now) app written in Flutter to help collectors track performance of watches.
          </li>
          <li>        
            It is the first full mobile app that I developed and published.
          </li>
          <li>        
            The app is used to record the time on a watch vs atomic time. This is used to calculate an offset from true-time. This offset is tracked over time.
          </li>
        </ul>
      </p>

      <p>
        View the 
        <a href="/chronolog_privacy_policy"> privacy policy</a>.
      </p>
    </div>
  );
};

export default ChronoLogPage;
