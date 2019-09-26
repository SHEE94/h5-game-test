//主页面
(function(ns){
    let menuScene = ns.menuScene = Hilo.Class.create({
        Extends: Hilo.Container,
        constructor: function(properties){
            menuScene.superclass.constructor.call(this, properties);
            this.width = properties.width;
            this.height = properties.height;
            this.prop = properties;
            this.init(properties)
        },
        init:function (prop) {
            this.btnView = new Hilo.Container({
                id:'btnView',
                x:-this.width/3,
            }).addTo(this);
            this.menuBg = new Hilo.View({
                background:'#cccccc',
                width:this.width/3,
                height:this.height
            }).addTo(this.btnView);

            // this.btnList();
            this.list();
            this.eventC();
        },
        list:function(){
            for(let i = 0,len = this.prop.image.length;i<len;i++){
                let tab = new Hilo.Container({
                    id:'tab_'+i,
                    width:this.width/3-100,
                    height:this.height/11,
                    y:this.height/11*i,
                    x:35
                }).addTo(this.btnView);
                //技术研究按钮
                let icon = new Hilo.Bitmap({
                    id:'technology_'+i,
                    image:this.prop.image[i].image,
                    rect:this.prop.image[i].rect,
                    scaleX:1.5,
                    scaleY:1.5,
                }).addTo(tab);
                icon.y = tab.height/2-icon.height/2*1.5;
                let technologyText = new Hilo.Text({
                    id:'technologyText',
                    color:'#353535',
                    text:this.prop.image[i].name,
                    textAlign:'center',
                    textVAlign:'middle',
                    lineSpacing:0,
                    font:'20px arial',
                    width:tab.width/2,
                    height:tab.height,
                    x:icon.x+icon.width*2
                }).addTo(tab);
            }
        },

        eventC:function () {
            let that = this;
            this.btnView.getChildById('tab_10').on(Hilo.event.POINTER_START, function (e) {
                e.stopImmediatePropagation && e.stopImmediatePropagation();
                that.hideMenu()
            }.bind(this));

        },
        hideMenu:function () {
            Hilo.Tween.to(this.btnView,{
                x:-this.width/3
            },{
                time:400,
                onComplete:()=>{
                    this.visible = false;
                }
            });
        }
    });

})(window.game);