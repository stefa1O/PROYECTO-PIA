document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
function showSnacks() {
    // Implement logic to fetch and display snacks from a database or API
    alert("Fetching and displaying snacks...");
  }
  
  function addSnack() {
    document.getElementById('snack-modal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('snack-modal').style.display = 'none';
  }
  
  function addNewSnack() {
    // Implement logic to add a new snack to the database or update the UI
    alert("Adding new snack...");
    closeModal();
  }
  
  function clearSnacks() {
    // Implement logic to clear snacks from the database or update the UI
    alert("Clearing snacks...");
  }