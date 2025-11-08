$(document).ready(function() {
  console.log('Ready!'); // debug to verify jQuery working. load page and check the console log (F12)
  // jQuery function calls go here...
    $("#newsSignup").hide();

    // hide signup form 
    $("#signuplink").click(function(event) {
        // to prevent the default link action
        event.preventDefault();

        //  slideToggle
        $("#newsSignup").slideToggle();
    });

    //hover actions
    $("#slogan").hover(
        function() {
            // On mouseover
            $(this).fadeOut('normal', 'linear', function() {
                $(this).text('Hand Picked Just for You').fadeIn('slow', 'swing');
            });
        },
        function() {
            // On mouseout
            $(this).fadeOut('fast', 'swing', function() {
                $(this).text('The Power of Flowers').fadeIn('slow', 'linear');
            });
        }
    );
	

    // Animate rose
    $("#rose").animate({
        right: '100px',
        opacity: 1
    }, 2000, 'swing');
	
	
	 $('#newsSignup').submit(function(event) {
        // Check username 
        if ($('#username').val() == '') {
            alert('Please supply a name in the Name field.');
            return false;
        }

        // Prevent the default form submission
        event.preventDefault();

        //alert message
        alert('Thank you for registering');

        // Hide the newsSignup form AGAIN
        $('#newsSignup').hide();

        // Fade the signuplink 
        $('#signuplink').fadeTo('fast', 0.3);
    });

});