
function loadItems(){

  $( '.list-of-items' ).empty();

  for ( let i = 0; i < itemCatalog.length; i ++ ){
    $( '.list-of-items' ).append(`
      <div class="item-card" data-item-id="${ itemCatalog[i].id }" >
        <h5 class="item-title">
          ${ itemCatalog[i].name }
        </h5>
        <img class="item-image" src="${ itemCatalog[i].image }" alt="${ itemCatalog[i].name }" />
        <p class="item-price"> 
          $ ${ itemCatalog[i].price }
        </p>
        <button class="js-detail item-button">
          View details
        </button>
      </div>
    `);
  }
}

function viewDetails(){
  $( '.js-list' ).on( 'click', '.js-detail', function( event ) {
    event.preventDefault();

    let currentItemCard = $( this ).parent();
    let currentItemId = $( currentItemCard ).data( 'item-id' );

    for ( let i = 0; i < itemCatalog.length; i ++ ){
        console.log(itemCatalog[i].id);
      if ( itemCatalog[i].id === currentItemId ){
        $( '.item-preview' ).html(`
          <div class="preview-item-card" data-item-id="${ itemCatalog[i].id }" >
            <h5 class="preview-item-title">
              ${ itemCatalog[i].name }
            </h5>
            <img class="preview-item-image" src="${ itemCatalog[i].image }" alt="${ itemCatalog[i].name }" />
            <p class="preview-item-description">
              ${ itemCatalog[i].description }
            </p>
            <p class="preview-item-stock">
              In stock : ${ itemCatalog[i].quantity }
            </p>
            <p class="preview-item-price"> 
              $ ${ itemCatalog[i].price }
            </p>
            <button class="js-add-to-cart item-preview-button">
              Add to Cart
            </button>
          </div>
        `);
      }
    }
  });
}

// Completed this function 
function addToCart() {
  $('.item-preview').on('click', '.js-add-to-cart', function (event) {
      let currentItemCard = $(this).parent();
      let currentItemId = $(currentItemCard).data('item-id');
      for (let i = 0; i < itemCatalog.length; i++) {
          if(itemCatalog[i].id == currentItemId)
          {
            //   Changed .html to .append to allow site to list cart items
              $('.shopping-cart').append(`
              <div class="item-card" data-item-id="${ itemCatalog[i].id }" >
                <h5 class="item-title">
                  ${ itemCatalog[i].name }
                </h5>
                <img class="item-image" src="${ itemCatalog[i].image }" alt="${ itemCatalog[i].name }" />
                <p class="item-price"> 
                  $ ${ itemCatalog[i].price }
                </p>
                <button class="js-delete item-button">
                  Delete
                </button>
              </div>
            `);
          }
      }
  });
}

// Added this function to allow for the removal of cart items
function removeFromCart() {
    $('.shopping-cart').on('click', '.js-delete', function (event) {
        let currentItemCard = $(this).parent();
        let currentItemId = $(currentItemCard).data('item-id');
        for (let i = 0; i < itemCatalog.length; i++) {
            if (itemCatalog[i].id == currentItemId) {
                $(currentItemCard).remove();
            }
        }
    });
}

function init(){
  loadItems();
  viewDetails();
  addToCart();
  removeFromCart();
}

$( init );