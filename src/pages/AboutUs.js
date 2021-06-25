import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import John_Pic from "../images/john.jpg";
import Joseph_Pic from "../images/joseph.jpg";

export default function Info(props) {
  return (
    <>      
      <div className="text-center grid grid-rows-1 divide-x-2 pt-4 space-y-3">
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-2xl w-auto">
          <div className="text-center pt-3 pb-2 text-gray-900 uppercase font-black">
            This project is done by
          </div>
          <div class="p-4 font-medium">
            <div className="grid grid-cols-2 pt-2">
              <div className="p-3">
                <img
                  src={John_Pic}
                  alt=" random ima"
                  class="w-full object-cover object-center rounded-lg shadow-md"
                />
                <div class="relative px-4 -mt-4">
                  <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-center grid grid-rows-2">
                      <a
                        href="https://codechef.com/users/imreally_john"
                        className="font-semibold no-underline hover:underline"
                        target="blank"
                      >
                        John Zakkam
                      </a>
                      <div className="justify-center space-x-3">
                        <a
                          href="https://github.com/imjohnzakkam"
                          target="blank"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/johnzakkam/"
                          target="blank"
                        >
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a
                          href="https://instagram.com/johnzakkam"
                          target="blank"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <img
                  src={Joseph_Pic}
                  alt=" random imgee"
                  class="w-full object-cover object-center rounded-lg shadow-md"
                />
                <div class="relative px-4 -mt-4">
                  <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-center grid grid-rows-2">
                      <a
                        href="https://codechef.com/users/imreally_john"
                        className="font-semibold no-underline hover:underline"
                      >
                        Joseph Gurram
                      </a>
                      <div className="justify-center space-x-3">
                        <a
                          href="https://github.com/Spourgeon2000"
                          target="blank"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                          href="https://in.linkedin.com/in/josephspourgeon"
                          target="blank"
                        >
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a
                          href="https://instagram.com/joseph_spourgeon_gurram"
                          target="blank"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>			
          </div>
		  <div class="pb-4 font-medium">
            <br />
            <span>
              If you find any bugs or suggestions, you can just e-mail them
              <a
                href="mailto:ced18i059@iiitdm.ac.in"
                target="blank"                
				className="p-1 underline hover:underline text-blue-600"
              >
                here
              </a>
              or
              <a
                href="mailto:spourgeon@gmail.com"
                target="blank"
                className="p-1 underline hover:underline text-blue-600"
              >
                here
              </a>
              too.
            </span>
            <br />
            <span>
              If you would like to contribute, you can make a pull request
              <a
                href="https://github.com/imjohnzakkam/cc-viz"
                target="blank"
                className="p-1 underline hover:underline text-blue-600"
              >
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
