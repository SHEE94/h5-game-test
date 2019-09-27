//主页面
(function(ns){
    let mainScene = ns.mainScene = Hilo.Class.create({
        Extends: Hilo.Container,
        constructor: function(properties){
            mainScene.superclass.constructor.call(this, properties);
            this.width = properties.width;
            this.height = properties.height;
            this.init(properties)
        },
        onUpdate:function(dt){},
        init:function (prop) {
            let that = this;

            this.bg = new Hilo.Bitmap({
                image:prop.mainBg,
                width:this.width,
                height:this.height
            }).addTo(this);
            this.Light = new Hilo.View({
                id:'Light',
                width:this.width,
                height:this.height,
                background: '#000000',
                alpha:0
            }).addTo(this);

            this.house = new Hilo.Bitmap({
                id:'house',
                image:prop.house1,
                x:this.width/2-prop.house1.width/2,
                y:this.height/2-prop.house1.height/2
            }).addTo(this);
            //初始化顶部组件
            this.topDataScene = new game.topDataScene({
                id:'mainScene',
                btn:prop.btn,
                logoImg:prop.logoImg,
                settingImg:prop.settingImg,
                width:this.width,
                height:100
            }).addTo(this);
            this.fixedBtn(prop);
            //初始化菜单按钮
            this.menuScene = new game.menuScene({
                id:'menuScene',
                image:prop.menuImg,
                width:this.width,
                height:this.height,
                background:'rgba(0,0,0,.6)',
                visible:false
            }).addTo(this);

            //初始化研究场景
            this.studyScene = new game.studyScene({
                id:'studyScene',
                image:prop.menuImg,
                studyMenuList:prop.assets.studyMenuList,
                width:this.width,
                height:this.height,
                x:this.width,
                visible: false
            }).addTo(this);

            //模拟白天黑夜动画
            Hilo.Tween.to(this.Light,{
                alpha: 0.5
            },{
                time: 7000,
                loop:true,
                reverse:true
            });
            this.eventC();
        },
        fixedBtn:function (prop) {
            let that = this;
            this.btn = new Hilo.Bitmap({
                id:'btn',
                image:prop.menuImg[0].image,
                rect:prop.menuImg[0].rect,
                scaleX:1.5,
                scaleY:1.5,
                y:this.height-200,
                x:20
            }).addTo(this);
            this.btn.on(Hilo.event.POINTER_START, function (e) {
                e.stopImmediatePropagation && e.stopImmediatePropagation();
                that.showMenu();
            }.bind(this));

        },
        //事件
        eventC:function(){

            //显示研究场景
            this.menuScene.getChildById('btnView').getChildById('tab_1').on(Hilo.event.POINTER_START, function (e) {
                e.stopImmediatePropagation && e.stopImmediatePropagation();
                this.hideMenu();
                this.studyScene.visible = true;
                Hilo.Tween.to(this.studyScene,{
                    x:0
                },{
                    time:400
                });
            }.bind(this))
        },
        //打开菜单
        showMenu:function () {
            this.menuScene.visible = true;
            Hilo.Tween.to(this.menuScene.getChildById('btnView'),{
                x:0,
            },{
                time:400
            });
        },
        //关闭菜单
        hideMenu:function () {
            Hilo.Tween.to(this.menuScene.getChildById('btnView'),{
                x:-this.width/3
            },{
                time:400,
                onComplete:()=>{
                    this.menuScene.visible = false;
                }
            });
        }
    });

})(window.game);