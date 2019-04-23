import React from 'react';

export default function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter Username"
        value={props.username} // props from parent
        onChange={props.handleChange} // props from parent
        />
    </div>
  )
}