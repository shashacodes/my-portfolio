type TooltipProps = {
  label: string;
  children: React.ReactNode;
};

export function Tooltip({ label, children }: TooltipProps) {
  return (
    <div className="relative group flex items-center justify-center p-1">
      {children}

      <span className="absolute top-8 left-1/2 -translate-x-1/2 
        bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap
        opacity-0 translate-y-2
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-200">
        {label}
      </span>
    </div>
  );
}