/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

function Home() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Coming Soon</h1>
        <p>In the meantime visit our <a href="https://www.facebook.com/seedsofcreativitycommunity/">Facebook page</a></p>
      </div>
    </div>
  );
}

export default withStyles(Home, s);
