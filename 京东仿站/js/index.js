/*
 * @Author: 
 * @Date: 2022-02-23 09:53:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-24 16:33:51
 * @FilePath: \VIP2\code\js\index.js
 */
$(function(){
    new Swiper('.swiper1', {
        speed:300,
        autoplay: true, //可选选项，自动滑动
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })


    new Swiper('.swiper2', {
        speed:600,
        autoplay: true, //可选选项，自动滑动
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
     new Swiper('.swiper3', {
        speed:1000,
        autoplay: true, //可选选项，自动滑动
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    
    new Swiper('.swiper4', {
        speed:300,
        autoplay: true, //可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
        },
    })
    
    var time = (18-new Date().getHours())*60*60;
    var timeM = new Date().getMinutes();
    var timeS = new Date().getSeconds();
    time -= timeM*60 - timeS;
    var h=0,m=0,s=0;
    setInterval(() => {
        time--
        h = Math.floor(time/60/60);
        m = Math.floor((time - (h*60*60))/60);
        s = time%60%60;
        console.log(h,m,s);
        $('.date .h').text(h>9?h:'0'+h)
        $('.date .m').text(m>9?m:'0'+m)
        $('.date .s').text(s>9?s:'0'+s)
    }, 1000);

})