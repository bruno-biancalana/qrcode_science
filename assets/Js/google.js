<script type="module" src="milsymbol-2.0.0/src/milsymbol.js"></script>

import jwt_decode from "jwt-decode";


function decode(){
var userObject = jwt_decode(response.credential);
console.log(userObject);
}

export default decode;

