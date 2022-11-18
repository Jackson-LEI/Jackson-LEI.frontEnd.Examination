window.addEventListener('load', function () {
    //获取元素
    const list = document.querySelectorAll('#section-4 .options .select .option');
    const selects = document.querySelectorAll('#section-4 input[type="radio"]');
    const video = document.getElementsByTagName('video');
    const country = document.querySelector('#section-4 .options .select span');
    const province = document.querySelector('#section-4 .options .select-2 span');
    const countryItem = document.querySelectorAll('#section-4 .options .select-1 .option ul li');
    const provinceItem = document.querySelectorAll('#section-4 .options .select-2 .option ul li');
    const allItem = document.querySelectorAll('#section-4 .options .select .option ul li');
    const btn = document.querySelector('#section_1 .control');
    const gradient = document.querySelector('#section_1 .cover');
    const start = document.querySelector('#section_1 .mes .start');
    const message = document.querySelector('.message');
    const content = document.querySelector('.message b');
    const search = document.querySelector('#section-4 input[type="submit"]')
    const morebtn = document.querySelector('#section-6 .right .button');
    const sec7btn = document.querySelectorAll('#section-7 .button');
    const submit = document.querySelector("#section-8 .text input[type='submit']");
    const email = document.querySelector("#section-8 .text input[type='email']");

    //控制下拉框
    for (var i = 0; i < selects.length; i++) {
        selects[i].index = i;
        selects[i].addEventListener('click', function () {
            if (this.index == 0) {
                list[1].style.display = 'none';
                if (list[0].style.display == '' || list[0].style.display == 'none') {
                    list[0].style.display = 'block';
                } else {
                    list[0].style.display = 'none'
                }
            } else if (this.index == 1) {
                list[0].style.display = 'none';
                if (list[1].style.display == '' || list[1].style.display == 'none') {
                    list[1].style.display = 'block';
                } else {
                    list[1].style.display = 'none'
                }
            }
        })
    }

    for (var i = 0; i < countryItem.length; i++) {
        countryItem[i].addEventListener('click', function () {
            country.innerHTML = this.innerHTML;
            list.forEach((element) => {
                element.style.display = 'none';
            });
        });
    }

    for (var i = 0; i < provinceItem.length; i++) {
        provinceItem[i].addEventListener('click', function () {
            province.innerHTML = this.innerHTML;
            list.forEach((element) => {
                element.style.display = 'none';
            });
        });
    }

    for (var i = 0; i < allItem.length; i++) {
        allItem[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = '#f6f6f6';
        })
        allItem[i].addEventListener('mouseout', function () {
            this.style.backgroundColor = '#E3E3E3';
        })
    }

    // 阻止默认的上下文菜单事件执行，防止用户在视频上点击右键显示右键菜单
    video[0].addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    //为播放/暂停按钮绑定监听器，点击按钮后视频播放/暂停，改变按钮图片
    btn.addEventListener('click', () => {
        if (new String(btn.src).endsWith('controller-paus.png')) {
            btn.src = new String(btn.src).replace('controller-paus.png', 'controller-play.png');
            video[0].pause();
        } else if (new String(btn.src).endsWith('controller-play.png')) {
            btn.src = new String(btn.src).replace('controller-play.png', 'controller-paus.png');
            video[0].play();
        }
    })

    //为视频绑定鼠标移入/移出监听器，鼠标移入视频时显示播放/暂停按钮，鼠标移出则隐藏
    video[0].addEventListener('mouseenter', mouseenter);
    video[0].addEventListener('mouseleave', function () {
        gradient.addEventListener('mouseenter', function () {
            mouseenter();
        })
        btn.addEventListener('mouseenter', function () {
            mouseenter();
        })
        mouseleave();
    });
    function mouseleave() {
        btn.style.right = '-50px';
        gradient.style.opacity = '0';
    }

    function mouseenter() {
        btn.style.right = '20px';
        gradient.style.opacity = '0.5';
    }

    //为开始体验按钮绑定监听器
    start.addEventListener('click', function () {
        showMessages();
        content.innerHTML = '万，吐，斯瑞，康忙北鼻，来次够！！'
        message.style.backgroundColor = 'rgba(0, 0, 255, 0.6)'
    })

    //为更多详情按钮绑定监听器，点击后打开江科概况页面
    morebtn.addEventListener('click', function () {
        window.location.href = 'overview.html';
    })

    //为查看更多按钮绑定监听器，点击后打开对外交流页面
    for (var i = 0; i < sec7btn.length; i++) {
        sec7btn[i].addEventListener('click', function () {
            window.location.href = 'exchange.html';
        })
    }

    //为提交按钮绑定监听器
    submit.addEventListener('click', () => {
        showMessages();
        if (email.value != '') {
            content.innerHTML = '订阅成功!';
            message.style.backgroundColor = 'rgba(0,255,0, 0.6)'
        }else{
            content.innerHTML = '请输入你的电子邮箱地址!';
            message.style.backgroundColor = 'rgba(255,0,0, 0.6)'
        }
    })

    //为搜索按钮绑定监听器
    search.addEventListener('click', function () {
        showMessages();
        if (country.innerHTML == '美国') {
            content.innerHTML = '爱慕骚瑞，不在美国招生!'
            message.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'
        } else if (country.innerHTML == '中国' && province.innerHTML == '省份') {
            content.innerHTML = '你是中国哪里的同鞋啊?'
            message.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'
        } else if (country.innerHTML == '国家' && province.innerHTML == '省份') {
            content.innerHTML = '你是哪里的同鞋啊?'
            message.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'
        } else if (country.innerHTML == '中国' && province.innerHTML != '省份') {
            content.innerHTML = '欢迎来自' + country.innerHTML + province.innerHTML + '的同学报考江西科技学院!';
            message.style.backgroundColor = 'rgba(0, 255, 0, 0.6)'
        }
    });

    function showMessages() {
        if (message.style.opacity = '0') {
            message.style.top = '60px';
            message.style.opacity = '1';
        }
    }
})
