class sample
{
    constructor() { //used to check the obj is called or not
        console.log("This is a sample class constructor");
    }
    add(a, b) {
        console.log("The sum of a and b is: " + (a + b));
    }
    sub(a, b) {
        console.log("The difference of a and b is: " + (a - b));
    }
    mul(a, b) {
        console.log("The product of a and b is: " + (a * b));
    }
    div(a,b){
        console.log("The division of a and b is: " + (a / b));
    }
}
const obj = new sample();
obj.add(20, 30);
obj.sub(50, 20);
obj.mul(2, 30);
obj.div(20, 3);