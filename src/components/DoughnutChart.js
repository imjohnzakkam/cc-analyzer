import { Doughnut } from "react-chartjs-2";

function DoughnutChart(props) {
  var lbs = [
    "Accepted",
    "Wrong Answer",
    "Time limit Exceeded",
    "Runtime Error",
    "Compiliation Error",
    "Partially Accepted",
  ];
 
  var x = 0;
  for (var i = 0; i < props.data.length; i++) x += props.data[i];
  if (x === 0) {
    lbs = [];
  }
  if (lbs.length === 0) {
    return (
      <div className="pt-5">
        <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
          <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
            Verdicts Doughnut
          </div>
          <div class="text-center text-red-500 pb-3 pr-3 pl-3 font-semibold">
            {props.user} no submissions ;(
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="pt-5">
        <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
          <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
            Verdicts Doughnut
          </div>
          <div class="text-center pb-3 pr-3 pl-3 font-medium">
            <div class="pb-4 pr-2 pl-4 pt-3 text-center">
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
                      position: "right",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoughnutChart;
