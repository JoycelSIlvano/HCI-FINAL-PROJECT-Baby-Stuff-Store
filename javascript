$(document).ready(function () {
      // Add smooth scrolling to all links
      $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            800,
            function () {
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            }
          );
        } // End if
      });
    });
    // Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalAmount = document.getElementById('total');
let cartTotal = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(e) {
  const product = e.target.parentNode;
  const productName = product.querySelector('h3').textContent;
  const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
  
  const cartItem = document.createElement('li');
  cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
  cartItemsList.appendChild(cartItem);
  
  cartTotal += productPrice;
  totalAmount.textContent = `Total: $${cartTotal.toFixed(2)}`;
}
