// Profile Card
// Image
// User name
// Full Name
// Student / professional / Other (No insti.)
// Institution
// Teams
// about me("")


export default function ProfileCard(props) {
    return (
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
         <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">Profile Card</div>
        <div class="md:flex flex items-center pb-3 pr-3 pl-3">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-full object-cover md:w-48 inline-block"
              src={props.img}
              alt="Profile Image"
            />
          </div>
          <div class="pb-8 pr-8 pl-8 pt-3">
            <div class="flex items-start">
              <div class="tracking-wide text-sm text-indigo-500 font-semibold pr-2">
                Username :
              </div>
              <div class="tracking-wide text-sm text-indigo-500 font-semibold">
                {props.username}
              </div>
            </div>
            <div class="flex items-start">
              <div class="tracking-wide text-sm text-indigo-500 font-semibold pr-2">
                Full Name :
              </div>
              <div class="tracking-wide text-sm text-indigo-500 font-semibold">
                {props.fullname}
              </div>
            </div>
            <div class="flex items-start">
              <div class="tracking-wide text-sm text-indigo-500 font-semibold pr-2">
                Student / Professional :
              </div>
              <div class="tracking-wide text-sm text-indigo-500 font-semibold">
                {props.occupation}
              </div>
            </div>
            <div class="flex items-start">
              <div class="tracking-wide text-sm text-indigo-500 font-semibold pr-2">
                Institution :
              </div>
              <div class="tracking-wide text-sm text-indigo-500 font-semibold">
                {props.organization}
              </div>
            </div>
            <div class="flex items-start">
              <a
                href={"https://codechef.com/users/" + props.username.toString() + "/teams"}
                class="block mt-1 text-sm leading-tight font-semibold text-indigo-500 hover:underline"
                target="blank"
              >
                {props.username}'s Teams
              </a>
            </div>
            <p class="mt-2 text-gray-500">
              {props.abt}
            </p>
          </div>
        </div>
      </div>
    );
  }
  