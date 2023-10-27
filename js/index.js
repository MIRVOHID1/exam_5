const btn = document.querySelector('.navbar__add__btn');
        const menu = document.querySelector('.navbar__menu');
        const remove__btn = document.querySelector('.navbar__remove__btn');


        btn.addEventListener('click', () => {
            menu.classList.add('show');
            remove__btn.style.display = 'block'
            btn.style.display = 'none'

        });
        remove__btn.addEventListener('click', () => {
            menu.classList.remove('show');
            remove__btn.style.display = 'none'
            btn.style.display = 'block'

        })
        
