import React from 'react'
import Twitter from './img/twitter.svg'
import github from './img/github.svg'
import linkedin from './img/linkedin.svg'
import "./AboutPage.scss"

function aboutPage() {
  return (
    <div className="about-section">
          <h1 className="about-header">About Me</h1>
          <p className="about-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque laudantium veritatis magnam, dolorum debitis aperiam adipisci odio iste. Sequi saepe accusamus autem totam corporis dolore assumenda officia ratione quaeratLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque laudantium veritatis magnam, dolorum debitis aperiam adipisci odio iste. Sequi saepe accusamus autem totam corporis dolore assumenda officia ratione quaeratLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque laudantium veritatis magnam, dolorum debitis aperiam adipisci odio iste. Sequi saepe accusamus autem totam corporis dolore assumenda officia ratione quaeratLorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
      <div>
        <img src= {Twitter}alt=""/>
        <img src= {github}alt=""/>
        <img src= {linkedin}alt=""/>

      </div>
    </div>
  )
}

export default aboutPage
