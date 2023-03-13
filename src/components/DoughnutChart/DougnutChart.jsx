import React from 'react';
import * as echarts from 'echarts';

export default function DougnutChart({ data = [] }) {
  const chartRef = React.useRef(null);

  const option = {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['30%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          color: '#0d6efd',
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          borderRadius: 6,
          borderColor: '#fff',
          borderWidth: 2,
        },
        emphasis: {
          itemStyle: {
            // Change the color of the hovered segment
            color: '#0d6efd',
          },
        },
        data: data.map(({ name, value }) => ({
          name,
          value,
          label: {
            formatter: function ({ value }) {
              if (value < 10) return '';
              return value + '%\n';
            },
            show: true,
            position: 'inside',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 12,
          },
        })),
      },
    ],
    color: '#63d9f8',
  };

  React.useEffect(() => {
    // Initialize chart
    let chart;
    if (chartRef.current !== null) {
      chart = echarts.init(chartRef.current);
    }

    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener('resize', resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  React.useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = echarts.getInstanceByDom(chartRef.current);
      chart.setOption(option);
    }
  }, [option]);

  return <div ref={chartRef} style={{ height: '300px', width: '300px' }}></div>;
}
