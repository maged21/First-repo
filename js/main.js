/*~~~~~~~~~~~~~~~~~~~ nav-menu ~~~~~~~~~~~~~~*/

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(link => 
    link.addEventListener("click", () => {
        navMenu.classList.add('hidden')
    })
    
)

navClose.addEventListener("click", () => {
    navMenu.classList.add('hidden')
})

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden')
})

/*~~~~~~~~~~~~~~~~~~~ tabs ~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll(".tabs-wrap ul li");
const all = document.querySelectorAll('.item-wrap');
const burgers = document.querySelectorAll('.burger');
const snacks = document.querySelectorAll('.snack');
const beverages = document.querySelectorAll('.beverage');


tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })

        tab.classList.add('active')

        const tabItems = tab.getAttribute('data-tabs')

        all.forEach(item => {
            item.style.display = 'none'
        })

        if (tabItems == 'burgers') {
            burgers.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if (tabItems == 'snacks') {
            snacks.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if (tabItems == 'beverages') {
            beverages.forEach(item => {
                item.style.display = 'block'
            })
        }
        else {
            all.forEach(item => {
                item.style.display = 'block'
            })
        }
    })
})

/*~~~~~~~~~~~~~~~~~~~ swiper ~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
      }
    }
  });


  /*~~~~~~~~~~~~~~~~~~~ scrollup ~~~~~~~~~~~~~~*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}

window.addEventListener('scroll', scrollUp)

/*~~~~~~~~~~~~~~~~~~~ background header ~~~~~~~~~~~~~~*/
const scrollHeader = () => {
    const header = document.getElementById("header");

    if(this.scrollY >= 50) {
        header.classList.add("border-b", "border-secondaryColor");
    } else {
        header.classList.remove("border-b", "border-secondaryColor");
    }
}

window.addEventListener('scroll', scrollHeader)

/*~~~~~~~~~~~~~~~~~~~ darkColor theme ~~~~~~~~~~~~~~*/

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark") {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener('click', e => {
    if(localStorage.getItem("mode") == "light") {
        darkMode();
    } else {
        lightMode();
    }
})

function darkMode() {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

function lightMode() {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}
