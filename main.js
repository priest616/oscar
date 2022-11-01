const navBtn = document.querySelector('.mobile-nav');
const nalst = document.querySelector('.mobilelst');
navBtn.addEventListener('click', ()=>{
    const visibility = nalst.getAttribute('data-visible');

    if (visibility == 'false') {
        nalst.setAttribute('data-visible', true);
        navBtn.setAttribute('aria-expanded', true);
        document.body.classList.add('no-scroll');
    }else{
        nalst.setAttribute('data-visible', false);
        navBtn.setAttribute('aria-expanded', false);
        document.body.classList.remove('no-scroll');
    }
})

const secone = document.querySelector('.title2');

option = {
    root: null,
    threshold: 0, //how much of it is visible
    rootMargin: "-70px" //sets mergin
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.title21').classList.add('slidefromside');
            observer.unobserve(entry.target);
        }
        
    })
}, option);

observer.observe(secone);



const menuem = document.querySelector('.logodv');

option = {
    root: null,
    threshold: 0, //how much of it is visible
    rootMargin: "30px" //sets mergin
};

const observer1 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            document.getElementById('selectM').classList.add('cback')
            return;
        }else{
            document.getElementById('selectM').classList.remove('cback')

        }
        
    })
}, option);

observer1.observe(menuem);


const slidethis = document.getElementById('slidethis');

slidethis.addEventListener('touchstart',e => (startpos = e.targetTouches[0].clientX));
slidethis.addEventListener('touchmove',e => (moved = e.targetTouches[0].clientX));
slidethis.addEventListener('touchend', function (e) {
    if (moved) {
        if (startpos-moved > 40) {
            nalst.setAttribute('data-visible', false);
            navBtn.setAttribute('aria-expanded', false);
            document.body.classList.remove('no-scroll');
        }
    }
});
