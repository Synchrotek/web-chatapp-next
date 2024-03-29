import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes, FC } from 'react';

const buttonVariance = cva(
    'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none',
    {
        variants: {
            variant: {
                default: 'bg-slate-900 text-white hover:bg-slate-800',
                ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
            },
            size: {
                default: 'h-9 py-2 px-4',
                sm: 'h-9 px-2',
                lg: 'h-11 px-8',
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        }
    }
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariance> {
    isLoading?: boolean
}

const Button: FC<ButtonProps> = ({ className, children, variant, isLoading, size, ...props }) => {
    return (
        <button {...props}
            className={cn(buttonVariance({ variant, size, className }))}
            disabled={isLoading}>
            {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
            {children}
        </button>
    );
}

export default Button;