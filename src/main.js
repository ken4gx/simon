import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// Import Select2 CSS
import 'select2/dist/css/select2.min.css';
// Import Select2 Bootstrap theme
import 'select2-bootstrap-theme/dist/select2-bootstrap.min.css';
// Import Select2 Bootstrap 4 theme CSS
import '@ttskch/select2-bootstrap4-theme/dist/select2-bootstrap4.min.css';

import $ from 'jquery';
import 'popper.js';
import 'bootstrap';


import './scroll.js';

import './modal.js';














// tl.to('.dashboard',{
//     duration:2,
//     // perspective:'none',
//     // transformStyle:'none',
//     // rotateX:0,
//     y:50

// });

// ScrollTrigger.create({
//     trigger:'.dash-animate',
//     // animation:tl,
//     // start:'top center',
//     // end:'+=300 center',
//     // onEnter: () => {
//     //     document.querySelector(".dash-animate").style.perspective = "none";
//     //     document.querySelector("#dashboard").style.transformStyle = "none";
//     //     document.querySelector("#dashboard").style.rotateX = "none";
//     // },
//     // onEnterBack: () => {
//     //     document.querySelector(".dash-animate").style.perspective = "1200px";
//     //     document.querySelector("#dashboard").style.transformStyle = "preserve-3d";
//     //     document.querySelector("#dashboard").style.rotateX = "-45deg";
//     // },
//     onUpdate: (self) => {
//         const progress = self.progress; // Animation progress (0 to 1)
//         const parent = document.querySelector(".dash-animate");
  
//         // Example: Change background color or opacity of the parent div
//         // parent.style.backgroundColor = `rgba(255, 0, 0, ${progress})`;
//         parent.style.width = `${(progress * 100)}%`; // Slight scaling on the parent
//       },
//     markers:true,
//     scrub:true
// });

// gsap.to('.dash-animate',{
//     scrollTrigger:{
//         trigger:'.dash-animate',
//         start:'top center',
//         end:'+=100 center',
//         markers:true,
//         scrub:true
//     },
//     duration:2,
//     // perspective:'none',
//     // transformStyle:'none',
//     // rotateX:0,
//     y:100

// });

// gsap.to('.dash-animate',{
//     scrollTrigger:{
//         trigger:'.dash-animate',
//         start:'top center',
//         end:'+=300 center',
//         onEnter: () => {
//             document.querySelector(".dash-animate").style.perspective = "none";
//             document.querySelector("#dashboard").style.transformStyle = "none";
//             document.querySelector("#dashboard").style.rotateX = "none";
//         },
//         onEnterBack: () => {
//             document.querySelector(".dash-animate").style.perspective = "1200px";
//             document.querySelector("#dashboard").style.transformStyle = "preserve-3d";
//             document.querySelector("#dashboard").style.rotateX = "-45deg";
//         },
//         markers:true,
//         scrub:true
//     },
//     duration:2,
//     // perspective:'none',
//     // transformStyle:'none',
//     // rotateX:0,
//     y:200
// });