
var groud=0     //组数
var xin=document.querySelector('#new') // 最新按钮
var hot=document.querySelector('#hot')// 最热按钮
var xin1=document.querySelector('.new')  //新面板
var hot1=document.querySelector('.hot')  //最热面板
var newLod=document.querySelector('#new-lod') //新加载
var newLoding=document.querySelector('#new-loding') //新加载面板
var hotLod=document.querySelector('#hot-lod')   //热加载
var hotLoding=document.querySelector('#hot-loding')   //热加载面板
var ula=document.querySelector('#ul-hot')//热ul
var ul=document.querySelector('#ul-new')//新ul

xin.addEventListener('click',function(){
    xin.classList.add('on')
    hot.classList.remove('on')
    xin1.style.display='block'
    hot1.style.display='none'
    groud=0  
    ula.innerHTML=''
    showNew()
    
})
hot.addEventListener('click',function(){
    hot.classList.add('on')
    xin.classList.remove('on')
    hot1.style.display='block'
    xin1.style.display='none'
    groud=0  
    ul.innerHTML=''
    showhot()
})

// 获取最新的图片地址
newLod.addEventListener('click',function(){
    newLod.style.display='none';
    newLoding.style.display='block';
    setTimeout(() => {
        newLoding.style.display='none';
        newLod.style.display='block';
        showNew()
    }, 1000);
})
// 
function showNew(){
    axios.get('http://127.0.0.1:3000/report/new').then(res=>{
        show(res.data)
    })
    
    function show(data){
        
        var str='';
        for(var i=0;i<4;i++){
            
            // console.log(groud);
            str+=`
            <li>
                    <a href="#">
                        <img src="${data[groud].img}" alt="">
                        <div class="info">
                            <p>${data[groud].text}</p>
                            <div class="info-in">
                                <div class="left">
                                    <img src="./img/tx.jpg" alt="">
                                    <span class="red">${data[groud].uName}</span>
                                    <span class="time">${data[groud].endTime}</span>
                                </div>
                                <div class="right">
                                    <span class="zan">3</span>
                                    <span class="xinxi">3</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <p class="look-about">关于格林威特空气净化器还有 4 篇报告，点击查看</p>
                </li>
            `       
            groud++
            
            }
        ul.innerHTML+=str
        if(groud>=data.length-1){
            newLod.style.display='none';
            newLoding.style.display='none';
        }
    }
}
// 获取最热的图片地址
hotLod.addEventListener('click',function(){
    hotLod.style.display='none';
    hotLoding.style.display='block';
    setTimeout(() => {
        hotLoding.style.display='none';
        hotLod.style.display='block';
        showhot()
    }, 1000);
})
function showhot(){
    axios.get('http://127.0.0.1:3000/report/hot').then(res=>{
        show1(res.data)
        console.log(res.data);
    })
    
    function show1(data){
        var str='';
        
            for(var i=0;i<4;i++){
                if(groud<=data.length-1){
                console.log(groud);
                str+=`
                <li>
                        <a href="#">
                            <img src="${data[groud].img}" alt="">
                            <div class="info">
                                <p>${data[groud].text}</p>
                                <div class="info-in">
                                    <div class="left">
                                        <img src="./img/tx.jpg" alt="">
                                        <span class="red">${data[groud].uName}</span>
                                        <span class="time">${data[groud].endTime}</span>
                                    </div>
                                    <div class="right">
                                        <span class="zan">3</span>
                                        <span class="xinxi">3</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <p class="look-about">关于格林威特空气净化器还有 4 篇报告，点击查看</p>
                    </li>
                `   
                groud++
            } else{
                hotLod.style.display='none';
                hotLoding.style.display='none';
            }
                }
            ula.innerHTML+=str
    }
}

// 初始化页面
showNew()
