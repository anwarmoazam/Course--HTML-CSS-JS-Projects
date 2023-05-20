const tabsDOM = document.querySelector('.tabs');
const btnsDOM = document.querySelectorAll('.btn');
const articlesDOM = document.querySelectorAll('.content');


tabsDOM.addEventListener('click', function (event) {
    const id = event.target.dataset.id;
    if (id) {
        btnsDOM.forEach((btn) => {
            btn.classList.remove('live');
        })
        event.target.classList.add('live');
        articlesDOM.forEach((artice) => {
            artice.classList.remove('live');
        })
        const element = document.getElementById(id);
        element.classList.add('live');
    }
})