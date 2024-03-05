import { type VariantProps, cva } from 'class-variance-authority';

import Styles from './button.module.css';

export const buttonVariantClassnames = cva(Styles.button, {
  variants: {
    variant: {
      primary: Styles['button--primary'],
    },
  },
  // compoundVariants: [],
  defaultVariants: {
    variant: 'primary',
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariantClassnames> {}

export const Button = ({
  variant,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonVariantClassnames({ variant, className })}
      {...props}
    >
      {children}
    </button>
  );
};
