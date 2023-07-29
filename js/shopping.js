window.onload = function () {
    axios({
        method: 'get',
        url: 'http://127.0.0.1:3000/guid/new',
    })
        .then(function (res) {
            var navlist = res.data;
            // console.log('--------');
            // console.log(navlist);
            var nav = document.querySelector('.newitema');

            // console.log(nav);
            var lis = document.createElement('li');
            nav.appendChild(lis);
            var str = '';
            navlist.forEach(function (item) {
                // console.log(item.txt); 

                str += `<li>
                <a href="./try.html">
                    <div class="shawon">
                        <div class="shaw"></div>
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="box">
                        <p>${item.text}</p>
                        <span>${item.like}</span>
                        <span>${item.words}</span>
                    </div>
                </a>
                </li>`

            });
            nav.innerHTML = str;
        })
        .catch(function (error) {
            console.log('请求发生错误:', error);
        });





    axios({
        method: 'get',
        url: 'http://127.0.0.1:3000/guid/hot',
    })
        .then(function (res) {
            var navlist = res.data;
            // console.log('--------');
            // console.log(navlist);
            var nav = document.querySelector('.newitemb');

            // console.log(nav);
            var lis = document.createElement('li');
            nav.appendChild(lis);
            var str = '';
            navlist.forEach(function (item) {
                // console.log(item.txt); 

                str += `<li>
                    <a href="./try.html">
                        <div class="shawon">
                            <div class="shaw"></div>
                            <img src="${item.img}" alt="">
                        </div>
                        <div class="box">
                            <p>${item.text}</p>
                            <span>${item.like}</span>
                            <span>${item.words}</span>
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



var a = document.getElementsByClassName('a')
var newest = document.getElementsByClassName('newest')


for (var i = 0; i < a.length; i++) {
    a[i].setAttribute('index', i)
    a[i].onclick = function () {
        console.log('fghjk');
        var index = this.getAttribute('index')
        for (var j = 0; j < newest.length; j++) {
            newest[j].style.display = 'none';
            newest[index].style.display = 'block';
            a[j].classList.remove('red');
            a[index].classList.add('red');
            a[j].classList.remove('newww');
            a[index].classList.add('newww');

        }

    }
}


var more = document.getElementsByClassName('moer')[0];
var beforeMore = document.getElementsByClassName('beforeMore')[0];
// var morea = document.getElementsByClassName('moer')[1];
// var beforeMorea = document.getElementsByClassName('beforeMore')[1];
// more.onclick = function () {
//     more.style.display = 'none';
//     beforeMore.style.display = 'block'
// }



function changeMore() {
    var more = document.querySelector('.more');
    var beforeMore = document.querySelector('.beforeMore');


    more.style.display = 'none';
    beforeMore.style.display = 'block';

    beforeMorea.style.display = 'block';

}

function changeMorea() {

    var morea = document.querySelector('.morea');
    var beforeMorea = document.querySelector('.beforeMorea');

    morea.style.display = 'none';
    beforeMorea.style.display = 'block';

}