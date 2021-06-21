export default function StatsCard(props) {
  return (
    <div className="pt-5">
      <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
        <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
          Stats Card
        </div>
        <div class="text-center pb-3 pr-3 pl-3 grid grid-cols-2 divide-x-2 font-semibold">
          <div class="pb-4 pr-2 pl-4 pt-3 text-center">
            <div class="tracking-wide text-sm text-blue-500">
              Global Rank :
              <span className="text-green-500 pl-1">{props.gb_rank}</span>
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Country Rank :
              <span className="text-green-500 pl-1">{props.cntry_rank}</span>
            </div>
			<div class="tracking-wide text-sm text-blue-500">
              Best Rating :
              <span className="text-green-500 pl-1">{props.max_rating}</span>
            </div>
			<div class="tracking-wide text-sm text-blue-500">
              Worst Rating :
              <span className="text-green-500 pl-1">{props.min_rating}</span>
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Best Rank :
              <span className="text-green-500 pl-1">{props.best_rank}</span>
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Worst Rank :
              <span className="text-green-500 pl-1">{props.worst_rank}</span>
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Max Up :<span className="text-green-500 pl-1">{props.maxup}</span>
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Max Down :
              <span className="text-green-500 pl-1">{props.maxdown}</span>
            </div>
          </div>
          <div class="pb-4 pr-2 pl-4 pt-3 text-center">
            <div class="tracking-wide text-sm text-blue-500">
              Total Contests :
              <span className="text-green-500 pl-1">
                {props.total_contests}
              </span>
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Tried Problems :
              <span className="text-green-500 pl-1">{props.tried}</span>
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Solved Problems :
              <span className="text-green-500 pl-1">{props.solved}</span>
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Paritally Solved Problems :
              <span className="text-green-500 pl-1">{props.partial}</span>
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Average Attempts for a problem :
              <span className="text-green-500 pl-1">{props.avg}</span>
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Unsolved Problems :
              <span className="text-green-500 pl-1">{props.unsolved}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
