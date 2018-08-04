function repeat (str,n) {
    var str1 = '';
    if(!n) return str;
    else for(var i = 0 ; i < n ; i++) {
    str1 += str;
    }
    return str1;
    }
    console.log(repeat('Ha!',1)); 
    console.log(repeat('Ha!',2)); 
    console.log(repeat('Ha!',3));