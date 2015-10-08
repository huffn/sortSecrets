(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  
  app.sendMyMessage = function(evt, detail, sender) {
    var text = app.$.input;
    if(!text.value){
      return false;
    }
    var prof = app.profileData;
    var picture = prof.user.picture.thumbnail;
    var username = prof.user.username;

    app.$.chatlist.$.base.add({
      message: text.value,
      thumbnail: picture,
      username: username
    });
    text.value = null;
    
    setTimeout(function () {
      var chats = document.querySelectorAll('.huff-chat-list.bubble');
      chats[chats.length-1].scrollIntoView();
    }, 10);
  }
  
  app.transformProfile = function(evt, detail){
    app.profileData = detail.xhr.response.results[0];
  }

})(document);
