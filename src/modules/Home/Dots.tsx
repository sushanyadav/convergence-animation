import { motion, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';

import DotsSvg from './DotsSvg';

const Dots = () => {
  const ref = useRef(null);

  const [scrollPos, setScrollPos] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  scrollYProgress.onChange((progress) => {
    // round off the progress to a whole number
    const roundedProgress = Math.round(progress * 100);
    setScrollPos(roundedProgress);
  });

  return (
    <div ref={ref}>
      <svg
        height="368"
        viewBox="0 0 728 368"
        width="728"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="arc">
          <DotsSvg />
        </mask>

        {/* Width and height matches svg viewBox */}
        <foreignObject height="368" mask="url(#arc)" width="728" x="0" y="0">
          <motion.div
            animate={{
              backgroundPosition: `${scrollPos * 7.2}px`,
            }}
            initial={{
              backgroundPosition: '-220px',
            }}
            style={{
              background:
                'linear-gradient(270deg, rgba(221,221,221,0.8) 0%, rgba(30,30,30,0) 100%)',
              backgroundSize: '100%',
              width: '100%',
              height: '100%',
            }}
            transition={{
              duration: 0.05,
              ease: 'linear',
            }}
          />
        </foreignObject>
      </svg>
    </div>
  );
};

export default Dots;
