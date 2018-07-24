var username = "";
var password = "";
process.argv.forEach(function(val, index, array){
    if(index > 1){
        if(val === '-u' || val === '-username'){
            username = process.argv[(index+1)];
        }
        if(val === '-p' || val === '-password'){
            password = process.argv[(index+1)];
        }
    }
})
console.log('username: ' + username);
console.log('password: ' + password);
