export default function Info(props) {
  return (
    <>
      <div>
        {props.TOKEN != null ? <div>{props.TOKEN}</div> : <div>null</div>}
      </div>
      <div className="text-center grid grid-rows-2 divide-x-2 pt-4 space-y-3">
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto">
          <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
            Feedback
          </div>
          <div class="p-4 font-medium">
            <span className="font-black">Hey there user ;)</span>
            <br />
            <span>
              If you find any bugs or suggestions, you can just e-mail them
              <a href="mailto:ced18i059@iiitdm.ac.in" target="blank">
                here
              </a>
              or
              <a href="mailto:ced18i059@iiitdm.ac.in" target="blank">
                here
              </a>
              too.
            </span>
            <br />
            <span>
              If you would like to contribute, you can make a pull request
              <a href="https://github.com/imjohnzakkam/cc-viz" target="blank">
                here
              </a>
              .
            </span>
          </div>
          <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
            About Us
          </div>
          <div class="p-4 font-medium">
            <span>
              This projct is made by
              <a href="https://codechef.com/users/imreally_john" target="blank">
                John Zakkam
              </a>
              and
              <a href="https://codehef.com/users/gurram_joseph" target="blank">
                Joseph Gurram
              </a>
            </span>
            <br />
            <span>
              If you would like to contribute, you can make a pull request
              <a href="https://github.com/imjohnzakkam/cc-viz" target="blank">
                here
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
