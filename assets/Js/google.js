import jwt_decode from "jwt-decode";

function decode(){
var userObject = jwt_decode(response.credential);
console.log(userObject);
}
