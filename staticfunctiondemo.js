class student{
    static add(a, b) {
        console.log("The sum of a and b is: " + (a + b));
    }
    static sub(a, b) {
        console.log("The difference of a and b is: " + (a - b));
    }
   static mul(a, b) {
        console.log("The product of a and b is: " + (a * b));
    }
    static div(a,b){
        console.log("The division of a and b is: " + (a / b));
    }
}
student.add(20, 30);
student.sub(50, 20);
student.mul(2, 3);
student.div(20, 3);