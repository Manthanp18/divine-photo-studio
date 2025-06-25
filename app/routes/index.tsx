import Navbar from "~/components/Navbar";

import ImageOne from "~/components/ImageOne";
import ImageTwo from "~/components/ImageTwo";
import ImageThree from "~/components/ImageThree";
import ImageFour from "~/components/ImageFour";
export default function Index() {
  return (
    <>
       <Navbar/>
      <ImageOne />
      <div className="flex flex-col py-16 items-center bg-slate-200">
        <p className="font-serif">
          Every Wedding Behind story, Without Story is nothing, we make film
          with story through emotion.
          <br />
          The Wedding Cinema team create love story through to emotions.
        </p>
        <div className="p-4 font-serif text-xl">Kunal Patel</div>
      </div>
      <ImageTwo />
      <div className="flex p-56 flex-col py-16 items-center bg-slate-200">
        <p className="font-serif">
          Your inspiration is better if it comes from many different sources,
          and your sensibilities will transform all those influences and
          inspiration into your own visual world. It’s like reading a book
          instead of watching a movie. ​
        </p>
        <div className="p-4 font-serif text-xl">THE WEDDING CINEMA</div>
      </div>
      <ImageThree />
      <div className="flex p-56 flex-col py-16 items-center bg-slate-200">
        <p className="font-serif">
          You don’t make a photograph just with a camera. You bring to the act
          of photography all the pictures you have seen, the books you have
          read, the music you have heard, the people you have loved.
        </p>
        <div className="p-4 font-serif text-xl">THE WEDDING CINEMA</div>
      </div>
      <ImageFour />
      {/* <div className="">
        <img
          src={utsav}
          alt="image"
          className="h-auto w-screen brightness-50	grayscale"
        />
      </div>
      <div className="flex flex-col py-16 items-center bg-slate-200">
        <p className="font-serif">
          Every Wedding Behind story, Without Story is nothing, we make film
          with story through emotion.
          <br />
          The Wedding Cinema team create love story through to emotions.
        </p>
        <div className="p-4 font-serif text-xl">Kunal Patel</div>
      </div>
      <div className="relative">
        <img src={manthan} alt="image" className="object-fill h-2/3 w-full" />
        <div className="absolute top-80 left-32 text-7xl font-serif ">
          Stories
        </div>
        <div className="absolute top-96 left-32 text-lg font-serif ">
          story of couples
        </div>
      </div>
      <div className="flex p-56 flex-col py-16 items-center bg-slate-200">
        <p className="font-serif">
          Your inspiration is better if it comes from many different sources,
          and your sensibilities will transform all those influences and
          inspiration into your own visual world. It’s like reading a book
          instead of watching a movie. ​
        </p>
        <div className="p-4 font-serif text-xl">THE WEDDING CINEMA</div>
      </div>
      <div className="relative">
        <img
          src={picture}
          alt="image"
          className="object-fill h-2/3 w-full grayscale	brightness-50	"
        />
        <div className="absolute top-96 left-32 text-7xl font-serif ">
          Picture{" "}
        </div>
        <div className="absolute top-96 px-5 py-16 left-36 text-lg font-serif ">
          all awesome pictures{" "}
        </div>
      </div>
      <div className="flex p-56 flex-col py-16 items-center bg-slate-200">
        <p className="font-serif">
          You don’t make a photograph just with a camera. You bring to the act
          of photography all the pictures you have seen, the books you have
          read, the music you have heard, the people you have loved.
        </p>
        <div className="p-4 font-serif text-xl">THE WEDDING CINEMA</div>
      </div>
      <div className="relative">
        <img
          src={wedding}
          alt="image"
          className="object-fill h-2/3 w-full brightness-50	"
        />
        <div className="absolute top-48 left-2/4 text-7xl font-serif ">
          Pre-wedding
        </div>
        <div className="absolute top-64 left-2/4 py-3 px-8 text-lg font-serif ">
          pre-wedding love stories
        </div>
      </div>
      <div className="flex p-56 flex-col py-16 items-center bg-slate-200">
        <p className="font-serif">
          You don’t make a photograph just with a camera. You bring to the act
          of photography all the pictures you have seen, the books you have
          read, the music you have heard, the people you have loved.
        </p>
        <div className="p-4 font-serif text-xl">THE WEDDING CINEMA</div>
      </div> */}

    </>
  );
}
