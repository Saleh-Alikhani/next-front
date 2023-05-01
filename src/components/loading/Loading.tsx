import loading from '@assets/lotties/loading-lottie.json';

import { StyledLottie, StyledWrapper } from './Loading.style';

const Loading: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledLottie animationData={loading} />
    </StyledWrapper>
  );
};

export default Loading;
