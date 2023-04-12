import loading from '@assets/lotties/loading-lottie.json';

import { StyledLottie } from './Loading.style';

const Loading: React.FC = () => {
  return <StyledLottie animationData={loading} />;
};

export default Loading;
