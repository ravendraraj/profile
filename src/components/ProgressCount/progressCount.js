import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import { useCountUp } from 'use-count-up';

export default function ProgressCount({duration,start,delay,end,thickness,innerTitle}){
  const { value } = useCountUp({
    isCounting: true,
    duration: duration?duration:5,
    easing: 'linear',
    start: start?start:0,
    end: end?end:75,
    onComplete: () => ({
      shouldRepeat: false,
      delay: delay?delay:2,
    }),
  });

  return (
    <LinearProgress
      determinate
      variant="outlined"
      color="neutral"
      size="sm"
      thickness={thickness?thickness:24}
      value={Number(value)}
      sx={{
        '--LinearProgress-radius': '20px',
        '--LinearProgress-thickness': '24px',
      }}
    >
      <Typography
        level="body-xs"
        fontWeight="xl"
        textColor="common.white"
        sx={{ mixBlendMode: 'difference' }}
      >
        {innerTitle && innerTitle+"  "}{`${Math.round(Number(value))}%`}
      </Typography>
    </LinearProgress>
  );
}