import MainHeader from '../components/MainHeader';
import './globals.css';

export const metadata = {
  title: 'Career Analysis Report',
  description: 'Your personalized career analysis report to understand your strengths and career fit.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <div className="flex-1">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}