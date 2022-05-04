import React, { Component } from 'react';

export default class Form extends Component {

  state = {
    
  }

  render() {
    return (
      <div className="form-div">
        <div className="form-container">
          <label> Book your appoitment below!</label>
          <form className="main-form">
            {/* Single item */}
            <div className="singleItem">
              <label htmlFor="name"> Name</label>
              <input
                type="text"
                className="name"
                name="name"
                placeholder="Your name..."
              ></input>
              {/* end of  item */}
            </div>
            <div className="singleItem">
              <label htmlFor="lastname"> Last Name </label>
              <input
                type="text"
                className="lastname"
                name="lastname"
                placeholder="Your lastname..."
              ></input>
              {/* end of  item */}
            </div>
            <div className="singleItem">
              <label htmlFor="email"> Email</label>
              <input
                type="text"
                className="email"
                name="email"
                placeholder="Your email..."
              ></input>
              {/* end of  item */}
            </div>

            <div className="textArea ">
              <label htmlFor="message"> Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Enter the service you want, and time of 
          appoitment"
              ></textarea>
            </div>

            <div className="msg">Message has been sent! </div>
            <div className="btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
