//获取非行间样式
function getStyle(obj,attr)
{
	if(obj.currentStyle)//IE
	{
		return obj.currentStyle[attr];
	}
	else//W3C
	{
		return getComputedStyle(obj,false)[attr];
	}
}

//关闭按钮
function hide(obj)
{
	var oDiv = getStyle(obj,'display');
	if(oDiv == 'none')
	{
		obj.style.display = 'display';
	}
	else
	{
		obj.style.display = 'none';
	}
}

function forkBtn()
{
	// var btnFork = document.getElementById('btnFork');
	document.getElementById('mask').style.display = 'block';
};
function closeForm()
{
	document.getElementById('mask').style.display = 'none';
}




// cookie
var CookieUtil = {
	// 读取cookie
	get : function (name) 
	{
	    var cookieName = encodeURIComponent(name)+"=",
	    cookieStart = document.cookie.indexOf(cookieName),
	    cookieValue = null;
	    if(cookieStart > -1){
	        var cookieEnd = document.cookie.indexOf(";",cookieStart);
	        if(cookieEnd == -1)
	        {
	            cookieEnd = document.cookie.length;
	        }
	        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
	    }
	    return cookieValue;
	},
	// 设置cookie
	set : function (name, value, expires, path, domain, secure)
	{
	    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	    if (expires instanceof Date)
	        cookieText += '; expires=' + expires.toGMTString();
	    if (path)
	        cookieText += '; path=' + path;
	    if (domain)
	        cookieText += '; domain=' + domain;
	    if (secure)
	        cookieText += '; secure=' + secure;
	    document.cookie = cookieText;
	},
	// 删除cookie
	remove : function (name, path, domain) 
	{
	    this.set(name, '', new Date(0), path, domain);
	}
}

// 点击不再提醒使小黄条隐藏，并设置cookie
function btnHide()
{
    document.getElementById('ad').style.display='none';
    CookieUtil.set('btnHide','btnHide');
}

// 检测是否设置小黄条的隐藏cookie
function closecheck()
{
    var cookie = CookieUtil.get('btnHide');
    if(cookie == 'btnHide'){
        document.getElementById('ad').style.display='none';
    }else{
        document.getElementById('ad').style.display='block';
    }
}

// 检测是否设置关注cookie
function attYN(){
    var cookie=getcookie('followSuc');
    if(!!cookie){
        document.getElementsByClassName('usrAtt')[0].style.display='none';
        document.getElementsByClassName('usrAtt-af')[0].style.display='block';
    }else{
        document.getElementsByClassName('usrAtt')[0].style.display='block';
        document.getElementsByClassName('usrAtt-af')[0].style.display='none';
    }
}

// 点击关注，检测是否登录，若登录则
function loginYN(){
    var cookie=getcookie('loginSuc');
    if(!!cookie){
        //调用关注API
        attention();
    }else{
        // 弹出登录窗
        document.getElementsByClassName('m-mask')[0].style.display='block';
        document.getElementsByClassName('m-formwrap')[0].style.display='block';

    }
}

//轮播图
var oBanner = document.getElementById('banner');
var aImg = oBanner.getElementsByTagName('a');
var oUl = oBanner.getElementsByTagName('ul')[0];
var aLi = oUl.getElementsByTagName('li');

//轮播初始化
for(var i=0;i<aImg.length;i++)
{
	aImg[i].style.display = 'none';
}
aImg[0].style.display = 'block';

for(var i=0;i<aLi.length;i++)
{
	aLi[i].style.background = '#ffffff';
}
aLi[0].style.background = '#333'



//轮播计数器
var now = 1;


//自动轮播
var timer = setInterval(fn,5000);


//手动轮播器
for(var i=0;i<aLi.length;i++)
{
	aLi[i].index = i;
	aLi[i].onmouseover = function()
	{
		clearInterval(timer);
		banner(this);
		fadeIn(aImg[this.index]);
	};

	aLi[i].onmouseout = function()
	{
		now = this.index + 1;
		timer = setInterval(fn,5000);
	};
}
for(var i=0;i<aImg.length;i++)
{
	aImg[i].onmouseover = function()
	{
		clearInterval(timer);
	};

	aImg[i].onmouseout = function()
	{
		timer = setInterval(fn,5000);
	};
}

function banner(obj)
{
	for(var i=0;i<aImg.length;i++)
	{
		aImg[i].style.display = 'none';
		aLi[i].style.background = '#ffffff';
	}
	aImg[obj.index].style.display = 'block';
	obj.style.background = '#333';
	
};

//淡入淡出效果
function fadeIn(ele)
{
    ele.style.opacity=0;
    // 每次透明度变化0.1，隔50ms一次，共10次
    for(var i=1;i<=10;i++)
    {(
    	function()
        {
            var num=i*0.1;
            setTimeout(function()
            {
                ele.style.opacity=num;
            },i*50);
        }
    )(i);
    }
}

//计时器处理方法
function fn()
{
	if(now >= aLi.length)
	{
		now = 0;
	}
	banner(aLi[now]);
	fadeIn(aImg[now]);
	now++;
}



window.onload = function()
{
	var adBtn = document.getElementById('ad-close');
	var btnFork = document.getElementById('btnFork');
	var oMask = document.getElementById('mask');
	var oMaskClose = document.getElementById('mask-close')
	adBtn.onclick = btnHide;
	btnFork.onclick = forkBtn;
	oMaskClose.onclick = closeForm;
	closecheck();
}