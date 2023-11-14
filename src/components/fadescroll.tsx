'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  direction?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  className?: string;
};

const FadeIn: React.FC<Props> = ({
  direction = 'top',
  className,
  children,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (inView) {
      switch (direction) {
        case 'top':
          setStyle({
            opacity: 1,
            transform: 'translateY(0)',
            filter: 'blur(0)',
          });
          break;
        case 'bottom':
          setStyle({
            opacity: 1,
            transform: 'translateY(0)',
            filter: 'blur(0)',
          });
          break;
        case 'left':
          setStyle({
            opacity: 1,
            transform: 'translateX(0)',
            filter: 'blur(0)',
          });
          break;
        case 'right':
          setStyle({
            opacity: 1,
            transform: 'translateX(0)',
            filter: 'blur(0)',
          });
          break;
        default:
          setStyle({
            opacity: 1,
            transform: 'translateY(0)',
            filter: 'blur(0)',
          });
      }
    }
  }, [inView, direction]);

  return (
    <div
      className={`${className}`}
      ref={ref}
      style={{
        opacity: 0,
        transform:
          {
            top: 'translateY(-60%)',
            bottom: 'translateY(20%)',
            left: 'translateX(-10vw)', // Use viewport width units to avoid content spilling out of viewport
            right: 'translateX(10vw)', // Use viewport width units
          }[direction] || 'translateY(-100%)',
        transition:
          'opacity 1s ease-in-out, transform 0.7s ease-in-out, filter .3s ease-in-out',

        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
