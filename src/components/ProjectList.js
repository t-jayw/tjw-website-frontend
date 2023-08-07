import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';

import watchlogo from '../assets/watchlogo-1024 copy.png';  // adjust the path to match your file structure
import chronologo from '../assets/chrono logo.webp';  // adjust the path to match your file structure
import tcomp from '../assets/take care of my plant.webp';  // adjust the path to match your file structure
import nwlogo from '../assets/nw logo.png'

const ProjectList = () => {
  return (
    <section id="projects">
    <h2>Projects</h2>

      <article className="project">
        <iframe 
          width="100%" 
          height="166" 
          scrolling="no" 
          frameBorder="no" 
          allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2231083511&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          title="Angeles Pop Punk Cover"
        />
        <div className="content">
          <h3>Angeles (Pop Punk Cover)</h3>
          <p>A pop punk cover of Elliott Smith's "Angeles" — recorded, mixed, and produced by me.</p>
          <a href="https://soundcloud.com/tyler-jay-wood-435759129/angeles-pop-punk-cover">Listen on SoundCloud</a>
        </div>
      </article>

      <Project 
        title="ChronoLog" 
        description="iOS app written in Flutter to help watch collectors track accuracy of watches. 20k+ downloads. 1000+ premium purchases. 4.8 stars/100+ reviews." 
        imageUrl={watchlogo}
        link="/chronolog"
      />


      <Project 
        title="Chrono.quest" 
        description="[SOLD] A daily history game in the spirit of wordle. 5 million+ games played by 500k+ unique users. Cost ~$5/ month on AWS. Uses JS hosted on S3. Metrics collected via APIGateway to a Kinesis stream that writes Parquet to S3 for analysis. All managed by Terraform." 
        imageUrl={chronologo}
        link="https://chrono.quest"
      />


      <Project 
        title="Vino Veritas (@ work)" 
        description="Designed and implemented a new analytics warehouse utilizing Airflow, S3, and Redshift. Transitioned business to new data warehouse, increasing availability, reliability, and saving $$ over previous data warehouse." 
        imageUrl={nwlogo}
        link='us.nakedwines.com'
      />


      <Project 
        title="Take Care of My Plant" 
        description="[Shut down] Used a raspberry pi and a pump to give Reddit control over my plant. Subreddit of 20,000+ users spent over 3 years watering the plant and keeping it alive. Featured in Vice, DailyDot, Mashable and Le Monde. Programmed RPi GPIO for controlling electronics and reading sensors. Operations automated with Python and Praw." 
        imageUrl={tcomp}
        link='https://www.reddit.com/r/takecareofmyplant/top/?sort=top&t=all'
      />

    </section>
  );
};

export default ProjectList;
