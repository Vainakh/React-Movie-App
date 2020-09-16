import React from 'react';
import { Link } from '@reach/router';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import {
  StyledHeader, 
  StyledRMDBLogo, 
  StyledTMDBLogo 
} from '../styles/StyledHeader';

//Go over:
//1. Create a styled basic styled component
//2. Handling props in styled component
//3. Creating a global stylewith styled components


const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link
      to="/"> 
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo"/>
      </Link>
      
      <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo"/>
    </div>
  </StyledHeader>
);

export default Header;