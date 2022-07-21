import React, { Dispatch, SetStateAction } from 'react';
import { LoadMoreButton, LoadMoreWrapper } from '../EventResultsPage.styles';

type Props = {
  setPageNumber: Dispatch<SetStateAction<number>>;
  pageNumber: number;
  shouldDisableButton: boolean;
};

export const LoadMore: React.FC<Props> = ({
  setPageNumber,
  pageNumber,
  shouldDisableButton,
}) => {
  return (
    <LoadMoreWrapper>
      <LoadMoreButton
        disabled={shouldDisableButton}
        onClick={() => setPageNumber(pageNumber + 1)}
      >
        LOAD MORE
      </LoadMoreButton>
    </LoadMoreWrapper>
  );
};
