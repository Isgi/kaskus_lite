import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './layouts/component/Home'
import Forum from './layouts/component/Forum';
import Jubel from './layouts/component/Jubel';
import NewThread from './layouts/component/NewThread';
import NewLapak from './layouts/component/NewLapak';
import Login from './layouts/component/Login';

import useBasename from 'history/lib/useBasename';


function withBasename(history,dirname) {
    return useBasename(() => history)({ basename: `/${dirname}` })
}

const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: MainLayout,
    indexRoute: { component: Home },
    childRoutes: [
      {
        path: 'forum',
        component: Forum,
      },
      {
        path: 'jubel',
        component: Jubel,
      },
      {
        path: 'newthread',
        component: NewThread,
      },
      {
        path: 'newlapak',
        component: NewLapak,
      },
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'register',
        component: Register,
      }
    ]
  } ]
}

Meteor.startup(() => {
  render((
    <Router
      history={browserHistory}
      routes={rootRoute}
    />
  ), document.getElementById('page'));
});

