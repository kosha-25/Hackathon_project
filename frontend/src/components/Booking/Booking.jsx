
import React from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
const Booking = ({tour, avgRating}) => {
  
    const {price, reviews} = tour
  
    const handleChange = e =>{};
  return (
    <div className='booking'>
     <div className='booking__top d-flex align-items-center justify-content-between'>
        <h3>${price}<span>/per person</span></h3>
        <span className='tour__rating d-flex align-items-center gap-1'>
            <i className='ri-star-s-fill'></i>
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
    </div> 
    <div className="booking__form">
        <h5>Information</h5>
        <Form className='booking__info-form'>
            <FormGroup>
                <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange}></input>
            </FormGroup>
            <FormGroup>
                <input type='number' placeholder='Phone' id='phone' required onChange={handleChange}></input>
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
                <input type='date' placeholder='' id='bookAt' required onChange={handleChange}></input>
                <input type='number' placeholder='Guest' id='guestSize' required onChange={handleChange}></input>
            </FormGroup>
        </Form>
        </div>    
    </div>
  )
}

export default Booking
