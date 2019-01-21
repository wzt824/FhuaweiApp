

$(".e-touch").on('touchmove',function(event){
    //screenWidth:屏幕分辨率宽度
    var screenWidth = $(window).width();
    //获取ul下的li总数
    var liCount = $(".e-touch li").length;
    //index:获取当前被点击的图片的索引值
    var index = $(".e-touch li").index();
    //最小滑动距离，当左右滑动距离小于这个值时，图片返回原位置，不产生向左或者向右切换图片的效果
    var minMoveDis = 100;
    //获取点击x坐标
    var _touch = event.originalEvent.targetTouches[0];
    var clickX = _touch.pageX;
    $("li").on('touchmove',function(event){
//移动过程中，距离最开始点击位置的X距离
        var _sectouch = event.originalEvent.targetTouches[0];
        var distance = _sectouch.pageX - clickX ;
        var moveX = distance*(-1) + screenWidth * index * (-1);
        $('li').css("transform","translate3d("+moveX+"px,0,0)");
//滑动事件结束时
        $('li').on('touchend',function(){
            if (0 < distance < minMoveDis ) {
                moveX = index *screenWidth*(-1);
            }
            if(distance >=minMoveDis ){
                moveX = (index+1) *screenWidth*(-1);
            }
            if(distance <=0){
                moveX = (index-1) *screenWidth*(-1);
            }
            $('li').css("transform","translate3d("+moveX+"px,0,0)");
            $('li').off('touchmove');
        });
    });
})






























