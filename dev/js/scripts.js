// import { gsap } from "gsap";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools);


const mainTL = gsap.timeline();
gsap.set(".liveballs_class",{x:-28,y:300,alpha:0,scale:.4,transformOrigin:"50% 50%"});
gsap.set(".letters",{alpha:100});

mainTL.from("#ball",{duration:3, y:"-=400", ease:"bounce.out"});
mainTL.from(".letters",{duration:3, y:"-=350", ease:"bounce.out", stagger:.3},"-=2");
mainTL.to(".liveballs_class",{duration:1, alpha:1, stagger:.3, ease:"power2.inOut",y:225},"-=1");

// mainTL.from("#ball",{duration:2, rotation:20})





GSDevTools.create();