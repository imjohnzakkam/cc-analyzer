import { Doughnut } from "react-chartjs-2"; 

function DoughnutChart(props) {
  var lbs=[
    "Accepted",
    "Wrong Answer",
    "Time limit Exceeded",
    "Runtime Error",
    "Compiliation Error",
    "Partially Accepted",
  ]
  var x = 0;
  for(var i = 0; i < props.data.length; i++) x += props.data[i];
  if(x===0){
    lbs=[]
  }
  //console.log(lbs);
  return (
    <Doughnut
      data={{
        labels: lbs,
        datasets: [
          {
            label: "Submission Doughnut",
            data: props.data,
            backgroundColor: [
              "rgba(0, 255, 71, 0.5)",
              "rgba(255, 99, 132, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(255, 159, 64, 0.5)",
              "rgba(255, 255, 0, 0.5)",
              "rgba(0, 102, 255, 0.5)",
            ],
            borderColor: [
              "rgba(0, 255, 71, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 255, 0, 1)",
              "rgba(0, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
      height={400}
      width={400}
      options={{
        maintainAspectRatio: false,
		plugins: {
			legend: {
				position: 'right',
			}
		}
      }}
    />
  );
}

export default DoughnutChart;
