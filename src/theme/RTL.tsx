/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';

// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()]
});

const RTL = (props: React.PropsWithChildren<{}>) => {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
};
export default RTL;
