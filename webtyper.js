(function($){


  $.fn.webtyper = function(speed) {
    
    // set up containers

    var contentArrays = [];

    this.each(function(elem){
      var $elem = $(elem)
      contentArrays.push( $elem.text().split(''));

      $elem.text('');
    });

    function startTyping(self){
      var textIndex    = 0;
      var contentIndex = 0;

      var done = false; // so we know when to stop

      inc = function(){
         var $elem = $(self[contentIndex]);

         if(!done){
           $elem.text( $elem.text() + contentArrays[contentIndex][textIndex]);

           textIndex++;
         }

         if( (contentIndex < contentArrays.length) && (textIndex >= contentArrays[contentIndex].length) ){
           textIndex  = 0;
           contentIndex++; 
         }

        if( contentIndex >= contentArrays.length ){
          contentIndex = 0;
          done = true;
        }
      }

      setInterval(inc, speed);
    }

    startTyping();

    return this;
  };


})(jQuery);
