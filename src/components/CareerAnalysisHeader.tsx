export default function CareerAnalysisHeader() {
  return (
    <div className="mx-4 lg:mx-8 flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 py-2 bg-white border-b border-gray-200 rounded-lg">
      <div>
        <h1 className="text-xl lg:text-2xl font-semibold text-black">Your Career Analysis Report</h1>
        <p className="text-xs lg:text-sm text-gray-600 mt-1 max-w-md">
          Your Report ensures a complete understanding of your strengths, areas for growth, and ideal career fit.
        </p>
      </div>
      <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row items-start lg:items-center">
        <div className="flex flex-col">
          <p className="text-xs lg:text-sm text-black font-medium">
            Want To Speak To An Expert Career Counsellor?
          </p>
          <p className="text-xs lg:text-sm text-gray-600 mt-1">
            Explore a list of 1000+ Expert Counsellors near you!
          </p>
        </div>
        <span className="mt-2 lg:mt-0 lg:ml-4 px-4 py-[0.5rem] bg-gray-200 rounded-lg text-gray-800 font-medium text-xs lg:text-sm flex items-center justify-center">
          SEE ALL
        </span>
      </div>
    </div>
  );
}