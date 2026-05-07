import logoImage from "../../imports/Logo_RR.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={logoImage} alt="RR Design" className="h-10 w-auto" />
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            RR Design
          </span>
          <span className="text-xs text-cyan-300">Web Solutions</span>
        </div>
      )}
    </div>
  );
}
