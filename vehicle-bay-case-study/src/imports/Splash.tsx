import imgImage1 from "figma:asset/dd1ba9213e0f99a29ead198c056d52c268d5a8d3.png";

export default function Splash() {
  return (
    <div className="bg-black relative size-full" data-name="splash">
      <div className="absolute h-[284px] left-[41px] rounded-[90px] top-[288px] w-[359px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[90px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}