import { cva, type RecipeVariantProps } from '@styled-system/css';

type DimProps = RecipeVariantProps<typeof dim> & {};

const Dim = ({ deep }: DimProps) => {
  return <div className={dim({ deep })} />;
};

const dim = cva({
  base: {
    position: 'absolute',
    inset: 0,
  },
  variants: {
    deep: {
      10: { bg: 'dim.010' },
      20: { bg: 'dim.020' },
      30: { bg: 'dim.030' },
      40: { bg: 'dim.040' },
      50: { bg: 'dim.050' },
      60: { bg: 'dim.060' },
      70: { bg: 'dim.070' },
      80: { bg: 'dim.080' },
      90: { bg: 'dim.090' },
    },
  },
  defaultVariants: {
    deep: 50,
  },
});

export default Dim;
