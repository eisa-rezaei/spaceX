import React from "react";
import ReactECharts from "echarts-for-react/lib/core";
import * as echarts from "echarts";
import {
  StRocketInfoRocketChartsContainer,
  StRocketInfoRocketChartsItem,
} from "./style";

const RocketCharts = ({ data }) => {
  const mean_motion = data?.mean_motion?.toFixed(2);
  const period_min = data?.period_min?.toFixed(2);
  const inclination_deg = data?.inclination_deg?.toFixed(2);
  const raan = data?.raan?.toFixed(2);
  const option = {
    series: [
      {
        type: "gauge",
        center: ["50%", "50%"],
        startAngle: 220,
        endAngle: -40,
        min: 0,
        max: 100,
        splitNumber: 10,
        itemStyle: {
          color: "#11aa11",
        },
        progress: {
          show: true,
          width: 5,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            width: 0,
            color: "#999",
          },
        },
        axisTick: {
          length: 1,
          distance: 0,
          splitNumber: 10,
          lineStyle: {
            width: 1,
            color: "#999",
          },
        },
        splitLine: {
          distance: 0,
          length: 3,
          lineStyle: {
            width: 0.5,
            color: "#fff",
          },
        },
        axisLabel: {
          distance: 0,
          color: "#fff",
          fontSize: 0,
        },
        // anchor: {
        //   show: false,
        // },
        // title: {
        //   show: false,
        // },
        detail: {
          valueAnimation: true,
          width: "50%",
          lineHeight: 20,
          borderRadius: 7,
          offsetCenter: [0, "15%"],
          fontSize: 25,
          fontWeight: "normal",
          fontFamily: "Changa",
          formatter: "{value}",
          color: "auto",
        },
        data: [
          {
            value: inclination_deg || 10,
          },
        ],
      },
    ],
  };
  const option2 = {
    ...option,
    series: [
      {
        ...option.series[0],
        max: 2000,
        itemStyle: { color: "#ff1100" },
        data: [{ value: period_min || 10 }],
      },
    ],
  };
  const option3 = {
    ...option,
    series: [
      {
        ...option.series[0],
        max: 150,
        itemStyle: { color: "#ffff00" },
        data: [{ value: mean_motion || 10 }],
      },
    ],
  };
  const option4 = {
    ...option,
    series: [
      {
        ...option.series[0],
        max: 400,
        itemStyle: { color: "#4a8bf6" },
        data: [{ value: raan || 10 }],
      },
    ],
  };

  return (
    <StRocketInfoRocketChartsContainer>
      <StRocketInfoRocketChartsItem>
        <span>INCLINATION DEG</span>
        <ReactECharts
          option={option}
          echarts={echarts}
          style={{ width: "100%", height: "150px" }}
        />
        <span>deg</span>
      </StRocketInfoRocketChartsItem>
      <StRocketInfoRocketChartsItem>
        <span>PERIOD MIN</span>
        <ReactECharts
          option={option2}
          echarts={echarts}
          style={{ width: "100%", height: "150px" }}
        />
        <span>days</span>
      </StRocketInfoRocketChartsItem>
      <StRocketInfoRocketChartsItem>
        <span>MEAN MOTION</span>
        <ReactECharts
          option={option3}
          echarts={echarts}
          style={{ width: "100%", height: "150px" }}
        />
        <span>bars</span>
      </StRocketInfoRocketChartsItem>
      <StRocketInfoRocketChartsItem>
        <span>RAAN</span>
        <ReactECharts
          option={option4}
          echarts={echarts}
          style={{ width: "100%", height: "150px" }}
        />
        <span>times</span>
      </StRocketInfoRocketChartsItem>
    </StRocketInfoRocketChartsContainer>
  );
};

export default RocketCharts;
