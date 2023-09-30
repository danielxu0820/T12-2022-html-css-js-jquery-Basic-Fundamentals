/*
 * @Author: Tina
 * @Date: 2021-12-23 14:05:01
 * @LastEditors: Tina
 * @LastEditTime: 2021-12-24 14:36:54
 * @FilePath: \code\index.js
 */
//如果条件成立，那么执行if后面的代码块，否则执行else后面的代码块
// if(条件){
//     // 代码块执行
// }else{
//     // 代码块执行
// }
// 条件判断语法
var ifData = true
// if(ifData){
//     console.log("我是条件成立的代码块");
// }else{
//     console.log("我是条件不成立的代码块");
// }


// 三元表达式
// xxx?成立执行的代码:不成立执行的代码
// ifData?console.log("我是条件成立的代码块"):console.log("我是条件不成立的代码块")

var day = 8
// 分支流程控制
// if(day === 1){
//     console.log("周一");
// }else if(day === 2){
//     console.log("周二");
// }else if(day === 3){
//     console.log("周三");
// }else if(day === 4){
//     console.log("周四");
// }else if(day === 5){
//     console.log("周五");
// }else if(day === 6){
//     console.log("周六");
// }else if(day === 7){
//     console.log("周日");
// }else{
//     console.log("数据不对");
// }

//循环判断
// switch (day) {
//     case 1:
//         console.log("周一");
//         break;
//     case 2:
//         console.log("周二");
//         break;
//     case 3:
//         console.log("周三");
//         break;
//     case 4:
//         console.log("周四");
//         break;
//     case 5:
//         console.log("周五");
//         break;
//     case 6:
//         console.log("周六");
//         break;
//     case 7:
//         console.log("周日");
//         break;
//     default:
//         console.log("数据不对");
// }

// var list = [1,2,3,4,5,6,7]
// for(var index = 0;index<list.length;index++){//1
//     console.log(list[index]);
// }


// 打印99乘法表
// var str = ''
// for(var i = 1;i<=9;i++){
//     for(var j = i;j<=9;j++){
//         str += i+'x'+j + '=' +(j*i) +'\t';
//     }
//     str+='\n'
// }
// console.log(str);

// while循环

var i=0
// while(i<0){
//     console.log("你回答对了");
//     i++
// }

do{
    console.log("我是条件成立的代码");
    // continue;
    break;
    i++
}while(i<20)

var userName = "缇娜"
function getName(){
    var userName1 = "tina"
    console.log(userName);
}
getName()
console.log(userName1);


if( i === 0 ){
    var index = i
}
console.log(index);

