import React, { useRef, useState } from 'react';
import { EventFeatured, EventTrack } from '../EventResultsPage.styles';
import { getFormattedDate } from '../../../helpers/getFormattedDate';

type Props = {
  isFeatured: boolean;
  onSaleFrom: string;
  shouldShowMore: boolean;
};

// export const ImageTextToRender: React.FC<Props> | null = ({isFeatured, onSaleFrom, shouldShowMore}) => {
//         const currentDate = new Date();
//         const onSaleDate = new Date(onSaleFrom);
//         if (isFeatured) {
//             return <EventFeatured isExpanded={shouldShowMore}>FEATURED</EventFeatured>
//
//         } else if (onSaleDate > currentDate) {
//             return <div>On Sale from {getFormattedDate(onSaleFrom).formattedDate}</div>
//         }
//         return null;
// }

export const ImageTextToRender: React.FC<Props> = ({
  isFeatured,
  onSaleFrom,
  shouldShowMore,
}) => {
  const currentDate = new Date();
  const onSaleDate = new Date(onSaleFrom);
  if (isFeatured) {
    return <EventFeatured isExpanded={shouldShowMore}>FEATURED</EventFeatured>;
  } else if (onSaleDate > currentDate) {
    return <div>On Sale from {getFormattedDate(onSaleFrom).formattedDate}</div>;
  }
  return null;
};
