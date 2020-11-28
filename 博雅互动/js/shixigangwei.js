var banner=document.getElementsByClassName("banner")[0];
var bannerNav=banner.getElementsByClassName("banner-nav")[0];
var bannerUl=bannerNav.getElementsByTagName("ul")[0];
var bannerLis=bannerUl.getElementsByTagName("li");
var content=document.getElementsByClassName("content");

for(var i=0;i<bannerLis.length;i++){
    bannerLis[i].index=i;
    bannerLis[i].onclick=function(){
        console.log(123);
        for(var j=0;j<bannerLis.length;j++){
            removeClass(bannerLis[j],"cur");
        }
            addClass(bannerLis[this.index],"cur");
            for(var k=0;k<content.length;k++){
            removeClass(content[k],"current");
     }
            addClass(content[this.index],"current");
        }
    }

