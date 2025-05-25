import { BookOpen } from 'lucide-react';

interface LogoProps {
  white?: boolean;
}

const Logo = ({ white = false }: LogoProps) => {
  return (
    <div className={`flex items-center justify-center w-10 h-10 rounded-md ${white ? 'bg-blue-600' : 'bg-blue-800'}`}>
      <BookOpen size={24} className="text-white" />
    </div>
  );
};

export default Logo;