// import { gsap } from "gsap";
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";


gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

mainTL.to("#Macaw1",{duration:1, alpha:0, scale:2})













//mainTL.from("#hero >div",{duration:2, alpha:0, x:1000 })
//   .from ("#hero h2",{duration:0.5, alpha:0, y:"+=200"})
//   .from ("#hero h1",{duration:0.5, alpha:0, y:"-=200"})
//    .from("#content >div",{duration:1.5, alpha:0, x:-1000 });

GSDevTools.create();