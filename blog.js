const loadblog = () => {
  fetch("https://sifatislamprotfolioapi.onrender.com/blog/list/")
    .then((res) => res.json())
    .then((data) => displayBlog(data))
    .catch((err) => console.log(err));
};

const displayBlog = (data) => {
  data.forEach((single_data) => {
    const parent = document.getElementById("blog-container");
    const div = document.createElement("div");
    div.classList.add("blog-text");

    div.innerHTML = `
        <h1>Title: ${single_data.Title}</h1>
        <h2><img src="Profile.png" class="blog-image-design"> ${single_data.Publisher_name} · November 20, 2023</h2>
        <p>${single_data.body.slice(0, 440)}.....</p>
        <button onclick="showFullBlog(${single_data.id})" class="blog_read">Read more</button> 
        `;
    parent.appendChild(div);
  });
};

const showFullBlog = (id) => {
  // Redirect to singleblog.html with the blog ID as a query parameter
  window.location.href = `singleblog.html?id=${id}`;
};

const displaySingleBlog = (single_data) => {
  const parent = document.getElementById("single-blog-container");
  const div = document.createElement("div");
  div.classList.add("blog-text-single");

  div.innerHTML = `
    <h1>Title: ${single_data.Title}</h1>
    <h2><img src="Profile.png" class="blog-image-design"> ${single_data.Publisher_name} · November 20, 2023</h2>
    <p>${single_data.body}</p>
    `;
  parent.appendChild(div);
};

const loadSingleBlog = () => {
  // Get the blog ID from the query parameter in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");

  if (blogId) {
    fetch(`https://sifatislamprotfolioapi.onrender.com/blog/list/${blogId}/`)
      .then((res) => res.json())
      .then((data) => displaySingleBlog(data))
      .catch((err) => console.log(err));
  } else {
    console.error("Blog ID not found in the URL.");
  }
};

loadblog();
loadSingleBlog();
