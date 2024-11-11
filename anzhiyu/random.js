var posts=["2024/11/11/12413413/","2024/11/11/My-New-Post/","2024/11/11/My-New-Post111111/","2024/11/11/hello-world/","2024/11/11/这是什么东西来的/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };