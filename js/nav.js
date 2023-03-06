$(".nav-list li,.navlist li,nav ul li").each(function(){
    var index=$(this).index();
    var a =$(this).children("a");
    if (index>0) {
        a.attr("href",'index_'+index+'.html');
    }else{
        a.attr("href",'index.html');
    }
    var c ='index_'+index+'.html';
    var b =$(this).children("div").children("a");
    b.attr("href",c);
});
$('.met-logo,.brand a').attr("href",'index.html');