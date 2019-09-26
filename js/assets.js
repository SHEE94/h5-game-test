(function (ns) {
    let Asset = ns.Asset = Hilo.Class.create({
        Mixes: Hilo.EventMixin,
        queue: null,
        btnList:null,
        load: function () {
            let resources = [
                {id:'btnList',src:'assets/btnlist.png'},
                {id:'btnList2',src:'assets/btn-list.png'},
                {id:'phoneLogo',src:'assets/51miz-E844810-4B6E6448.png'},
                {id:'settingImg',src:'assets/shared-7-sheet9.png'},
                {id:'menuImg',src:'assets/shared-9-sheet2.png'},
                {id:'house_1',src:'assets/shared-8-sheet6.png'},
                {id:'mainBg',src:'assets/shared-9-sheet0.png'},
                {id:'studyMenu',src:'assets/upleve.png'}
            ];
            this.queue = new Hilo.LoadQueue();
            this.queue.add(resources);
            this.queue.on('complete', this.onComplete.bind(this));
			
            this.queue.start();
			
        },
        onComplete: function (e) {
            this.btnList = this.queue.get('btnList').content;
            this.btnList2 = this.queue.get('btnList2').content;
            this.phoneLogo = this.queue.get('phoneLogo').content;
            this.settingImg = this.queue.get('settingImg').content;
            this.house_1 = this.queue.get('house_1').content;
            this.mainBg = this.queue.get('mainBg').content;
            this.menuImg = this.queue.get('menuImg').content;
            this.menuImgList = [
                {image: this.menuImg, rect:[298,454,46,46],name:'菜单'},
                {image: this.menuImg, rect: [462,455,46,46],name:'研究'},
                {image: this.menuImg, rect: [453,391,46,46],name:'升级'},
                {image: this.menuImg, rect: [274,47,46,46],name:'os'},
                {image: this.menuImg, rect: [214,270,46,46],name:'添加新手机'},
                {image: this.menuImg, rect: [288,270,46,46],name:'招聘'},
                {image: this.menuImg, rect: [363,270,46,46],name:'广告'},
                {image: this.menuImg, rect: [436,270,46,46],name:'排行'},
                {image: this.menuImg, rect: [119,314,46,46],name:'已发布的'},
                {image: this.menuImg, rect: [407,455,46,46],name:'新闻'},
                {image: this.menuImg, rect: [350,450,45,45],name:'关闭'}
            ];

            this.studyMenu = this.queue.get('studyMenu').content;
            this.studyMenuList = [
                {image: this.studyMenu, rect:[0,0,62,62],name:'手机尺寸'},
                {image: this.studyMenu, rect: [62,0,62,62],name:'相机'},
                {image: this.studyMenu, rect: [124,0,62,62],name:'内存'},
                {image: this.studyMenu, rect: [186,0,62,62],name:'显示'},
                {image: this.studyMenu, rect: [248,0,62,62],name:'声音'},
                {image: this.studyMenu, rect: [314,4,54,54],name:'色彩'},
                {image: this.studyMenu, rect: [368,0,62,62],name:'声音'},
                {image: this.studyMenu, rect: [434,0,54,62],name:'系统'},
                {image: this.studyMenu, rect: [488,0,62,58],name:'办公地点'},
                {image: this.studyMenu, rect: [555,5,52,53],name:'广告提升'}
            ];


            this.queue.off('complete');
            this.fire('complete');
        }
    })
})(window.game);