import ReadMore from "./module/readMore.js";
import UpdateFooterYear from "./module/footer.js"
import ScrollSpy from "./module/scrollSpy.js";

const readMore = new ReadMore("#uniqueDetailsDiv")
const footerYear = new UpdateFooterYear("#currentYear"); 
const scrollSpy = new ScrollSpy('header[id], main [id]');
// const animateAbout = new AnimateOnScroll('.about');

footerYear.init();
// readMore.init()
scrollSpy.init();