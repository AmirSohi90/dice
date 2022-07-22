import React from 'react';
import { EventFeatured } from '../EventResultsPage.styles';
import { getFormattedDate } from '../../../helpers/getFormattedDate';

type Props = {
  isFeatured: boolean;
  onSaleFrom: string;
  shouldShowMore: boolean;
  isOnSaleNow: boolean;
};

export const ImageTextToRender: React.FC<Props> = ({
  isFeatured,
  onSaleFrom,
  shouldShowMore,
  isOnSaleNow,
}) => {
  if (isFeatured) {
    return <EventFeatured isExpanded={shouldShowMore}>FEATURED</EventFeatured>;
  } else if (!isOnSaleNow) {
    return <div>On Sale from {getFormattedDate(onSaleFrom).formattedDate}</div>;
  }
  return null;
};
