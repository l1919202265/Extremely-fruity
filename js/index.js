// 头部img 点击位移
var topImg=document.querySelector('.top .center')
var topBtn=document.querySelector('.top .center .btn')
topBtn.onclick=function(){
    topImg.classList.remove('topActive')
    setTimeout(function(){
        topImg.classList.add('topActive')
    },100)
}
