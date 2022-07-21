import React from 'react';
import { PreviewTrack } from './PreviewTrack';
import { ImageTextToRender } from './ImageTextToRender';
import { EventImageWrapper } from '../EventResultsPage.styles';

type Props = {
  shouldShowMore: boolean;
  image: string;
  previewTrack: string;
  isFeatured: boolean;
  onSaleFrom: string;
  isOnSaleNow: boolean;
};

export const EventImage: React.FC<Props> = ({
  shouldShowMore,
  image,
  onSaleFrom,
  previewTrack,
  isFeatured,
  isOnSaleNow,
}) => {
  return (
    <EventImageWrapper isExpanded={shouldShowMore} image={image}>
      {previewTrack && (
        <PreviewTrack
          shouldShowMore={shouldShowMore}
          previewTrack={previewTrack}
        />
      )}
      <ImageTextToRender
        isFeatured={isFeatured}
        onSaleFrom={onSaleFrom}
        shouldShowMore={shouldShowMore}
        isOnSaleNow={isOnSaleNow}
      />
    </EventImageWrapper>
  );
};
