window.addEventListener('load', function () {
	const li = document.querySelectorAll('nav ul li');
	const back = document.querySelector('.back a');
	const header = document.querySelector('header');
	const message = document.querySelector('.message');
	const close = document.querySelector('.message .close');
	const content = document.querySelector('.message b');
    const span = document.querySelector('header .banner-right span');
	
	// 跳转
	for (var i = 0; i < li.length; i++) {
		li[i].addEventListener('click', function () {
			switch (this.innerHTML) {
				case '首页': window.location.href = 'index.html'; break;
				case '江科概况': window.location.href = 'overview.html'; break;
				case '学院设置': window.location.href = 'institute.html'; break;
				case '教学科研': window.location.href = 'research.html'; break;
				case '特色专业': window.location.href = 'specialty.html'; break;
				case '对外交流': window.location.href = 'exchange.html'; break;
			}
		})
	}

	//返回顶部
	back.addEventListener('click', () => {
		window.scrollTo(0);
	})

	//使导航栏总是在页面顶部
	window.addEventListener('scroll', () => {
		if (window.scrollY > 60) {
			header.style.position = 'fixed';
			header.style.top = '0';
		} else {
			header.style.position = 'static';
			header.style.top = '-60px';
		}
	});

	//为窗口绑定滚动监听器，当页面滚动到一定位置，显示作品声明消息
	window.addEventListener('scroll', messageScrolling);

	//为消息栏的关闭按钮绑定监听器，点击×按钮，关闭消息提示
	close.addEventListener('click', function () {
		message.style.opacity = '0';
		message.style.top = '0';
		if (content.innerHTML != '万，吐，斯瑞，康忙北鼻，来次够！！') {
			window.removeEventListener('scroll', messageScrolling);
		}
	})

	function messageScrolling() {
		if (window.location.href.endsWith('index.html')) {
			if (window.scrollY > 595) {
				showWelcomeMessage();
			}
		} else{
			if (window.scrollY > 135) {
				showWelcomeMessage();
			}
		}
	}

	function showWelcomeMessage() {
		message.style.top = '60px';
		message.style.opacity = '1';
		content.innerHTML = '20本计算机2班 金雷 前端技术期末作品 网站中所有内容仅供参考'
		message.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'
	}

	function showMessages() {
        if (message.style.opacity = '0') {
            message.style.top = '60px';
            message.style.opacity = '1';
        }
    }

	if(localStorage.getItem('name') == null){
		span.innerHTML = '登录'; 
	}else{
		span.innerHTML = localStorage.getItem('name'); 
	} 	

	span.addEventListener('click', function () {
        if (this.innerHTML == '登录') {
            flag = true;
            const name = prompt('请问你是哪位啊？');
            showMessages();
            if (name == null) {
                content.innerHTML = '登录失败！错误10001:用户取消操作';
                message.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'
            } else if (name == '') {
                content.innerHTML = '登录失败！错误10002:用户名为空' + name;
                message.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'
            } else {
                if (name.length > 4) {
                    console.log(1)
                    content.innerHTML = '登录失败！错误10003:用户名过长';
                    message.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'
                } else {
                    var str = ['傻', '妈', '操', 'mother', '你', '爹', '娘', '骚', '艹', '货', 'fuck', '贱', '爸', '逼', '狗'];
                    for (var i = 0; i < str.length; i++) {
                        if (name.includes(str[i])) {
                            content.innerHTML = '登录失败！错误10004:用户名包含敏感词汇';
                            message.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'
                            flag = false;
                        }
                    }
                    if (flag) {
                        content.innerHTML = '欢迎你！' + name;
                        message.style.backgroundColor = 'rgba(0, 255, 0, 0.6)';
                        span.innerHTML = name;
                        localStorage.setItem('name',span.innerHTML);
                    }
                }
            }
        }else{
            showMessages();
            content.innerHTML = '双击可登出';
            message.style.backgroundColor = 'rgba(0, 0, 255, 0.6)';
            span.addEventListener('dblclick',function(){
                content.innerHTML = '已退出'+span.innerHTML;
                message.style.backgroundColor = 'rgba(0, 0, 255, 0.6)';
                this.innerHTML = '登录';
                localStorage.removeItem('name');
            })
        }
    })
})
