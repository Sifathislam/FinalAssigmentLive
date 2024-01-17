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
        div.classList.add("image-techStack")

        div.innerHTML=` 
        <img src="${single_data.image_skill}" alt="">
        <p class="text-center text-secondary pb-0 mb-0">${single_data.name}</p>
        <p class="text-center text-secondary">${single_data.Prficiency_levels}</p>
        `;
        parent.appendChild(div);
    });

  };


const loadCategory = () => {
    fetch("https://sifatislamprotfolioapi.onrender.com/skills/list/")
      .then((res) => res.json())
      .then((data) => displayCategory(data))
      .catch((err) => console.log(err));
  };


const displayCategory = (data) =>{

  data.forEach((single_data) =>{
      const parent = document.getElementById("categorydiv")
      const ul = document.createElement("ul")
      ul.classList.add("barnd_name_ul")
      ul.innerHTML=` 
      <li class="barnd_name_li">
          <a onclick="FilterCateogry(${single_data.id})" class ="text-decoration-none text-dark barnd_name_a">${single_data.name}</a>
      </li>
      `;
      parent.appendChild(ul);
  });

};

const FilterCateogry = (id) => {
  fetch(`https://sifatislamprotfolioapi.onrender.com/project/list/?category_id=${id}`)
    .then((res) => res.json())
    .then((data) => displayProject(data.results))
    .catch((err) => console.log(err));
};



const showUserImage = () =>{
      fetch("https://sifatislamprotfolioapi.onrender.com/skills/list/")
      .then((res) => res.json())
      .then((data) => ShowImageUser(data))
      .catch((err) => console.log(err));
}

function resumeDownLoad() {
  // API link for the PDF file
  const apiLink = "http://sifatislamprotfolioapi.onrender.com/media/Skills/resumes/Free-Web-Developer-resume-template-1.pdf";

  const downloadLink = document.createElement("a");
  downloadLink.style.display = "none";

  downloadLink.href = apiLink;

  downloadLink.download = "resume.pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
}


const loadProject = () => {
  fetch("https://sifatislamprotfolioapi.onrender.com/project/list/")
    .then((res) => res.json())
    .then((data) => displayProject(data.results))
    .catch((err) => console.log(err));
};


const displayProject = (data) =>{
  if(data.length == 0){
    document.getElementById("ProjectShow").innerHTML = ""
    document.getElementById("no-content-image").style="display:block"
  }else{
    document.getElementById("no-content-image").style="display:none"
    document.getElementById("ProjectShow").innerHTML = ""
    data.forEach((single_data) =>{
      const parent = document.getElementById("ProjectShow")
      const div = document.createElement("div")
      div.innerHTML=` 
      <a onclick="SingleProject(${single_data.id})" class="text-decoration-none">
      <div class="card Card-Design">
      <img src="${single_data.images[0].image}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${single_data.Project_Title}</h5>
      <p class="card-text">${(single_data.Despcription).slice(0, 190)}</p>
                  <p class="tech-stack">Tech stack: ${single_data.tech_stack.map(element => `<span>${element.name}</span>`).join(', ')}</p>
                  <div class="link_project">
                 <a href="${single_data.Project_Url}" target='_blank' class="Project-card-link ms-3 me-5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                 <path d="M11.2867 8.7133C10.6041 8.031 9.67846 7.64771 8.71334 7.64771C7.74821 7.64771 6.82259 8.031 6.14 8.7133L3.56584 11.2866C2.88324 11.9692 2.49976 12.895 2.49976 13.8604C2.49976 14.8257 2.88324 15.7515 3.56584 16.4341C4.24844 17.1167 5.17424 17.5002 6.13959 17.5002C7.10493 17.5002 8.03074 17.1167 8.71334 16.4341L10 15.1475" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M8.71332 11.2867C9.39591 11.969 10.3215 12.3523 11.2867 12.3523C12.2518 12.3523 13.1774 11.969 13.86 11.2867L16.4342 8.71334C17.1168 8.03074 17.5002 7.10493 17.5002 6.13959C17.5002 5.17424 17.1168 4.24844 16.4342 3.56584C15.7516 2.88324 14.8257 2.49976 13.8604 2.49976C12.8951 2.49976 11.9693 2.88324 11.2867 3.56584L9.99998 4.8525" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg> Live Preview</a>
                 <a href="#" class="Project-card-link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                 <g clip-path="url(#clip0_10_90)">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z" fill="black"/>
                 </g>
                 <defs>
                 <clipPath id="clip0_10_90">
                     <rect width="20" height="20" fill="white"/>
                     </clipPath>
                     </defs>
               </svg> Github</a>
               </div>
               </div>
              </div>
                </a>
      `;
      parent.appendChild(div);
    });
  }
  
};


const SingleProject = (id) => {
  window.location.href = `singleproject.html?id=${id}`;
};

function uploadImage() {
  const profile_image = document.getElementById('image-file');
  const info = {
    profile_image
  }; 
  fetch("https://sifatislamprotfolioapi.onrender.com/user/images/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(info),
  }) .then((res) => res.json())
    .then((data) => console.log(data));
    
}


  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id");
  console.log(token, user_id);
  if(token && user_id){
              document.getElementById("login").style.display = 'none';
              document.getElementById("register").style.display = 'none';
              document.getElementById("profile-dropdown").style.display = 'block';
  }
  else{
    document.getElementById("login").style.display = 'block';
    document.getElementById("register").style.display = 'block';
    document.getElementById("profile-dropdown").style.display = 'none';
  }
loadTechStack()
loadCategory()
loadProject()
loadprofileimage()