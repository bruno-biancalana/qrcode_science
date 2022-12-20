/** 
*Coded by: Bruno Biancalana
*Coded for: Science Valley Research Institute 
*GitHub: https://github.com/bruno-biancalana
*This GitRepositorie: https://github.com/bruno-biancalana/qrcode_science
*API DOC. Source: https://developers.google.com/identity/gsi/web/guides/overview

                            ######### API GOOGLE  LOGIN  #########  **/              
                    
        
                    /*FUNÇÃO PRA EXIBIR O TOKEN DE LOGIN DO USUÁRIO*/
                    function handleCredentialResponse(response) {
                        console.log("token:" + response.credential);
                        /*FUNÇÃO PRA EXIBIR O TOKEN DE LOGIN DO USUÁRIO*/

                        /*FUNÇÃO PARA DECODIFICAR O TOKEN JWT DO USUÁRIO*/
                        function parseJwt (token) {
                        var base64Url   = token.split('.')[1];
                        var base64      = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                        }).join(''));

                        return JSON.parse(jsonPayload);
                        }
                        

                        const responsePayload = parseJwt(response.credential);
                        /*FUNÇÃO PARA DECODIFICAR O TOKEN JWT DO USUÁRIO*/
                        console.log('Nome: ' + responsePayload.given_name);
                        console.log('Sobrenome: ' + responsePayload.family_name);
                        console.log('Email: ' + responsePayload.email);

                        /* BLOCO QUE ESCREVE OS DADOS DO LOGIN NO FORMULÁRIO */ 
                        document.querySelector("[name='firstname']").value = responsePayload.given_name; //PRIMEIRO NOME
                        document.querySelector("[name='lastname']").value  = responsePayload.family_name; //SEGUNDO NOME
                        document.querySelector("[name='email']").value     = responsePayload.email; //EMAIL
                        /* BLOCO QUE ESCREVE OS DADOS DO LOGIN NO FORMULÁRIO */ 

                       
                        
                        
                    }

                    /*FUNÇÃO DE RENDEREIZAÇÃO DO BOTÃO DE LOGIN COM GOOGLE*/
                    function btg (){
                    google.accounts.id.initialize({
                    client_id: "514827410155-jdadmhecqh2b1jlstsn7shm5a2uhgekg.apps.googleusercontent.com",
                    callback : handleCredentialResponse
                    });
                    google.accounts.id.renderButton(
                    document.getElementById("buttonDiv"),
                    { theme: "outline", size: "large" }  // customization attributes
                    );
                    google.accounts.id.prompt(); // also display the One Tap dialog
                    }; 
                    /*FUNÇÃO DE RENDEREIZAÇÃO DO BOTÃO DE LOGIN COM GOOGLE*/                                   