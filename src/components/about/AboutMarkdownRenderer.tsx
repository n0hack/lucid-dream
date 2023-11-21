import React from 'react';
import { Responsive } from '@components/common';
import styles from './AboutMarkdownRenderer.module.scss';

const AboutMarkdownRenderer = ({ children }: React.PropsWithChildren) => {
  return <Responsive className={styles.renderer}>{children}</Responsive>;
};

export default AboutMarkdownRenderer;
