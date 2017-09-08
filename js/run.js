$(document).ready(function() {

  
    // 1. blur cover-image on page load
    var divs = $('.cover_img');

    divs.each(function() {
      var elem = $(this);
      var imgSrc = elem.attr('data-image-large');

      if (imgSrc) {
        var img = new Image();
        $(img).load(function() {

          console.log(elem.css('backgroundImage'));

          elem.css('backgroundImage', 'url(' + imgSrc + ')');
          elem.addClass('hide-blur');
        });

        img.src = imgSrc;
      }



      // 2. run slider in the model  
      baguetteBox.run(".gallery");


      // 3. hide arrow
      function func_show() {
        $(".arrow").removeClass("hidden");
      }
      setTimeout(func_show, 4000)
    	});


  	

    	 // 4. testing smooth scroll
    	 $(".smooth-scroll").click(function() {
        
        var href = $(this).attr('href');
          
          $('.parallax').animate({
              scrollTop: $(href).offset().top
          }, 2500);
      });


  



});

// $("span.zoom").zoom();
