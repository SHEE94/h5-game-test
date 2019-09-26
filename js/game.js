(function () {
    window.onload = function () {
        game.init();
    };
    let game = window.game = {
        year: 2000,
        math: 1,
        day: 1,
        sunrise:0,
        init: function () {
            this.asset = new game.Asset();
            this.asset.on('complete', function (e) {
                this.asset.off('complete');
                this.initStage();
            }.bind(this));
            this.asset.load();
        },
        initStage: function () {
            this.width = Math.min(innerWidth, 450) * 2;
            this.height = Math.min(innerHeight, 850) * 2;
            this.scale = 0.5;
            //舞台画布
            let renderType = location.search.indexOf('dom') !== -1 ? 'dom' : 'canvas';

            //舞台
            this.stage = new Hilo.Stage({
                renderType: renderType,
                width: this.width,
                height: this.height,
                scaleX: this.scale,
                scaleY: this.scale
            });
            document.body.appendChild(this.stage.canvas);

            //启动计时器
            this.ticker = new Hilo.Ticker(60);
            this.ticker.addTick(Hilo.Tween);
            this.ticker.addTick(this.stage);
            this.ticker.start(true);

            //绑定交互事件
            this.stage.enableDOMEvent(Hilo.event.POINTER_START, true);
            this.stage.enableDOMEvent(Hilo.event.POINTER_MOVE, true);
            this.stage.enableDOMEvent(Hilo.event.POINTER_END, true);
            // this.stage.on(Hilo.event.POINTER_START, this.onUserInput.bind(this));

            //舞台更新
            this.stage.onUpdate = this.onUpdate.bind(this);
            //初始化
            this.initScenes();
        },
        initScenes: function () {
            //初始化准备场景
            this.readyScene = new game.readyScene({
                id: 'readyScene',
                btn: this.asset.btnList2,
                logoImg: this.asset.phoneLogo,
                width: this.width,
                height: this.height
            }).addTo(this.stage);
            this.mainScene = new game.mainScene({
                id: 'mainScene',
                btn: this.asset.btnList2,
                logoImg: this.asset.phoneLogo,
                settingImg: this.asset.settingImg,
                menuImg: this.asset.menuImgList,
                house1: this.asset.house_1,
                mainBg: this.asset.mainBg,
                stage:this.stage,
                assets:this.asset,
                width: this.width,
                height: this.height
            }).addTo(this.stage);
            console.log(this.mainScene.getChildById('mainScene').topView.getChildById('year') )
        },
        onUpdate: function (dt) {
            this.time();
        },
        time: function () {
            //更新日期时间
            this.day = this.day+0.002;
            if(this.day>30){
                this.day = 1;
                this.math = this.math+1;
            }
            if(this.math > 12){
                this.year = this.year+1;
                this.math = 1;
            }

            this.mainScene.getChildById('mainScene').topView.getChildById('year').text = parseInt(this.year)+'年';
            this.mainScene.getChildById('mainScene').topView.getChildById('math').text = parseInt(this.math)+'月';
            this.mainScene.getChildById('mainScene').topView.getChildById('day').text = parseInt(this.day)+'日';
        }
    }
})();
