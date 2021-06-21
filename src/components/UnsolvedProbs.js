export default function StatsCard(props) {
  if (props.partialLinks.length + props.unsolvedLinks.length === 0) {
    return (
      <div className="pt-5">
        <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
          <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
            Unsolved Problems
          </div>
          <div className="text-center text-red-500 grid place-items-center font-semibold p-4">
            {props.user} has no unsolved problems
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="pt-5">
      <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
        <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
          Unsolved Problems
        </div>
        <div className="grid grid-cols-3 gap-2 place-items-center font-medium p-4">
          {props.partialLinks.map((Partial) => (
            <a
              href={"https://www.codechef.com/problems/" + Partial}
              className="text-yellow-400 hover:text-yellow-400 no-underline hover:underline"
              target="blank"
            >
              {Partial}
              <br></br>
            </a>
          ))}
          {props.unsolvedLinks.map((unsolved) => (
            <a
              href={"https://www.codechef.com/problems/" + unsolved}
              className="text-red-400 hover:text-red-400 no-underline hover:underline"
              target="blank"
            >
              {unsolved}
              <br></br>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
