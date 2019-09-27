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
            //左边菜单按钮
            this.leftMenuList = new Hilo.Container({
                id:'btnList',
                width:100,
                height:this.height,
                x:10,
                background:'#ffffff'
            }).addTo(this);
            //右边菜单按钮
            this.rightCon = new Hilo.Container({
                id:'rightTab',
                width:this.width-110,
                height:this.height-20,
                y:10,
                x:this.leftMenuList.width+this.leftMenuList.x
            }).addTo(this);
            this.screenStudy();
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
            this.eventC();
        },
        screenStudy:function(){
            let data = [
                [{desc:'屏幕高度',val:1,study:10},{desc:'屏幕宽度',val:1,study:10}],
                [{desc:'屏幕亮度',val:1,study:15},{desc:'屏幕材质TFT',val:1,study:10}],
                [{desc:'屏幕材质LCD',val:1,study:15},{desc:'屏幕材质LED',val:1,study:20}],
                [{desc:'屏幕材质OLED',val:1,study:25},{desc:'屏幕材质ALED',val:1,study:15}]
            ];
            for(let i = 0,len = data.length;i<len;i++){
                for(let j = 0;j<data[i].length;j++){
                    let x = 0;
                    if(j===0){
                        x = 50;
                    }else if(j===1){
                        x = 90+this.rightCon.width/2.5;
                    }
                    let screenType = new Hilo.Container({
                        id:'screenType_'+i+j,
                        width:this.rightCon.width/2.5,
                        height:this.rightCon.height/6.5,
                        background:'rgba(0,0,0,.5)',
                        x:x,
                        y:this.rightCon.height/6*i
                    }).addTo(this.rightCon);
                    let title = new Hilo.Text({
                        id:'title_'+i+j,
                        color:'#f7f7f7',
                        text:data[i][j].desc,
                        textAlign:'center',
                        textVAlign:'middle',
                        lineSpacing:0,
                        width:screenType.width,
                        height:screenType.height/3,
                        y:10,
                        font:'25px arial',
                    }).addTo(screenType);
                    let level = new Hilo.Text({
                        id:'level_'+i+j,
                        color:'#f7f7f7',
                        text:'等级'+data[i][j].val,
                        textAlign:'center',
                        textVAlign:'middle',
                        lineSpacing:0,
                        width:screenType.width,
                        height:screenType.height/3,
                        y:title.height,
                        font:'25px arial',
                    }).addTo(screenType);
                    let Consumption = new Hilo.Text({
                        id:'con_'+i+j,
                        color:'#f7f7f7',
                        text:'科技点'+data[i][j].study,
                        textAlign:'center',
                        textVAlign:'middle',
                        lineSpacing:0,
                        width:screenType.width,
                        height:screenType.height/3,
                        y:screenType.height/3*2,
                        font:'25px arial',
                    }).addTo(screenType)
                }

            }
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