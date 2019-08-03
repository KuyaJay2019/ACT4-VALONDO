var TRIVIA_SERVICE = {
    get : function(){
        return $.ajax({
            url : TRIVIA_API
        });
    },
}