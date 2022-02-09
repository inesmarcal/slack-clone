import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './Header.css';
import AuthContext from '../context/auth-context';

function Header() {
  const authCtx = useContext(AuthContext);
  const user = authCtx.user;
  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar
          className='header__avatar'
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTimeIcon />
      </div>
      <div className='header__search'>
        <SearchIcon />
        <input type='text' placeholder='Search' />
      </div>
      <div className='header__right'>
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
