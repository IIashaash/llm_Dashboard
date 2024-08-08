import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100], // Set color for axis lines
            },
          },
          legend: {
            text: {
              fill: colors.grey[100], // Set color for legend text
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100], // Set color for tick lines
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100], // Set color for tick text
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100], // Set color for legend text
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500], // Set color for tooltip container
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // Conditional color scheme
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }} // Define x-axis scale type
      yScale={{
        type: "linear", // Define y-axis scale type
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f" // Format y-axis labels
      curve="catmullRom" // Define curve type for lines
      axisTop={null} // Disable top axis
      axisRight={null} // Disable right axis
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation", // Conditional legend for x-axis
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // Set number of tick values on y-axis
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count", // Conditional legend for y-axis
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false} // Disable grid lines on x-axis
      enableGridY={false} // Disable grid lines on y-axis
      pointSize={8} // Set size of points on lines
      pointColor={{ theme: "background" }} // Set color of points
      pointBorderWidth={2} // Set width of point borders
      pointBorderColor={{ from: "serieColor" }} // Set color of point borders
      pointLabelYOffset={-12} // Set y-offset for point labels
      useMesh={true} // Enable mesh for interactivity
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
