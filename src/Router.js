/* eslint-disable global-require */
import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import ChangePassword from './components/ChangePassword';
import Category from './components/Category';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Search from './components/Search';
import Cart from './components/Cart';
import Order from './components/Order';
import OrderDetail from './components/OrderDetail';
import Help from './components/Help';
import TabIcon from './components/TabIcon';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }}>
      <Scene key="root">
        <Scene key="auth" type={ActionConst.RESET} initial>
          <Scene key="login" component={LoginForm} hideNavBar title="Please Login" />
        </Scene>
        <Scene
          key="main"
          tabs
          tabBarPosition="bottom"
          type={ActionConst.RESET}
          activeBackgroundColor="white"
          inactiveBackgroundColor="white"
          activeTintColor="#32CD32"
          inactiveTintColor="#808080"
          showLabel={false}
          swipeEnabled={false}
        >
          <Scene
            key="home"
            title="Horeca"
            component={Home}
            icon={TabIcon}
            tabBarLabel="Home"
            onRight={() => Actions.cart()}
            rightButtonImage={require('./image/cart.png')}
            initial
          />
          <Scene
            key="order"
            title="My Orders"
            component={Order}
            icon={TabIcon}
            tabBarLabel="Orders"
          />
          <Scene
            key="help"
            title="Help"
            component={Help}
            icon={TabIcon}
            tabBarLabel="Help"
          />
          <Scene
            key="profile"
            title="Profile"
            component={Profile}
            icon={TabIcon}
            tabBarLabel="Profile"
          />
        </Scene>
        <Scene key="changePassword" component={ChangePassword} title="Change Password" />
        <Scene key="category" component={Category} title="Category" />
        <Scene
          key="productList"
          component={ProductList}
          title="Products"
          onRight={() => Actions.cart()}
          rightButtonImage={require('./image/cart.png')}
        />
        <Scene key="search" component={Search} title="Search" />
        <Scene
          key="cart"
          component={Cart}
          title="Your Cart"
          leftButtonImage={require('./image/cart.png')}
        />
        <Scene key="orderDetail" component={OrderDetail} title="Order Detail" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
