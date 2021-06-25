export default function ProfileCard(props) {
  //console.log(props.img);
  var pic = props.img;
  if (props.img.length === 0) {
    pic =
      "https://cdn.codechef.com/sites/all/themes/abessive/images/user_default_thumb.jpg";
  }
  return (
    <>
      <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
        <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
          Profile Card
        </div>
        <div class="md:flex flex items-center justify-center pb-3 pr-3 pl-3 grid grid-cols-2 divide-x-2">
          <div class="md:flex-shrink-0 pr-7">
            <img
              class="h-48 w-full object-cover md:w-48 inline-block"
              src={pic}
              alt="Profile pic"
            />
            <div className="text-center text-blue-600 pt-1">
              current rating - {props.curr_rating}
            </div>
          </div>
          <div class="pb-4 pr-2 pl-4 pt-3 text-center items-center">
            <div class="tracking-wide text-sm text-blue-500 font-medium">
              Username :
              <a
                href={"https://codechef.com/users/" + props.username.toString()}
                target="blank"
                className="no-underline hover:underline px-1"
              >
                {props.username}
              </a>
            </div>
            <div class="tracking-wide text-sm text-blue-500 font-medium">
              Full Name : {props.fullname}
            </div>
            <div class="tracking-wide text-sm text-blue-500 font-medium">
              {props.city}, {props.state}, {props.country}
            </div>
            <div class="tracking-wide text-sm text-blue-500 font-medium">
              Student / Professional : {props.occupation}
            </div>
            {props.occupation === "Student" ? (
              <div class="tracking-wide text-sm text-blue-500 font-medium">
                Institution : {props.organization}
              </div>
            ) : props.occupation === "Other" ? (
              <div></div>
            ) : (
              <div class="tracking-wide text-sm text-blue-500 font-medium">
                Organization : {props.organization}
              </div>
            )}
            <a
              href={
                "https://codechef.com/users/" +
                props.username.toString() +
                "/teams"
              }
              class="block mt-1 text-sm leading-tight font-semibold text-blue-500 no-underline hover:underline"
              target="blank"
            >
              {props.username}'s Teams
            </a>
            <p class="mt-2 text-gray-500">{props.abt}</p>
          </div>
        </div>
      </div>
    </>
  );
}
