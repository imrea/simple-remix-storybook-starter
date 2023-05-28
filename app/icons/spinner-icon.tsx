import clsx from 'clsx';
import type { SVGProps } from 'react';

export function SpinnerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="-1.6 -1.6 35.2 35.2"
      fill="currentColor"
      {...props}
      className={clsx('animate-spin', props.className)}
    >
      <path d="M16 1.25a.75.75 0 000 1.5c7.318.001 13.25 5.933 13.25 13.251a13.21 13.21 0 01-3.881 9.37.75.75 0 101.062 1.059 14.704 14.704 0 004.318-10.428c0-8.146-6.604-14.751-14.75-14.751z"></path>
    </svg>
  );
}
