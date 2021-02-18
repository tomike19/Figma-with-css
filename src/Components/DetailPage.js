import React from 'react'
import './DetailPage.scss'
import {Button} from 'react-bootstrap'
import image1 from './img/image1.jpg'

const DetailPage =()=> {
  return (
    <div className="detail_page">
        <img className="image" src={image1} alt=""/>
        <div className="detail">
         <h3 className="detail-header">An Introduction into information technology
      </h3>
      <p className="detail-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lacus tellus. Etiam nec sem nibh. Nullam pulvinar quis sapien at tincidunt. In elit quam, consectetur eget felis bibendum, egestas luctus risus. Etiam ut enim sapien. Ut dictum, mi id malesuada rhoncus, elit velit porttitor purus, sit amet lobortis elit dui libero. Praesent nec nibh quis felis faucibus molestie. Nullam vehicula purus quis dui commodo dapibus. Ut sed aliquam enim.
      </p>
      <Button className="btn">Start Learning</Button>

        </div>
     
  </div>
  )
}

export default DetailPage

