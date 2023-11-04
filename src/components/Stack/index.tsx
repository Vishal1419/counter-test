import clsx from 'clsx';
import { ReactNode } from 'react';
import './styles.css';

export interface StackProps {
  /** @default 'column' */
  direction?: 'row' | 'column';
  /** @default 'stretch' */
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch';
  /** @default 'stretch' */
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  children: ReactNode;
  className?: string;
}

const Stack = ({
  direction = 'column',
  justifyContent = 'stretch',
  alignItems = 'stretch',
  children,
  className,
}: StackProps) => {
  return (
    <div
      className={clsx(className, 'stack', direction, {
        [`justify-${justifyContent}`]: justifyContent,
        [`align-${alignItems}`]: alignItems,
      })}
    >
      {children}
    </div>
  );
};

export default Stack;
