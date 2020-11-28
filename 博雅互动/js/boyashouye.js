//博雅首页banner部分开始
var banner=document.getElementsByClassName("banner")[0];
var banner1=document.getElementsByClassName("banner1")[0];
var imgUl=banner1.getElementsByTagName("ul")[0];
var imgLis=imgUl.getElementsByTagName("li")[0];
imgUl.appendChild(imgLis.cloneNode(true));
var drop=document.getElementsByClassName("drop")[0];
var dropUl=drop.getElementsByTagName("ul")[0];
var dropLis=dropUl.getElementsByTagName("li");
var opacity=(0,1);

var imgIndex=0;
var imgWidth=1734;
var time=setInterval(moves,3000);
banner.onmouseover=function(){
    console.log(123);
    time && clearInterval(time);
}
banner.onmouseout=function(){
    console.log(456);
    time=setInterval(moves,3000);
}

function moves(){
    imgIndex++;
    banner1.style.left = imgIndex * -imgWidth + "px";
    banner1.style.opacity="0,1"
    if(imgIndex>2){
        imgIndex=0;
        banner1.style.left= "0px";
    }
     for(var k=0;k<dropLis.length;k++){
         dropLis[k].className="";
     }
         dropLis[imgIndex].className="cur";
    }

    for(var m=0;m<dropLis.length;m++){ 
        dropLis[m].index=m;
       dropLis[m].onclick=function(){
            for(var k=0;k<dropLis.length;k++){
                dropLis[k].className="";
            }
           dropLis[this.index].className="cur"; 
            banner1.style.left= this.index * -imgWidth + "px";   
            imgIndex=this.index;
        }
}

// 博雅首页banner部分结束

//博雅首页game-explain部分开始
var gameExplain=document.getElementsByClassName("game-explain")[0];
var explain=document.getElementsByClassName("explain")[0];
var Ul=explain.getElementsByTagName("ul")[0];
explain.appendChild(Ul.cloneNode(true));
console.log(explain);
var drop1=document.getElementsByClassName("drop1")[0];
var drop1Ul=drop1.getElementsByTagName("ul")[0];
var drop1Lis=drop1Ul.getElementsByTagName("li");

var ulIndex=0;//索引
var ulWidth=1000;
var timer=setInterval(move,2000);
gameExplain.onmouseover=function(){
    timer && clearInterval(timer);
}
gameExplain.onmouseout=function(){
    timer=setInterval(move,2000);
}

function move(){
    ulIndex++;
    explain.style.left=ulIndex * -ulWidth + "px";
    if( ulIndex >3){
        ulIndex=0;
        explain.style.left="0px";
    }
    for(var j=0;j<drop1Lis.length;j++){
        drop1Lis[j].className="";
    }
    drop1Lis[ulIndex].className="current";
}

for(var i=0;i<drop1Lis.length;i++){ //遍历圆点
    drop1Lis[i].index=i;//解决函数作用域的问题
    drop1Lis[i].onclick=function(){ //添加点击事件
        for(var j=0; j<drop1Lis.length;j++){ //遍历小圆点颜色
            drop1Lis[j].className=""; //先让圆点颜色为空
        }
    // explain.style.left= this.index * -ulWidth + "px";
    drop1Lis[this.index].className="current"; //循环结束 添加圆点颜色为current;
    animate(explain,{"left": this.index * -ulWidth},500,function(){}) //给动画时间
    ulIndex=this.index; //让索引值和圆点(this.index)的索引一样;
    }
}


// for(var i=0;i<drop1Lis.length;i++){
//     (function(n){
//         drop1Lis[n].onclick=function(){
//             console.log(456);
//             for(var j=0;j<drop1Lis.length;j++){
//                 drop1Lis[j].className="";
//             }
//             drop1Lis[n].className="current";
//             animate(explain,{'left':n*-1000},500,function(){})
//             ulIndex = n;
//         }
//     }(i))
// }


var goTop =document.getElementsByClassName("goTop")[0];

    document.onscroll=function(){ 
        var st=document.body.scrollTop || document.documentElement.scrollTop; 
        var ch=document.body.clientHeight || document.documentElement.clientHeight;
        console.log(st); //500
        console.log(ch); //1430
        goTop.style.display="none";
        if(st >= ch/2-100){
            goTop.style.display="block";
        }
    }

    var isLock = false;
    goTop.onclick=function(){
      if( isLock)return;
        isLock = true;
        var st=document.body.scrollTop || document.documentElement.scrollTop; 
        var targetST=0;
        var totalChange = targetST - st;
        var duration = 2000;
        var totalFame = duration /20;
        var fameChange = totalChange / totalFame;
        var count=0;
        var timer=setInterval(function(){
            count++;
            st += fameChange;
            document.body.scrollTop=st;
            document.documentElement.scrollTop= st;
            if(count >= totalFame){
                document.body.scrollTop=targetST;
                document.documentElement.scrollTop=targetST;
                clearInterval(timer);
                goTop.style.display="block";
                isLock = false;
            }
        },5)
        goTop.style.display="none";
    }