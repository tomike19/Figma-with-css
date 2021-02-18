import React from 'react';
import {Switch,Route} from 'react-router-dom'
import aboutPage from './Components/AboutPage'
import DetailPage from './Components/DetailPage'



function Routes(){
  return (
 <Switch>
   <Route exact path= "/" component ={aboutPage} />
   <Route exact path= "/DetailPage" component ={DetailPage} />
 </Switch>
  )
  
}

export default Routes