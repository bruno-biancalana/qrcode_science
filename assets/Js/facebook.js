window.fbAsyncInit = function() {
    FB.init({
      appId      : '533529271802232',
      cookie     : true,
      xfbml      : true,
      version    : 'v15.0'
    });

                  FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            console.log(response.authResponse.accessToken);
          }
        });

          FB.api(
          '/me',
          'GET',
          {"fields":"id,name, email"},
          function(response) {
              console.log(response);
              const teste = document.querySelector('#teste');
              teste.innerHTML = response.name;
              teste1.innerHTML = response.id;
              teste2.innerHTML = response.email;
          }
          );
        };            
  
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));