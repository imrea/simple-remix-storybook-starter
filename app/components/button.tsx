import clsx from 'clsx';
import type { ReactNode } from 'react';
import { SpinnerIcon } from '~/icons/spinner-icon';

const VARIANTS = {
  primary:
    'bg-black text-white border-transparent transition-colors enabled:hover:bg-sky-300',
  secondary:
    'bg-white border-black transition-colors enabled:hover:text-sky-300 enabled:hover:border-sky-300',
  tertiary: 'border-transparent transition-colors enabled:hover:text-sky-300',
};

const SIZES = {
  medium: 'px-6 leading-[2.5rem]',
  small: 'px-5 leading-[2rem] text-sm',
  large: 'px-8 leading-[3rem] text-lg',
};

type ButtonProps = {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  loading?: boolean;
  icon?: ReactNode;
  fit?: boolean;
} & JSX.IntrinsicElements['button'];

export function Button({
  variant = 'primary',
  size = 'medium',
  fit,
  loading,
  icon,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={clsx(
        'uppercase border whitespace-nowrap rounded-full items-center justify-center gap-1.5',
        fit ? 'flex w-full' : 'inline-flex',
        (disabled || loading) && 'opacity-20',
        VARIANTS[variant],
        SIZES[size]
      )}
    >
      {loading ? <SpinnerIcon /> : icon}
      {children}
    </button>
  );
}
