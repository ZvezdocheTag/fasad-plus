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
            let container = document.querySelector('.color-pallet-gallery');
            let modal = document.querySelector('.color-pallet-preview__img');
            const wrap = document.querySelector('.color-pallet-gallery-wrap');
            let palet = document.querySelector('.color-pallet-preview');
            const mis = document.querySelector('#fh5co-steps');


            const controller = document.querySelector('.pallet-gallery__controllers');



            let active = false;
            let current = 0; 

            controller.addEventListener('click', (e) => {
                let target = e.target;
                let up = target.classList.contains('pallet-gallery__controller-up');
                let down = target.classList.contains('pallet-gallery__controller-down');
                let height = container.offsetHeight;
                let heightWrap = wrap.offsetHeight;
                
                if(up) {
                    current = current === 0 ? 0 : current + 200;
                    container.style.transform = `translate3d(0,${current + 'px'},0)`;
                }

                if(down) {
                    current = (Math.abs(current) + heightWrap) > height ? current : current - 200;
                    container.style.transform = `translate3d(0,${current + 'px'},0)`
                }
            })

            // function add(item) {
            //     let current;
            //     console.log(current)

            //     return current;
            // }

            // wrap.addEventListener('mouseover', cache )

            // function cache(e) {
            //     active = true
            //     document.body.classList.add('noscroll')
            //     console.log(active)
            //     if(active) {
            //       wrap.removeEventListener('mouseover', cache)
            //       // console.log(active)
            //       // active = false;
            //     }
            // }
            // wrap.addEventListener('mouseout', function() {
            //     document.body.classList.remove('noscroll')
            // } )

            mis.addEventListener('click', function(e) {
                palet.classList.remove('color-pallet-preview--active');
                wrap.classList.remove('color-pallet-gallery-wrap--active');
            })

            container.addEventListener('click', function(e) {
                let target = e.target;

                // container.classList.add('scrollable')
                container.classList.remove('expand')
                palet.classList.add('color-pallet-preview--active');
                wrap.classList.add('color-pallet-gallery-wrap--active');

                // if(target.)
                // console.log()
                if(target.hasAttribute('src')) {
                    let src = target.getAttribute('src');
                    modal.style.backgroundImage = `url('${src}')`
                    console.log(src)

                }


            })

            this.getFile(data)


        },

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



    // const ColorPiker = function() {
    //     const args = Array.prototype.slice.call(arguments);
    //     const cb = args.pop();
    //     let modules = (args[0] && typeof args[0]  === 'string') ? args : args[0];

    //     if(!(this instanceof ColorPiker)) {
    //         return new ColorPiker(modules, cb);
    //     }

    //     // Constructor method


    //     if(!modules || modules === '*') {
    //         modules = [];
    //         for(let i in ColorPiker) {
    //             modules.push(i);
    //         }
    //     }

    //     for(let i = 0; i < modules.length; i += 1) {
    //         ColorPiker.modules[modules[i]](this)
    //     }

    //     cb(this);
    // }



    // ColorPiker.modules = {};

    // ColorPiker.modules.pick = (box) => {
    //     box.color = "red";
    // }

    // ColorPiker('pick', (box) => {
    //     console.log(box);
    // })