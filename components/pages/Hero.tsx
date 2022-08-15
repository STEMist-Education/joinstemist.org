import Counter from "./Counter";

const HomeCounter = (props: {
  number: number;
  symbol: string;
  text: string;
}) => (
  <div className="border-2 border-opacity-70 border-white w-full h-full">
    <div className="flex flex-col justify-between h-full bg-steve-dark text-white rounded-lg p-4">
      <Counter
        className="!font-semibold text-transparent bg-clip-text bg-gradient-to-r from-steve-red to-steve-purple"
        {...props}
      />
    </div>
  </div>
);

export default function Hero() {
  return (
    <div className="bg-black mt-5 pt-10">
      <div className="flex justify-center">
        <h1
          className={`text-6xl font-bold font-display inline-block pb-2 text-transparent bg-clip-text bg-gradient-to-l from-steve-purple to-steve-red`}
        >
          By the Numbers
        </h1>
      </div>
      <div className="sm:grid-cols-2 lg:grid-cols-4 gap-3 grid-cols-1 py-10 px-24 m-auto place-items-center sm:min-h-[18rem] min-h-[30rem] grid scroll-mt-24 padded-section">
        <HomeCounter
          number={100}
          symbol="+"
          text="Interactive presentations created"
        />
        <HomeCounter
          number={1.5}
          symbol="k+"
          text="Dollars raised for charity"
        />
        <HomeCounter
          number={30}
          symbol="+"
          text="Highly qualified instructors"
        />
        <HomeCounter
          number={250}
          symbol="+"
          text="Students taught nationwide"
        />
      </div>
    </div>
  );
}
