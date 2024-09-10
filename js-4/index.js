


var list = ["Ace", "Tina", "Eleven"];
// console.log(list.toString());
// console.log([null,undefined,3,4,5,6].toString());

// var date = ['2022','01','01']
// // console.log(date.toString());
// console.log(date.join('/'));

//pop 删除数组里的最后一个元素 返回当前被删除的元素

// var popStr = list.pop();

// console.log(popStr,list);


//push 往数组推送一个数据 返回数组新长度

// var listLength1 =  list.push('哈哈哈',123,456)
// console.log(listLength1,list);

// //shift 删除第一个元素，并且返回第一个元素
// // var shiftStr = list.shift()
// // console.log(shiftStr,list);

// var listLength2 = list.unshift('哈哈哈',123,456)
// console.log(list,listLength2);

// delete不会改变数组长度 但是他会把数组的某一项变成empty
// delete list[0]
// console.log(list);


// splice 第一个参数：进行删除动作的起始位置  第二个参数表述删除的个数
//第三个参数 往删除位置添加的元素 ....

// list.splice(0,2,'哈哈哈',123,456)
// console.log(list);

var list2 = [1,2,3,4,5,6,7,8,9]
var list3 = [10,11,12]

// list2.forEach(function(v){
//     list.push(v)
// })
// console.log(list);
//concat 用一个数组去拼接多个数组，并且会返回一个新的数组
var newList = list.concat(list2,list3)
console.log(newList);
// // console.log(list,list2);

// // slice 从参数1位置开始切割，切割到参数2的位置，不包括参数2位置的数据 返回切割到的数组
// var arr = newList.slice(1,3)
// console.log(arr,newList);

// console.log(list2.sort(function(a,b){
//     return a-b
// }));


// list2.reverse()
// list2.reverse()
// // console.log(list2);

// console.log(Array.isArray(list));

// console.log(list instanceof Array);


// 函数式声明
// function getName(){
//     console.log("tina");
// }
// // function getAge(){
// //     console.log(18);
// // }
// // 字面量函数
// var getAge = function(){
//     console.log(18);
// }

// getName()
// // getName()
// // getName()
// // getName()
// getAge()

// 匿名函数 自调用函数
// (function(){
//     console.log("我是一个匿名函数");
// })()


// 函数参数  参数的位置是不能变  形参
// function getName(name,age){
//     console.log(name+"今年"+age+"岁");
// }
// getName(18,'tina')
// getName('缇娜')
// getName('缇娜')




