function NumberType (value) {
    if (value > 0){
        console.log("It is a Positive Number");   
    } else if (value < 0){
        console.log("It is a Negative Number");   
    }else {
        console.log("It is a neutral Number");
        
    }
}
let a = 2
let b = -2
let c = 0
NumberType(a)
NumberType(b)
NumberType(c)
