// var b1 = 1;
// var b2 = false;
// //隐式转换
// console.log(!b1)


//只声明了未赋值
// var ud1;

// //空值
// var unll2 = null;

// // console.log(!unll2,!ud1)
// // console.log("ud1:"+ud1)
// // console.log(1 + ud1)

// console.log(+ud1);
// console.log(+unll2);


// 是一个有顺序的数据集合
// var arr = [1,"Tina"]
// console.log(arr);

// console.log(arr[0]);

// arr[0] = 2

// console.log(arr)

// console.log(arr[0]);

// var arr = [1,2,3,4,5,6,7,8,9,11,12,13,12,34]
// console.log(arr.length)
// // 遍历数组
// // for(var i = 0;i<arr.length;i++){
// //     console.log(arr[i]);
// // }
// arr.length = 12
// console.log(arr);

// arr[arr.length] = 12
// arr[arr.length] = 34
// // arr.length = 14
// console.log(arr);



// 拿到数组里大于10的数据
var arr = [10, 12, 9, 23, 8, 7, 19, 30, 46]
for (var i = 0; i < arr.length; i++) {
    if(arr[i]>10){
        console.log(arr[i]);
    }
}


// // var arr = [12,27,39]
// var arr = [10, 12, 9, 23, 8, 7, 19, 30, 46]
// var newarr = []
// //遍历数据
// arr.forEach(function(value,index,list){
//     // console.log(value,index,list);
//     if(value>10){
//         newarr[index] = value
//     }
// })

// //根据原数据操作拿到一个新数据
// var arr2 = arr.map(function(v,i,l){
//     // return v+1
//     if(v>10){
//         return v
//     }
// })

// console.log(arr2,newarr);

// var arr = [10, 12, 9, 23, 8, 7, 19, 30, 46]

// var arr2 = arr.filter(function(value,index,list){
//     return value>10
// })

// console.log(arr2);

// 求和 10+数组里的每一项
//求 100 - 数组里的每一项
// var arr = [10, 12, 9, 23, 8, 7, 19, 30, 46]

// var sum = arr.reduce(function(total,value,index,list){
//     console.log(total);
//       return  total-value
// },100)

// console.log(sum);

// var arr = [10, 12, 9, 23, 8, 7, 19, 30, 46]

// var boolStr = arr.every(function(value,index,list){
//     return value%2===0
// })

// console.log(boolStr)



// var arr = [10, 12, 9, 23, 8, 7, 19, 30, 46]
// //检测数组只要有一个数据满足要求，则返回true
// var is30 = arr.some(function(value,index,list){
//     return value>30
// })

// console.log(is30);


// var arr = [10, 12, 9, 10, 23, 8, 7, 19, 30, 46]
// //如果数据再数组里存在，那么indexof返回数据所在的索引位置
// //如果不存在则返回-1
// //第二个参数表示开始查找的位置
// // var index = arr.indexOf(10,1)
// var index = arr.indexOf(10)
// //从尾部开始查找
// var index = arr.lastIndexOf(10)
// console.log(index);


// var arr = [10, 12, 9, 10, 23, 8, 7, 19, 30, 46]
// //find直接返回第一个满足要求的数据
// var data = arr.find(function(value,index,list){
//     return value === 10
// })

// console.log(data);


// var arr = [10, 12, 9, 10, 23, 8, 7, 19, 30, 46]

// var index = arr.findIndex(function(value,index,list){
//     return value > 10
// })

// console.log(index);




