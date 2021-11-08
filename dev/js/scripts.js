// import { gsap } from "gsap";
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";


gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();


function macawanimation (){
const tl = gsap.timeline();
tl.to("#Group1A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group2A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group3A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group4A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group5A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group6A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group7A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group8A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group9A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group10A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group11A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group12A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group13A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group14A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group15A", {duration: 0.1, autoAlpha: 0});
tl.to("#Group16A", {duration: 0.1, autoAlpha: 0});
return tl;
}


mainTL.add(macawanimation)










//mainTL.from("#hero >div",{duration:2, alpha:0, x:1000 })
//   .from ("#hero h2",{duration:0.5, alpha:0, y:"+=200"})
//   .from ("#hero h1",{duration:0.5, alpha:0, y:"-=200"})
//    .from("#content >div",{duration:1.5, alpha:0, x:-1000 });

GSDevTools.create();