import { css } from '@emotion/css';

const spaces = [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64];

const margins = spaces.reduce<object>((accumulator, space) => {
  const marginLeft = space;
  const marginRight = space;
  const marginTop = space;
  const marginBottom = space;

  return {
    ...accumulator,
    [`.m${space}`]: {
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
    },
    [`.mb${space}`]: { marginBottom },
    [`.ml${space}`]: { marginLeft },
    [`.mr${space}`]: { marginRight },
    [`.mt${space}`]: { marginTop },
    [`.mx${space}`]: { marginLeft, marginRight },
    [`.my${space}`]: { marginBottom, marginTop },
  };
}, {});

const paddings = spaces.reduce<object>((accumulator, space) => {
  const paddingLeft = space;
  const paddingRight = space;
  const paddingTop = space;
  const paddingBottom = space;

  return {
    ...accumulator,
    [`.p${space}`]: {
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
    },
    [`.pb${space}`]: { paddingBottom },
    [`.pl${space}`]: { paddingLeft },
    [`.pr${space}`]: { paddingRight },
    [`.pt${space}`]: { paddingTop },
    [`.px${space}`]: { paddingLeft, paddingRight },
    [`.py${space}`]: { paddingBottom, paddingTop },
  };
}, {});

const style = {
  ...margins,
  ...paddings,
  fontFamily: "'Atkinson Hyperlegible', sans-serif",
  fontSize: 'calc(12px + 0.25vw)',
  i: { fontSize: 'calc(14px + 0.25vw)' },
  p: { margin: 0 },
  small: { fontSize: 'calc(10px + 0.25vw)' },
  '.flex': {
    display: 'flex',
    alignItems: 'center',
    '&.justify-': {
      '&between': {
        justifyContent: 'space-between',
      },
      '&center': {
        justifyContent: 'center',
      },
    },
  },
  '.large': { fontSize: 'calc(14px + 0.25vw)' },
};

const globalStyle = css(style);

export default globalStyle;
