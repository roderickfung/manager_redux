// This file is used to descript all the possible scenes that the users will navigate to

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return(
    <Router sceneStyle={{ paddingTop: 65 }} >
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Sign In' initial />
          </Scene>
      <Scene key='employeeList' component={EmployeeList} title='Employees' />
    </Router>
  );
};

export default RouterComponent;
