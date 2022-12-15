                                    /*FUNÇÃO PRA EXIBIR O TOKEN DE LOGIN DO USUÁRIO*/
                                    function handleCredentialResponse(response) {
                                        console.log("token:" + response.credential);
                                        /*FUNÇÃO PRA EXIBIR O TOKEN DE LOGIN DO USUÁRIO*/
    
                                        /*FUNÇÃO PARA DECODIFICAR O TOKEN JWT DO USUÁRIO*/
                                        function parseJwt (token) {
                                        var base64Url = token.split('.')[1];
                                        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                                        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                                        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                                        }).join(''));
    
                                        return JSON.parse(jsonPayload);
                                        }
                                        
    
                                        const responsePayload = parseJwt(response.credential);
                                        /*FUNÇÃO PARA DECODIFICAR O TOKEN JWT DO USUÁRIO*/
    
                                        document.querySelector("[name='firstname']").value = responsePayload.given_name;
                                        document.querySelector("[name='lastname']").value = responsePayload.family_name;
                                        document.querySelector("[name='email']").value = responsePayload.email;
                                        
                                        
                                    }
                                    
                                    /*FUNÇÃO DE RENDEREIZAÇÃO DO BOTÃO DE LOGIN COM GOOGLE*/
                                    function btg (){
                                    google.accounts.id.initialize({
                                    client_id: "983351112682-ipf11esoab6napoutemsco0pvqdrn8fa.apps.googleusercontent.com",
                                    callback: handleCredentialResponse
                                    });
                                    google.accounts.id.renderButton(
                                    document.getElementById("buttonDiv"),
                                    { theme: "outline", size: "large" }  // customization attributes
                                    );
                                    google.accounts.id.prompt(); // also display the One Tap dialog
                                    }; 
                                    /*FUNÇÃO DE RENDEREIZAÇÃO DO BOTÃO DE LOGIN COM GOOGLE*/