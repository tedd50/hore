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

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }}>
      <Scene key="root" hideNavBar>
        <Scene key="auth" type={ActionConst.RESET} initial>
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main" type={ActionConst.RESET}>
          <Scene
            key="home"
            component={Home}
            title="Horeca" initial
            onRight={() => Actions.cart()}
            rightTitle=" Cart"
            // rightButtonImage={require('./image/cart.png')}
          />
          <Scene key="profile" component={Profile} title="Profile" />
          <Scene key="changePassword" component={ChangePassword} title="Change Password" />
          <Scene key="category" component={Category} title="Category" />
          <Scene
            key="productList"
            component={ProductList}
            title="Products"
            onRight={() => Actions.cart()}
            rightTitle=" Cart"
            // rightButtonImage={require('./image/cart.png')}
          />
          <Scene key="search" component={Search} title="Search" />
          <Scene key="cart" component={Cart} title="Your Cart" />
          <Scene key="order" component={Order} title="My Orders" />
          <Scene key="orderDetail" component={OrderDetail} title="Order Detail" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
