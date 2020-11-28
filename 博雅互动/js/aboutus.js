var content=document.getElementsByClassName("content")[0];
var contentLeft=content.getElementsByClassName("content-left")[0];
var Ul=contentLeft.getElementsByTagName("ul")[0];
var Lis=Ul.getElementsByTagName("li");
console.log(Lis);
var contentRight=content.getElementsByClassName("content-right");
console.log(contentRight);

for(var i=0;i<Lis.length;i++){
    Lis[i].index=i;
    Lis[i].onclick=function(){
        console.log(123);
         for(var j=0;j<Lis.length;j++){
        //   Lis[j].className="";
        removeClass(Lis[j],"current");
         }
         addClass(Lis[this.index],"current");
        for(var k=0;k<contentRight.length;k++){
        //  contentRight[k].className="";
        removeClass(contentRight[k],"cur");
        }
        // contentRight[this.index].className="cur";
        addClass(contentRight[this.index],"cur");
    }
}