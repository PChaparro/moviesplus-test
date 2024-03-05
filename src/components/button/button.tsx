import { type VariantProps, cva } from 'class-variance-authority';

import Styles from './button.module.css';

export const buttonVariantClassnames = cva(Styles.button, {
  variants: {
    variant: {
      primary: Styles['button--primary'],
      outline: Styles['button--outline'],
    },
    size: {
      normal: Styles['button--normal'],
      icon: Styles['button--icon'],
    },
  },
  // compoundVariants: [],
  defaultVariants: {
    variant: 'primary',
    size: 'normal',
  },
});

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
