(function() {
    var delay = 3000;
    var state = 0;
    (function next() {
         state = 1 - state;
         var src = state ? '#sale' : '#steep';
         var $contents = $(src).contents().clone();
         $('#displayArea').empty().append($contents);
         setTimeout(next, delay);
    })();
 })();