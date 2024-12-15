import Chart from 'chart.js/auto';

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

const viewportWidth = window.innerWidth;

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const loaderLogo = document.getElementById("loader-logo");
    const hero = document.getElementsByClassName("hero");
    const heroLogo = document.getElementById("hero-logo");
  
    // Initial animation of the loader
    gsap.fromTo(
      loaderLogo,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5,width:'200px', translateY:'-5vh', ease: "power2.inOut" }
    );
  
    // Animate loader transition to the hero section
    gsap.to(loader, {
        delay: 1.5, // Wait 2 seconds
        opacity: 0, // Fade out
        duration: 1, // Duration of fade-out
        background: "radial-gradient(circle, #ff4500, #000)", // Animate to a new radial gradient
        ease: "power2.out",
        onComplete: () => {
          loader.style.display = "none"; // Hide the loader after fade-out
        },
    });
  
    // Animate hero section reveal
    gsap.to(hero, {
      delay: 0.5,
      opacity: 1,
      duration: 1,
      onStart: () => {
        // Slide logo into its position in the hero section
        gsap.fromTo(
          heroLogo,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
      },
    });
});

// Cancel animations if viewport width is less than 768px (e.g., for mobile)
if (viewportWidth < 768) {
// Kill all ScrollTriggers and GSAP animations
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    document.querySelector(".dash-animate").style.display = 'none';
    console.log("Animation canceled due to small viewport.");

    const ctx = document.getElementById('chart');
    // ctx.width = 600;  // Set the width dynamically
    // ctx.height = 400; // Set the height dynamically
    const data = {
        labels: [
          'Piassa',
          'Offline',
        //   'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 35],
          backgroundColor: [
            '#ff3c00',
            '#6225128f',
            // 'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
    };

    const chart = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          animation: {
            delay:5000,
            duration:1000
          },
          rotation: 210,
          plugins:{
            legend:{
              display:false
            },tooltip: {
              enabled: false, // Tooltips are still enabled
            }
          }
        },
        plugins: [
          {
            id: 'labelOnSlices',
            afterDraw(chart) {
              const { ctx, chartArea: { width, height }, data } = chart;
              const meta = chart.getDatasetMeta(0); // Dataset metadata
              const total = data.datasets[0].data.reduce((a, b) => a + b, 0); // Total value of data

              ctx.save();
              ctx.font = '11px Poppins';
              ctx.fillStyle = 'white'; // Label color
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';

              // Loop through each slice
              meta.data.forEach((element, index) => {
                const { x, y } = element.tooltipPosition(); // Center position of each slice
                // console.log(data.datasets[0].data[index]);
                var percentage = ((data.labels[index] == "Piassa" ? 1500 : 150));
                // Combine label and percentage
                var labelText = `${data.labels[index]} ${percentage}`;
                
                // Draw text on the slice
                ctx.fillText(labelText, x, y);
              });

              ctx.restore();
            }
          }
        ]
    });
} 
else {
    tl.to('.dashboard',{
        // scrollTrigger:{},
        duration:2,
        perspective:'600px',
        // transformStyle:'none',
        // rotateX:0,
        y:100
    });
    tl.to('.dashboard',{
        
        duration:3,
        // perspective:'600px',
        transformStyle:'none',
        rotateX:0,
        // scale:1.2,
        // force3D: true, // Forces GPU acceleration
        smooth: true,  // Prevents jagged rendering
        y:400
    });
    
    ScrollTrigger.create({
        trigger:'.dashboard',
        animation:tl,
        start:'top center',
        end:'+=300 center',
        
        onUpdate: (self) => {
                    const progress = self.progress; // Animation progress (0 to 1)
                    const parent = document.querySelector(".dash-animate");
              
                    parent.style.width = `${(545+(progress * 130.5))}px`; // Slight scaling on the parent
                    parent.style.left = `${(281-(progress * 56))}px`; // Slight scaling on the parent
                  },
        // markers:true,
        scrub:true
    });

    const ctx = document.getElementById('chart');
    // ctx.width = 600;  // Set the width dynamically
    // ctx.height = 400; // Set the height dynamically
    const data = {
        labels: [
          'Piassa',
          'Offline',
        //   'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [0, 0],
          backgroundColor: [
            '#ff3c00',
            '#6225128f',
            // 'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
    };

    const chart = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          animation: {
            delay:2000,
            duration:1000
          },
          rotation: 210,
          plugins:{
            legend:{
              display:false
            },tooltip: {
              enabled: false, // Tooltips are still enabled
            }
          }
        },
        plugins: [
          {
            id: 'labelOnSlices',
            afterDraw(chart) {
              const { ctx, chartArea: { width, height }, data } = chart;
              const meta = chart.getDatasetMeta(0); // Dataset metadata
              const total = data.datasets[0].data.reduce((a, b) => a + b, 0); // Total value of data

              ctx.save();
              ctx.font = '16px Poppins';
              ctx.fillStyle = 'white'; // Label color
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';

              // Loop through each slice
              meta.data.forEach((element, index) => {
                const { x, y } = element.tooltipPosition(); // Center position of each slice
                // console.log(data.datasets[0].data[index]);
                var percentage = ((data.labels[index] == "Piassa" ? 1500 : 150));
                // Combine label and percentage
                var labelText = `${data.labels[index]} ${percentage}`;
                
                // Draw text on the slice
                ctx.fillText(labelText, x, y);
              });

              ctx.restore();
            }
          }
        ]
    });

    // Animate data values
    tl.to(chart.data.datasets[0].data, {
      scrollTrigger: {
        trigger: ".chart",
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true, // Debugging markers
      },
      duration: 1,
      endArray: [65,35], // New values
      ease: 'power2.inOut',
      onUpdate: () => chart.update(),
    });

    // Animate rotation
    tl.to(chart.options, {
      duration: 2,
      rotation: 210, // Full rotation
      ease: 'power1.inOut',
      onUpdate: () => chart.update(),
    });
}