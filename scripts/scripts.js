// button UP //
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();
// button UP //

//popup//
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//popup//

//alert//
document.getElementById("price-action").onclick = function () {
    alert("Спасибо за покупку, мы убежали собирать ваш заказ!");
}
//alert//


//scroll//
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}
//scroll//

//date//

let today = new Date()

let d = new Date();

function formatRusTime(d) {
    const day = d.getDay();
    const dayTitle = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const month = d.getMonth();
    const monthTitle = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    const year = d.getFullYear();

    return `${dayTitle[day]}, ${day} ${'неделя'} ${monthTitle[month]} ${year} ${'года'}`
}

document.querySelectorAll('.date_added').forEach(el => {
    el.innerHTML = formatRusTime(d)
});

//date//