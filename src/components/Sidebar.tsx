'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface SidebarItem {
  id: string;
  title: string;
  icon: string;
  dropdown: { title: string; link: string }[];
}

interface SidebarProps {
  items: SidebarItem[];
  onSectionChange: (sectionId: string) => void;
}

export default function Sidebar({ items, onSectionChange }: SidebarProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
    onSectionChange(id);
  };

  const getTitleColor = (id: string) => {
    switch (id) {
      case 'TEST 1':
        return '#0047AB';
      case 'TEST 2':
        return '#309759';
      case 'TEST 3':
        return '#F5A623';
      case 'TEST 4':
        return '#398BFF';
      case 'TEST 5':
        return '#DE5AFF';
      default:
        return '#000000';
    }
  };

  const getBorderColor = (id: string) => {
    return getTitleColor(id);
  };

  return (
    <aside className="w-full lg:w-64 p-2 lg:p-4">
      {items.map((item, index) => (
        <div key={item.id} className="mb-2 relative">
          <div
            className={`flex items-center p-2 lg:p-3 rounded-lg cursor-pointer relative ${
              openDropdown === item.id
                ? `border-r-4 border-[${getBorderColor(item.id)}] shadow-inner`
                : ''
            }`}
            onClick={() => toggleDropdown(item.id)}
            style={{
              borderRightColor: openDropdown === item.id ? getBorderColor(item.id) : 'transparent',
            }}
          >
            <Image src={`/${item.icon}`} alt={item.title} width={20} height={20} className="lg:w-6 lg:h-6" />
            <div className="ml-2 lg:ml-3 flex flex-col">
              <span className="text-[10px] lg:text-xs text-gray-500 uppercase">{item.id}</span>
              <span
                className="text-xs lg:text-sm font-semibold"
                style={{ color: getTitleColor(item.id) }}
              >
                {item.title}
              </span>
            </div>
          </div>
          {openDropdown === item.id && (
            <div className="ml-6 lg:ml-8 mt-1 lg:mt-2 space-y-1 lg:space-y-2">
              {item.dropdown.map((dropdownItem) => (
                <Link
                  key={dropdownItem.link}
                  href={dropdownItem.link}
                  className={`block p-1 lg:p-2 rounded-lg text-[10px] lg:text-sm ${
                    pathname === dropdownItem.link ? 'bg-gray-100 text-black font-semibold' : 'text-gray-600'
                  }`}
                  onClick={() => onSectionChange(item.id)}
                >
                  {dropdownItem.title}
                </Link>
              ))}
            </div>
          )}
          {index < items.length - 1 && (
            <div className="w-full h-[1px] bg-gray-300 mt-2 lg:mt-4" />
          )}
        </div>
      ))}
      <div className="mt-2 lg:mt-4">
        <button className="flex items-center justify-center p-2 lg:p-3 border border-[#0047AB] text-[#0047AB] rounded-lg w-full bg-white text-xs lg:text-sm">
          <span>Download Report Card</span>
          <Image src="icons/download.svg" alt="Download" width={16} height={16} className="ml-1 lg:ml-2 lg:w-5 lg:h-5" />
        </button>
      </div>
    </aside>
  );
}