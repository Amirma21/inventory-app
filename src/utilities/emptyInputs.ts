export  function emptyInputs(...args:any){
    for (let i = 0 ; i < args.length ; i++){
        args[i] = ''
    }
}

//we need to write a function that accepts any number of arguments. we can handle it in two ways.
//https://levelup.gitconnected.com/how-to-write-function-with-n-number-of-parameters-in-javascript-a916de1be7a2