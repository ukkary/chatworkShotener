
var shortener = function(){
    var chat = document.getElementById('_chatText');
    chat.value = chat.value.replace(/^(\[To:\d+\]).*\r?\n/gm, '$1').replace(/(\[.*\])/, '$1\n');
};


shortener();
