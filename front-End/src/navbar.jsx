import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';


import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';




function GenerateNav(){

  function scrollToFooter(){
    const element = document.getElementById('thefooter');
    if (element){
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

return (
  <>
<Navbar expand="lg" className="bg-body-tertiary" class="nav" data-bs-theme="dark">
<Container>
  <Navbar.Brand href="#home">Iglesia Voz de Dios</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      {/* <Nav.Link as={Link} to="/ContactUsPage">About Us</Nav.Link> */}
      {/* <Nav.Link as={Link} to="/WhoWeAre">Who We Are</Nav.Link> */}
      <Nav.Link href="#link">Who We Are</Nav.Link>
      <Nav.Link href="#link">Mission</Nav.Link>
      <Nav.Link href="#link">Events</Nav.Link>
      <Nav.Link href="#link">Donate</Nav.Link>
      <Nav.Link href="/prayerReqPage.html">Prayer Request</Nav.Link>
      <NavDropdown title="Contact Us" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" onClick={scrollToFooter}>E-Mail</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" onClick={scrollToFooter}>
          Phone Number
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" onClick={scrollToFooter}>Address</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/contactPage.html">
          Send Message
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> 
{/* 
<BrowserRouter>
<Routes>
<Route path="/ContactUsPage" element={<DeployContactUs/>}/>
</Routes>
</BrowserRouter> */}

</>
)
};

export default GenerateNav;