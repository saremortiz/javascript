 $(document).ready(function() {
  console.log('Ready!'); // debug to verify jQuery working. load page and check the console log (F12)
  // jQuery function calls go here...
 var count = 0;
 // You dont actually have to use innerhtml just add a span class or this button to work
 var deleteButton = '<span class = "del"> remove </span>';
 
 

$('.add').click(function() {
// store values in a var you use the this and attr. DONT ADD # i dont know why but its not needed
  var itemName = $(this).attr('name');
  var itemID = $(this).attr('id');

//counting the it4ms 
  count++;


  if (count > 0) {
    $('#empty').hide();
  }

  // Create a new list item for the cart, you have to use the li since its an ul in the html, then justa dd all your previous variables
  var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + deleteButton;

  // Add the new item to the cart using append 
  $('#cart').append(cartLink);

  //  after this function you cant a dd again so hide it 
  $(this).hide();
});


//NESXT FUNCTUOJN starts here: To rwmove
$('#cart').on('click', '.del', function() {
	
	console.log('Remove button clicked!');
  // Remove the parent li (the cart item)
  $(this).parent().remove();
 
  count--;

  if (count === 0) {
    $('#empty').show();
  }

  // So im not even sure this one work 
  // reminding myself to  check again 
  var itemID = $(this).parent().attr('name');
  $('#' + itemID).show();
});

//RAITING 
$('.rating').on('click', 'img', function() {
  // Change the image source of all siblings of the clicked star to the staroff.gif image
  $(this).siblings().attr('src', 'staroff.gif');
  
  // Change the image source of the clicked star to the staron.gif image
  $(this).attr('src', 'staron.gif');
  
  // Change the image source of all of the previous stars to the staron.gif image
  $(this).prevAll().attr('src', 'staron.gif');
});

});