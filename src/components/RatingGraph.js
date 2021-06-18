import { Line } from "react-chartjs-2";

export default function RatingGraph(props) {
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
                  xAxes: [
                    {
                      type: "time",					  
                    },
                  ],
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
