import { Parallax } from "react-parallax";
import utsav from "~/Image/utsav.jpeg";
const ImageOne = () => (
  <Parallax
    className="min-h-screen	relative"
    blur={0}
    bgImage={utsav}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="flex absolute justify-center items-center w-full h-screen">
      <span className="img-txt">a trip to Space</span>
    </div>
  </Parallax>
);

export default ImageOne;
