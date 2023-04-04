import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useRef } from 'react';

import { CAT_SOUNDS } from '@/constants/sounds';

const Logged: React.FC = () => {
  const audio = useRef<HTMLAudioElement>(null);
  const audio2 = useRef<HTMLAudioElement>(null);
  const { isLoading, user, error } = useUser();

  const getRandomCat = () => {
    const num = Math.floor(Math.random() * 4);
    return CAT_SOUNDS[num];
  };

  return isLoading || error ? (
    <>wait.{error?.message}.</>
  ) : (
    <>
      {user?.nickname}
      {user?.email}
      <div>logged,test{user?.sub}</div>

      <button onClick={() => audio.current?.play()}>sound</button>
      <button onClick={() => audio2.current?.play()}>sound2</button>
      <audio ref={audio}>
        <source src={getRandomCat()} />
      </audio>
      <audio ref={audio2}>
        <source src={getRandomCat()} />
      </audio>
    </>
  );
};

export default Logged;
