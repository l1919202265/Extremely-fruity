window.onload = function () {
    axios({
        method: 'get',
        url: 'http://127.0.0.1:3000/report/new',
    })
        .then(function (res) {
            var navlist = res.data;
            // console.log('--------');
            // console.log(navlist);
            var nav = document.querySelector('.bull');

            // console.log(nav);
            var lis = document.createElement('li');
            nav.appendChild(lis);
            var str = '';
            navlist.forEach(function (item) {
                // console.log(item.txt); 














                str += `<li>
                        <a href="">
                            <div class="img">
                                <div class="mb"></div>
                                <img src="${item.img}" alt="">
                                <div class="content">
                                    <p>${item.text}</p>
                                    <div class="leftSpan">
                                        <span></span>
                                        <!-- <p>苏苏</p> -->
                                        <span>${item.uName}</span>
                                        <span>${item.endTime}</span>
                                    </div>
                                    <div class="rightSpan">
                                        <span>3</span>
                                        <span>3</span>
                                    </div>
                                </div>
                            </div>
                            <div class="lecture">
                                <p>关于格林威特空气净化器还有 4 篇报告，点击查看</p>
                            </div>
                        </a>
                            </li>`




            });
            nav.innerHTML = str;
        })
        .catch(function (error) {
            console.log('请求发生错误:', error);
        });



}

