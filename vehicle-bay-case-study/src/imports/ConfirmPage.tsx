import svgPaths from "./svg-tfm6b487vv";

function WeuiQrCodeFilled() {
  return (
    <div className="absolute left-[43px] size-[205px] top-[15px]" data-name="weui:qr-code-filled">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 205 205">
        <g id="weui:qr-code-filled">
          <path clipRule="evenodd" d={svgPaths.p2ff3a900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white h-[235px] left-[29px] overflow-clip rounded-[15px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] top-[17px] w-[291px]">
      <WeuiQrCodeFilled />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#f9fafb] h-[344px] left-[36px] overflow-clip rounded-[15px] top-[165px] w-[350px]">
      <Frame1 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[99.93000030517578%] left-[53px] not-italic text-[12px] text-black top-[282px] whitespace-nowrap">Show this QR code at the entrance</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[171px] items-start leading-[99.93000030517578%] left-0 not-italic px-[18px] text-black top-[22px] whitespace-nowrap">
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[15px]">{`Parking `}</p>
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[13px]">City hall Parking</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[220px] items-start leading-[99.93000030517578%] left-0 not-italic px-[18px] text-black top-[74px] whitespace-nowrap">
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[15px]">Slot Number</p>
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[13px]">A7</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[216px] items-end leading-[99.93000030517578%] left-0 not-italic px-[18px] text-black top-[126px] whitespace-nowrap">
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[15px]">{`Date `}</p>
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[13px]">26 Dec 2025</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[189px] items-end leading-[99.93000030517578%] left-0 not-italic px-[18px] text-black top-[178px] whitespace-nowrap">
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[15px]">Time</p>
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[13px]">2:00 PM - 5:00PM</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#f1f6fe] h-[282px] left-[27px] overflow-clip top-[555px] w-[368px]">
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <div className="absolute flex h-px items-center justify-center left-0 top-[214px] w-[367px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.16deg]">
          <div className="h-0 relative w-[367.001px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 367.001 1">
                <line id="Line 5" stroke="var(--stroke-0, #5262BA)" x2="367.001" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[99.93000030517578%] left-[18px] not-italic text-[15px] text-black top-[245px] whitespace-nowrap">{`Total paid `}</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[99.93000030517578%] left-[275px] not-italic text-[#1e30cd] text-[15px] top-[245px] whitespace-nowrap">130rs</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#1b32c9] h-[51px] left-[28px] overflow-clip rounded-[10px] top-[855px] w-[366px]">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[99.93000030517578%] left-[calc(50%-41px)] not-italic text-[20px] text-white top-[11px] whitespace-nowrap">{`confirm `}</p>
    </div>
  );
}

export default function ConfirmPage() {
  return (
    <div className="bg-white relative size-full" data-name="confirm page">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[99.93000030517578%] left-[calc(12.5%-10px)] not-italic text-[20px] text-black top-[56px] whitespace-nowrap">Booking Confirmed!</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[99.93000030517578%] left-[calc(12.5%-10px)] not-italic text-[12px] text-black top-[105px] whitespace-nowrap">Your parking slot has been reserved</p>
      <Frame />
      <Frame2 />
      <Frame7 />
      <div className="absolute inset-[6.59%_91.75%_91.64%_4.09%]" data-name="Vector">
        <div className="absolute inset-[-11.85%_-10.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2812 20.875">
            <path d={svgPaths.p3a720b00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}