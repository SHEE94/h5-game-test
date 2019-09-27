(function(ns){
    let readyScene = ns.readyScene = Hilo.Class.create({
        Extends: Hilo.Container,
        constructor: function(properties){
            readyScene.superclass.constructor.call(this, properties);
            this.width = properties.width;
            this.height = properties.height;
            this.init(properties)
        },
        init:function (prop) {
            //背景
            this.bg = new Hilo.View({
                id:'bg',
                background:'#eeeeee',
                width:this.width,
                height:this.height
            }).addTo(this);
            this.logos = new Hilo.Bitmap({
                id:'logo',
                image:prop.logoImg,
                x:this.width/2-prop.logoImg.width/2*.5,
                y:200,
                scaleX:.5,
                scaleY:.5
            }).addTo(this);
            //开始按钮
            this.startBtn = new Hilo.Button({
                id:'start',
                image: prop.btn,
                upState: {rect:[580, 785, 370, 100]},
                overState: {rect:[580, 920, 370, 100]},
                downState: {rect:[586, 920, 362, 100]},
                width:350,
                height:100,
                x:this.width/2-350/2,
                y:this.height-400
            }).addTo(this);

            Hilo.Tween.to(this.logos,{
                y:190
            },{
                loop:true,
                reverse:true
            })
        }
    });

})(window.game);