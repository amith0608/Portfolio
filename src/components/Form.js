import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className=""form>
        <form>
            <label>Your Name</label>
            <input type="text"></input>

            <label>email</label>
            <input type="email"></input>

            <label>Subject</label>
            <input type="text"></input>

            <label>Your Name</label>
            <textarea rows="6" placeholder="Type your message here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form