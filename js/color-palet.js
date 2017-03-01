(function() {
    const data = [
    {
        src: 'black-q-0001.jpg',
        name: '0001'
    },
    {
        src: 'g0002.jpg',
        name: 'g0002'
    },
    {
        src: 'g0812.jpg',
        name: 'g0812'
    },
    {
        src: 'deepsea-h-0001.gif',
        name: '0001'
    },
    {
        src: 'g3504.jpg',
        name: 'g3504'
    },
    {
        src: 'g3505.jpg',
        name: 'g3505'
    },
    {
        src: 'g9106.jpg',
        name: 'g9106'
    },
    {
        src: 'g9107.jpg',
        name: 'g9107'
    },
    {
        src: 'black-q-0001.jpg',
        name: '0001'
    },
    {
        src: 'g0002.jpg',
        name: 'g0002'
    },
    {
        src: 'g0812.jpg',
        name: 'g0812'
    },
    {
        src: 'deepsea-h-0001.gif',
        name: '0001'
    },
    {
        src: 'g3504.jpg',
        name: 'g3504'
    },
    {
        src: 'g3505.jpg',
        name: 'g3505'
    },
    {
        src: 'g9106.jpg',
        name: 'g9106'
    },
    {
        src: 'g9107.jpg',
        name: 'g9107'
    },
    {
        src: 'deepsea-h-0001.gif',
        name: '0001'
    },
    {
        src: 'g3504.jpg',
        name: 'g3504'
    },
    {
        src: 'g3505.jpg',
        name: 'g3505'
    },
    {
        src: 'g9106.jpg',
        name: 'g9106'
    },
    {
        src: 'g9107.jpg',
        name: 'g9107'
    },
    {
        src: 'deepsea-h-0001.gif',
        name: '0001'
    },
    {
        src: 'g3504.jpg',
        name: 'g3504'
    },
    {
        src: 'g3505.jpg',
        name: 'g3505'
    },
    {
        src: 'g9106.jpg',
        name: 'g9106'
    },
    {
        src: 'g9107.jpg',
        name: 'g9107'
    },
    {
        src: 'black-q-0001.jpg',
        name: '0001'
    },
    {
        src: 'g0002.jpg',
        name: 'g0002'
    },
    {
        src: 'g0812.jpg',
        name: 'g0812'
    },
    {
        src: 'deepsea-h-0001.gif',
        name: '0001'
    },
    {
        src: 'g3504.jpg',
        name: 'g3504'
    },
    {
        src: 'g3505.jpg',
        name: 'g3505'
    },
    {
        src: 'g9106.jpg',
        name: 'g9106'
    },
    {
        src: 'g9107.jpg',
        name: 'g9107'
    },
    {
        src: 'black-q-0001.jpg',
        name: '0001'
    },
    {
        src: 'g0002.jpg',
        name: 'g0002'
    },
    {
        src: 'g0812.jpg',
        name: 'g0812'
    },
    {
        src: 'deepsea-h-0001.gif',
        name: '0001'
    },
    {
        src: 'g3504.jpg',
        name: 'g3504'
    },
    {
        src: 'g3505.jpg',
        name: 'g3505'
    },
    {
        src: 'g9106.jpg',
        name: 'g9106'
    },
    {
        src: 'g9107.jpg',
        name: 'g9107'
    },
    {
        src: 'deepsea-h-0001.gif',
        name: '0001'
    },
    {
        src: 'g3504.jpg',
        name: 'g3504'
    },
    {
        src: 'g3505.jpg',
        name: 'g3505'
    },
    {
        src: 'g9106.jpg',
        name: 'g9106'
    },
    {
        src: 'g9107.jpg',
        name: 'g9107'
    },
    {
        src: 'deepsea-h-0001.gif',
        name: '0001'
    },
    {
        src: 'g3504.jpg',
        name: 'g3504'
    },
    {
        src: 'g3505.jpg',
        name: 'g3505'
    },
    {
        src: 'g9106.jpg',
        name: 'g9106'
    },
    {
        src: 'g9107.jpg',
        name: 'g9107'
    }
    ];



    const colorpiker = {
        init: function() {
            this.event();
            this.getFile(data)
        },

        event: function() {
            let container = document.querySelector('.color-pallet-gallery');
            const mis = document.querySelector('.color-pallet-preview__close');
            const controller = document.querySelector('.pallet-gallery__controllers');

            controller.addEventListener('click', this.palet.controller);
            mis.addEventListener('click', this.palet.remove);
            container.addEventListener('click', this.palet.add);
        },

        palet: (function() {
                let current = 0; 
                const container = document.querySelector('.color-pallet-gallery');
                const wrap = document.querySelector('.color-pallet-gallery-wrap');
                let palet = document.querySelector('.color-pallet-preview');
                let modal = document.querySelector('.color-pallet-preview__img');

                return {
                    add: function(e) {
                        let target = e.target;
                        let cptitpe = document.querySelector('.color-pallet-preview__title .title-key');
                        let img = target.parentNode.classList.contains('color-pallet-gallery__img');
                        let allImg = document.querySelectorAll('.color-pallet-gallery__img');
                        let allImgLeng = document.querySelectorAll('.color-pallet-gallery__img').length;

                        for(let i = 0; i < allImgLeng; i+=1) {
                            allImg[i].classList.remove('active');
                        }
                        target.parentNode.classList.add('active')

                        if(img) {
                            container.classList.remove('expand')
                            palet.classList.add('color-pallet-preview--active');
                            wrap.classList.add('color-pallet-gallery-wrap--active');  
                        }

                        if (target.hasAttribute('src')) {
                            let src = target.getAttribute('src');
                            let title = target.parentNode.nextElementSibling.textContent;
                            modal.style.backgroundImage = `url('${src}')`;
                            cptitpe.textContent = title;
                        }
                       
                    },
        
                    remove: function() {
                        palet.classList.remove('color-pallet-preview--active');
                        wrap.classList.remove('color-pallet-gallery-wrap--active');

                        if(Math.abs(current) > container.offsetHeight) {
                            current = -(container.offsetHeight - 360);
                            container.style.transform = `translate3d(0,${current + 'px'},0)`;
                        }
                        

                    },
        
                    controller: function(e) {
                        let target = e.target;
                        let up = target.classList.contains('pallet-gallery__controller-up');
                        let down = target.classList.contains('pallet-gallery__controller-down');
                        let height = container.offsetHeight;
                        let heightWrap = wrap.offsetHeight;
                        
                        if(up) {
                            current = current === 0 || current > 0 ? 0 : current + 200;
                            container.style.transform = `translate3d(0,${current + 'px'},0)`;
                        }
        
                        if(down) {
                            current = (Math.abs(current) + heightWrap) > height ? current : current - 200;
                            container.style.transform = `translate3d(0,${current + 'px'},0)`
                        }
                        
                    },

                    calcHeight: function() {
                        return container.offsetHeight;
                    }
                }
                    

                }()),


        getFile: function(data) {
            let _data = data;
            for(let i = 0, length = _data.length; i < length; i+=1 ) {
                this.buildItem(data[i]);
            }

        },

        buildItem: function(data) {
            let name = data.name;
            let src = data.src;
            let container = document.querySelector('.color-pallet-gallery');
            let path = 'images/color-panel/';
            let item =  document.createElement('div');
            item.classList.add('color-pallet-gallery__item');
            item.innerHTML = 
                        `
                            <div class="color-pallet-gallery__img"><img src=${path + data.src} alt=""></div>
                            <div class="color-pallet-gallery__title">${name}</div>
                        `;
            container.appendChild(item);
        }
    }

    colorpiker.init()

}())
