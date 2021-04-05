import React from 'react'

export default function Contact(props) {
  return (
    <div className='contact'>
      <h1 className='title'>Get In Touch!</h1>
      <div className='columns'>
        <div className='column border'>
          {props.contact.map((el, idx) => {
            return <div key={idx}>
              <p className='title is-6'> Phone: <a href={`tel:${el.phone}`}>{el.phone}</a> </p>
              <p className='title is-6'> Email: <a href={`mailto:${el.email}`}>{el.email}</a> </p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}