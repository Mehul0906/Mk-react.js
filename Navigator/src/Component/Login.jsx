import axios from 'axios'
import React, { useState } from 'react'
import Swal from "sweetalert2"


const Login = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const isFormValid=()=>{
    return email == "eve.holt@reqres.in";
  }

  const handleclick=(e)=>{
    e.preventDefault()
    let userdata={
      email,
      password
    }

    axios.post("https://reqres.in/api/login",userdata)
    .then((res)=>{
    let tokenfromrequre = res.data.token
    localStorage.setItem("token",tokenfromrequre)
    })
    .catch((err)=>console.log(err))

    Swal.fire({
      title: "Account its done✔️",
      text: "Your Account is Login",
      icon: "success"
    }).then(function () {
      window.location.href = "/product"
    })
  }

  const Logout=()=>{
    localStorage.removeItem("token")
    Swal.fire({
      title: "Account logged out",
      text: "Your account has been logged out",
      icon: "success"
    }).then(function () {
      window.location.href = "/login"
    })
  }

  return (
    <div className='head'>
      <form action="" style={{border:"1px solid black",borderRadius:"10px",height:"450px",width:"380px",margin:"6% auto"}}><br />
      <h1>Login Form</h1><br /><br /><br />
      <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Please Enter Your Email' style={{padding:"10px 22px",borderRadius:"5px",border:"1px solid grey"}} required/><br /><br />
      <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='Please Enter Your Password' style={{padding:"10px 22px",borderRadius:"5px",border:"1px solid grey"}} required/><br /><br /><br />
      <button disabled={!isFormValid()} onClick={handleclick} style={{margin:"10px"}}>
  <span class="shadow"></span>
  <span class="edge"></span>
  <span class="front text"> Submit
  </span>
</button>
<button onClick={Logout}>
  <span class="shadow"></span>
  <span class="edge"></span>
  <span class="front text"> Log out
  </span>
</button>
    </form>
    </div>
  )
}
export default Login







