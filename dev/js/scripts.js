// import { gsap } from "gsap";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools);


const mainTL = gsap.timeline();
mainTL.set("#goat-animation",{transformOrigin:"50% 50%",scale:2});
mainTL.set(".logo",{alpha:0,y:-150});
mainTL.set(".ball",{alpha:0,y:-150});
mainTL.set(".falling",{alpha:0,y:10});
mainTL.set(".splash",{alpha:0});
mainTL.set(".subtitle",{alpha:0,y:30});

// tl.from(".logoParts #Vector_14",{drawSVG:"100% 100%", ease:"power4.out", duration:2});

// mainTL.from(".falling #Vector1",{y:30,duration:2});



function ballDrop(){
    const tl=gsap.timeline();
    tl.to(".falling",{scaleY:-2,drawSVG:"100% 100%",duration:.6,alpha:1,stagger:.1});
    
    tl.to(".ball",{y:0,alpha:1,ease:"bounce.out",duration:1},"-=1");
    tl.to(".splash",{duration:.3,drawSVG:"100% 100%",alpha:1,stagger:.1},"-=.55");
    
    
    // tl.from(".falling",{drawSVG:"0% 100%",duration:.5,stagger:.3},"-=.2");
    tl.to(".logo",{y:0,stagger:.3,alpha:1,ease:"bounce.out",duration:1},"-=.2");

    return tl;
}

function subText(){
    const tl=gsap.timeline();
    tl.to(".subtitle",{y:0,duration:1,alpha:1,ease:"power2.inOut"});
    return tl;
}


mainTL.add(ballDrop(),"+=.5")
.add(subText(),"-=.7");


// gsap.set(".liveballs_class",{x:-28,y:300,alpha:0,scale:.4,transformOrigin:"50% 50%"});
// gsap.set(".letters",{alpha:100});
// gsap.set(".lines",{scale:.4,y:300,alpha:1});

// // tl.from(".logoParts #Vector_14",{drawSVG:"100% 100%", ease:"power4.out", duration:2});
// // mainTL.from("#ball",{duration:3, y:"-=400", ease:"bounce.out"});
// mainTL.from(".lines #Vector",{duration:2,drawSVG:"100% 100%"});
// mainTL.from(".letters",{duration:3, y:"-=350", ease:"bounce.out", stagger:.3},"-=2");
// mainTL.to(".liveballs_class",{duration:1, alpha:1, stagger:.3, ease:"power2.inOut",y:225},"-=1");

// // mainTL.from("#ball",{duration:2, rotation:20})



GSDevTools.create();
DrawSVGPlugin.create();
