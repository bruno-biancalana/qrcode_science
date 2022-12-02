var request = require('request');

var access_token = 'AQWkywHsJ6c1FSCdN6RPMvsb7Uhf75xg2owcAJQ2xdAvbV7GdvxWwvvdxDoWgNDzj82t0nvjhHPvnreTtN7QhHVXgJNJOsL8iTelOTJYGmmTKFWoj2BQrvosABHBOayYBq-6bU4vBwqdXkixfOcEiJlX3V-0B1YT9jBl4qVg4IHbZhIWNTuzyuDouYbVGjImkGGwo7_5zIbq2PdQ4x3PDw23xmo2I89HbJvx36aks4aJnJuPCxZ-M_nK8jIYMaaG8K2pzyQ3vEKqKOae0jweHUm7TcSUTLIcFbc1emDbs85s11g-Zum6MqFxBCOq1QL8KVAah4N7Se14pG4n0ycZl3NIabi2kA';

function callMeAPI(accessToken, done){
	request.get({url:"https://api.linkedin.com/v2/me",headers:{"Authorization": "Bearer "+accessToken}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}

function callEmailAPI(accessToken, done){
	request.get({url:"https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",headers:{"Authorization": "Bearer "+accessToken}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}

function main(done){
	callMeAPI(access_token,function(err, res){
		if (err) {done(err)}
		else{
			var firstname = res.localizedFirstName;
			var lastname = res.localizedLastName;
			callEmailAPI(access_token,function(err, res){
				if (err) {done(err)}
				else{
					var email = res.elements[0]["handle~"].emailAddress;
					console.log(firstname+" "+lastname+" "+email);
					done(null,"success");
				}
			});
		}
	});
}

main(function(a,b){});