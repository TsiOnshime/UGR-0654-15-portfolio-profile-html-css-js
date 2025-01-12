const toggleButton = document.getElementById("toggleButton");
const menuList = document.getElementById("menuList");


toggleButton.addEventListener("click", () => {
  
  if (menuList.style.display === "block") {
    menuList.style.display = "none"; 
  } else {
    menuList.style.display = "block"; 
  }
});
