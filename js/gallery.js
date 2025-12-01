 $(document).ready(function() {
 
$('#thumbs img').hover(
  function() {
    $(this).css({
      'border': '2px solid #008000',
      'box-shadow': '0 0 10px rgba(0, 128, 0, 0.5)'
    });
  },
  function() {
    $(this).css({
      'border': '',
      'box-shadow': ''
    });
  }
);

$('#gallery img').each(function() {
		// get the src attribute of the thumbnail image
		var imgFile = $(this).attr('src');
		// when the image is clicked, assign the src attribute to the lgPic
		$(this).click(function() {
			$('#lgPic').attr('src', imgFile);
		});// end click
	}); 

$('#lgPic').click(function() {
  var src = $(this).attr('src');
  window.open(src, '_blank');
});
 });