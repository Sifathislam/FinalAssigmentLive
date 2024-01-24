const loadTechStack = () => {
    fetch("https://sifatislamprotfolioapi.onrender.com/skills/list/")
      .then((res) => res.json())
      .then((data) => displayTechStack(data))
      .catch((err) => console.log(err));
  };


  const displayTechStack = (data) =>{

    data.forEach((single_data) =>{
        const parent = document.getElementById("techStack-image-id")
        const div = document.createElement("div")
        div.classList.add("image-techStack-singlepage")
        div.classList.add("col-6")

        div.innerHTML=`
       <div class="text-of-techstak-singlepage">
       <p class="text-center text-secondary pb-0 mb-0">Technology Name: ${single_data.name}</p>
       <p class="text-center text-secondary">Proficiency Level: <span style="color:gold">${single_data.Prficiency_levels}</span></p>
       <p class="text-center text-secondary" style="margin-top: -16px;">
        Project Link: <a href="${single_data.project_link == null ? 'No Link Available' : single_data.project_link}" target="_blank" class="text-decoration-none text-secondary">
        ${single_data.project_link == null ? 'No Link Available' : single_data.project_link}
        </a>
     </p>
     
       </div>
       <img src="${single_data.image_skill}" alt="">
        `;
        parent.appendChild(div);
    });

  };

loadTechStack()