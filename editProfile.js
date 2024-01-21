const editProfile = () => {
    // Get values from the form
    const username = document.getElementById("username_edit").value;
    const first_name = document.getElementById("first_name_edit").value;
    const last_name = document.getElementById("last_name_edit").value;
  
    // Create an object with the updated profile information
    const userInfo = {
      username,
      first_name,
      last_name,
    };
  
    // Save the updated profile in local storage
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  
    // Optionally, you can also update the variables used for display immediately
    const storedInfoString = localStorage.getItem("userInfo");
    const storedInfo = JSON.parse(storedInfoString);
  
    // Display the updated values in the form fields
    document.getElementById("username_edit").value = storedInfo.username;
    document.getElementById("first_name_edit").value = storedInfo.first_name;
    document.getElementById("last_name_edit").value = storedInfo.last_name;
  };
  
  // Fetch stored info and populate the form on page load
  const addInfoProfileEdit = () => {
    const storedInfoString = localStorage.getItem("userInfo");
  
    if (storedInfoString) {
      const storedInfo = JSON.parse(storedInfoString);
      
      // Display the stored values in the form fields
      document.getElementById("username_edit").value = storedInfo.username;
      document.getElementById("first_name_edit").value = storedInfo.first_name;
      document.getElementById("last_name_edit").value = storedInfo.last_name;
    }
  };
  
  // Call addInfoProfileEdit to populate the form on page load
  addInfoProfileEdit();
  