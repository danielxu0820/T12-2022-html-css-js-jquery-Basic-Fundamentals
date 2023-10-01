// console.log(num);



// //预解析阶段，var 生明会被提升
// //只会提升声明，不会提升赋值
// var num = 18

// console.log(num);


// console.log('------------------');

// var num2;
// console.log(num2);
// num2 = 18
// console.log(num2);

// fun()
// console.log(fun);

// var fun = function(){
//     console.log("我是一个函数");
// }


//函数会被整体提升

// fun()

// function fun(){
//     console.log("我是一个函数");
// }
// //当变量和函数同名的时候 函数的权限大于变量
// var fun = 1

// console.log(fun);


// console.log(Math.PI);

// | Math.floor() | 向下取整 |
// | Math.ceil()  | 向上取整 |

// console.log(Math.floor(0.923));
// console.log(Math.ceil(0.123));

// console.log(Math.round(0.123));
// console.log(Math.round(0.923));
// console.log(Math.abs(-123));

// console.log(Math.max(1,2,3,4,5));
// console.log(Math.min(1,2,3,4,5));
// console.log(Math.floor(Math.random()*100));
// console.log(Math.floor(Math.random()*100));
// console.log(Math.floor(Math.random()*100));
// console.log(Math.floor(Math.random()*100));
// console.log(Math.floor(Math.random()*100));

// 得到的时间是当前客户端的时间
// console.log(new Date());
// console.log(new Date('2021/12/12'));

// var date = new Date()

// console.log(date.getFullYear());
// //月份需要+1
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// // //0-6 0表示周日 6表示周六
// console.log(date.getDay());

// console.log(date.getHours()); //时
// console.log(date.getMinutes()); //分
// console.log(date.getSeconds()); // 秒
// // //毫秒
// console.log(date.getTime());

// var a = 1
// var b = a
// a = 2
// console.log(b);

// var a = {
//     name:'tina'
// }
// var b = a
// a.name = 'tina2'
// console.log(b);

// function fn(a) {
//     a++;
//     console.log(a); 
// }
// var x = 10;
// fn(x);
// console.log(x)


function f1(x) { // x = p
    console.log(x.name); // 2. 这个输出什么 ?    
    x.name = "张学友";
    console.log(x.name); // 3. 这个输出什么 ?    
}
var p = {
    name:'刘德华'
}
console.log(p.name);    // 1. 这个输出什么 ?   
f1(p);
console.log(p);    // 4. 这个输出什么 ?  