/*<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
<!--<div id="fb-root"></div>-->
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v15.0&appId=533529271802232&autoLogAppEvents=1" nonce="xrvTyFhi"></script>

    <div class="fb-login-button" data-width="" data-size="medium" data-button-type="continue_with" data-layout="rounded" data-auto-logout-link="false" data-use-continue-as="true"></div>
    <script>
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
            console.log(response.name);
            console.log(response.id);
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
    </script>

    <div id="teste"></div>
    <div id="teste1"></div>
    <div id="teste2"></div>*/