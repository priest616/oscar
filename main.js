const navBtn = document.querySelector('.mobile-nav');
const nalst = document.querySelector('.mobilelst');
navBtn.addEventListener('click', ()=>{
    const visibility = nalst.getAttribute('data-visible');

    if (visibility == 'false') {
        nalst.setAttribute('data-visible', true);
        navBtn.setAttribute('aria-expanded', true);
        document.body.classList.add('no-scroll')
    }else{
        nalst.setAttribute('data-visible', false);
        navBtn.setAttribute('aria-expanded', false);
        document.body.classList.remove('no-scroll')
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


// position: relative;
// overflow: hidden;
// top: -100px;
