import React, { cloneElement } from 'react';
import { render } from 'react-dom';
import Menu from 'uxcore/lib/Menu';
import { Router, Link, hashHistory } from 'react-router';
import Transition from 'react-addons-css-transition-group';

import homeRoute from '../pages/home';
import demoRoute from '../pages/demo';
import errorRoute from '../pages/error';

// `ReactRouter`文档请看  https://github.com/ReactTraining/react-router/tree/v2.8.1
const App = ({ children, location, routes }) => (
  <div>
    <Menu mode="horizontal" selectedKeys={[routes[routes.length - 1].title]}>
      <Menu.Item key="home">
        <Link to={'/home'} >首页</Link>
      </Menu.Item>
      <Menu.Item key="demo">
        <Link to={'/demo'} >DEMO</Link>
      </Menu.Item>
      <Menu.Item key="error">
        <Link to={`/${Math.random().toString(32).slice(2)}`} >错误页面</Link>
      </Menu.Item>
    </Menu>
    <div className="kuma-container kuma-container-1180">
      <Transition transitionName="route" transitionEnterTimeout={500} transitionLeaveTimeout={100}>
        {cloneElement(children || 'div', {
          key: location.pathname,
        })}
      </Transition>
    </div>
  </div>
);


const rootRoute = {
  childRoutes: [{
    path: '/',
    component: App,
    // 这里可以设置首页跳转的地址
    indexRoute: { onEnter: (nextState, replace) => replace('/home') },
    childRoutes: [
      // 新建页面时，请注意更新此处的路由
      homeRoute,
      demoRoute,
      // error因为是泛匹配，所以要放到下面
      // 不然会覆盖前面的
      errorRoute,
    ],
  }],
};

render((
  <Router history={hashHistory} routes={rootRoute} />
),
  document.getElementById('App'),
);