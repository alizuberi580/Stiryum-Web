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
      px-2 py-2 md:px-4 text-md md:text-lg md:py-2 rounded-4xl  transition-colors duration-300 
        data-[variant=primary]:bg-black data-[variant=primary]:text-white
        data-[variant=bordered]:hover:text-black data-[variant=bordered]:hover:bg-white
        data-[variant=bordered]:border-2 data-[variant=bordered]:border-white data-[variant=bordered]:text-white
        data-[variant=secondary]:bg-gray-200 data-[variant=secondary]:text-gray-800
        hover:opacity-90}`}
        >
            {children}
        </button>
    );
};

export default Button;
