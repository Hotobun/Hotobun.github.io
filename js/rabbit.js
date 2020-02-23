/*
 * @Description: pass
 * @version: 1.0
 * @Author: Hotobun
 * @Date: 2020-02-20
 * @Remember to eat on time
 */

window.onload = function () {
    // Only the first three properties need to be modified
    // rabbit.user.imghref: Click the avatar to jump to the URL
    var busuanzi = true;
    var domain = window.location.host.replace("www.", ''); 
    var rabbit = {
        // if language == zh-CN: imgsrc_cn else imgsrc
        "cocoa": {
            "cover": "#ff969a",
            "text": "＼お姉ちゃんに任せなさい .zZ／",
            "site": "hotococoa.com",
            "imgsrc": "/img/cocoa.jpg", 
            "imghref": "https://hotobun.gitee.io/hexo", 
            "imgsrc_cn": "https://hotobun.gitee.io/hexo/img/rabbit/cocoa.jpg", 
            "access": 200
        },
        "chino": {
            "cover": "#87CEFA",
            "text": "＼昨日酔拳を習いました!／",
            "site": "kafuuchino.com",
            "imgsrc": "/img/chino.jpg",
            "imghref": "javascript:void(0)",
            "imgsrc_cn": "https://hotobun.gitee.io/hexo/img/rabbit/chino.jpg",
            "access": 200
        },
        "rize": {
            "cover": "#895FB7",
            "text": "＼普通の女子高生だから信じろ／",
            "site": "tedezarize.com",
            "imgsrc": "/img/rize.jpg",
            "imghref": "https://twitter.com/sangou3",
            "imgsrc_cn": "https://hotobun.gitee.io/hexo/img/rabbit/rize.jpg",
            "access": 200
        },
        "chiya": {
            "cover": "#7db357",
            "text": "＼はい、こちら新作の黒曜を抱く桜華よ／",
            "site": "ujimatsuchiya.com",
            "imgsrc": "/img/chiya.jpg",
            "imghref": "javascript:void(0)",
            "imgsrc_cn": "https://hotobun.gitee.io/hexo/img/rabbit/chiya.jpg",
            "access": 200
        },
        "sharo": {
            "cover": "#F5D292",
            "text": "＼みんな～! 今日は私と遊んでくれてありがと～!／",
            "site": "kirimasharo.com",
            "imgsrc": "/img/sharo.jpg",
            "imghref": "https://syaro.cn/",
            "imgsrc_cn": "https://hotobun.gitee.io/hexo/img/rabbit/sharo.jpg",
            "access": 200
        },
    }

    // iscn and ispc type ==> bool
    var iscn = navigator.language == "zh-CN";
    var ispc = function () {
        //Change style for mobile browser        
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }()

    var site_flag = false;
    if (ispc != true) {
        document.getElementById("rabbit_footer").style = "width:80%;left:10%;right:10%;";
    }
    for (i in rabbit) {
        var img = document.createElement("img");
        var a = document.createElement("a"); 
        if (rabbit[i].site == domain) {
            site_flag = true;
            img.height = 250;
            img.width = 250;
            img.alt = i;
            img.src = iscn ? rabbit[i].imgsrc_cn : rabbit[i].imgsrc;
            a.href = rabbit[i].imghref;
            a.append(img);
            document.getElementById("image").append(a);
            document.getElementById("h1text").append(document.createTextNode(rabbit[i].site));
            document.getElementById("h1text").append(document.createElement("br"));
            document.getElementById("text").append(document.createTextNode(rabbit[i].text));
            document.title = i;
            document.body.style.background = rabbit[i].cover;
        } else {
            img.className = "rabbit_img"
            img.src = iscn ? rabbit[i].imgsrc_cn : rabbit[i].imgsrc;
            img.alt = i;
            a.href = "http://" + rabbit[i].site;
            a.alt = i;
            a.target = "vieww_window";
            a.append(img);
            var div = document.createElement("div");
            div.className = 'rabbit';
            div.append(a);
            if (ispc) {
                var circle = document.createElement('div');
                circle.className = "circle";
                if (rabbit[i].access == 200) {
                    circle.style = "background-color: " + rabbit[i].cover + ";";
                } else {
                    circle.style = "";
                }
                div.append(circle);
            } else {
                img.style = "width: 95%";
            }
            if (rabbit[i].access != 200) {
                a.href = "javascript:void(0)";
                a.onclick = function () {
                    alert("Domain not sold!")
                }
                a.target = '';
            }
            document.getElementById("rabbit_footer").append(div)
        }
    }
    if (site_flag==false){
        alert("Your domain name is not in the target")
    }
    if (busuanzi){
        var bszdiv = document.createElement("div");
        var s1 = document.createElement("span");
        var s2 = document.createElement("span");
        s1.id="busuanzi_value_site_pv"
        s2.id="busuanzi_value_site_uv"
        bszdiv.append(s1);
        bszdiv.append(s2);
        bszdiv.className="count";
        bszdiv.style="display: none;"
        document.body.append(bszdiv);
        var bszs = document.createElement("script")
        bszs.src="/js/busuanzi.pure.mini.js";
        document.body.append(bszs);      
    }
    console.log("%c Github %c", "background:#24272A; color:#ffffff", "", "https://github.com/Hotobun/Hotobun.github.io")
    console.log("Remember to eat on time!")
}