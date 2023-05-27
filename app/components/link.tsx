import clsx from 'clsx';

export function Link(props: JSX.IntrinsicElements['a']) {
  return (
    <a
      {...props}
      className={clsx(
        'text-blue-300 underline underline-offset-8 cursor-pointer',
        'transition-colors hover:text-blue-400'
      )}
    />
  );
}
