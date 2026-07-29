import imgLight2 from "@/imports/ScrollWorkSamples-1/24de6a5223a6b71243b6d0cba4981df5157a47af.png";
import img13 from "@/imports/ScrollWorkSamples-1/26d519186a2aae552849519e0a86d679bf306b4e.png";
import img22 from "@/imports/ScrollWorkSamples-1/5518fe2b28329be91d2a823d8e0795ad5289b343.png";
import img32 from "@/imports/ScrollWorkSamples-1/eaefa79dc987f53e90bf26ce752884849e508550.png";
import img42 from "@/imports/ScrollWorkSamples-1/6f87a6cd046be283a12660bf77337b706426bdc1.png";
import img52 from "@/imports/ScrollWorkSamples-1/fa1064ecedae42eda0c796597f9ac2cef2a9ee6e.png";
import img62 from "@/imports/ScrollWorkSamples-1/c4f51c961e9a04c991a31762d25beeb83605010a.png";
import img72 from "@/imports/ScrollWorkSamples-1/18ec932dd770b2179dd6358694c77721ad0c86dc.png";
import img82 from "@/imports/ScrollWorkSamples-1/8fa90a5d8eece65c64e0184ea20e723b1e4766d3.png";
import img92 from "@/imports/ScrollWorkSamples-1/bae28bb1c68740251137e5fb42842d7dce03bf7e.png";
import img102 from "@/imports/ScrollWorkSamples-1/946384284cdfe94c147cf50c28888395165382b6.png";
import img112 from "@/imports/ScrollWorkSamples-1/f1e88a50f16fdb0c718d0dcfa1d7f94963be350b.png";

const items = [
  { src: imgLight2, w: 734, h: 428 },
  { src: img13,     w: 213, h: 428.5 },
  { src: img22,     w: 734, h: 428 },
  { src: img32,     w: 213, h: 428.5 },
  { src: img42,     w: 734, h: 428 },
  { src: img52,     w: 213, h: 428.5 },
  { src: img62,     w: 734, h: 428 },
  { src: img72,     w: 213, h: 428.5 },
  { src: img82,     w: 734, h: 428 },
  { src: img92,     w: 213, h: 428.5 },
  { src: img102,    w: 734, h: 428 },
  { src: img112,    w: 194, h: 427 },
];

export default function WorkSamplesScroll() {
  return (
    <section className="w-full py-6 sm:py-[60px] overflow-hidden relative">

      <div
        className="flex gap-[42px] items-center w-max origin-left scale-[0.7] sm:scale-[0.7] md:scale-100"
        style={{ animation: "marquee 90s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="shrink-0 relative"
            style={{ width: item.w, height: item.h }}
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={item.src}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
