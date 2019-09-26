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

        }
    });

})(window.game);