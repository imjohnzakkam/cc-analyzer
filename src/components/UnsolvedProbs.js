export default function StatsCard(props) {
  return (
    <div className="pt-5">
      <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
        <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
          Unsolved Problems
        </div>
          <div className="grid grid-cols-3 gap-2 place-items-center font-medium p-4">
            {props.partialLinks.map((Partial) => (
              <a href={"https://www.codechef.com/problems/" + Partial}>
                {Partial}
                <br></br>
              </a>
            ))}
            {props.unsolvedLinks.map((unsolved) => (
              <a href={"https://www.codechef.com/problems/" + unsolved}>
                {unsolved}
                <br></br>
              </a>
            ))}
          </div>
      </div>
    </div>
  );
}
