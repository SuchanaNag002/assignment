import Link from 'next/link';

export default function TopCareerOptions() {
  const careerOptions = [
    { id: 1, name: 'Engineer' },
    { id: 2, name: 'Doctor' },
    { id: 3, name: 'Teacher' },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center px-6 py-4 bg-white border-b border-gray-200">
      {/* Left Section: Title and Career Options */}
      <div className="flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
        <h2 className="text-lg font-semibold text-gray-400">
          Your <span className="text-[#0047AB]">Top 3</span> Career Options
        </h2>
        <div className="flex items-center space-x-2">
          {careerOptions.map((option, index) => (
            <div key={option.id} className="flex items-center">
              {/* Career Option Bubble */}
              <div
                className="flex items-center px-2 py-2 w-full bg-white border border-gray-300 rounded-full text-sm text-gray-600 blur-[1px]"
              >
                {/* Number Circle */}
                <span className="flex items-center justify-center w-5 h-5 bg-gray-300 text-white rounded-full mr-1">
                  {option.id}
                </span>
                {/* Career Name */}
                <span>{option.name}</span>
              </div>
              {/* Separator after the last bubble */}
              {index === careerOptions.length - 1 && (
                <span className="text-gray-400 mx-2">|</span>
              )}
            </div>
          ))}
          {/* Right Section: Text and Button */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-black">Choose them right here!</span>
            <Link
              href="/career-options"
              className="px-4 py-2 bg-[#0047AB] text-white rounded-md hover:bg-blue-700 text-sm"
            >
              Your Career Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}