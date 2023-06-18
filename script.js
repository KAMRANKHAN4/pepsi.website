window.addEventListener("load", function() {
    var loader = document.querySelector(".loader-container");
    setTimeout(function() {
      loader.style.display = "none"; // Hides the loader after 5 seconds
    }, 1500);
  });
  document.getElementById("menu-toggle").addEventListener("click", function() {
    this.classList.toggle("active");
  });
  
//   const navbarMenu = document.querySelector('.navbar-menu');
// const navbarItems = navbarMenu.querySelectorAll('li');

// navbarItems.forEach(item => {
//   item.addEventListener('click', () => {
//     navbarItems.forEach(item => item.classList.remove('active'));
//     item.classList.add('active');
//   });
// });
