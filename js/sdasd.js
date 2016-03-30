function getHotlist(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                var hotlist=JSON.parse(xhr.responseText),
                listnum=0;
                for(var i=0;i<10;i++){
                    var topi=document.getElementsByClassName('topi')[i],
                    detailtt=topi.getElementsByTagName('a')[0],
                    tophot=topi.getElementsByTagName('span')[0],
                    topimg=topi.getElementsByTagName('img')[0];
                    detailtt.innerHTML=hotlist[i].name;
                    detailtt.title=hotlist[i].name;
                    tophot.innerHTML=hotlist[i].learnerCount;
                    topimg.src=hotlist[i].smallPhotoUrl;
                }
                listnum=1;
                var changehot=setInterval(function(){
                    if(listnum==1){
                        for(var i=0;i<10;i++){
                            var topi=document.getElementsByClassName('topi')[i],
                            detailtt=topi.getElementsByTagName('a')[0],
                            tophot=topi.getElementsByTagName('span')[0],
                            topimg=topi.getElementsByTagName('img')[0]
                            xhri=i+10;
                            detailtt.innerHTML=hotlist[xhri].name;
                            detailtt.title=hotlist[xhri].name;
                            tophot.innerHTML=hotlist[xhri].learnerCount;
                            topimg.src=hotlist[xhri].smallPhotoUrl;
                        }
                        listnum--;
                    }else if(listnum==0){
                        for(var i=0;i<10;i++){
                            var topi=document.getElementsByClassName('topi')[i],
                            detailtt=topi.getElementsByTagName('a')[0],
                            tophot=topi.getElementsByTagName('span')[0],
                            topimg=topi.getElementsByTagName('img')[0]
                            xhri=i;
                            detailtt.innerHTML=hotlist[xhri].name;
                            detailtt.title=hotlist[xhri].name;
                            tophot.innerHTML=hotlist[xhri].learnerCount;
                            topimg.src=hotlist[xhri].smallPhotoUrl;
                        }
                        listnum++;
                    }
                },5000);
            }
        }
    }
    xhr.open("get",'http://study.163.com/webDev/hotcouresByCategory.htm',true);
    xhr.send(null);
    
}
