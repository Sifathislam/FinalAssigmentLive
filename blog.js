const loadblog = () => {
    fetch("https://sifatislamprotfolioapi.onrender.com/blog/list/")
      .then((res) => res.json())
      .then((data) => displayBLog(data))
      .catch((err) => console.log(err));
  };


  const displayBLog = (data) =>{

    data.forEach((single_data) =>{
        console.log(single_data);
        const parent = document.getElementById("blog-container")
        const div = document.createElement("div")
        div.classList.add("blog-text")

        div.innerHTML=` 
        <h1>Title: ${single_data.Title}</h1>
        <h2>Publisher Name: ${single_data.Publisher_name} </h2>
        <p>${single_data.body}</p>
        `;
        parent.appendChild(div);
    });

  };

  loadblog()