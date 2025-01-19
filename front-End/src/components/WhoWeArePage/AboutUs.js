import React from 'react';
import './AboutUs.css';
import aboutText from './AboutUsTEXT';

function DisplayAboutUs ( { language } ){

    return (
        <div className="who-we-are">
      <header className="header">
        <h1>{aboutText[language].head}</h1>
      </header>
      {/* <main className="content"> */}
      <div className='text-layout'>
        <section className='intro'>
        <h2>{aboutText[language].h2_1}</h2>
        <p>{aboutText[language].p1}</p>
        </section>
        <section className='mission'>
        <h2>{aboutText[language].h2_2}</h2>
        <p>{aboutText[language].p2}</p>
        <blockquote>
        <p>{aboutText[language].p3}</p>
        </blockquote>
        </section>
        <section className='history'>
        <h2>{aboutText[language].h2_3}</h2>
        <p>{aboutText[language].p4}</p>
        </section>
        <section className='invitation'>
        <h2>{aboutText[language].h2_4}</h2>
        <p>{aboutText[language].p5}</p>
        <p>{aboutText[language].p6}</p>
        <p className='pastor-signature'>{aboutText[language].p7}</p>
        </section>
    </div>    
    </div>
  );
};

export default DisplayAboutUs;