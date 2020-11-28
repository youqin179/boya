// 博雅游戏的content-left/right js部分开始
var content=document.getElementsByClassName("content")[0];
var contentLeft=content.getElementsByClassName("content-left")[0];
var Ul=contentLeft.getElementsByTagName("ul")[0];
var Lis=Ul.getElementsByTagName("li");
var contentRight=content.getElementsByClassName("content-right");
var pic2=document.getElementsByClassName("pic2")[0];
var img1=pic2.getElementsByClassName("big-pic2")[0];
var img2=pic2.getElementsByTagName("i")[0];


for(var i=0; i<Lis.length;i++){
    Lis[i].index = i;
     Lis[i].onclick =function(){
        console.log(789);
          for(var j=0; j<Lis.length;j++){
             removeClass(Lis[j],"cur");
          }
             addClass(Lis[this.index],"cur");
              for(var k=0; k<contentRight.length; k++){
                 removeClass(contentRight[k],"current");
             }
            addClass(contentRight[this.index],"current");
    }
}

 pic2.onmouseover=function(){
    console.log(123);
    img1.style.display="block";
    img2.style.display="block";
 }
 pic2.onmouseout=function(){
    console.log(123);
    img1.style.display="none";
    img2.style.display="none";
 }
//博雅游戏的content-left/right js部分结束