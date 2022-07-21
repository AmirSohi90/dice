import React, { useRef, useState } from 'react';
import { EventTrack } from '../EventResultsPage.styles';

type Props = {
  previewTrack: string;
  shouldShowMore: boolean;
};

export const PreviewTrack: React.FC<Props> = ({
  shouldShowMore,
  previewTrack,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const startAudio = async () => {
    await audioRef?.current?.play();
    setIsPlayingAudio(true);
  };

  const pauseAudio = () => {
    audioRef?.current?.pause();
    setIsPlayingAudio(false);
  };

  return (
    <>
      <audio ref={audioRef} src={previewTrack} />
      {!isPlayingAudio ? (
        <EventTrack isExpanded={shouldShowMore} onClick={startAudio}>
          Play
        </EventTrack>
      ) : (
        <EventTrack isExpanded={shouldShowMore} onClick={pauseAudio}>
          Pause
        </EventTrack>
      )}
    </>
  );
};
