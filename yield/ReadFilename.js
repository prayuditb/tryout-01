var path = './../'; // change to your prefer directory
var fs = require('fs');

function *generator(){   
    var file = fs.readdirSync(path);
    for(var i = 0; i < file.length; i++ ){
        yield file[i];
    }
}

var gen = generator();
var list = fs.readdirSync(path);
for (var i = 0; i< list.length; i++){
    console.log(gen.next().value);
}

