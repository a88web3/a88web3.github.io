var posts=["2024/11/12/MosDNS-是一个插件化的-DNS-转发-分流器/","2024/11/12/Web-管理页面设置/","2024/11/11/hello-world/","2024/11/12/【日常必备】免费开源的同步工具Syncthing，会用很重要！/","2024/11/12/一年暴涨100倍！狗狗币最新挖矿教程，电脑也能快速挖，马斯克-特朗普助推-2024/","2024/11/12/一件点击永久免费Adobe最新2025-快速教程/","2024/11/12/一款非常值得推荐的文件同步工具，完全开源/","2024/11/12/一键部署-Bitwarden-密码管理器/","2024/11/12/上网成瘾？让孩子远离手机的3种断网/","2024/11/12/安装AnZhiYu主题并个性化配置/","2024/11/13/打造稳定快速、高效免费图床/","2024/11/12/有了这个就可以弥补飞牛nas缺失的文件同步功能了/","2024/11/12/本地部署-微软-New-Bing-AI-聊天机器人！-无需翻墙，国内轻松自如使用/","2024/11/12/狗狗币最新挖矿教程！附挖矿软件，新手也能快速上手！-2024/","2024/11/12/真正永久免费的VPS！-甲骨文云放心白嫖，4H-24G-内存/","2024/11/12/永久免费使用-Google-云服务器！/","2024/11/13/2024年最好用的免费谷歌浏览器插件分享，全部亲测好用附链接/","2024/11/13/【Adobe全家桶2024】10月最新版-免费下载（附安装包）/","2024/11/13/可以国内外访问，速度超快，超级稳定，个人博客首选/","2024/11/14/FreeFileSync自动同步器/","2024/11/13/光猫改桥接后又恢复路由模式，原来运营商有限制，教你脱离控制/","2024/11/14/openwr旁路由-內網穿透cloudflareTunnel隧道完成-訪問內網所有設備/","2024/11/15/软路由-openwrt插件ddns-go设置与使用，如何获取api密钥，实现自动获取公网IP/","2024/11/19/最屌协议-Hysteria2-节点搭建，抢占宽带，拯救垃圾线路！提升上网速度/","2024/11/19/【最新】保姆级搭建-VPS-教程，一键搭建X-UI面板，安全稳定的专属节点搭建方法，VLESS-Vision-Reality-协议，晚高峰高速稳定，4K秒开的科学上网线路体验/","2024/11/20/3X-UI面板轻松搭建链式代理，实现vless-vmess使用住宅ip或者socks节点，还可以针对不同的网站进行分流，让你的VPS节点重新支持解锁tiktok、chatgpt/","2024/11/24/前端工程师/","2024/11/24/区块链开发工程师/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };