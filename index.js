

//折线图制作
(function(){
  //1.实例化对象
  var myChart = echarts.init(document.querySelector(".photo1")
  )
  //2.指定配置
  var option = {

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['社区服务机构数(个)', '社区服务中心数(个)', '社区服务站数(个)', '其它社区服务设施数(个)', '便民、利民服务网点(个)','社区服务机构覆盖数']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2022年', '2021年', '2020年', '2019年', '2018年', '2017年', '2016年','2015年','2014年','2013年','2012年','2011年','2010年','2009年','2008年','2007年','2006年','2005年','2004年']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '社区服务机构数(个)',
        type: 'line',
        stack: 'Total',
        data: [587313, 567077, 510510, 527757, 426524, 407453, 386186,360956,310652,251939,200162,160352,152941,146341,146322,134852,160007,203275,205926]
      },
      {
        name: '社区服务中心数(个)',
        type: 'line',
        stack: 'Total',
        data: [29000, 29000, 29000, 26000, 0, 0, 0,24138,23088,19014,15497,14391,12720,10003,9873,9319,8565,8479,7804]
      },
      {
        name: '社区服务站数(个)',
        type: 'line',
        stack: 'Total',
        data: [509000,472000,393000,167000,0,0,128083,120188,108377,87931,56156,44237,53170,30021,50116,0,0,0]
      },
      {
        name: '其它社区服务设施数(个)',
        type: 'line',
        stack: 'Total',
        data: [0,0,0,0,0,0,0,119778,107174,123658,95925,89805,95984,111803,123082,112567,151442,194796,198122]
      },
      {
        name: '便民、利民服务网点(个)',
        type: 'line',
        stack: 'Total',
        data: [0,0,0,0,0,0,0,248643,302039,358518,397222,452868,539136,692625,748684,892656,457896,664764,703760]
      },
      {
        name: '社区服务机构覆盖率(%)',
        type: 'line',
        stack: 'Total',
        data: [0,0,0,0,0,0,24.4,22.5,21.1,18.8,15.3,23.6,22.4,25.6,24.7,22.7,28.7,28.5]
      },
    ]
  };
  //3.把配置给实例对象
  myChart.setOption(option)
})();



// 柱状图
(function(){
  //1.实例化对象
  var myChart = echarts.init(document.querySelector(".photo2"))
  //2.指定配置项和数据
 var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
      type: 'value'
    },
    yAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2023年','2022年', '2021年', '2020年', '2019年', '2018年', '2017年', '2016年','2015年','2014年','2013年','2012年','2011年','2010年','2009年','2008年','2007年','2006年','2005年','2004年']
    },
    series: [
      {
        name: '自治组织单位数(个)',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [0,607341,606124,615146,642693,649888,660709,662478,680535,682144,683167,679133,681715,683767,687698,694715,704386,709026,722050]
      },
      {
        name: '社区居委会单位数(个)',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [0,117938,116551,113089,109620,107869,106491,103292,99679,96693,94620,91153,89480,87057,84613,82006,80717,79947,77884]
      },
      {
        name: '村民委员会单位数(个)',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [0,489403,489573,502067,533073,542019,554218,559186,580856,585451,588547,588475,589653,594658,599078,604285,612709,623669,629079,644166]
      },
      {
        name: '自治组织成员数(人)',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [0,0,0,0,0,0,0,0,2809257,2802062,2807128,2792000,2773000,2771000,2760325,2827238,2873000,3111000,3346000]
      },
      {
        name: '自治组织女性成员数(人)',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [0,0,0,0,0,0,0,0,777687,767000,760848,742000,734000,716000,718566,717688,715223,776161,684906,679641]
      },
      {
        name: '社区居委会成员数(人)',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [0,0,0,0,0,0,0,0,512196,497000,484000,469000,454000,439000,431000,422000,416000,443000,454000,425000]
      },
      {
        name: '村民委员会成员数(人)',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [0,0,0,0,0,0,0,0,2297061,2305000,2323000,2323000,2319000,2334000,2340000,2339000,2411000,2430000,2657000,2921000]
      },
      {
        name: '自治组织增长值(亿元)',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [0,0,0,0,0,0,0,0,0,0,0,375,363.2,309.89,370.9,328.56,280.93,273.17,0,0,]
      }
    ]
  };
  //3.把配置项给实例对象
  myChart.setOption(option);
})();
//excel图表
(function(){
  var myChart = echarts.init(document.querySelector(".Ex"))
  const updateFrequency = 2000;
   const dimension = 0;
   const countryColors = {
  Australia: '#00008b',
  Canada: '#f00',
  China: '#ffde00',
  Cuba: '#002a8f',
  Finland: '#003580',
  France: '#ed2939',
  Germany: '#000',
  Iceland: '#003897',
  India: '#f93',
  Japan: '#bc002d',
  'North Korea': '#024fa2',
  'South Korea': '#000',
  'New Zealand': '#00247d',
  Norway: '#ef2b2d',
  Poland: '#dc143c',
  Russia: '#d52b1e',
  Turkey: '#e30a17',
  'United Kingdom': '#00247d',
  'United States': '#b22234'
};
$.when(
  $.getJSON('./data.json'),
  $.getJSON(  './life-expectancy-table.json')
).done(function (res0, res1) {
  const flags = res0[0];
  const data = res1[0];
  const years = [];
  for (let i = 0; i < data.length; ++i) {
    if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
      years.push(data[i][4]);
    }
  }
  function getFlag(countryName) {
    if (!countryName) {
      return '';
    }
    return (
      flags.find(function (item) {
        return item.name === countryName;
      }) || {}
    ).emoji;
  }
  let startIndex = 10;
  let startYear = years[startIndex];
  option = {
    grid: {
      top: 10,
      bottom: 30,
      left: 150,
      right: 80
    },
    xAxis: {
      max: 'dataMax',
      axisLabel: {
        formatter: function (n) {
          return Math.round(n) + '';
        }
      }
    },
    dataset: {
      source: data.slice(1).filter(function (d) {
        return d[4] === startYear;
      })
    },
    yAxis: {
      type: 'category',
      inverse: true,
      max: 10,
      axisLabel: {
        show: true,
        fontSize: 14,
        formatter: function (value) {
          return value + '{flag|' + getFlag(value) + '}';
        },
        rich: {
          flag: {
            fontSize: 25,
            padding: 5
          }
        }
      },
      animationDuration: 300,
      animationDurationUpdate: 300
    },
    series: [
      {
        realtimeSort: true,
        seriesLayoutBy: 'column',
        type: 'bar',
        itemStyle: {
          color: function (param) {
            return countryColors[param.value[3]] || '#5470c6';
          }
        },
        encode: {
          x: dimension,
          y: 3
        },
        label: {
          show: true,
          precision: 1,
          position: 'right',
          valueAnimation: true,
          fontFamily: 'monospace'
        }
      }
    ],
    // Disable init animation.
    animationDuration: 0,
    animationDurationUpdate: updateFrequency,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
    graphic: {
      elements: [
        {
          type: 'text',
          right: 160,
          bottom: 60,
          style: {
            text: startYear,
            font: 'bolder 80px monospace',
            fill: 'rgba(100, 100, 100, 0.25)'
          },
          z: 100
        }
      ]
    }
  };
  // console.log(option);
  myChart.setOption(option);
  for (let i = startIndex; i < years.length - 1; ++i) {
    (function (i) {
      setTimeout(function () {
        updateYear(years[i + 1]);
      }, (i - startIndex) * updateFrequency);
    })(i);
  }
  function updateYear(year) {
    let source = data.slice(1).filter(function (d) {
      return d[4] === year;
    });
    option.series[0].data = source;
    option.graphic.elements[0].style.text = year;
    myChart.setOption(option);
  }
});
var myChart = echarts.init(chartDom);
})();
option && myChart.setOption(option);
// ex图
(function(){
  var dom = document.getElementById('.Ex');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    var option;

    const updateFrequency = 2000;
const dimension = 0;
const countryColors = {
  Australia: '#00008b',
  Canada: '#f00',
  China: '#ffde00',
  Cuba: '#002a8f',
  Finland: '#003580',
  France: '#ed2939',
  Germany: '#000',
  Iceland: '#003897',
  India: '#f93',
  Japan: '#bc002d',
  'North Korea': '#024fa2',
  'South Korea': '#000',
  'New Zealand': '#00247d',
  Norway: '#ef2b2d',
  Poland: '#dc143c',
  Russia: '#d52b1e',
  Turkey: '#e30a17',
  'United Kingdom': '#00247d',
  'United States': '#b22234'
};
$.when(
  $.getJSON('./data.json'),
  $.getJSON('./life-expectancy-table.json')
).done(function (res0, res1) {
  const flags = res0[0];
  const data = res1[0];
  const years = [];
  for (let i = 0; i < data.length; ++i) {
    if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
      years.push(data[i][4]);
    }
  }
  function getFlag(countryName) {
    if (!countryName) {
      return '';
    }
    return (
      flags.find(function (item) {
        return item.name === countryName;
      }) || {}
    ).emoji;
  }
  let startIndex = 10;
  let startYear = years[startIndex];
  option = {
    grid: {
      top: 10,
      bottom: 30,
      left: 150,
      right: 80
    },
    xAxis: {
      max: 'dataMax',
      axisLabel: {
        formatter: function (n) {
          return Math.round(n) + '';
        }
      }
    },
    dataset: {
      source: data.slice(1).filter(function (d) {
        return d[4] === startYear;
      })
    },
    yAxis: {
      type: 'category',
      inverse: true,
      max: 10,
      axisLabel: {
        show: true,
        fontSize: 14,
        formatter: function (value) {
          return value + '{flag|' + getFlag(value) + '}';
        },
        rich: {
          flag: {
            fontSize: 25,
            padding: 5
          }
        }
      },
      animationDuration: 300,
      animationDurationUpdate: 300
    },
    series: [
      {
        realtimeSort: true,
        seriesLayoutBy: 'column',
        type: 'bar',
        itemStyle: {
          color: function (param) {
            return countryColors[param.value[3]] || '#5470c6';
          }
        },
        encode: {
          x: dimension,
          y: 3
        },
        label: {
          show: true,
          precision: 1,
          position: 'right',
          valueAnimation: true,
          fontFamily: 'monospace'
        }
      }
    ],
    // Disable init animation.
    animationDuration: 0,
    animationDurationUpdate: updateFrequency,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
    graphic: {
      elements: [
        {
          type: 'text',
          right: 160,
          bottom: 60,
          style: {
            text: startYear,
            font: 'bolder 80px monospace',
            fill: 'rgba(100, 100, 100, 0.25)'
          },
          z: 100
        }
      ]
    }
  };
  // console.log(option);
  myChart.setOption(option);
  for (let i = startIndex; i < years.length - 1; ++i) {
    (function (i) {
      setTimeout(function () {
        updateYear(years[i + 1]);
      }, (i - startIndex) * updateFrequency);
    })(i);
  }
  function updateYear(year) {
    let source = data.slice(1).filter(function (d) {
      return d[4] === year;
    });
    option.series[0].data = source;
    option.graphic.elements[0].style.text = year;
    myChart.setOption(option);
  }
});

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
})();

// 地图

// 工作福利待遇柱状图

// 饼图
