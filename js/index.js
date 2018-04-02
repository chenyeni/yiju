//banner
{
    $(".banner_1").mouseenter(function () {
        let index = $(this).index(".banner_1");
        $(".banner_lan").removeClass("active").eq(index).addClass("active");
        $(".banner-img").removeClass("active1").eq(index).addClass("active1");
        n = index;
    })

    let n = 0;
    let l = $(".banner-img").length;

    let st = setInterval(move, 3000);

    function move() {
        n++;
        if (n === l) {
            n = 0;
        }
        if (n < 0) {
            n = l - 1;
        }
        $(".banner_lan").removeClass("active").eq(n).addClass("active");
        $(".banner-img").removeClass("active1").eq(n).addClass("active1");

    }

    $(".banner_center").mouseenter(function () {
        clearInterval(st);
    });
    $(".banner_center").mouseleave(function () {
        st = setInterval(move, 3000);
    })
}
//btn
{
    let n=0;
    $(".al_rjt").click(function () {
        n++;
        if(n>1){
            $("al_rjt").addClass(".active2");
        }
        $("al-img").cssText(

        )
    })
}


{
    const prev=document.querySelector(".yiju_content2_dngwei_kuai1");
    const next=document.querySelector(".yiju_content2_dngwei_kuai2");
    const imgs=document.querySelectorAll(".yiju_content2_left_img");
   
    
    imgs.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            for(let i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active");
                // pages[i].classList.remove("active");
            }
            // this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    //自动播放
    let n=0;
    let t=setInterval(move,3000);
    function move() {
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            // pages[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        // pages[n].classList.add("active");
    }
    //点击事件
    next.onclick=function () {
        move();
    };
    prev.onclick=function () {
        n-=2;
        move();
    }
}