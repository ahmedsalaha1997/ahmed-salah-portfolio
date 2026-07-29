import imgFrame16188734951 from "./ae3bf9dca22cd7e85785f981a2a9dfdd7b3e9c0a.png";
import imgFrame1618873494 from "./9dc48759d089a6420c85250423bde9c61cdfebdd.png";
import imgFrame1618873496 from "./fe3ef8434fba17db6cd9587805786a3742d9826f.png";

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute flex h-[103px] items-center justify-center left-[calc(50%+0.5px)] top-[-1.74px] w-[1439px]">
      <div className="-scale-y-100 flex-none">
        <div className="h-[103px] relative w-[1439px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1618873494} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-1.58px] h-[103px] left-[calc(50%+0.5px)] w-[1439px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1618873496} />
    </div>
  );
}

export default function InfinateVerticalScrolling() {
  return (
    <div className="content-stretch flex gap-[4.424px] items-start justify-center pt-[40px] px-[200px] relative size-full" data-name="infinate vertical scrolling">
      <div className="h-[1548px] relative shrink-0 w-[1042px]" data-name="Frame 1618873495 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame16188734951} />
      </div>
      <Frame />
      <Frame1 />
    </div>
  );
}