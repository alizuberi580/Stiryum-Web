type Props = {
  className?: string;
  variant?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  variant = "primary",
  children,
  className,
  disabled,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      data-variant={variant}
      className={`${className}
      px-2 py-2 md:px-4 text-md md:text-lg md:py-2 rounded-4xl  transition-all duration-300 
        data-[variant=primary]:bg-black data-[variant=primary]:text-white
        data-[variant=bordered]:hover:text-black data-[variant=bordered]:hover:bg-white
        data-[variant=bordered]:border-2 data-[variant=bordered]:border-white data-[variant=bordered]:text-white
        data-[variant=secondary]:bg-gray-200 data-[variant=secondary]:text-gray-800
        data-[variant=tertiary]:bg-[linear-gradient(to_bottom,#f1bf50_0%,#976B03_100%)] data-[variant=tertiary]:text-white data-[variant=tertiary]:rounded-md data-[variant=tertiary]:hover:shadow-[0_10px_20px_-5px_rgba(241,191,80,0.5)] data-[variant=tertiary]:hover:scale-[1.02] data-[variant=tertiary]:hover:-translate-y-1
        hover:opacity-90"}`}
    >
      {children}
    </button>
  );
};

export default Button;
