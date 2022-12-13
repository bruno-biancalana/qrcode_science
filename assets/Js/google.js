<script type="module" src="js/jwt-decode.min.js"></script>

import jwt_decode from "jwt-decode";


function decode(){
var userObject = jwt_decode(response.credential);
console.log(userObject);
}

export default decode;

