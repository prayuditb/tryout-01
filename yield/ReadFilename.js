var testFolder = './../';
var fs = require('fs');

function *generator(){   
    var file = fs.readdirSync(testFolder);
    for(var i = 0; i < file.length; i++ ){
        yield file[i];
    }
}

var gen = generator();
var list = fs.readdirSync(testFolder);
for (var i = 0; i< list.length; i++){
    console.log(gen.next().value);
}

