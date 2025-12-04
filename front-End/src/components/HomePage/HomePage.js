import React, { useEffect, useState, useRef } from 'react';
import { SocialIcon } from 'react-social-icons'
import Container from 'react-bootstrap/Container';
import CarouselFadeExample from './carousel';
import CoolButton from './AwesomeButton';
import './App.css';
import siteText from './HomePageTEXT';
import Dropdown from './DropDownButton';
import LiveStreamBanner from './YoutubeLive/YTLive';
import { getLatestLiveStream } from './YoutubeLive/YTLatestLive';
import RightCarrotIcon from '../Icons/rightCarrot';
import ArrowRightIcon from '../Icons/arrowRight';
import CameraIcon from '../Icons/cameraIcon';
import EnvelopeAtIcon from '../Icons/mailIcon';
import BuildingIcon from '../Icons/buildingIcon';

function DisplayHomePage({ language }){

  const [topic, setTopic] = useState('');
  const [videoSrc, setVideoSrc] = useState('');
  const [uploadedDaysAgo, setUploadedDaysAgo] = useState('');

//THE NEXT 3 FUNCTIONS HERE ALLOW THE SCROLLING ANIMATION TO WORK 
  function scrollToDiv() {
    const element = document.getElementById('middle-page');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
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
      const fetchVideo = async () => {
        const { videoUrl, publishedAt } = await getLatestLiveStream();
        if (videoUrl) {
            setVideoSrc(videoUrl);
            if (publishedAt) {
                const uploadDate = new Date(publishedAt);
                const today = new Date();
                const diffTime = Math.abs(today - uploadDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                setUploadedDaysAgo(diffDays);
            }
        }
    };
    fetchVideo();
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => {window.removeEventListener('scroll', handleScroll);};
  }, []); //End of useEffect()


  return (
      <>
      <div id="wholepage">

    {/* THE TOP DIV */}
        <div id="top-page">
        <p id="custom-verse" className="scroll-animation no-select">{siteText[language].customVerse}</p>
      <h1 id="titleh1" className="scroll-animation no-select">{siteText[language].title}</h1>
      <div id="socialdiv">
          <h4 id="connect-header-title" className="scroll-animation no-select">{siteText[language].connectWithUs} <RightCarrotIcon/>
          </h4>
           <SocialIcon url="https://www.youtube.com/PastorRobertoC" class="social" target="_blank"/>
          <SocialIcon url="https://www.facebook.com/IglesiaVozdeDiosPA/" class="social" target="_blank"/>
          <SocialIcon url="https://www.tiktok.com/@iglesiavozdedios?is_from_webapp=1&sender_device=pc" class="social" target="_blank"/>
          <SocialIcon url="https://www.instagram.com/folsomvozdedios/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" class="social" target="_blank"/>
          </div>
          <br></br>
          <CoolButton text={siteText[language].welcome} onClick={scrollToDiv}/>
          <LiveStreamBanner/>
          </div>
      {/* END OF TOP DIV */}
    
    {/* THE MIDDLE DIV */}
        <div id="middle-page">
          <div id="middle-left">
           <h4 className="scroll-animation no-select">{siteText[language].visitService}</h4>
           <p><ArrowRightIcon/>  1530 4th Ave Folsom, PA 19033</p>
          <Container className="mt-3" id="carousel-container-id">
          <CarouselFadeExample />
          </Container>
          </div>

          <div id="middle-middle">
          <h4 className="scroll-animation no-select">{siteText[language].serviceHours}</h4>
           <h5 className="scroll-animation no-select">{siteText[language].serviceHoursSubCaption}</h5>
           <ul>
            <li>{siteText[language].sundayService}</li>
            <li>{siteText[language].wednesdayPrayer}</li>
            <li>{siteText[language].saturdayBibleStudy}</li>
           </ul>
          <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d97953.76532369152!2d-75.40154809584824!3d39.895397142499334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89c6c28b142423f9%3A0xa6e57e023c0a6858!2s1530%204th%20Ave%2C%20Folsom%2C%20PA%2019033!3m2!1d39.8954263!2d-75.3191472!5e0!3m2!1sen!2sus!4v1724508630866!5m2!1sen!2sus" width="400" height="250" style={{border:"0;"}} id="googlemap" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          </div>
    {/* END OF MIDDLE DIV */}
    
    {/* THE BOTTOM DIV */}
        <div id="bottom-page">
         <div id="bottom-left-div">
          <h2 id="youtube-title" className="scroll-animation no-select">{siteText[language].missedService}</h2>
          <h6
           id="sub-head-title-for-vid"
           className="no-select">
           <CameraIcon/> {siteText[language].dailyUploads} {uploadedDaysAgo} {
              uploadedDaysAgo === 1
                ? (language === "en" ? "day ago" : "día")
                : siteText[language].dailyUploadsSecondHalf
            }
          </h6>
         <iframe width="616" height="347" src={videoSrc} id="youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <Dropdown setTopic={setTopic} language={language}/>
        </div>
        
         <div> 
          <h2 id="calendar-title" className="scroll-animation no-select">{siteText[language].ourEvents}</h2>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=cm9jYjc3N0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%237986CB" style={{border:"solid 1px #777"}} width="450" height="350" frameborder="0" scrolling="no" id="googleapi"></iframe>
          </div>
          </div>
    {/* END OF BOTTOM DIV */}
    
      </div>
      <footer id="thefooter">
            <p id="footerfont" className="no-select">{siteText[language].footer}</p>
            <br></br>
            <br></br>
            <div id="footerid">
            <p><EnvelopeAtIcon/> iglesiavozdedios@gmail.com</p>
            <p><BuildingIcon/> 1530 4th Ave Folsom, PA 19033</p>
            </div>
            <br>
            </br>
            <p>{siteText[language].rights}</p>
      </footer>
      </>
  );
}

export default DisplayHomePage;