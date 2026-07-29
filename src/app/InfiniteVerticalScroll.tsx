import imgStrip from "@/imports/InfinateVerticalScrolling/ae3bf9dca22cd7e85785f981a2a9dfdd7b3e9c0a.png";

export default function InfiniteVerticalScroll() {
  return (
    <section className="relative w-full" data-name="infinate vertical scrolling">

      {/* Scrolling strip — clipped to 600px tall viewport */}
      <div
        className="relative h-[680px] w-full overflow-hidden bg-[#06182d] sm:h-[760px] lg:h-[820px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0, #000 116px, #000 calc(100% - 116px), transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0, #000 116px, #000 calc(100% - 116px), transparent 100%)",
        }}
      >
        <div
          className="flex flex-col items-center"
          style={{ animation: "scrollUp 20s linear infinite" }}
        >
          {/* Duplicate strip for seamless loop */}
          <img alt="" src={imgStrip} className="w-[1042px] max-w-full pointer-events-none" />
          <img alt="" src={imgStrip} className="w-[1042px] max-w-full pointer-events-none" />
        </div>
      </div>


      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  );
}
