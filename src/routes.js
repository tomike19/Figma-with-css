import React from 'react';
import {Switch,Route} from 'react-router-dom'
import aboutPage from './Components/AboutPage'



function Routes(){
  return (
 <Switch>
   <Route exact path= "/" component ={aboutPage} />
 </Switch>
  )
  
}

export default Routes