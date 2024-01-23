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
        <h2><img src="Profile.png" class="blog-image-design"> ${single_data.Publisher_name} · November 20, 2023</h2>
        <p>${(single_data.body).slice(0, 440)}.....</p>
        <button onclick="ShowFullBlog(${single_data.id})" class="blog_read">Read more</button> 
        `;
        parent.appendChild(div);
    });

  };


  const ShowFullBlog = (id) =>{
  console.log(id);
    fetch(`https://sifatislamprotfolioapi.onrender.com/blog/list/${id}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }
  loadblog()