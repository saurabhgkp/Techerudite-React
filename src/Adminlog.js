import React,{useState} from 'react'
import axios from "axios";


const Adminlog = () => {
  const [fromData, setFromData] = useState({
    email: "",
    password:"",
  })
  const handelChange = (e) => {
    // e.preventDefault();
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };
  const handelonSubmit = async (e) => {
    const response = await axios.post(
      "http://localhost:8080/user/Adminlogin",
      fromData
    );

    if(response.status==200){
   
console.log("dgfffgh");
     
    //  navigate("/");
    }
  }

console.log(fromData);
  return (
    <>  <div class="container">
    <h2>Admin LogIn</h2>
    <form >
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" class="form-control"  onChange={handelChange} name="email"/>
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control"  onChange={handelChange}  name="password"/>
      </div>
     
      <button type="submit" class="btn btn-default"  onClick={handelonSubmit}>Submit</button>
    </form>
  </div></>
  )
}

export default Adminlog