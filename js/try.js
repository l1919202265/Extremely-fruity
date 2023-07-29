// function getIndexHead() {
window.onload = function () {
    axios({
        method: 'get',
        url: 'http://127.0.0.1:3000/useing/public',
    })
        .then(function (res) {
            var navlist = res.data;
            // console.log('--------');
            // console.log(navlist);
            var nav = document.querySelector('.item');
            // console.log(nav);
            var lis = document.createElement('li');
            nav.appendChild(lis);
            var str = '';
            navlist.forEach(function (item) {
                // console.log(item.txt); 

                str += `<li><a href="./trial.html">
                 <img src="${item.img}" alt="">
                <p>${item.text}</p>
                <span>${item.totalnum}</span>
                <span>${item.num}台</span>
                <p><span>${item.apply}</span>申请</p>
                <p class="num">报告数量：8</p>
                <span class="sf">${item.info_ty}</span></a>
                </li>`

            });
            nav.innerHTML = str;
        })
        .catch(function (error) {
            console.log('请求发生错误:', error);
        });




    axios({
        method: 'get',
        url: 'http://127.0.0.1:3000/useing/public',
    })
        .then(function (res) {
            var navlist = res.data;
            // console.log('--------');
            // console.log(navlist);
            var nav = document.querySelector('.in');
            // console.log(nav);
            var lis = document.createElement('li');
            nav.appendChild(lis);
            var str = '';
            navlist.forEach(function (item) {
                // console.log(item.txt);

                str += `<li><a href="./trial.html">
                     <img src="${item.img}" alt="">
                    <p>${item.text}</p>
                    <span>${item.totalnum}</span>
                    <span>${item.num}台</span>
                    <p><span>${item.apply}</span>申请</p>
                    <p class="num">报告数量：8</p>
                    <span class="sf">${item.info_ty}</span></a>
                    </li>`

            });
            nav.innerHTML = str;
        })
        .catch(function (error) {
            console.log('请求发生错误:', error);
        });
    axios({
        method: 'get',
        url: 'http://127.0.0.1:3000/useing/public',
    })
        .then(function (res) {
            var navlist = res.data;
            // console.log('--------');
            // console.log(navlist);
            var nav = document.querySelector('.no');
            // console.log(nav);
            var lis = document.createElement('li');
            nav.appendChild(lis);
            var str = '';
            navlist.forEach(function (item) {
                // console.log(item.txt);

                str += `<li><a href="./trial.html">
                         <img src="${item.img}" alt="">
                        <p>${item.text}</p>
                        <span>${item.totalnum}</span>
                        <span>${item.num}台</span>
                        <p><span>${item.apply}</span>申请</p>
                        <p class="num">报告数量：8</p>
                        <span class="sf">${item.info_ty}</span></a>
                        </li>`

            });
            nav.innerHTML = str;
        })
        .catch(function (error) {
            console.log('请求发生错误:', error);
        });






    axios({
        method: 'get',
        url: 'http://127.0.0.1:3000/useing/public',
    })
        .then(function (res) {
            var navlist = res.data;
            // console.log('--------');
            // console.log(navlist);
            var nav = document.querySelector('.on');
            // console.log(nav);
            var lis = document.createElement('li');
            nav.appendChild(lis);
            var str = '';
            navlist.forEach(function (item) {
                // console.log(item.txt); 

                str += `<li><a href="./trial.html">
                         <img src="${item.img}" alt="">
                        <p>${item.text}</p>
                        <span>${item.totalnum}</span>
                        <span>${item.num}台</span>
                        <p><span>${item.apply}</span>申请</p>
                        <p class="num">报告数量：8</p>
                        <span class="sf">${item.info_ty}</span></a>
                        </li>`

            });
            nav.innerHTML = str;
        })
        .catch(function (error) {
            console.log('请求发生错误:', error);
        });




    axios({
        method: 'get',
        url: 'http://127.0.0.1:3000/useing/master',
    })
        .then(function (res) {
            var navlist = res.data;
            // console.log('--------');
            // console.log(navlist);
            var nav = document.querySelector('.tys');
            // console.log(nav);
            var lis = document.createElement('li');
            nav.appendChild(lis);
            var str = '';
            navlist.forEach(function (item) {
                console.log(item.txt); // 输出导航项的文本信息

                str += `<li><a href="./trial.html">
                     <img src="${item.img}" alt="">
                    <p>${item.text}</p>
                    <span>${item.totalnum}</span>
                    <span>${item.num}台</span>
                    <p><span>${item.apply}</span>申请</p>
                    <p class="num">报告数量：8</p>
                    <span class="sf">${item.info_ty}</span></a>
                    </li>`

            });
            nav.innerHTML = str;
        })
        .catch(function (error) {
            console.log('请求发生错误:', error);
        });
}






// 
var a = document.getElementsByClassName('a')
var b = document.getElementsByClassName('b')


for (var i = 0; i < b.length; i++) {
    a[i].setAttribute('index', i)
    a[i].onclick = function () {
        console.log('fghjk');
        var index = this.getAttribute('index')
        for (var j = 0; j < b.length; j++) {
            b[j].style.display = 'none';
            b[index].style.display = 'block';
            a[j].classList.remove('red');
            a[index].classList.add('red')
        }

    }
}




var trial = document.getElementsByClassName('trial');
var lis = document.getElementsByClassName('c');
console.log('bnmnm');
console.log(lis);
console.log(trial);
for (var m = 0; m < lis.length; m++) {
    lis[m].setAttribute('index', m)
    lis[m].onclick = function () {
        console.log('fghjk');
        var index = this.getAttribute('index');
        for (var n = 0; n < lis.length; n++) {
            trial[n].style.display = 'none';
            trial[index].style.display = 'block';
            lis[n].classList.remove('color');
            lis[index].classList.add('color');
        }

    }
}
