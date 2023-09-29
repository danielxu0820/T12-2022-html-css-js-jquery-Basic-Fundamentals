/*
 * @Author: Tina
 * @Date: 2021-12-17 12:13:51
 * @LastEditors: Tina
 * @LastEditTime: 2021-12-17 14:59:21
 * @FilePath: \JS-5\code\object.js
 */

//通过字面量创建
// var obj = {
//     name:"tina",
//     age:18,
//     list:[1,2,3,4,5],
//     getAge:function(){
//         return 18
//     }
// }

// // console.log(obj.getAge());

// console.log(obj['name']);
// console.log(obj.name);

//通过构造函数创建对象
// var obj = new Object()
// obj.name = "tina"
// obj.age = 18
// obj["list"] = [1,2,3,4,5]

// console.log(obj);

/**
 * {
 * code:200,
 * msg:'',
 * data:[1,2,3,4,5]
 * 
 * }
 */
// function getInitData(code,msg,data){
//     return {
//         code:code,
//         msg:msg,
//         data:data
//     }
// }

// var data = getInitData(200,"请求成功",[1,2,3,4,5])
// var data1 = getInitData(404,"请求失败",'')
// console.log(data,data1);


//通过构造器创建一个对象
// function GetInitData(code,msg,data){
//     this.code = code
//     this.msg = msg
//     this.data = data
// }

// var data = new GetInitData(200,"请求成功",[1,2,3,4,5])
// var data1 = new GetInitData(400,"请求失败",'')
// // console.log(data,data1);


// // 对象遍历
// for(var key in data){
//     console.log(key+':'+ data[key]);
// }


var a = true

console.log( String(123));



