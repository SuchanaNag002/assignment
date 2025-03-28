import Image from 'next/image';
import Link from 'next/link';

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/icons/infigon.svg" alt="Logo" width={40} height={40} />
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
        <Link href="/my-tests" className="text-gray-600 hover:text-primary">My Tests</Link>
        <Link href="/my-sessions" className="text-gray-600 hover:text-primary">My Sessions</Link>
        <Link href="/report" className="text-black font-semibold">Your Report</Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Image src="/bell.svg" alt="Notifications" width={24} height={24} />
        <Image src="/profile.svg" alt="Profile" width={32} height={32} className="rounded-full" />
      </div>
    </header>
  );
}