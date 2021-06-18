export default function ProfileCard(props) {
  return (
    <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto font-inter font-bold">
      <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
        Profile Card
      </div>
      <div class="md:flex flex items-center pb-3 pr-3 pl-3 grid grid-cols-2 divide-x-2">
        <div class="md:flex-shrink-0 pr-7">
          <img
            class="h-48 w-full object-cover md:w-48 inline-block"
            src={props.img}
            alt="Profile pic"
          />
        </div>
        <div class="pb-4 pr-2 pl-4 pt-3 text-center">
          <div class="tracking-wide text-sm text-blue-500 font-medium">
            Username : {props.username}
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
          <div class="tracking-wide text-sm text-blue-500 font-medium">
            Institution : {props.organization}
          </div>
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
  );
}
