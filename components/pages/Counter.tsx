import { useOnScreen } from "@/lib/hooks";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "use-count-up";

export default function Counter(props: {
  number: number;
  text: string;
  symbol?: string;
  before?: string;
  className?: string;
}) {
  const countUpRef = useRef(null);
  const { reset, value } = useCountUp({
    isCounting: true,
    start: 0,
    end: props.number,
    duration: Math.max(2, Math.min(props.number / 10, 2.5)),
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
    <div className="flex flex-col gap-2 h-full text-white p-5 justify-center">
      <span
        className={`text-7xl font-display font-normal w-full text-center ${
          props.className || ""
        }`}
      >
        {props.before && <span>{props.before}</span>}
        <span ref={countUpRef}>{value}</span>
        {props.symbol && <span>{props.symbol}</span>}
      </span>
      <div className="text-center text-xl font-light">{props.text}</div>
    </div>
  );
}
