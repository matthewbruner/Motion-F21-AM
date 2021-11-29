// import { gsap } from "gsap";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools);

const mainTL = gsap.timeline();

mainTL.from("Ball",{duration:0.5, y:"-=500", ease:"none"})





GSDevTools.create();