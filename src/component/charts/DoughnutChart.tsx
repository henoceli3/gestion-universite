import React, { useEffect, useRef } from "react";
import Chart, { ChartConfiguration, ChartType } from "chart.js/auto";
import { colorsDef } from "../../config/Theme";

interface DoughnutChartCartProps {
  data: number[];
  labels: string[];
  style?: React.CSSProperties;
  color?: string[];
}

const DoughnutChart: React.FC<DoughnutChartCartProps> = ({
  data,
  labels,
  style,
  color,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<ChartType, number[], string>>();

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "pie",
          data: {
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: color || [
                  colorsDef.tertiary,
                  colorsDef.primary,
                  colorsDef.alter,
                  colorsDef.tertiary,
                  "rgba(153, 102, 255, 0.7)",
                ],
                borderColor: color || [
                  colorsDef.bgColor,
                  colorsDef.primary,
                  colorsDef.alter,
                  colorsDef.tertiary,
                  "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "bottom",
              },
            },
          } as ChartConfiguration<ChartType, number[], string>["options"], // Type assertion
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [color, data, labels]);

  return (
    <>
      <div
        style={{
          width:"20em",
          height: "17em",
        }}
      >
        <canvas ref={chartRef} style={{ ...style }} />
      </div>
    </>
  );
};

export default DoughnutChart;
