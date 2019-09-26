//顶部数据显示
(function(ns){
    let topDataScene = ns.topDataScene = Hilo.Class.create({
        Extends: Hilo.Container,
        constructor: function(properties){
            topDataScene.superclass.constructor.call(this, properties);
            this.width = properties.width;
            this.height = properties.height;
            this.prop = properties
            this.init(properties)
        },
        init:function (prop) {
            //顶部视图容器
            this.topView = new Hilo.Container().addTo(this);
            this.goldView();
            this.fansView();
            this.salesVolume();
            this.settingView();
        },
        goldView:function () {
            //金币项
            this.goldBg = new Hilo.View({
                background:'#CC9933',
                width:this.width/2-100,
                height:50
            }).addTo(this.topView);
            this.goldStr = new Hilo.Text({
                id:'goldStr',
                color:'#eeeeee',
                text:'gold:899',
                textAlign:'center',
                textVAlign:'middle',
                font:'30px arial',
                width:this.goldBg.width,
                height:this.goldBg.height,
                x:10,
                y:5
            }).addTo(this.topView);
        },
        fansView:function () {

            //粉丝量
            this.fansBg = new Hilo.View({
                background:'#CC9999',
                width:this.width/2-120,
                height:50,
                y:this.goldBg.height
            }).addTo(this.topView);
            this.fansStr = new Hilo.Text({
                id:'fansStr',
                color:'#eeeeee',
                text:'fans:899',
                textAlign:'center',
                textVAlign:'middle',
                font:'30px arial',
                width:this.fansBg.width,
                height:this.fansBg.height,
                x:10,
                y:this.goldBg.height+5
            }).addTo(this.topView);
        },
        salesVolume:function () {
            //销量
            this.salesBg = new Hilo.View({
                background:'#0099CC',
                width:this.width/2-100,
                height:50,
                x:this.width-(this.width/2-100)
            }).addTo(this.topView);
            this.salesStr = new Hilo.Text({
                id:'salesStr',
                color:'#eeeeee',
                text:'sales:899',
                textAlign:'center',
                textVAlign:'middle',
                font:'30px arial',
                width:this.salesBg.width,
                height:this.salesBg.height,
                x:this.width-(this.width/2-100),
                y:5
            }).addTo(this.topView);
        },
        settingView:function () {
            this.settingBg = new Hilo.View({
                background:'#666666',
                width:this.width/2-100,
                height:50,
                x:this.width-(this.width/2-120),
                y:this.salesBg.height
            }).addTo(this.topView);
            this.settingStr = new Hilo.Bitmap({
                id:'setting',
                image:this.prop.settingImg,
                rect:[33,97,32,32],
                x:this.width-this.prop.settingImg.width,
                y:this.salesBg.height+10
            }).addTo(this.topView);
            this.time();
        },
        time:function () {
            let year = new Hilo.Text({
                id:'year',
                color:'#eeeeee',
                text:'2000年',
                textAlign:'center',
                textVAlign:'middle',
                font:'20px arial',
                x:this.width-this.settingBg.width+this.settingBg.width/10,
                y:this.settingBg.height+15
            }).addTo(this.topView);
            let math = new Hilo.Text({
                id:'math',
                color:'#eeeeee',
                text:'1月',
                textAlign:'center',
                textVAlign:'middle',
                font:'20px arial',
                x:this.width-this.settingBg.width+this.settingBg.width/2.7,
                y:this.settingBg.height+15
            }).addTo(this.topView);
            let day = new Hilo.Text({
                id:'day',
                color:'#eeeeee',
                text:'1日',
                textAlign:'center',
                textVAlign:'middle',
                font:'20px arial',
                x:this.width-this.settingBg.width+this.settingBg.width/1.9,
                y:this.settingBg.height+15
            }).addTo(this.topView);
        }
    });

})(window.game);