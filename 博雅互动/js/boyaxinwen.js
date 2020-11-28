var content=document.getElementsByClassName("content")[0];
var contentLeft=content.getElementsByClassName("content-left")[0];
var Ul=contentLeft.getElementsByTagName("ul");
console.log(Ul);
var contentFoot=document.getElementsByClassName("content-foot")[0];
var footUl=contentFoot.getElementsByTagName("ul")[0];
var footLis=footUl.getElementsByTagName("li");
console.log()

for(var i=0;i<footLis.length;i++){
    footLis[i].index=i;
    footLis[i].onclick = function(){
        console.log(123);
         for(var j=0;j<Ul.length;j++){
        //  removeClass(Ul[j],"cur");
         Ul[j].className="";
         }
          Ul[this.index].className="cur"; 
        //  addClass(Ul[this.index],"cur");
    }
}
