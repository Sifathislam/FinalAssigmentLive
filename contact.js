const getValue = (id) => {
    const value = document.getElementById(id).value;
    return value;
  };
  
const handleContactus = (event) => {
    event.preventDefault();
    const name = getValue("name");
    const email = getValue("email");
    const body  = getValue("message");
    console.log(name, email, body);
    if ((name, email, body)) {
      fetch("https://sifatislamprotfolioapi.onrender.com/contact/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, body }),
      })
        .then((res) => res.json())
        .then((data) => {console.log(data);});
    }
  };