import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import navText from './navbarTEXT';
import ShowToggleButton from './toggleLangButton';
import './navbar.css';


function GenerateNav( { language, setLanguage } ){

  // MY DAD SAID THIS WAS NO LONGER NECESSARY TO INCLUDE THIS INFORMATION IN NAVBAR
  // function scrollToFooter(){
  //   const element = document.getElementById('thefooter');
  //   if (element){
  //     element.scrollIntoView({behavior: 'smooth'});
  //   }
  // }

  function toggleLanguage (){
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  }


return (
  <>
<Navbar expand="lg" className="bg-body-tertiary" class="nav" data-bs-theme="dark">
<Container>
  <Navbar.Brand as={NavLink} to="/">{navText[language].main}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/">Home</Nav.Link>
      <NavDropdown title={navText[language].about} id="basic-nav-dropdown">
      <NavDropdown.Item as={NavLink} to="/about">
          {navText[language].whoWeAre}
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/mission">
          {navText[language].mission}
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/departments">
          {navText[language].departments}
        </NavDropdown.Item>
        </NavDropdown>

      {/* For now I'm leaving the events tab toggled, but it can be put back if needed.  */}
      {/* <Nav.Link href="#link">Events</Nav.Link> */}

      <Nav.Link as={NavLink} to="/livetopics">{navText[language].liveVids}</Nav.Link>
      <Nav.Link as={NavLink} to="/donate">{navText[language].donate}</Nav.Link>
      <Nav.Link as={NavLink} to="/visitors">{navText[language].visitors}</Nav.Link>
      <Nav.Link as={NavLink} to="/prayerReq">{navText[language].prayerReq}</Nav.Link>


    
      {/* Implement translation dropdown feature here: */}
      {/* I got rid of the dropdown and instead made a toggle button component to handle this logic */}
      {/* <NavDropdown title={navText[language].lang} id="language-dropdown">
                <NavDropdown.Item onClick={toggleLanguage}>
                  {language === 'en' ? 'Español' : 'English'}
                </NavDropdown.Item>
      </NavDropdown> */}



      <NavDropdown title={navText[language].contactUs} id="basic-nav-dropdown">
        {/* <NavDropdown.Item href="#action/3.1" onClick={scrollToFooter}>{navText[language].email}</NavDropdown.Item> */}
        {/* <NavDropdown.Item href="#action/3.2" onClick={scrollToFooter}>
          {navText[language].phoneNumber}
        </NavDropdown.Item> */}
        {/* <NavDropdown.Item href="#action/3.3" onClick={scrollToFooter}>{navText[language].address}</NavDropdown.Item> */}
        {/* <NavDropdown.Divider /> */}
        <NavDropdown.Item as={NavLink} to="/contact">
          {navText[language].sendMessage}
        </NavDropdown.Item>
      </NavDropdown>

      {/* <Nav.Link id="current-language-text-element">{navText[language].aOption}</Nav.Link>
<ShowToggleButton language={language} setLanguage={setLanguage} onClick={toggleLanguage}>{language === 'en' ? 'Español' : 'English'}</ShowToggleButton> */}

<Nav.Link id="current-language-text-element">
        <div style={{ display: 'flex' }}>
          <span>{navText[language].aOption}</span>
          <ShowToggleButton 
            language={language} 
            setLanguage={setLanguage} 
            onClick={toggleLanguage}
          >
            {language === 'en' ? 'Español' : 'English'}
          </ShowToggleButton>
        </div>
      </Nav.Link>

    </Nav>
  </Navbar.Collapse>

</Container>
</Navbar> 


</>
)
};

export default GenerateNav;