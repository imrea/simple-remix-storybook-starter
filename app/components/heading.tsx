import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { createElement } from 'react';

type HeadingProps = PropsWithChildren<{
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}>;

export function Heading({ level, className, children }: HeadingProps) {
  return createElement(
    { 1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5', 6: 'h6' }[level],
    {
      className: clsx(
        className,
        'font-bold',
        {
          1: 'text-5xl',
          2: 'text-4xl',
          3: 'text-2xl',
          4: 'text-xl',
          5: 'text-lg',
          6: 'text-sm',
        }[level]
      ),
    },
    children
  );
}
