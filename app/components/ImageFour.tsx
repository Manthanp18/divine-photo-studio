import { Parallax } from "react-parallax";
import kunal from "~/Image/4.jpg";
const ImageOne = () => (
  <Parallax
    className="min-h-screen	relative"
    blur={0}
    bgImage={kunal}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="flex absolute justify-center items-center w-full h-screen">
      <span className="img-txt">a trip to Space</span>
    </div>
  </Parallax>
);

export default ImageOne;
