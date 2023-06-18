window.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      product.style.animationDelay = i * 2 + "s";
    }
  });
  