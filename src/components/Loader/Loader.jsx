import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
<Oval
  height={100}
  width={100}
  color="#3470FF"
  wrapperStyle={{}}
  wrapperClass={css.loaderWrapper}
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#0B44CD"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
);

export default Loader;