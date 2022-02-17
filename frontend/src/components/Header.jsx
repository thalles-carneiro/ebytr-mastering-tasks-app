import React from 'react';

import { defaultUser } from '../tests/mocks';

const Header = () => (
  <header>
    <h1>Mastering Tasks</h1>
    <span>{ defaultUser.name }</span>
  </header>
);

export default Header;
