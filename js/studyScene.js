//科技研究
(function(ns){
    let studyScene = ns.studyScene = Hilo.Class.create({
        Extends: Hilo.Container,
        constructor: function(properties){
            studyScene.superclass.constructor.call(this, properties);
            this.width = properties.width;
            this.height = properties.height;
            this.prop = properties;
            this.init(properties)
        },
        init:function (prop) {
            this.bg = new Hilo.View({
                id:'bg',
                background:'#eeeeee',
                width:this.width,
                height:this.height
            }).addTo(this);
            //关闭
            this.close = new Hilo.Bitmap({
                id:'close',
                image:this.prop.image[10].image,
                rect:this.prop.image[10].rect,
                x:this.width-(this.prop.image[10].rect[2]+50),
                y:10,
                scaleX:1.5,
                scaleY:1.5,
            }).addTo(this);

            //右边菜单按钮
            this.leftMenuList = new Hilo.Container({
                id:'btnList',
                width:100,
                height:this.height,
                x:10,
                background:'#ffffff'
            }).addTo(this);

            let studyMenuList = prop.studyMenuList;

            for(let i = 0,len = studyMenuList.length;i<len;i++){
                let btn = new Hilo.Bitmap({
                    id:'btn_'+i,
                    // align:Hilo.align.TOP,
                    image: studyMenuList[i].image,
                    rect:studyMenuList[i].rect,
                    background:'#ffffff',
                    // height:this.height/len,
                    y:this.height/len*i+30,
                    x:this.leftMenuList.width/2-studyMenuList[i].rect[2]/2
                }).addTo(this.leftMenuList);
            }

            this.eventC();
        },
        screenStudy:function(){
            this.screenType = new Hilo.Container({
                id:'screenType_',
            })
        },
        eventC:function () {
            let that = this;
            this.close.on(Hilo.event.POINTER_START, function (e) {
                e.stopImmediatePropagation && e.stopImmediatePropagation();
                Hilo.Tween.to(that,{
                    x:that.width
                },{
                    time:200,
                    onComplete:()=>{
                        that.visible = false
                    }
                });

            }.bind(this));
        }

    });

})(window.game);