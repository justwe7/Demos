define(function(require,exports,module) {
    // exports: 对外提供接口对象

    var echart = require('echarts-all');

    /*function r(argument) {
        // body...
    }*/
    /*require.async('echarts-all.js',function(){
        alert('模块加载完的回调');
    });*/

    exports.run1 = run1;
    exports.run2 = run2;
    exports.run3 = run3;


    function run1(obj) {
        var myChart = echarts.init(document.getElementById(obj));

        var option = {
            title : {
                text: '患者总人数',
                x: 25,
                y: 25
            },
            /*tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },*/
            legend: {
                data:['正常'],
                x: 'right',
                y: 25
            },
            toolbox: {
                show : false
            },
            xAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show:false
                    },
                    axisLine : {
                        lineStyle : {
                            color: '#888',
                            width: 2,
                            type: 'solid'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    splitLine: {
                        // show:false,
                        lineStyle:  {
                            color: ['#ccc'],
                            width: 1,
                            type: 'dashed'
                        }
                    },
                    axisLine : {
                        lineStyle : {
                            color: '#888',
                            width: 2,
                            type: 'solid'
                        }
                    },
                    data : ['女性','男性','总人数']
                }
            ],
            series : [
                {
                    // name:'正常',
                    type:'bar',
                    "barWidth": 18,
                    "itemStyle": {
                        normal: {
                            color: function(params) {
                                var colorList = ['#45d176','#B5C334','#FCCE10'];
                                return colorList[params.dataIndex]
                            },
                            label : {
                                show : true,
                                formatter: function (params) {
                                    console.log(params)
                                    /*var str = params.name == '男' ? params.value + '\n(' + (_norScale[0]*100).toFixed(0) + "%)" : params.value + '\n(' + (_norScale[1]*100).toFixed(0) + "%)";*/
                                    return params.value + '人';
                                },
                                textStyle : {
                                    fontSize : '12',
                                    color: '#888',
                                    align: 'left',
                                    fontFamily : '微软雅黑',
                                    // fontWeight : 'bold'
                                }
                            }
                        },
                    },
                    // itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data:[320, 302, 701]
                }
            ]
        };


        myChart.setOption(option);
    }

    function run2(obj) {
        var myChart = echarts.init(document.getElementById(obj));

        var option = {
            title : {
                text: '患者年龄分布图',
                x: 25,
                y: 25
            },
            tooltip : {
                // trigger: 'axis'
            },

            toolbox: {
                show : false,
            },
            xAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show:false
                    },
                    axisLine : {
                        lineStyle : {
                            color: '#888',
                            width: 2,
                            type: 'solid'
                        }
                    },
                    boundaryGap : [0, 0.01]
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    splitLine: {
                        show:false,
                        lineStyle:  {
                            color: ['#ccc'],
                            width: 1,
                            type: 'dashed'
                        }
                    },
                    axisLine : {
                        lineStyle : {
                            color: '#888',
                            width: 2,
                            type: 'solid'
                        }
                    },
                    data :['0-2','3-6','7-11','12-15','16-35','36-60','61-79','80-89','>90']
                }
            ],
            series : [
                {
                    name:'2011年',
                    type:'bar',
                    "barWidth": 13,
                    "barCategoryGap": '60%',
                    "itemStyle": {
                        normal: {
                            "color": '#c3d71b',
                        },
                    },
                    data:[18203, 23489, 29034, 104970, 131744, 630230]
                }
            ]
        };


        myChart.setOption(option);
    }

    function run3(obj) {
        var myChart = echarts.init(document.getElementById(obj));

        var option = {
            title : {
                text: '检查项目分布情况',
                x: 25,
                y: 25
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['正常', '异常'],
                x: 'right',
                y: 25
            },
            toolbox: {
                show : false
            },
            xAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show:false
                    },
                    axisLine : {
                        lineStyle : {
                            color: '#888',
                            width: 2,
                            type: 'solid'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    splitLine: {
                        // show:false,
                        lineStyle:  {
                            color: ['#ccc'],
                            width: 1,
                            type: 'dashed'
                        }
                    },
                    axisLine : {
                        lineStyle : {
                            color: '#888',
                            width: 2,
                            type: 'solid'
                        }
                    },
                    data : ['体重','血压','体温','血氧','心电','血糖','胆固醇','尿酸','尿常规','血红蛋白']
                }
            ],
            series : [
                {
                    name:'正常',
                    type:'bar',
                    stack: '项目',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data:[320, 302, 301, 334, 390, 330, 320]
                },
                {
                    name:'异常',
                    type:'bar',
                    stack: '项目',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data:[120, 132, 101, 134, 90, 230, 210]
                }
            ]
        };


        myChart.setOption(option);
    }



})