/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// Routes to load
import home from /* webpackChunkName: 'home' */ './home';
import contact from /* webpackChunkName: 'contact' */ './contact';
import login from /* webpackChunkName: 'login' */ './login';
import register from /* webpackChunkName: 'register' */ './register';
import about from /* webpackChunkName: 'about' */ './about';
import privacy from /* webpackChunkName: 'privacy' */ './privacy';
import admin from /* webpackChunkName: 'admin' */ './admin';
import notFound from /* webpackChunkName: 'not-found' */ './not-found';

// The top-level (parent) route
const routes = {
  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '/',
      load: () => home,
    },
    {
      path: '/contact',
      load: () => contact,
    },
    {
      path: '/login',
      load: () => login,
    },
    {
      path: '/register',
      load: () => register,
    },
    {
      path: '/about',
      load: () => about,
    },
    {
      path: '/privacy',
      load: () => privacy,
    },
    {
      path: '/admin',
      load: () => admin,
    },

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    {
      path: '*',
      load: () => notFound,
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
