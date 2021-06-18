export default function StatsCard(props) {
  return (
    <div className="pt-5">
      <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
        <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
          Stats Card
        </div>
        <div class="text-center pb-3 pr-3 pl-3 grid grid-cols-2 divide-x-2 font-medium">
          <div class="pb-4 pr-2 pl-4 pt-3 text-center">
            <div class="tracking-wide text-sm text-blue-500">
              Global Rank : {props.gb_rank}
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Country Rank : {props.cntry_rank}
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Best Rank : {props.best_rank}
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Worst Rank : {props.worst_rank}
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Max Up : {props.maxup}
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Max Down : {props.maxdown}
            </div>
          </div>
          <div class="pb-4 pr-2 pl-4 pt-3 text-center">
            <div class="tracking-wide text-sm text-blue-500">
              Total Contests : {props.total_contests}
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Tried Problems : {props.tried}
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Solved Problems : {props.solved}
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Paritally Solved Problems : {props.partial}
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Average Attempts for a problem : {props.avg}
            </div>
            <div class="tracking-wide text-sm text-blue-500">
              Unsolved Problems : {props.unsolved}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
