import { ReactNode } from 'react';
import { LoaderCircle } from 'lucide-react';

type ButtonProps = {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    isLoading: boolean;
};

const SubmitButton = ({
    children,
    className = '',
    onClick,
    type = 'button',
    disabled,
    isLoading,
}: ButtonProps) => {
    const classes = `button relative inline-flex items-center justify-center cursor-pointer bg-primary px-6 py-2 rounded-[5px] font-semibold hover:text-white hover:font-medium hover:bg-accent
    ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}  `;

    const spanClass = `relative z-10 text-sm sm:text-base`;

    return (
        <button
            disabled={disabled}
            type={type}
            className={classes}
            onClick={onClick}
        >
            {isLoading ? (
                <div className="flex items-center gap-4">
                    <LoaderCircle
                        width={24}
                        height={24}
                        className="animate-spin"
                    />
                    Submitting...
                </div>
            ) : (
                <span className={spanClass}>{children}</span>
            )}
        </button>
    );
};

export default SubmitButton;
