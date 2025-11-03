$(document).ready(function() {
  console.log('Ready!'); // debug to verify jQuery working. load page and check the console log (F12)
  // jQuery function calls go here...
  $('#pltTitle').css('color', '#07a');


	$('.botanic').css({
  'color': 'darkgreen',
  'font-style': 'italic'
	});

	$('.col').css({
  'width': '20em',
  'padding': '1em',
  'float': 'left'
	});

// Hide all botanic names initially
  $('.botanic').hide();
  $('.imgdiv').hide();
  
  // Add click event to flower class
  $('.flower').click(function() {
    // Hide any previously displayed botanic name
    $('.botanic').hide();
    
    // Show the botanic name for the current flower only
    $(this).children('.botanic').show();
  });


  $('h1, h2').mouseover(function() {
    $(this).css('color', 'blue'); // change color to blue on mouseover
  }).mouseout(function() {
    $(this).css('color', ''); // revert to original color on mouseout
  });
  
  //images hover
  $('.pic').css('border-bottom', 'thin dashed darkgreen');
  $('.imgdiv').css('position', 'absolute');
  
  $('.pic').hover(
    function(evt) {
      // Get the title attribute and create the id for the imgdiv
      var imgDivId = '#' + $(this).attr('title');
      
      // Get the X and Y coordinates of the event
      var x = evt.pageX + 150;
      var y = evt.pageY;
      
      // Set the top and left css properties of the div to display
      $(imgDivId).css({
        'top': y + 'px',
        'left': x + 'px'
      });
      
      // Show the image
      $(imgDivId).show();
    },
    function() {
      // Get the title attribute and create the id for the imgdiv
      var imgDivIdhide = '#' + $(this).attr('title');
      
      // Hide the image div
      $(imgDivIdhide).hide();
    }
  );
  
 //everything works before this point
 
 $(document).keypress(function(evt) {
    var keyPressed = String.fromCharCode(evt.which).toLowerCase();
    window.location = '#' + keyPressed;
  });
 
 
});
