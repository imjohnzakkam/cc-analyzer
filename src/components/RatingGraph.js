import { Line } from "react-chartjs-2";

export default function RatingGraph(props) {
  //console.log(props.Rating);
  if (props.Rating.length === 0) {
    return (
      <div className="pt-5">
        <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
          <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
            Rating Graph
          </div>
          <div className="place-items-center font-semibold text-center text-red-500 pb-3">
            No Contests participated ;(
          </div>
        </div>
      </div>
    );
  }
  var lbs = props.date;
  var data = props.Rating;
  return (
    <>
      <div className="pt-5">
        <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
          <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
            Rating Graph
          </div>
          <div className="place-items-center font-medium">
            <Line
              data={{
                labels: lbs,
                datasets: [
                  {
                    label: props.user,
                    data: data,
                    borderWidth: 2,
                    borderColor: "rgba(0, 151, 255, 1)",
                    hoverBackgroundColor: "rgba(0, 0, 0, 1)",
                    pointRadius: 3,
                    pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
                  },
                ],
              }}
              height={400}
              width={400}
              options={{
                maintainAspectRatio: false,
                scales: {
                  x: {
                    ticks: {
                      display: false,
                    },
                    grid: {
                      display: false,
                    },
                  },
                },
                plugins: {
                  legend: {
                    position: "bottom",
                  },
                },
                layout: {
                  padding: 20,
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
