import React from 'react';
import { css } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';

type ResponsiveProps = {
  custom?: SystemStyleObject;
};

const Responsive = ({ custom, children }: React.PropsWithChildren<ResponsiveProps>) => {
  return <div className={css(wrapper, custom)}>{children}</div>;
};

const wrapper = css.raw({
  w: 'full',
  h: 'full',
  pl: '24pxr',
  pr: '24pxr',
  desktop: {
    maxW: '1044pxr',
    m: '0 auto',
    pl: '40pxr',
    pr: '40pxr',
  },
});

export default Responsive;
