import React from 'react';
import Testing_page from './Rferm_components/Testing_page';
import App from '../App';



const LoginPage = () => {
  const userCredentials = ['ADMIN']; // or 'SCC'
  const showSCC = true;
  const showPCC = false;
 

return (
  <div>
    <Testing_page credentials={userCredentials}/>
    
  </div>
);
};

export default LoginPage;