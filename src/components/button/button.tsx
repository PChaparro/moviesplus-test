import { type VariantProps, cva } from 'class-variance-authority';

export const buttonVariantClassnames = cva(
  'inline-flex justify-center items-center transition-colors border border-transparent rounded-md',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary text-white hover:bg-brand-primary-dark',
        outline: 'border-brand-primary text-brand-primary bg-transparent',
      },
      size: {
        normal: 'px-4 py-2 text-base',
        icon: 'aspect-square w-10 h-10',
      },
    },
    // compoundVariants: [],
    defaultVariants: {
      variant: 'primary',
      size: 'normal',
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariantClassnames> {}

export const Button = ({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonVariantClassnames({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
};
