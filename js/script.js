/*=========================================
  PREMIUM BUSINESS WEBSITE SCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      STICKY HEADER SHADOW
    ==============================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "rgba(255,255,255,.95)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

        } else {

            header.style.background = "rgba(255,255,255,.75)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        }

    });


    /*==============================
      BACK TO TOP BUTTON
    ==============================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });


    /*==============================
      COUNTER ANIMATION
    ==============================*/

    const counters = document.querySelectorAll(".count");

    counters.forEach(counter => {

        counter.innerText = "0";

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");

            const current = +counter.innerText;

            const increment = Math.ceil(target / 100);

            if (current < target) {

                counter.innerText = current + increment;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });


    /*==============================
      SCROLL REVEAL
    ==============================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    document.querySelectorAll(".card,.about-grid,.hero,.contact,.cta").forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });


    /*==============================
      BUTTON RIPPLE EFFECT
    ==============================*/

    document.querySelectorAll(".primary-btn,.secondary-btn,.order-btn,.login-btn")
        .forEach(button => {

            button.addEventListener("click", function(e) {

                const ripple = document.createElement("span");

                ripple.className = "ripple";

                const rect = this.getBoundingClientRect();

                ripple.style.left = (e.clientX - rect.left) + "px";
                ripple.style.top = (e.clientY - rect.top) + "px";

                this.appendChild(ripple);

                setTimeout(() => {

                    ripple.remove();

                }, 600);

            });

        });


    /*==============================
      SMOOTH SCROLL
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


    /*==============================
      IMAGE HOVER EFFECT
    ==============================*/

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.05)";
            img.style.transition = ".5s";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });


    /*==============================
      CARD TILT EFFECT
    ==============================*/

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const x = e.offsetX;
            const y = e.offsetY;

            const rotateX = (y / card.offsetHeight - 0.5) * -15;
            const rotateY = (x / card.offsetWidth - 0.5) * 15;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";

        });

    });


    /*==============================
      LOADING FADE
    ==============================*/

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = ".8s";
        document.body.style.opacity = "1";

    }, 100);


    /*==============================
      TYPEWRITER EFFECT
    ==============================*/

    const heroTitle = document.querySelector(".hero h1");

    if (heroTitle) {

        const text = heroTitle.innerText;

        heroTitle.innerText = "";

        let i = 0;

        function typing() {

            if (i < text.length) {

                heroTitle.innerHTML += text.charAt(i);

                i++;

                setTimeout(typing, 40);

            }

        }

        typing();

    }

});
// 3D Mouse Movement Effect

document.querySelectorAll(".card, .portfolio-card, .pricing-card")
.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


let x = e.offsetX;

let y = e.offsetY;


let rotateX = (y - card.clientHeight / 2) / 15;

let rotateY = (x - card.clientWidth / 2) / 15;



card.style.transform =
`
perspective(1000px)
rotateX(${-rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;



});



card.addEventListener("mouseleave",()=>{


card.style.transform="";



});


});


// Custom black circular cursor — paste at end of js/script.js
(function(){
  const cursor = document.querySelector('.custom-cursor');
  if(!cursor) return;

  // disable on touch devices
  if(window.matchMedia && window.matchMedia('(pointer: coarse)').matches){
    cursor.style.display = 'none';
    return;
  }

  let mouseX = innerWidth/2, mouseY = innerHeight/2;
  let posX = mouseX, posY = mouseY;
  const lerp = (a,b,t) => (1 - t) * a + t * b;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, {passive:true});

  // Grow on interactive hover
  const interactiveSelector = 'a, button, .primary-btn, .secondary-btn, input, textarea, .card';
  document.querySelectorAll(interactiveSelector).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });

  // Click feedback
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(0.6)';
    setTimeout(()=> cursor.style.transform = '', 140);
  });

  // Smooth follow loop
  function animate(){
    posX = lerp(posX, mouseX, 0.16);
    posY = lerp(posY, mouseY, 0.16);
    cursor.style.left = posX + 'px';
    cursor.style.top = posY + 'px';
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
})();
