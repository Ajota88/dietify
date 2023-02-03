import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Chart.scss";
import { useNutrients } from "../../hooks/useNutrients";

const Chart = ({ food }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { totalCarbohydrate, totalFat, protein } = useNutrients(food);
  console.log(totalCarbohydrate);
  const data = {
    labels: ["Fat", "Carbohydrate", "Protein"],
    datasets: [
      {
        label: "weight (g)",
        data: [totalFat.weight, totalCarbohydrate.weight, protein],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart">
      <Pie data={data} />
    </div>
  );
};
export default Chart;
