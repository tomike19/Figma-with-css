import React from 'react';
import {Switch,Route} from 'react-router-dom'
import aboutPage from './Components/AboutPage'
import DetailPage from './Components/DetailPage'
import QuestionsPage from './Components/QuestionsPage'



function Routes(){
  return (
 <Switch>
   <Route exact path= "/" component ={aboutPage} />
   <Route exact path= "/DetailPage" component ={DetailPage} />
   <Route exact path= "/QuestionsPage" component ={QuestionsPage} />
 </Switch>
  )
  
}

export default Routes