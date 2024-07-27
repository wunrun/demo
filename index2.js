(function(){
  var myChart = echarts.init(document.querySelector(".pho .chart"));
  var option = {
    title: {
      text: '城市社区工作者福利情况统计'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      // data: ['0.2', '4', '6', '8', '10']
      axisLabel: {
        formatter: function (value, index) {
            return value + '%'; // 在这里将横坐标的值加上百分号
        }
    },
    data:['1', '2', '3', '4', '5']
    },
    yAxis: {
      type: 'category',
      data: ['职业年金', '病假', '女职工哺乳假', '探亲假、婚假', '法定节假日休假', '失业保险','商业保险','定期体检','带薪年假','工作餐','大病统筹保险','工伤保险','医疗保险','住房补贴','住房公积金','养老保险']
    },
    series: [
      {
        name: '享受',
        type: 'bar',
        data: [85, 814, 455, 552, 835, 624,65,649,554,215,449,653,819,38,583,817]
      },
      {
        name: '有',
        type: 'bar',
        data: [96, 908, 828, 746, 900, 695,71,663,603,218,495,702,848,55,615,883]
      }
    ]
  };
   // 3. 把配置给实例对象
   myChart.setOption(option);
   // 4. 让图表跟随屏幕自动的去适应
   window.addEventListener("resize", function() {
     myChart.resize();
   });
})();



(function(){
  var myChart = echarts.init(document.querySelector(".time .chart"));
  var option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  };
     // 3. 把配置给实例对象
     myChart.setOption(option);
     // 4. 让图表跟随屏幕自动的去适应
     window.addEventListener("resize", function() {
       myChart.resize();
     });
})();
// 模拟飞行地图
