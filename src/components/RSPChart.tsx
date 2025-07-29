import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

interface Props {
  months: string[];
  values: number[];
}

export default function RSPChart({ months, values }: Props) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);

    chart.setOption({
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: months,
        axisTick: { alignWithLabel: true },
        axisLabel: {
          fontSize: 12,
          rotate: 0,
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          fontSize: 12,
        },
      },
      series: [
        {
          name: 'RSP',
          type: 'bar',
          barWidth: '60%',
          data: values,
          itemStyle: {
            color: '#4A90E2',
          },
        },
      ],
    });

    return () => chart.dispose();
  }, [months, values]);

  return <div ref={chartRef} style={{ width: '100%', height: 400 }} />;
}
