import React from 'react'

const Adminrg = () => {
  return (
    <>  <div class="container">
    <h2>admin registration</h2>
    <form >
    <div class="form-group">
        <label for="email">First Name:</label>
        <input type="text" class="form-control"  name="fName"/>
      </div>
      <div class="form-group">
        <label for="email">Last Name:</label>
        <input type="text" class="form-control" id="email"  name="lName"/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
      </div>
     
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div></>
  )
}

export default Adminrg