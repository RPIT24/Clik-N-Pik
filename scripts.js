document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
  
    // Sample product data in JSON format
    const products = [
      {
        name: "BASKETBALL",
        price:  350,
        description: " Basketball is a game played between two teams of five players each on a rectangular court, usually indoors.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
      },
      {
        name: "VOLLEYBALL",
        price: 200,
        description: "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball ",
        image: "https://mikasasports.co.jp/e/wp-content/uploads/2018/11/V200W-900x900.png"
      },
      {
        name: "BADMINTON RACKET",
        price: 300,
        description: "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams",
        image: "https://chrissports.com/cdn/shop/products/Babolat_I-Pulse_Essential_Badminton_Racket_800x.png?v=1672801687"
      },
      {
        name: "Shuttlecock",
        price: 300,
        description: "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams",
        image: "https://www.sportshouse.ph/cdn/shop/products/UltramaxDS1063_1024x1024@2x.jpg?v=1628903355"
      }
    ];
  
    // Function to render products
    function renderProducts() {
      productList.innerHTML = ''; // Clear existing content
  
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
  
        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;
  
        const name = document.createElement('h2');
        name.textContent = product.name;
  
        const price = document.createElement('p');
        price.textContent = `₱${product.price}`; // Displaying price in PHP
        price.classList.add('price');
  
        const description = document.createElement('p');
        description.textContent = product.description;
        description.classList.add('description');
  
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.classList.add('button');
        addButton.addEventListener('click', function() {
          addToCart(product);
        });
  
        productDiv.appendChild(image);
        productDiv.appendChild(name);
        productDiv.appendChild(price);
        productDiv.appendChild(description);
        productDiv.appendChild(addButton);
  
        productList.appendChild(productDiv);
      });
    }
  
    // Function to handle adding product to cart
    function addToCart(product) {
      // Here you can implement the logic to add the product to the cart
      console.log(`Added ${product.name} to cart.`);
    }
  
    // Call renderProducts initially to display products
    renderProducts();
  });
  
