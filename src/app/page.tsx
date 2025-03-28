'use client';

import { useState } from 'react';
import CareerAnalysisHeader from '../components/CareerAnalysisHeader';
import TopCareerOptions from '../components/TopCareerOptions';
import PersonalityExplorerContent from '@/components/PersonalityExplorerComponent';
import Sidebar from '@/components/Sidebar';
import careerReport from '../data/career-report.json';

export default function Home() {
  const { understanding, dichotomies, benefits } = careerReport.personalityExplorer;
  const [selectedSection, setSelectedSection] = useState<string>('TEST 1');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleSectionChange = (sectionId: string) => {
    setSelectedSection(sectionId);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'TEST 1':
        return (
          <PersonalityExplorerContent
            title={understanding.title}
            content={understanding.content}
            dichotomies={dichotomies}
            benefits={benefits}
          />
        );
      case 'TEST 2':
        return <div className="p-4">Interest Explorer Content (Placeholder)</div>;
      case 'TEST 3':
        return <div className="p-4">Career Motivators Content (Placeholder)</div>;
      case 'TEST 4':
        return <div className="p-4">Emotional Intelligence Content (Placeholder)</div>;
      case 'TEST 5':
        return <div className="p-4">Learning Styles Content (Placeholder)</div>;
      default:
        return (
          <PersonalityExplorerContent
            title={understanding.title}
            content={understanding.content}
            dichotomies={dichotomies}
            benefits={benefits}
          />
        );
    }
  };

  return (
    <div className="w-full">
      <CareerAnalysisHeader />
      <TopCareerOptions />
      <div className="flex flex-col lg:flex-row relative">
        <button
          className="lg:hidden p-4 text-gray-600 focus:outline-none w-full text-center text-sm lg:text-base"
          onClick={toggleSidebar}
        >
          Click to open sidebar
        </button>
        <div
          className={`${
            isSidebarOpen ? 'block' : 'hidden'
          } lg:block lg:w-64 relative`}
        >
          <Sidebar items={careerReport.sidebar} onSectionChange={handleSectionChange} />
          <div className="hidden lg:block absolute top-8 bottom-8 right-0 w-px bg-gray-300" />
        </div>
        <div className="flex-1 p-4 relative">
          {renderContent()}
          <div className="lg:hidden absolute top-4 bottom-4 right-0 w-px bg-gray-300" />
        </div>
      </div>
    </div>
  );
}