const getProjectIdFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  };
  
  // Function to fetch and display a single project
  const displaySingleProject = (projectId) => {
    fetch(`https://sifatislamprotfolioapi.onrender.com/project/list/${projectId}/`)
      .then((res) => res.json())
      .then((data) => {displayData(data)})
      .catch((err) => console.log(err));
  };
  
  // Load and display the single project on page load
  document.addEventListener("DOMContentLoaded", () => {
    const projectId = getProjectIdFromURL();
    displaySingleProject(projectId);
  });
  const displayData = (data) => {
    console.log(data);
    document.getElementById("title").innerHTML=`Title: ${data.Project_Title}`
    document.getElementById("Description").innerHTML=`Description: ${data.Despcription}`
    document.getElementById("Project_Url").innerHTML=`Title: ${data.Project_Url}`
    document.getElementById("techstack").innerHTML=`<p class="tech-stack">Tech stack: ${data.tech_stack.map(element => `<span>${element.name}</span>`).join(', ')}</p>`
                  
    const parent = document.getElementById("image_of_single-project");
    const div = document.createElement('div');
    div.classList.add("carousel-image");

    data.images.forEach(element => {
        const img = document.createElement('img');
        img.src = element.image;
        img.classList.add("d-block");
        img.alt = "...";
        div.appendChild(img);
    });

    parent.appendChild(div);
    showRatingsAvagrage(data.id)
};


const showRatingsAvagrage = (id) => {
  fetch(`https://sifatislamprotfolioapi.onrender.com/project/Project-Review/`)
      .then((res) => res.json())
      .then((data) => {
          const projectRatings = data.filter(rating => rating.Project === id);
          const averageRating = calculateAverageRating(projectRatings);
          document.getElementById('avarageratings').innerHTML=`Avarage Ratings: ${averageRating}`
      })
      .catch((err) => console.log(err));
};

const calculateAverageRating = (ratings) => {
  if (ratings.length === 0) {
      return 0; 
  }
  const starValues = {
      '★': 1,
      '★★': 2,
      '★★★': 3,
      '★★★★': 4,
      '★★★★★': 5,
      '★★★★★★': 6,
      '★★★★★★★': 7,
  };

  const numericRatings = ratings.map(rating => starValues[rating.rating]);

  const averageRating = numericRatings.reduce((sum, rating) => sum + rating, 0) / ratings.length;

  return averageRating;
};


function submitRating() {
  const Project = getProjectIdFromURL();
  const rating = document.getElementById('rating').value;
  const name = document.getElementById('Ratingname').value;
  // const formData = new FormData(form);
  const info = {
    name,
    rating,
    Project,
  }; 
  fetch("https://sifatislamprotfolioapi.onrender.com/project/Project-Review/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(info),
  }) 
}