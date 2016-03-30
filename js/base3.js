function programList(){
    var tabx='10';
    var tab=document.getElementsByClassName('tab')[0],
    program=tab.getElementsByTagName('a')[0],
    design=tab.getElementsByTagName('a')[1];
    if(design.className=="tab-active f-fl"){
        program.className="tab-active f-fl";
        design.className="f-fl";
        tabx='10';
        loadcourse('10','20','1');
        // var pagex=page.getElementsByTagName('a');
        //  pagex[1].className="pgselected f-fl";
        // for(var i=2;i<pagex.length-1;i++){
        //     pagex[i].className="pagei f-fl";
        // }
    }
}