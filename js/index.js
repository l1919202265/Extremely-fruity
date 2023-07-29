// 头部img 点击位移
var topImg=document.querySelector('.top .center')
var topBtn=document.querySelector('.top .center .btn')

topBtn.onclick=function(){
    topImg.classList.remove('topActive')
    setTimeout(function(){
        topImg.classList.add('topActive')
    },100)
};
// 轮播图
(function(){
    axios.get('http://127.0.0.1:3000/play/new').then((res)=>{
        show(res.data)
    })
    
    function show(data){
        // console.log(data[0])
        var str=''
        var slide=document.querySelectorAll('.swiper-slide')
        for(var i=0;i<data.length;i++){
        for(var j=0;j<slide.length;j++){
            str=`
            <div class="center">
            <div class="title">热门试用</div>
            <ul class="swi-top">
                <li>
                    <img src="${data[i][j].img}" alt="">
                    <div class="swi-xia">
                        <h2>${data[i][j].text}</h2>
                    <p class="red"><span>2032</span><span>20台</span></p>
                    <p class="apply"><span>1392</span>申请</p>
                    <p class="red">剩余时间2天</p>
                    </div>
                </li>
                <li>
                    <img src="${data[i][j+1].img}" alt="">
                    <div class="swi-xia">
                        <h2>${data[i][j+1].text}</h2>
                    <p class="red"><span>2032</span><span>20台</span></p>
                    <p class="apply"><span>1392</span>申请</p>
                    <p class="red">剩余时间2天</p>
                    </div>
                </li>
                <li>
                    <img src="${data[i][j+2].img}" alt="">
                    <div class="swi-xia">
                        <h2>${data[i][j+2].text}</h2>
                    <p class="red"><span>2032</span><span>20台</span></p>
                    <p class="apply"><span>1392</span>申请</p>
                    <p class="red">剩余时间2天</p>
                    </div>
                </li>
                <li>
                    <img src="${data[i][j+3].img}" alt="">
                    <div class="swi-xia">
                        <h2>${data[i][j+3].text}</h2>
                    <p class="red"><span>2032</span><span>20台</span></p>
                    <p class="apply"><span>1392</span>申请</p>
                    <p class="red">剩余时间2天</p>
                    </div>
                </li>
            </ul>
        </div>
            `
        }
        slide[i].innerHTML=str
        }
    }
})();
// 报告精选
(function(){
    axios.get('http://127.0.0.1:3000/useing/public').then(res=>{
        show(res.data)
    })
    function show(data){
        // console.log(data);
        var ul=document.querySelector('.report-main')
        var str=''
        // console.log(ul);
        for(var i=0;i<8;i++){
            // console.log(data[i]);
            str+=`<li>
            <img src="${data[i].img}" alt="#">
                <div class="report-main-item">
                    <p>${data[i].text}</p>
                    <div class="report-xia">
                        <span class="name">● ${data[i].uName}</span>
                        <div class="report-ri">
                            <span class="zan">3</span>
                            <span class="xinxi">3</span>
                        </div>
                    </div>
            </div>
        </li>`
        }
        ul.innerHTML=str
    }
})();
// 导购精选
(function(){
    axios.get('http://127.0.0.1:3000/report/new').then(res=>{
        show(res.data)
    })
    function show(data){
        // console.log(data);
        var ul=document.querySelector('.show-main')
        // console.log(ul);
        var str=''
        
        for(var i=0;i<4;i++){
            console.log(data[i]);
            str+=`<li>
            <img src="${data[i].img}" alt="#">
                <div class="show-main-item">
                    <p>${data[i].text}</p>
                    <div class="show-xia">
                        <span></span>
                        <div class="show-ri">
                            <span class="zan">3</span>
                            <span class="xinxi">3</span>
                        </div>
                    </div>
            </div>
        </li>`
        }
        ul.innerHTML=str;
    }
})()
// 
