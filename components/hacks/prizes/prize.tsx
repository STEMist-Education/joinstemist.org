import { useOnScreen } from "@/lib/hooks";
import React, { useEffect, useRef, useState } from "react";
import { useCountUp } from "use-count-up";
import useHover from "./useHover";

export interface PrizeProps {
  name: number;
  prizes: string;
  presented_by: string;
  type: "winners" | "everyone" | "raffle";
}

export default function Prize({ name, prizes, presented_by }: PrizeProps) {
  let { hoverOptions, status } = useHover(presented_by, prizes);
  const countUpRef = useRef(null);
  const { reset, value } = useCountUp({
    isCounting: true,
    start: 0,
    end: name,
    duration: Math.max(2, Math.min(name / 10, 2.5)),
    easing: "easeOutCubic",
    thousandsSeparator: ",",
  });
  const isVisible = useOnScreen(countUpRef, false);
  const [should, setShould] = useState(true);
  useEffect(() => {
    if (isVisible && should) {
      reset();
      setShould(false);
    }
  }, [isVisible, reset, should]);
  return (
    <div
      className="grid grid-cols-12 items-center group py-1 transition-all px-5 hover:bg-black hover:bg-opacity-10"
      {...hoverOptions}
    >
      <div className="col-span-6 font-semibold font-display">
        $<span ref={countUpRef}>{value}</span>
      </div>
      <div className="col-span-6">{status}</div>
    </div>
  );
}
