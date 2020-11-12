import React from 'react';
import { Link ,withRouter} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import footerLogo from '../../images/TurkishLawBlog-Logo-8.png';


function Dashboard() {

  return (
    <div className='header-menu-div'>
      <Navbar collapseOnSelect className='header-navbar-inclusive'>
        {/* <Navbar.Brand href='#home'> */}
        <Link to='/' key='home'>
          <img alt='logo' className='header-logo' src={footerLogo} />
        </Link>

        {/* </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Navbar.Text className='header-navbar'>
            <Nav className='social-box'>
              <a href='https://www.linkedin.com/company/turkishlawblog/' alt='linkedin' target='_blank'>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href='https://twitter.com/TurkishLawBlog' alt='linkedin' target='_blank'>
                <i className="fab fa-twitter"></i>
              </a>
            </Nav>

          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>


    </div>
  );
}

export default withRouter(Dashboard);
