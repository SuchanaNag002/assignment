interface Dichotomy {
  left: string;
  right: string;
  leftDesc: string;
  rightDesc: string;
}

interface Benefit {
  title: string;
  content: string;
}

interface PersonalityExplorerContentProps {
  title: string;
  content: string;
  dichotomies: Dichotomy[];
  benefits: Benefit[];
}

export default function PersonalityExplorerContent({
  title,
  content,
  dichotomies,
  benefits,
}: PersonalityExplorerContentProps) {
  return (
    <div className="p-4 lg:p-6">
      <h2 className="text-xl lg:text-2xl font-semibold">
        <span className="text-black">{title.split(" ")[0]}</span>
        <span className="text-[#0047AB]"> {title.split(" ").slice(1).join(" ")}</span>
      </h2>
      <p className="mt-4 text-sm lg:text-base text-gray-600">{content}</p>

      <div className="mt-6">
        <h3 className="text-lg lg:text-xl font-semibold text-[#0047AB] uppercase text-left">
          The Four Dichotomies
        </h3>
        <div className="mt-4 flex flex-col items-center space-y-6 w-full">
          {dichotomies.map((dichotomy, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 w-full max-w-3xl"
            >
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                <div className="p-3 border border-gray-300 rounded-lg text-center max-w-[200px] w-full">
                  <p className="text-sm lg:text-base font-bold text-black">{dichotomy.left}</p>
                  <p className="text-xs lg:text-sm text-gray-600 mt-1">{dichotomy.leftDesc}</p>
                </div>
              </div>

              <div className="w-full lg:w-1/3 flex items-center justify-center">
                <div className="flex items-center w-full max-w-[150px] lg:max-w-[200px]">
                  <span className="w-4 h-4 bg-green-500 rounded-full relative z-10" />
                  <div className="flex-1 h-1 bg-gradient-to-r from-green-500 to-red-500 mx-[-8px] relative z-0" />
                  <span className="w-4 h-4 bg-red-500 rounded-full relative z-10" />
                </div>
              </div>

              <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                <div className="p-3 border border-gray-300 rounded-lg text-center max-w-[200px] w-full">
                  <p className="text-sm lg:text-base font-bold text-black">{dichotomy.right}</p>
                  <p className="text-xs lg:text-sm text-gray-600 mt-1">{dichotomy.rightDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg lg:text-xl font-semibold text-[#0047AB] text-left">
          Purpose, Applications, and Benefits of MBTI in Career Development
        </h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <h4 className="text-sm lg:text-base font-semibold text-black">{benefit.title}</h4>
              <p className="mt-2 text-xs lg:text-sm text-gray-600">{benefit.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}