import React from 'react';
import './Header.css';
import { Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Header() {
  const [state] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input placeholder="Search for Artists, Songs, Potcast" type="text" s />
      </div>
      <div className="header__right">
        <Avatar src={state?.user?.images[0]?.url} alt={state?.user?.display_name} />
        <h4>{state?.user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
