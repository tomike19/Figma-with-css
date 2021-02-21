import React from 'react'
import image1 from './img/image.svg'
import './QuestionsPage.scss'
import image3 from './img/image3.svg'






function QuestionsPage() {
  return (
    <div>
      <div className="questions-header">
      <h6>QUESTIONS FREQUENTLY ASKED BY OUR VISITORS</h6>
     <h1>FAQ</h1>
      </div>
      <div className="questions-section">
        <span>
        <img src={image1} alt=""/>
        <p>What Stocks and ETFS can i give?</p>
        <img src={image3}alt=""/>
        <p>What amount can i give you? </p>
        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.</p>
        </span>
        <span>
          <img src={image1} alt=""/>
          <p>How much does it costs?</p>
        </span>
         <span>
           <img src={image1} alt=""/>
           <p>When does my gift start flunctuating in the market</p>
         </span>
         <span>
          <img src={image1} alt=""/>
          <p>What if my recipient wants a different stock apart from the one i gave?</p>
         </span>
         <span>
          <img src={image1} alt=""/>
          <p>Is chaka a brokerage?</p>
         </span>
       

      </div>
    </div>
  )
}

export default QuestionsPage
