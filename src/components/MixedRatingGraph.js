import { Line } from "react-chartjs-2";

export default function MixedRatingGraph(props) {
  var lbs = [],
    data1 = [],
    data2 = [],
    idx1 = [],
    idx2 = [];
  for (var i = 0; i < props.date1.length; i++) {
    for (var j = 0; j < props.date2.length; j++) {
      if (props.date1[i] === props.date2[j]) {
        lbs.push(props.date1[i]);
        idx1.push(i);
        idx2.push(j);
      }
    }
  }
  for (var i1 = 0; i1 < idx1.length; i1++) {
    data1.push(props.Rating1[idx1[i1]]);
  }
  for (var i2 = 0; i2 < idx2.length; i2++) {
    data2.push(props.Rating2[idx2[i2]]);
  }
  if (lbs.length === 0) {
    return (
		<div className="pt-5">
        <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
          <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
            Common Contests Graph
          </div>
          <div className="text-center text-red-500 place-items-center font-semibold pb-3">
            No common contests for both users ;(
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
            Common Contests Graph
          </div>
          <div className="place-items-center font-medium">
            <Line
              data={{
                labels: lbs,
                datasets: [
                  {
                    label: props.user1,
                    data: data1,
                    borderWidth: 2,
                    borderColor: "rgba(255, 151, 255, 1)",
                    hoverBackgroundColor: "rgba(0, 0, 0, 1)",
                    pointRadius: 3,
                    pointHoverBackgroundColor: "rgba(0, 0, 0, 1)",
                  },
                  {
                    label: props.user2,
                    data: data2,
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
                  y: {
                    beginAtZero: false,
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
