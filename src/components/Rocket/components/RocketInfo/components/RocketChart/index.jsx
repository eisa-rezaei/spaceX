import React from "react";
import PropTypes from "prop-types";
import ReactECharts from "echarts-for-react/lib/core";
import * as echarts from "echarts";
import { StRocketInfoRocketChartsItem } from "./style";

const RocketChart = ({
  title,
  chartData,
  chartMaxValue,
  chartColor,
  chartParameter,
}) => {
  const option = {
    series: [
      {
        type: "gauge",
        center: ["50%", "50%"],
        startAngle: 220,
        endAngle: -40,
        min: 0,
        max: chartMaxValue,
        splitNumber: 10,
        itemStyle: {
          color: `${chartColor}`,
        },
        progress: {
          show: true,
          width: 4,
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
          fontFamily: "lato",
          formatter: "{value}",
          color: "inherit",
        },
        data: [
          {
            value: chartData || 0,
          },
        ],
      },
    ],
  };
  return (
    <StRocketInfoRocketChartsItem>
      <span>{title}</span>
      <ReactECharts
        option={option}
        echarts={echarts}
        style={{ width: "100%", height: "150px" }}
        lazyUpdate={true}
      />
      <span>{chartParameter}</span>
    </StRocketInfoRocketChartsItem>
  );
};

RocketChart.propTypes = {
  title: PropTypes.string.isRequired,
  chartData: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  chartMaxValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  chartColor: PropTypes.string.isRequired,
  chartParameter: PropTypes.string.isRequired,
};
export default RocketChart;
