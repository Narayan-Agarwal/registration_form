import './App.css';
import React,{useState} from 'react';
function App() {
  

  const data={name:"",email:"", password:""};
  const [inputdata, setinputdata]= useState(data)
  const [showPassword, setShowPassword] = useState(false);
  function handledata(e){
    setinputdata({...inputdata,[e.target.name]:e.target.value})
    console.log(inputdata)
  }
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  function validatepassword(password)
      {
        const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]){8,}$/;
        return regex.test(String(password).toLowerCase());
      }
  function handlesubmit(e) {
    e.preventDefault();
    if (!inputdata.name || !inputdata.email || !inputdata.password) {
      alert("All fields are required!!");
      return;
    }
    if (!validateEmail(inputdata.email)) {
      alert("Invalid email format!");
      return;
    }
    if (inputdata.password.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }
    else{
      if(!validatepassword(inputdata.password))
      {
        alert("password requirement not met");
        return;
      }
    }
    
    window.location.href = 'https://enigmavssut.com/';
  }

  return (
    <body>
    <form class="container1" onSubmit={handlesubmit}>
      <div class="header">
        <h1>REGISTRATION FORM</h1>
      </div>
      <div>
        <input type="text" placeholder="Enter your name" name="name" value={inputdata.name} onChange={handledata}>
        </input>

      </div>
      <div>
        <input type="text" placeholder="Enter your email" name="email" value={inputdata.email} onChange={handledata}>
        </input>
        
      </div>
      <div>
        <input type="text" placeholder="Enter your password" name="password" value={inputdata.password} onChange={handledata}>
        </input>
        
      </div>
      <div>
      <label>
        <input class="password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={inputdata.password}
          onChange={handledata}
        />
        <br></br>
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
      </label>
      <br></br>
      <p>On successful registration, it will redirect you to the official website of Team Enigma, VSSUT, BURLA</p>
        <button class="sunmit" type="submit">Submit</button>
      </div>
    </form>
   
</body>
  );
}

export default App;
