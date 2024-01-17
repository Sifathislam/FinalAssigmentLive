const handleRegistration = (event) => {
    event.preventDefault();
    const username = getValue("username");
    const first_name = getValue("first_name");
    const last_name = getValue("last_name");
    const email = getValue("email");
    const password = getValue("password");
    const confirm_password = getValue("confirm_password");
    const info = {
      username,
      first_name,
      last_name,
      email,
      password,
      confirm_password,
    };
    console.log(info);
    if (password === confirm_password) {
      document.getElementById("error").innerText = "";
      console.log(password); 
      if (true) 
      {
        console.log(info);
  
        fetch("https://sifatislamprotfolioapi.onrender.com/user/register/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
          document.getElementById("error").innerText =
          "Check Your Email to Confirm the registation";
      } else {
        document.getElementById("error").innerText =
          "Password must contain eight characters, at least one letter, one number and one special character:";
      }
    } else {
      document.getElementById("error").innerText =
        "Password and confirm password do not match";
      alert("Password and confirm password do not match");
    }
  };
  
  const getValue = (id) => {
    const value = document.getElementById(id).value;
    return value;
  };
  

const handleLogin = (event) => {
    event.preventDefault();
    const username = getValue("login-username");
    const password = getValue("login-password");
    if ((username, password)) {
      fetch("https://sifatislamprotfolioapi.onrender.com/user/login/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
        .then((res) => res.json())
        .then((data) => {
  
          if (data.token && data.user_id) {
            console.log(data.token);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_id", data.user_id);
            window.location.href = "index.html";
          
          }
        });
    }
  };

