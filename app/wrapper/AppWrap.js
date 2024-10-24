'use client';

import React from 'react';
import SocialMedia from '../components/SocialMedia';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="mt-0 app__wrapper app__flex">
          <Component />
        </div>
      </div>
    );
  };

export default AppWrap;
