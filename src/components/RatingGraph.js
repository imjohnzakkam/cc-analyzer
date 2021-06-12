import { Line } from "react-chartjs-2";

export default function RatingGraph(props) {
  var lbs = props.date;
  var data = props.Rating;
  return (
    <Line
      data={{
        labels: lbs,
        datasets: [
          {
            label: "Rating",
            data: data,
            borderWidth: 2,
          },
        ],
      }}
      height={400}
      width={400}
      options={{        
        maintainAspectRatio: false,
		scales: {
          xAxes: [{
              type: "time",
        	}],     
        },
      }}
    />
  );
}
