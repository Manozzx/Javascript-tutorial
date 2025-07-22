class sample1{
    m1(){
        console.log("sample1 class m1");
    }
}
class sample2 extends sample1 {
    m2(){
        console.log("sample2 class m2");
    }
}

let obj= new sample2();
obj.m1();
obj.m2();