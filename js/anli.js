{
    $(".wc_biaoti1")
        .mouseenter(function () {
            let index = $(this).index(".wc_biaoti1");
            $(".jindutiao").removeClass("active2").eq(index).addClass("active2");
            $(".yangtai").removeClass("active1").eq(index).addClass("active1");
        })
}