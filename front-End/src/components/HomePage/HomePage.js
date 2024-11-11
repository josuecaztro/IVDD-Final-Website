import React, { useEffect, useState, useRef } from 'react';
import { SocialIcon } from 'react-social-icons'
import Container from 'react-bootstrap/Container';
import CarouselFadeExample from './carousel';
import CoolButton from './AwesomeButton';
import './App.css';
import siteText from './HomePageTEXT';
import Dropdown from './DropDownButton';

function DisplayHomePage({ language }){

  const bellIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
</svg>

  const [topic, setTopic] = useState('');


    function scrollToDiv() {
        const element = document.getElementById('middle-page');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function askCalendarSubscription(){
      window.open("https://calendar.google.com/calendar/u/3?cid=cm9jYjc3N0BnbWFpbC5jb20", "_blank");
    }

      //delete anything below this 


      //THE NEXT 3 FUNCTIONS HERE ALLOW THE SCROLLING ANIMATION TO WORK 
      const isInView = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };
    const handleScroll = () => {
        const elements = document.querySelectorAll('.scroll-animation');
        elements.forEach((el) => {
            if (isInView(el)) {
                el.classList.add('in-view');
            } else {
                el.classList.remove('in-view');
            }
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


      return (
        <>
      <div id="wholepage">
    
    {/* THE TOP DIV */}
        <div id="top-page">

        <p id="custom-verse" className="scroll-animation no-select">{siteText[language].customVerse}</p>

      <h1 id="titleh1" className="scroll-animation no-select">{siteText[language].title}</h1>

      <CoolButton text={siteText[language].welcome} onClick={scrollToDiv}/>

      {/* <DisplayHomeImg/> */}
      <div id="caro">
          </div>
          </div>
      {/* END OF TOP DIV */}
    
    {/* THE MIDDLE DIV */}
        <div id="middle-page">
          <div id="middle-left">
           <h4 className="scroll-animation no-select">{siteText[language].visitService}</h4>
           <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"/>
    </svg>  1530 4th Ave Folsom, PA 19033</p>
           <h4 className="scroll-animation no-select">{siteText[language].serviceHours}</h4>
           <ul>
            <li>{siteText[language].sundayService}</li>
            <li>{siteText[language].wednesdayPrayer}</li>
            <li>{siteText[language].saturdayBibleStudy}</li>
           </ul>
           <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d97953.76532369152!2d-75.40154809584824!3d39.895397142499334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89c6c28b142423f9%3A0xa6e57e023c0a6858!2s1530%204th%20Ave%2C%20Folsom%2C%20PA%2019033!3m2!1d39.8954263!2d-75.3191472!5e0!3m2!1sen!2sus!4v1724508630866!5m2!1sen!2sus" width="400" height="250" style={{border:"0;"}} id="googlemap" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
          </div>
          <div id="middle-middle">
          
          <div id="socialdiv">
          <h4 id="connect-header-title" className="scroll-animation no-select">{siteText[language].connectWithUs} <svg id="sample-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
    </svg></h4>
           <SocialIcon url="https://www.youtube.com/PastorRobertoC" class="social" target="_blank"/>
          <SocialIcon url="https://www.facebook.com/IglesiaVozdeDiosPA/" class="social" target="_blank"/>
          <SocialIcon url="https://www.tiktok.com/@iglesiavozdedios?is_from_webapp=1&sender_device=pc" class="social" target="_blank"/>
          <SocialIcon url="https://www.instagram.com/folsomvozdedios/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" class="social" target="_blank"/>
          </div>
          
          <Container className="mt-3" id="carousel-container-id">
          <CarouselFadeExample />
          </Container>
    
          </div>
          </div>
    {/* END OF MIDDLE DIV */}
    
    
    {/* THE BOTTOM DIV */}
        <div id="bottom-page">
         <div id="bottom-left-div">
          <h2 id="youtube-title" className="scroll-animation no-select">{siteText[language].missedService}</h2>
          <h6 id="sub-head-title-for-vid" className="no-select">{siteText[language].dailyUploads}</h6>
         <iframe width="616" height="347" src="https://www.youtube.com/embed/4xHyDIDQaN4?si=hcJGJXEsTjS2UoU_&autoplay=1&mute=1" id="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <Dropdown setTopic={setTopic} language={language}/>
         </div>
    
         <div>

          <h2 id="calendar-title" className="scroll-animation no-select">{siteText[language].ourEvents}</h2>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=cm9jYjc3N0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%237986CB" style={{border:"solid 1px #777"}} width="450" height="350" frameborder="0" scrolling="no" id="googleapi"></iframe>
          {/* <iframe src="https://calendar.google.com/calendar/embed?src=rocb777%40gmail.com&ctz=America%2FNew_York" style={{border:"solid 1px #777"}} width="450" id="googleapi" height="350" frameborder="0" scrolling="no"></iframe> */}
          <h6 id="notification-caption" className="no-select">{siteText[language].subscribeCaption}</h6>
          <button className="subscribeButton" onClick={askCalendarSubscription}>{bellIcon} {siteText[language].subscribeButton}</button>
          </div>

          </div>
    {/* END OF BOTTOM DIV */}
    
          </div>
          <footer id="thefooter">
            <p id="footerfont" className="no-select">{siteText[language].footer}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
    </svg>
    <br></br>
    <br></br>
    
            <div id="footerid">
            {/* <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
    </svg> 484.213.1946</p> */}
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
      <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
      <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
    </svg> iglesiavozdedios@gmail.com</p>
    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
      <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
      <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
    </svg> 1530 4th Ave Folsom, PA 19033</p></div>
    <br>
    </br>
            <p>{siteText[language].rights}</p>
            </footer>
      </>
    );
}

export default DisplayHomePage;