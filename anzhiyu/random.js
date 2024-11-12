var posts=["2024/11/11/hello-world/","2024/11/12/一年暴涨100倍！狗狗币最新挖矿教程，电脑也能快速挖，马斯克-特朗普助推-2024/","2024/11/12/Vercel-构建的功能齐全、可破解的-Next-js-AI-聊天机器人/","2024/11/12/安装AnZhiYu主题并个性化配置/","2024/11/12/MosDNS-是一个插件化的-DNS-转发-分流器/","2024/11/12/Web-管理页面设置/","2024/11/12/一件点击永久免费Adobe最新2025-快速教程/","2024/11/12/【日常必备】免费开源的同步工具Syncthing，会用很重要！/","2024/11/12/有了这个就可以弥补飞牛nas缺失的文件同步功能了/","2024/11/12/一款非常值得推荐的文件同步工具，完全开源/","2024/11/12/一键部署-Bitwarden-密码管理器/","2024/11/12/永久免费使用-Google-云服务器！/","2024/11/12/本地部署-微软-New-Bing-AI-聊天机器人！-无需翻墙，国内轻松自如使用/","2024/11/12/狗狗币最新挖矿教程！附挖矿软件，新手也能快速上手！-2024/","2024/11/12/上网成瘾？让孩子远离手机的3种断网/","2024/11/12/真正永久免费的VPS！-甲骨文云放心白嫖，4H-24G-内存/","2024/11/12/【颠覆认知】每个币圈人都避不开一只“黑天鹅”/","2024/11/12/人生只要懂得抓住一次黑天鹅就足以自由/"];function toRandomPost(){
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