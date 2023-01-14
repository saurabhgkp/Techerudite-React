import React,{useState} from 'react'
import axios from "axios";


const Userrg = () => {
  const [fromData, setFromData] = useState({

    fName: "",
    lName:"",
    email: "",
    password:"",
    role: "user",
  })
  const handelChange = (e) => {
    // e.preventDefault();
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };
  const handelonSubmit = async (e) => {
    const response = await axios.post(
      "http://localhost:8080/user/register",
      fromData
    );

    if(response.status==200){
      // setFromData({
      //   name: "",
      //   email: "",
      //   number: "",
      //   address: "",
      //   zip: "",
      // })
console.log("dgfffgh");
     // setData({ })
    //  toast.success("ruko zara sabr karo")
    //  navigate("/");
    }
  }

console.log(fromData);
  return (
    <>  <div class="container">
    <h2>customer registration</h2>
    <form >
    <div class="form-group">
        <label for="email">First Name:</label>
        <input type="text" class="form-control"  onChange={handelChange}  name="fName"/>
      </div>
      <div class="form-group">
        <label for="email">Last Name:</label>
        <input type="text" class="form-control"  onChange={handelChange}  name="lName"/>
      </div>
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

export default Userrg