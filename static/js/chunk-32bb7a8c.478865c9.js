(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32bb7a8c"],{"01f3":function(t,a,e){"use strict";e("f077")},"0ba6":function(t,a,e){},3131:function(t,a,e){},4029:function(t,a,e){"use strict";e("748d")},"4a4e":function(t,a,e){"use strict";e("3131")},"4afe":function(t,a,e){},"6add":function(t,a,e){"use strict";e("4afe")},"748d":function(t,a,e){},"7d18":function(t,a,e){},9406:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Card"),e("Sale"),e("Observe")],1)},i=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",{staticClass:"box-card",staticStyle:{margin:"10px 0px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("el-tabs",{staticClass:"tab",model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"销售额",name:"sale"}}),e("el-tab-pane",{attrs:{label:"访问量",name:"visite"}})],1)],1),e("div",[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:18}},[e("div",{ref:"charts",staticClass:"charts"})]),e("el-col",{staticClass:"right",attrs:{span:6}},[e("h3",[t._v("最热商品")]),e("ul",[e("li",[e("span",{staticClass:"rindex"},[t._v("1")]),e("span",[t._v(t._s(this.rankdata[0].gname))]),e("span",{staticClass:"rvalue"},[t._v(t._s(this.rankdata[0].viewCnt))])]),e("li",[e("span",{staticClass:"rindex"},[t._v("2")]),e("span",[t._v(t._s(this.rankdata[1].gname))]),e("span",{staticClass:"rvalue"},[t._v(t._s(this.rankdata[1].viewCnt))])]),e("li",[e("span",{staticClass:"rindex"},[t._v("3")]),e("span",[t._v(t._s(this.rankdata[2].gname))]),e("span",{staticClass:"rvalue"},[t._v(t._s(this.rankdata[2].viewCnt))])]),e("li",[e("span",{staticClass:"rindex2"},[t._v("4")]),e("span",[t._v(t._s(this.rankdata[3].gname))]),e("span",{staticClass:"rvalue"},[t._v(t._s(this.rankdata[3].viewCnt))])]),e("li",[e("span",{staticClass:"rindex2"},[t._v("5")]),e("span",[t._v(t._s(this.rankdata[4].gname))]),e("span",{staticClass:"rvalue"},[t._v(t._s(this.rankdata[4].viewCnt))])]),e("li",[e("span",{staticClass:"rindex2"},[t._v("6")]),e("span",[t._v(t._s(this.rankdata[5].gname))]),e("span",{staticClass:"rvalue"},[t._v(t._s(this.rankdata[5].viewCnt))])]),e("li",[e("span",{staticClass:"rindex2"},[t._v("7")]),e("span",[t._v(t._s(this.rankdata[6].gname))]),e("span",{staticClass:"rvalue"},[t._v(t._s(this.rankdata[6].viewCnt))])])])])],1)],1)])},l=[],n=e("5530"),o=e("313e"),h=e.n(o),d=e("5a0c"),c=e.n(d),p=e("2f62"),u={name:"",data:function(){return{rankdata:[{gid:"00000031",gname:"4564",viewCnt:2},{gid:"00000024",gname:"12",viewCnt:1},{gid:"00000028",gname:"12",viewCnt:1},{gid:"00000036",gname:"2",viewCnt:1},{gid:"00000030",gname:"22",viewCnt:1},{gid:"00000034",gname:"ASOUL",viewCnt:1},{gid:"00000002",gname:"巧克力面包",viewCnt:1}],activeName:"sale",mycharts:null,date:[]}},mounted:function(){var t=this;this.$API.dashboard.getrankdata().then((function(a){t.rankdata=a.data})),this.mycharts=h.a.init(this.$refs.charts),this.setMoney()},computed:Object(n["a"])({title:function(){return"sale"==this.activeName?"销售额":"访问量"}},Object(p["c"])({listState:function(t){return t.home.list}})),watch:{title:function(){console.log("修改配置数据"),"销售额"==this.title?this.setMoney():this.setVisit()}},methods:{setVisit:function(){var t=this;this.$API.dashboard.getVisitNumList().then((function(a){console.log(a),t.mycharts.setOption({title:{text:t.title},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:a.data.days,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"访问量",type:"line",barWidth:"60%",data:a.data.nums,color:"yellowgreen"}]})}))},setMoney:function(){var t=this;this.$API.dashboard.getMoneyList().then((function(a){console.log(a),t.mycharts.setOption({title:{text:t.title},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:a.data.timedata,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"销售额",type:"line",barWidth:"60%",data:a.data.moneydata,color:"yellowgreen"}]})}))},setDay:function(){var t=c()().format("YYYY-MM-DD");this.date=[t,t]},setWeek:function(){var t=c()().day(1).format("YYYY-MM-DD"),a=c()().day(7).format("YYYY-MM-DD");this.date=[t,a]},setMonth:function(){var t=c()().startOf("month").format("YYYY-MM-DD"),a=c()().endOf("month").format("YYYY-MM-DD");this.date=[t,a]},setYear:function(){var t=c()().startOf("year").format("YYYY-MM-DD"),a=c()().endOf("year").format("YYYY-MM-DD");this.date=[t,a]}}},f=u,v=(e("9bd0"),e("2877")),m=Object(v["a"])(f,r,l,!1,null,"20ed1070",null),g=m.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:6}},[e("el-card",[e("Detail",{attrs:{title:"总销售额",count:this.totalMoney}},[e("template",{slot:"charts"},[e("span",[t._v("周同比 "+t._s(this.weekrate)+"% "),e("svg",{staticClass:"icon",attrs:{t:"1637478902688",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3315",width:"16",height:"16"}},[e("path",{attrs:{d:"M786.295467 485.000533l-6.126934 2.082134v-18.295467h6.024534l0.1024 16.213333zM221.5424 485.239467h-8.9088l-0.085333-16.247467 8.994133-0.512v16.759467z",fill:"#1afa29","p-id":"3316"}}),e("path",{attrs:{d:"M784.469333 480.290133L504.456533 178.978133a6.826667 6.826667 0 0 0-10.001066 0L214.459733 480.290133a6.826667 6.826667 0 0 0 5.922134 11.4176l158.1056-21.435733L358.4 853.333333v16.162134a6.826667 6.826667 0 0 0 6.826667 7.168h268.356266a6.826667 6.826667 0 0 0 6.826667-7.168l-0.119467-16.3328-19.848533-382.8736 158.122667 21.418666a6.826667 6.826667 0 0 0 5.922133-11.4176z",fill:"#1afa29","p-id":"3317"}}),e("path",{attrs:{d:"M191.3344 734.6176l103.031467 72.789333 103.048533-72.789333a127.197867 127.197867 0 0 0-206.097067 0z",fill:"#1afa29","p-id":"3318"}}),e("path",{attrs:{d:"M294.382933 681.984a127.010133 127.010133 0 0 1 103.048534 52.6336l-103.048534 72.789333-103.031466-72.789333a127.010133 127.010133 0 0 1 103.048533-52.6336m0-10.24a137.915733 137.915733 0 0 0-111.342933 56.849067 10.24 10.24 0 0 0 2.269866 14.2848l0.136534 0.1024L288.426667 815.786667a10.24 10.24 0 0 0 11.810133 0l103.031467-72.772267a10.24 10.24 0 0 0 2.4064-14.3872 137.915733 137.915733 0 0 0-111.342934-56.849067z",fill:"#1afa29","p-id":"3319"}}),e("path",{attrs:{d:"M384.1536 444.142933h1.5872l-20.48 409.6h268.2368l-20.48-409.6",fill:"#1afa29","p-id":"3320"}}),e("path",{attrs:{d:"M633.4976 860.5696H365.226667a6.826667 6.826667 0 0 1-6.826667-7.168l20.48-409.6 5.239467 0.256v-6.826667h1.5872a6.826667 6.826667 0 0 1 6.826666 7.168l-20.1216 402.432H626.346667l-20.1216-402.432 13.653333-0.682666 20.48 409.6a6.826667 6.826667 0 0 1-6.826667 7.168z",fill:"#1afa29","p-id":"3321"}}),e("path",{attrs:{d:"M613.0176 446.276267l166.365867 22.545066L499.387733 167.509333 219.374933 468.821333l164.778667-22.545066",fill:"#1afa29","p-id":"3322"}}),e("path",{attrs:{d:"M633.4976 860.5696H365.226667a6.826667 6.826667 0 0 1-6.826667-7.168l19.968-399.240533-158.122667 21.435733a6.826667 6.826667 0 0 1-5.922133-11.4176L494.370133 162.8672a6.826667 6.826667 0 0 1 10.001067 0L784.384 464.213333a6.826667 6.826667 0 0 1-5.922133 11.4176l-158.122667-21.418666L640.3072 853.333333a6.826667 6.826667 0 0 1-6.826667 7.168z m-261.12-13.653333H626.346667L606.3104 446.634667a6.826667 6.826667 0 0 1 7.7312-7.099734l147.3536 19.950934L499.370667 177.493333 237.3632 459.485867l147.3536-19.968a6.826667 6.826667 0 0 1 7.7312 7.099733z",fill:"#1afa29","p-id":"3323"}}),e("path",{attrs:{d:"M557.3632 617.5744l149.5552 105.659733 149.572267-105.659733a184.644267 184.644267 0 0 0-299.1616 0z",fill:"#1afa29","p-id":"3324"}}),e("path",{attrs:{d:"M706.935467 541.184a184.32 184.32 0 0 1 149.572266 76.3904l-149.572266 105.659733-149.5552-105.659733a184.32 184.32 0 0 1 149.572266-76.3904m0-10.24a194.56 194.56 0 0 0-157.866666 80.622933 10.24 10.24 0 0 0 2.184533 14.2336l0.221867 0.1536 149.5552 105.659734a10.24 10.24 0 0 0 11.810133 0l149.5552-105.642667a10.24 10.24 0 0 0 2.4064-14.3872 194.56 194.56 0 0 0-157.866667-80.622933z",fill:"#1afa29","p-id":"3325"}})])]),t._v(" "),e("span",[t._v("日同比 "+t._s(this.dayrate)+" "),e("svg",{staticClass:"icon",attrs:{t:"1637478988225",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4331",width:"16",height:"16"}},[e("path",{attrs:{d:"M252.484267 566.749867h11.776v16.6912h-11.776zM815.684267 566.8352h10.461866v16.9984h-10.461866z",fill:"#996E28","p-id":"4332"}}),e("path",{attrs:{d:"M825.361067 580.642133a6.826667 6.826667 0 0 0-6.980267-3.618133l-158.0032 21.418667L680.2432 201.386667a6.826667 6.826667 0 0 0 0-1.058134v-1.109333a6.826667 6.826667 0 0 0-6.826667-7.168H405.1968a6.826667 6.826667 0 0 0-6.826667 7.168v1.109333a6.826667 6.826667 0 0 0 0 1.058134l19.848534 397.038933-158.0032-21.4016a6.826667 6.826667 0 0 0-5.922134 11.4176l280.0128 301.277867a6.826667 6.826667 0 0 0 10.001067 0L824.32 588.424533a6.826667 6.826667 0 0 0 1.041067-7.7824z",fill:"#996E28","p-id":"4333"}}),e("path",{attrs:{d:"M339.780267 523.7248H103.6288a17.066667 17.066667 0 1 1 0-34.133333h236.151467a13.380267 13.380267 0 1 0 0-26.760534h-33.467734a44.782933 44.782933 0 1 1 0.631467-89.565866h238.250667a17.066667 17.066667 0 0 1 0 34.133333h-238.250667a11.093333 11.093333 0 0 0-11.229867 9.5744 10.717867 10.717867 0 0 0 10.5984 11.7248h33.467734a47.5136 47.5136 0 1 1 0 95.0272z",fill:"#D5382E","p-id":"4334"}}),e("path",{attrs:{d:"M545.194667 373.282133a17.066667 17.066667 0 0 1 0 34.133334h-238.250667a11.093333 11.093333 0 0 0-11.229867 9.5744 10.717867 10.717867 0 0 0 10.5984 11.7248h33.467734a47.5136 47.5136 0 1 1 0 95.0272H103.6288a17.066667 17.066667 0 1 1 0-34.133334h236.151467a13.380267 13.380267 0 1 0 0-26.760533h-33.467734a44.782933 44.782933 0 1 1 0.631467-89.565867h238.250667m0-10.24h-238.250667a55.022933 55.022933 0 1 0-0.631467 110.045867h33.467734a3.140267 3.140267 0 1 1 0 6.280533H103.6288a27.306667 27.306667 0 1 0 0 54.613334h236.151467a57.7536 57.7536 0 1 0 0-115.5072h-33.467734a0.512 0.512 0 0 1-0.290133-0.170667 0.3584 0.3584 0 0 1-0.119467-0.221867 1.416533 1.416533 0 0 1 1.041067-0.426666h238.250667a27.306667 27.306667 0 0 0 0-54.613334z",fill:"#E8D4AB","p-id":"4335"}}),e("path",{attrs:{d:"M654.523733 591.854933h-1.5872l20.48-409.6H405.1968l20.48 409.6",fill:"#AF3131","p-id":"4336"}}),e("path",{attrs:{d:"M654.523733 593.5616h-1.5872l20.48-409.6H405.1968l20.48 409.6",fill:"#D5382E","p-id":"4337"}}),e("path",{attrs:{d:"M654.523733 600.388267h-1.5872a6.826667 6.826667 0 0 1-6.826666-7.168l20.1216-402.432H412.3648l20.1216 402.432-13.653333 0.682666-20.48-409.6a6.826667 6.826667 0 0 1 6.826666-7.168h268.253867a6.826667 6.826667 0 0 1 6.826667 7.168l-20.48 409.6-5.239467-0.256z",fill:"#E8D4AB","p-id":"4338"}}),e("path",{attrs:{d:"M425.6768 589.704533l-166.365867-22.528L539.306667 868.471467l279.995733-301.294934-164.778667 22.528",fill:"#D5382E","p-id":"4339"}}),e("path",{attrs:{d:"M425.6768 591.4112l-166.365867-22.528L539.306667 870.178133l279.995733-301.294933-164.778667 22.528",fill:"#D5382E","p-id":"4340"}}),e("path",{attrs:{d:"M539.306667 874.837333a6.826667 6.826667 0 0 1-5.000534-2.184533L254.293333 571.357867a6.826667 6.826667 0 0 1 5.922134-11.4176l158.122666 21.418666-19.968-399.223466a6.826667 6.826667 0 0 1 6.826667-7.168h268.2368a6.826667 6.826667 0 0 1 6.826667 7.168l-19.968 399.240533 158.122666-21.435733a6.826667 6.826667 0 0 1 5.922134 11.4176L544.3072 872.6528a6.826667 6.826667 0 0 1-5.000533 2.184533zM277.2992 576.034133L539.306667 857.975467l262.007466-281.941334-147.3536 19.968a6.826667 6.826667 0 0 1-7.7312-7.099733l20.0192-400.2816H412.3648l20.0192 400.264533a6.826667 6.826667 0 0 1-7.7312 7.099734z",fill:"#E8D4AB","p-id":"4341"}}),e("path",{attrs:{d:"M780.7488 226.338133h105.540267a17.066667 17.066667 0 0 1 0 34.133334h-105.540267a13.380267 13.380267 0 1 0 0 26.760533h8.0384a44.782933 44.782933 0 1 1 0.631467 89.565867H503.7056a17.066667 17.066667 0 0 1 0-34.133334h285.730133a10.717867 10.717867 0 0 0 10.5984-11.7248 11.076267 11.076267 0 0 0-11.229866-9.5744h-8.0384a47.5136 47.5136 0 1 1 0-95.0272z",fill:"#D5382E","p-id":"4342"}}),e("path",{attrs:{d:"M886.289067 226.338133a17.066667 17.066667 0 0 1 0 34.133334h-105.540267a13.380267 13.380267 0 1 0 0 26.760533h8.0384a44.782933 44.782933 0 1 1 0.631467 89.565867H503.7056a17.066667 17.066667 0 0 1 0-34.133334h285.730133a10.717867 10.717867 0 0 0 10.5984-11.7248 11.076267 11.076267 0 0 0-11.229866-9.5744h-8.0384a47.5136 47.5136 0 1 1 0-95.0272h105.540266m0-10.24h-105.557333a57.7536 57.7536 0 1 0 0 115.5072h8.0384a1.416533 1.416533 0 0 1 1.041067 0.426667 0.341333 0.341333 0 0 1-0.119467 0.221867 0.802133 0.802133 0 0 1-0.221867 0.170666H503.7056a27.306667 27.306667 0 0 0 0 54.613334h285.730133a55.022933 55.022933 0 1 0-0.631466-110.045867h-8.0384a3.140267 3.140267 0 1 1 0-6.280533h105.540266a27.306667 27.306667 0 0 0 0-54.613334z",fill:"#E8D4AB","p-id":"4343"}})])])]),e("template",{slot:"footer"},[e("span",[t._v("日销售额￥ "+t._s(this.daymoney))])])],2)],1)],1),e("el-col",{attrs:{span:6}},[e("el-card",[e("Detail",{attrs:{title:"访问量",count:this.totalVisitNum}},[e("template",{slot:"charts"},[e("lineCharts")],1),e("template",{slot:"footer"},[e("span",[t._v("日访问量 "+t._s(this.curVisitNum))])])],2)],1)],1),e("el-col",{attrs:{span:6}},[e("el-card",[e("Detail",{attrs:{title:"交易笔数",count:this.totalOrderNum}},[e("template",{slot:"charts"},[e("barCharts")],1),e("template",{slot:"footer"},[e("span",[t._v("今日交易数 "+t._s(this.curOrderNum))])])],2)],1)],1),e("el-col",{attrs:{span:6}},[e("el-card",[e("Detail",{attrs:{title:"活跃比",count:this.act}},[e("template",{slot:"charts"},[e("progressCharts",{attrs:{d:this.act}})],1),e("template",{slot:"footer"},[e("span",[t._v("总人数 "+t._s(this.allpeople)+" "),e("svg",{staticClass:"icon",attrs:{t:"1637478902688",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3315",width:"16",height:"16"}},[e("path",{attrs:{d:"M786.295467 485.000533l-6.126934 2.082134v-18.295467h6.024534l0.1024 16.213333zM221.5424 485.239467h-8.9088l-0.085333-16.247467 8.994133-0.512v16.759467z",fill:"#1afa29","p-id":"3316"}}),e("path",{attrs:{d:"M784.469333 480.290133L504.456533 178.978133a6.826667 6.826667 0 0 0-10.001066 0L214.459733 480.290133a6.826667 6.826667 0 0 0 5.922134 11.4176l158.1056-21.435733L358.4 853.333333v16.162134a6.826667 6.826667 0 0 0 6.826667 7.168h268.356266a6.826667 6.826667 0 0 0 6.826667-7.168l-0.119467-16.3328-19.848533-382.8736 158.122667 21.418666a6.826667 6.826667 0 0 0 5.922133-11.4176z",fill:"#1afa29","p-id":"3317"}}),e("path",{attrs:{d:"M191.3344 734.6176l103.031467 72.789333 103.048533-72.789333a127.197867 127.197867 0 0 0-206.097067 0z",fill:"#1afa29","p-id":"3318"}}),e("path",{attrs:{d:"M294.382933 681.984a127.010133 127.010133 0 0 1 103.048534 52.6336l-103.048534 72.789333-103.031466-72.789333a127.010133 127.010133 0 0 1 103.048533-52.6336m0-10.24a137.915733 137.915733 0 0 0-111.342933 56.849067 10.24 10.24 0 0 0 2.269866 14.2848l0.136534 0.1024L288.426667 815.786667a10.24 10.24 0 0 0 11.810133 0l103.031467-72.772267a10.24 10.24 0 0 0 2.4064-14.3872 137.915733 137.915733 0 0 0-111.342934-56.849067z",fill:"#1afa29","p-id":"3319"}}),e("path",{attrs:{d:"M384.1536 444.142933h1.5872l-20.48 409.6h268.2368l-20.48-409.6",fill:"#1afa29","p-id":"3320"}}),e("path",{attrs:{d:"M633.4976 860.5696H365.226667a6.826667 6.826667 0 0 1-6.826667-7.168l20.48-409.6 5.239467 0.256v-6.826667h1.5872a6.826667 6.826667 0 0 1 6.826666 7.168l-20.1216 402.432H626.346667l-20.1216-402.432 13.653333-0.682666 20.48 409.6a6.826667 6.826667 0 0 1-6.826667 7.168z",fill:"#1afa29","p-id":"3321"}}),e("path",{attrs:{d:"M613.0176 446.276267l166.365867 22.545066L499.387733 167.509333 219.374933 468.821333l164.778667-22.545066",fill:"#1afa29","p-id":"3322"}}),e("path",{attrs:{d:"M633.4976 860.5696H365.226667a6.826667 6.826667 0 0 1-6.826667-7.168l19.968-399.240533-158.122667 21.435733a6.826667 6.826667 0 0 1-5.922133-11.4176L494.370133 162.8672a6.826667 6.826667 0 0 1 10.001067 0L784.384 464.213333a6.826667 6.826667 0 0 1-5.922133 11.4176l-158.122667-21.418666L640.3072 853.333333a6.826667 6.826667 0 0 1-6.826667 7.168z m-261.12-13.653333H626.346667L606.3104 446.634667a6.826667 6.826667 0 0 1 7.7312-7.099734l147.3536 19.950934L499.370667 177.493333 237.3632 459.485867l147.3536-19.968a6.826667 6.826667 0 0 1 7.7312 7.099733z",fill:"#1afa29","p-id":"3323"}}),e("path",{attrs:{d:"M557.3632 617.5744l149.5552 105.659733 149.572267-105.659733a184.644267 184.644267 0 0 0-299.1616 0z",fill:"#1afa29","p-id":"3324"}}),e("path",{attrs:{d:"M706.935467 541.184a184.32 184.32 0 0 1 149.572266 76.3904l-149.572266 105.659733-149.5552-105.659733a184.32 184.32 0 0 1 149.572266-76.3904m0-10.24a194.56 194.56 0 0 0-157.866666 80.622933 10.24 10.24 0 0 0 2.184533 14.2336l0.221867 0.1536 149.5552 105.659734a10.24 10.24 0 0 0 11.810133 0l149.5552-105.642667a10.24 10.24 0 0 0 2.4064-14.3872 194.56 194.56 0 0 0-157.866667-80.622933z",fill:"#1afa29","p-id":"3325"}})])]),t._v(" "),e("span",[t._v("活跃人数 "+t._s(this.actpeople)+" "),e("svg",{staticClass:"icon",attrs:{t:"1637478988225",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4331",width:"16",height:"16"}},[e("path",{attrs:{d:"M252.484267 566.749867h11.776v16.6912h-11.776zM815.684267 566.8352h10.461866v16.9984h-10.461866z",fill:"#996E28","p-id":"4332"}}),e("path",{attrs:{d:"M825.361067 580.642133a6.826667 6.826667 0 0 0-6.980267-3.618133l-158.0032 21.418667L680.2432 201.386667a6.826667 6.826667 0 0 0 0-1.058134v-1.109333a6.826667 6.826667 0 0 0-6.826667-7.168H405.1968a6.826667 6.826667 0 0 0-6.826667 7.168v1.109333a6.826667 6.826667 0 0 0 0 1.058134l19.848534 397.038933-158.0032-21.4016a6.826667 6.826667 0 0 0-5.922134 11.4176l280.0128 301.277867a6.826667 6.826667 0 0 0 10.001067 0L824.32 588.424533a6.826667 6.826667 0 0 0 1.041067-7.7824z",fill:"#996E28","p-id":"4333"}}),e("path",{attrs:{d:"M339.780267 523.7248H103.6288a17.066667 17.066667 0 1 1 0-34.133333h236.151467a13.380267 13.380267 0 1 0 0-26.760534h-33.467734a44.782933 44.782933 0 1 1 0.631467-89.565866h238.250667a17.066667 17.066667 0 0 1 0 34.133333h-238.250667a11.093333 11.093333 0 0 0-11.229867 9.5744 10.717867 10.717867 0 0 0 10.5984 11.7248h33.467734a47.5136 47.5136 0 1 1 0 95.0272z",fill:"#D5382E","p-id":"4334"}}),e("path",{attrs:{d:"M545.194667 373.282133a17.066667 17.066667 0 0 1 0 34.133334h-238.250667a11.093333 11.093333 0 0 0-11.229867 9.5744 10.717867 10.717867 0 0 0 10.5984 11.7248h33.467734a47.5136 47.5136 0 1 1 0 95.0272H103.6288a17.066667 17.066667 0 1 1 0-34.133334h236.151467a13.380267 13.380267 0 1 0 0-26.760533h-33.467734a44.782933 44.782933 0 1 1 0.631467-89.565867h238.250667m0-10.24h-238.250667a55.022933 55.022933 0 1 0-0.631467 110.045867h33.467734a3.140267 3.140267 0 1 1 0 6.280533H103.6288a27.306667 27.306667 0 1 0 0 54.613334h236.151467a57.7536 57.7536 0 1 0 0-115.5072h-33.467734a0.512 0.512 0 0 1-0.290133-0.170667 0.3584 0.3584 0 0 1-0.119467-0.221867 1.416533 1.416533 0 0 1 1.041067-0.426666h238.250667a27.306667 27.306667 0 0 0 0-54.613334z",fill:"#E8D4AB","p-id":"4335"}}),e("path",{attrs:{d:"M654.523733 591.854933h-1.5872l20.48-409.6H405.1968l20.48 409.6",fill:"#AF3131","p-id":"4336"}}),e("path",{attrs:{d:"M654.523733 593.5616h-1.5872l20.48-409.6H405.1968l20.48 409.6",fill:"#D5382E","p-id":"4337"}}),e("path",{attrs:{d:"M654.523733 600.388267h-1.5872a6.826667 6.826667 0 0 1-6.826666-7.168l20.1216-402.432H412.3648l20.1216 402.432-13.653333 0.682666-20.48-409.6a6.826667 6.826667 0 0 1 6.826666-7.168h268.253867a6.826667 6.826667 0 0 1 6.826667 7.168l-20.48 409.6-5.239467-0.256z",fill:"#E8D4AB","p-id":"4338"}}),e("path",{attrs:{d:"M425.6768 589.704533l-166.365867-22.528L539.306667 868.471467l279.995733-301.294934-164.778667 22.528",fill:"#D5382E","p-id":"4339"}}),e("path",{attrs:{d:"M425.6768 591.4112l-166.365867-22.528L539.306667 870.178133l279.995733-301.294933-164.778667 22.528",fill:"#D5382E","p-id":"4340"}}),e("path",{attrs:{d:"M539.306667 874.837333a6.826667 6.826667 0 0 1-5.000534-2.184533L254.293333 571.357867a6.826667 6.826667 0 0 1 5.922134-11.4176l158.122666 21.418666-19.968-399.223466a6.826667 6.826667 0 0 1 6.826667-7.168h268.2368a6.826667 6.826667 0 0 1 6.826667 7.168l-19.968 399.240533 158.122666-21.435733a6.826667 6.826667 0 0 1 5.922134 11.4176L544.3072 872.6528a6.826667 6.826667 0 0 1-5.000533 2.184533zM277.2992 576.034133L539.306667 857.975467l262.007466-281.941334-147.3536 19.968a6.826667 6.826667 0 0 1-7.7312-7.099733l20.0192-400.2816H412.3648l20.0192 400.264533a6.826667 6.826667 0 0 1-7.7312 7.099734z",fill:"#E8D4AB","p-id":"4341"}}),e("path",{attrs:{d:"M780.7488 226.338133h105.540267a17.066667 17.066667 0 0 1 0 34.133334h-105.540267a13.380267 13.380267 0 1 0 0 26.760533h8.0384a44.782933 44.782933 0 1 1 0.631467 89.565867H503.7056a17.066667 17.066667 0 0 1 0-34.133334h285.730133a10.717867 10.717867 0 0 0 10.5984-11.7248 11.076267 11.076267 0 0 0-11.229866-9.5744h-8.0384a47.5136 47.5136 0 1 1 0-95.0272z",fill:"#D5382E","p-id":"4342"}}),e("path",{attrs:{d:"M886.289067 226.338133a17.066667 17.066667 0 0 1 0 34.133334h-105.540267a13.380267 13.380267 0 1 0 0 26.760533h8.0384a44.782933 44.782933 0 1 1 0.631467 89.565867H503.7056a17.066667 17.066667 0 0 1 0-34.133334h285.730133a10.717867 10.717867 0 0 0 10.5984-11.7248 11.076267 11.076267 0 0 0-11.229866-9.5744h-8.0384a47.5136 47.5136 0 1 1 0-95.0272h105.540266m0-10.24h-105.557333a57.7536 57.7536 0 1 0 0 115.5072h8.0384a1.416533 1.416533 0 0 1 1.041067 0.426667 0.341333 0.341333 0 0 1-0.119467 0.221867 0.802133 0.802133 0 0 1-0.221867 0.170666H503.7056a27.306667 27.306667 0 0 0 0 54.613334h285.730133a55.022933 55.022933 0 1 0-0.631466-110.045867h-8.0384a3.140267 3.140267 0 1 1 0-6.280533h105.540266a27.306667 27.306667 0 0 0 0-54.613334z",fill:"#E8D4AB","p-id":"4343"}})])])])],2)],1)],1)],1)],1)},b=[],w=e("1da1"),_=(e("96cf"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"card-header"},[e("span",[t._v(t._s(t.title))]),e("svg",{staticClass:"icon",attrs:{t:"1637478175000",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2179",width:"16",height:"16"}},[e("path",{attrs:{d:"M536 480v192a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V480a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16z m-32-128h16a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16z m8 448c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z","p-id":"2180",fill:"#8a8a8a"}})])]),e("div",{staticClass:"card-content"},[t._v(t._s(t.count))]),e("div",{staticClass:"card-charts"},[t._t("charts")],2),e("div",{staticClass:"card-footer"},[t._t("footer")],2)])}),M=[],x={name:"",props:["title","count"]},C=x,O=(e("cb91"),Object(v["a"])(C,_,M,!1,null,"c9383462",null)),L=O.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"charts",staticClass:"charts"})},D=[],A={name:"",mounted:function(){var t=h.a.init(this.$refs.charts);this.$API.dashboard.getVisitNumList().then((function(a){console.log(a),t.setOption({xAxis:{show:!1,type:"category"},yAxis:{show:!1},series:[{type:"line",data:a.data.nums,itemStyle:{opacity:0},lineStyle:{color:"purple"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"purple"},{offset:1,color:"#fff"}],global:!1}}}],grid:{left:0,top:0,right:0,bottom:0}})}))}},k=A,E=(e("f2ea"),Object(v["a"])(k,z,D,!1,null,"bf71427c",null)),N=E.exports,H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"charts",staticClass:"charts"})},Y=[],$={name:"",mounted:function(){var t=h.a.init(this.$refs.charts);this.$API.dashboard.getOrderNumList().then((function(a){console.log(a.data),t.setOption({xAxis:{show:!1,type:"category"},yAxis:{show:!1},series:[{type:"bar",data:a.data,color:"cyan"}],grid:{left:0,top:0,right:0,bottom:0},tooltip:{}})}))}},B=$,j=(e("4029"),Object(v["a"])(B,H,Y,!1,null,"05887cb4",null)),V=j.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"charts",staticClass:"charts"})},S=[],I=e("ade3"),R={name:"",props:["d"],data:function(){return{dd:this.d}},mounted:function(){var t=h.a.init(this.$refs.charts);this.$API.dashboard.getActData().then((function(a){var e;console.log(a.data.act),t.setOption({xAxis:{show:!1,min:0,max:1},yAxis:{show:!1,type:"category"},series:[(e={type:"bar",data:[a.data.act],color:"cyan",barWidth:10},Object(I["a"])(e,"color","yellowgreen"),Object(I["a"])(e,"showBackground",!0),Object(I["a"])(e,"backgroundStyle",{color:"#eee"}),Object(I["a"])(e,"label",{show:!0,formatter:"|",position:"right"}),e)],grid:{left:0,top:0,right:0,bottom:0}})}))}},W=R,F=(e("4a4e"),Object(v["a"])(W,P,S,!1,null,"17462920",null)),J=F.exports,T={name:"",components:{Detail:L,lineCharts:N,barCharts:V,progressCharts:J},data:function(){return{totalMoney:"￥233333",weekrate:223,dayrate:123,daymoney:111,totalOrderNum:"",curOrderNum:"",totalVisitNum:"",curVisitNum:"",act:"",allpeople:"",actpeople:""}},created:function(){this.getMoneys(),this.getOrderNum(),this.getVisitNum(),this.getActData()},methods:{getMoneys:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$API.dashboard.getMoneys();case 2:e=a.sent,t.totalMoney=e.data.totalMoney,t.weekrate=e.data.weekrate,t.dayrate=e.data.dayrate,t.daymoney=e.data.daymoney;case 7:case"end":return a.stop()}}),a)})))()},getOrderNum:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$API.dashboard.getOrderNum();case 2:e=a.sent,t.totalOrderNum=e.data.totalOrderNum,t.curOrderNum=e.data.curOrderNum;case 5:case"end":return a.stop()}}),a)})))()},getVisitNum:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$API.dashboard.getVisitNum();case 2:e=a.sent,t.totalVisitNum=e.data.totalVisitNum,t.curVisitNum=e.data.curVisitNum;case 5:case"end":return a.stop()}}),a)})))()},getActData:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$API.dashboard.getActData();case 2:e=a.sent,t.act=e.data.act,t.allpeople=e.data.allpeople,t.actpeople=e.data.actpeople;case 6:case"end":return a.stop()}}),a)})))()}}},G=T,U=Object(v["a"])(G,y,b,!1,null,"943c02e2",null),q=U.exports,K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:12}},[e("Category1")],1),e("el-col",{attrs:{span:12}},[e("Category")],1)],1)],1)},Q=[],X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",[e("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"category-header"},[e("span",[t._v("商品类别占比")]),e("el-radio-group",{on:{change:t.setmoneyByspot},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},[e("el-radio-button",{attrs:{label:"全部"}}),e("el-radio-button",{attrs:{label:"学院路校区"}}),e("el-radio-button",{attrs:{label:"沙河校区"}})],1)],1)]),e("div",[e("div",{ref:"charts",staticClass:"charts"})])])},Z=[],tt=(e("b0c0"),{name:"",data:function(){return{value:"全部",mychart:""}},mounted:function(){this.mychart=h.a.init(this.$refs.charts),this.setmoneyByspot()},methods:{setmoneyByspot:function(){var t=this;this.$API.dashboard.getGoodsNumBySpot(this.value).then((function(a){t.mychart.setOption({title:{text:a.data[0].name,subtext:a.data[0].value,left:"center",top:"center"},tooltip:{trigger:"item"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!0,position:"outsize"},labelLine:{show:!0},data:a.data}]}),t.mychart.on("mouseover",(function(a){var e=a.data,s=e.name,i=e.value;t.mychart.setOption({title:{text:s,subtext:i}})}))}))}}}),at=tt,et=(e("01f3"),Object(v["a"])(at,X,Z,!1,null,"4ea5f42e",null)),st=et.exports,it=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",[e("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"category-header"},[e("span",[t._v("销售额类别占比")]),e("el-radio-group",{on:{change:t.setmoneyByspot},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},[e("el-radio-button",{attrs:{label:"全部"}}),e("el-radio-button",{attrs:{label:"学院路校区"}}),e("el-radio-button",{attrs:{label:"沙河校区"}})],1)],1)]),e("div",[e("div",{ref:"charts",staticClass:"charts"})])])},rt=[],lt={name:"",data:function(){return{value:"全部",mychart:""}},mounted:function(){this.mychart=h.a.init(this.$refs.charts),this.setmoneyByspot()},methods:{setmoneyByspot:function(){var t=this;this.$API.dashboard.getMoneyBySpot(this.value).then((function(a){t.mychart.setOption({title:{text:a.data[0].name,subtext:a.data[0].value,left:"center",top:"center"},tooltip:{trigger:"item"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!0,position:"outsize"},labelLine:{show:!0},data:a.data}]}),t.mychart.on("mouseover",(function(a){var e=a.data,s=e.name,i=e.value;t.mychart.setOption({title:{text:s,subtext:i}})}))}))}}},nt=lt,ot=(e("6add"),Object(v["a"])(nt,it,rt,!1,null,"661a444f",null)),ht=ot.exports,dt={name:"",components:{Category1:st,Category:ht}},ct=dt,pt=Object(v["a"])(ct,K,Q,!1,null,"d50fd3c0",null),ut=pt.exports,ft={name:"",components:{Card:q,Sale:g,Observe:ut},mounted:function(){this.$store.dispatch("getData")}},vt=ft,mt=Object(v["a"])(vt,s,i,!1,null,"e8b60a1e",null);a["default"]=mt.exports},"9bd0":function(t,a,e){"use strict";e("0ba6")},af94:function(t,a,e){},cb91:function(t,a,e){"use strict";e("af94")},f077:function(t,a,e){},f2ea:function(t,a,e){"use strict";e("7d18")}}]);