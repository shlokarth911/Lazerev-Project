function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.1
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
};
navAnimation()

function movingDivAnimation() {
    gsap.to('.marque',{
        transform : 'translateX(100%)',
        repeat : -1,
        duration : 5,
        ease : 'none'
    });

    window.addEventListener('wheel', (e) => {
        let k =  e.deltaY
        if(k > 0){
            gsap.to('.marque', {
                transform : 'translateX(-100%)',
                repeat : -1,
                duration : 5,
                ease : 'none'
            });

            gsap.to('.marque img', {
                rotate : '180deg'
            })
        }else {
            gsap.to('.marque', {
                transform : 'translateX(100%)',
                repeat : -1,
                duration : 5,
                ease : 'none'
            })

            gsap.to('.marque img', {
                rotate : '0deg'
            })
        }
    });

};
movingDivAnimation();

const page2Animation =()=>{
    var relem = document.querySelectorAll('.right-elem')

relem.forEach((e)=> {
    let i = e.childNodes[3]

    e.addEventListener('mouseenter', ()=>{
       gsap.to(i,{
        scale:1,
        opacity:1,
        duration : 0.2
       })
    });

    e.addEventListener('mousemove' , (dets)=> {
        gsap.to(i , {
            x : dets.x - e.getBoundingClientRect().x - 50,
            y : dets.y - e.getBoundingClientRect().y - 150, 
        })
    });

    e.addEventListener('mouseleave' , ()=> {
        gsap.to(i,{
            scale : 0,
            opacity : 0,
            duration : 0.2
        });
    });
});
};
page2Animation();

const page3Animation = () => {
    var vidContainer = document.querySelector('.video-container');
    var playBtn = vidContainer.querySelector('.play-btn');
    var video = document.querySelector('.video');

    vidContainer.addEventListener('mouseenter', () => {
        gsap.to(playBtn, {
            scale: 1
        });
    });

    vidContainer.addEventListener('mouseleave', () => {
        gsap.to(playBtn, {
            scale: 0
        });
    });

    vidContainer.addEventListener('mousemove', (k) => {
        gsap.to(playBtn, {
            x: k.x - vidContainer.getBoundingClientRect().x - 850,
            y: k.y - vidContainer.getBoundingClientRect().y - 400
        });
    });

    vidContainer.addEventListener('click', () => {
        video.style.display = 'block';

        setTimeout(() => {
            gsap.to(video, {
                transform: 'scale(1) translateX(-50%) translateY(-50%)',
                duration: 0.8
            });
        }, 200);

        setTimeout(() => {
            video.style.pointerEvents = 'auto';
            video.style.zIndex = 7777;
            video.play();
        }, 900);
    });

    video.addEventListener('click', () => {
        gsap.to(video, {
            opacity: 0,
            scaleX: 0.8
        });

        video.currentTime = 0;
        video.pause();
        video.muted = true;
        video.style.pointerEvents = 'none';
        video.style.display = 'none';
        video.style.zIndex = -1;
    });
};


const layerAnmation = () => {
  var box = document.querySelectorAll('.box');

  box.forEach((e) => {

    e.addEventListener('mouseenter', ()=>{
       gsap.to(e ,{
        borderTop : '2px solid white',
        ease: "power2.out",
        duration : 0.1
       });

       gsap.to(e.childNodes[1] ,{           
           ease: "power2.out",
           x : '10%'
       });

       gsap.to(e.childNodes[7],{
        y : 0,
        height : '100%',
        ease: "power2.out",
        duration : 0.5,
       });

       gsap.to(e.childNodes[5],{
        x :'-50%',
        y : '10%',
        scale : 1.2
       })
    });

    e.addEventListener('mouseleave', ()=>{
        gsap.to(e.childNodes[7],{
            y : '100%',
            height : '100%',
            ease: "power2.out",
            duration : 0.5
        });

        gsap.to(e.childNodes[5],{
        x : 0,
        y : 0,
        scale : 1
       })

        gsap.to(e.childNodes[1] ,{
            ease: "power2.out",
            x : '0%'
        });

        gsap.to(e ,{
            ease: "power2.out",
            borderTop : '1px solid #555',
            duration : 0.5
        });

        setTimeout(() => {
            let tl = gsap.timeline();

            tl.to(e.childNodes[7],{
                y : '-100%',
                opacity : 0,
                duration : 0,
            });

            tl.to(e.childNodes[7],{
                opacity : 1,
                duration :0
            });
        }, 500);
    });
  });
};
layerAnmation();

const stringAnimation = () =>{
  var string = document.querySelector('.string');
  var path = string.querySelector('path'); 

  string.addEventListener('mousemove', (dets)=>{
    let rect = string.getBoundingClientRect();
    let pathValue = `M 10 200 Q ${dets.x - rect.x} ${dets.y - rect.y} 1430 200`;


    gsap.to(path, {
        attr :{d : pathValue},
        duration : 0.5,
        ease : 'power3.out'
    });
  });

  string.addEventListener('mouseleave', ()=>{
    gsap.to(path, {
        attr :{d : 'M 10 200 Q 500 200 1430 200'},
        duration : 1,
        ease: "elastic.out(1,0.3)",
    });
  });
}
stringAnimation();

const tableAnimation = () => {
  const rowBox = document.querySelectorAll('.row-box');

  const firstSixItems  = () =>{
      const firstSixItemsArray = Array.from(rowBox).slice(0, 6);  
    
      firstSixItemsArray.forEach((item, index) => {
        const marginLeftValue = 12* (index); 
        
        gsap.to(item, {
            marginLeft : marginLeftValue, 
            scrollTrigger : {
                trigger : item,
                scroller : 'body',
                start : 'top 140%',
                end : 'top 10%',
                scrub : true,
                onUpdate: (self) => {
                    const progress = self.progress; 
                    item.style.marginLeft = `${progress * marginLeftValue}%`;
                },
            }
        });
      });
    };
    firstSixItems();

    const secondTwoItems = () =>{
      const secondTwoItemsArray = Array.from(rowBox).slice(6, 8);  
    
      secondTwoItemsArray.forEach((item, index) => {
        const marginLeftValue = 20 * (index); 
    
        item.style.marginLeft = `${marginLeftValue}%`;

         gsap.to(item, {
            marginLeft : marginLeftValue, 
            duration : 0.5,
            ease : 'power3.out',
            scrollTrigger : {
                trigger : item,
                scroller : 'body',
                start : 'top 140%',
                end : 'top 10%',
                scrub : true,
                onUpdate: (self) => {
                    const progress = self.progress; 
                    item.style.marginLeft = `${progress * marginLeftValue}%`;
                },
            }
        })
      });
    };
    
    secondTwoItems();

    const LastThreeItems = () =>{
      const LastThreeItemsArray = Array.from(rowBox).slice(8, 11);  
    
      LastThreeItemsArray.forEach((item, index) => {
        const marginLeftValue = 20 * (index); 
    
        item.style.marginLeft = `${marginLeftValue}%`;

         gsap.to(item, {
            marginLeft : marginLeftValue, 
            duration : 0.5,
            ease : 'power3.out',
            scrollTrigger : {
                trigger : item,
                scroller : 'body',
                start : 'top 140%',
                end : 'top 10%',
                scrub : true,
                onUpdate: (self) => {
                    const progress = self.progress; 
                    item.style.marginLeft = `${progress * marginLeftValue}%`;
                },
            }
        })
      });
    };
    LastThreeItems();
};

tableAnimation();

const scrollWatcherAnimation = () => {
    const scrollWatcher = document.querySelector(".progesser");
    const updateScrollWatcherHeight = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        scrollWatcher.style.height = `${scrollPercentage}%`;
    };
    window.addEventListener('scroll', updateScrollWatcherHeight);
    updateScrollWatcherHeight();
};

scrollWatcherAnimation();

const page8Animation = () => {
  const page8 = document.querySelector(".page8");
  const page8cursor = document.querySelector(".page8-cursor");

  page8.addEventListener("mousemove", (e) => {
        gsap.to(page8cursor, {
          left: e.clientX - page8.getBoundingClientRect().left,
          top: e.clientY - page8.getBoundingClientRect().top,
          ease: "power3.out",
          duration: 0.5,
        });
    });

    page8.addEventListener("mouseleave", () => {
        gsap.to(page8cursor, {
            height : 0,
            width : 0,
            ease: "power3.out",
            duration: 0.5,
        });
    });

    page8.addEventListener("mouseenter", () => {
        gsap.to(page8cursor, {
            height : '10vw',
            width : '10vw',
            ease: "power3.out",
            duration: 0.5,
        });
    })
};

page8Animation();