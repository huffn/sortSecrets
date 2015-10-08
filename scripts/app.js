(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  
  app.transformProfile = function(evt, detail){
    app.profileData = detail.xhr.response.results[0];
  }

})(document);
