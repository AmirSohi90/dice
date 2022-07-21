import React, { Dispatch, SetStateAction } from 'react';
import {
  SearchByVenueForm,
  SearchByVenueTextInput,
  SearchFormWrapper,
} from '../EventResultsPage.styles';

type Props = {
    venueName: string;
    setVenueName: Dispatch<SetStateAction<string>>
}

export const SearchForm: React.FC<Props> = ({venueName, setVenueName}) => {
  return (
    <SearchFormWrapper>
      <SearchByVenueForm onSubmit={(e) => e.preventDefault()}>
        <SearchByVenueTextInput
          type="search"
          name="Search"
          placeholder="Search for an event by venue"
          value={venueName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setVenueName(event.target.value)}
        />
      </SearchByVenueForm>
    </SearchFormWrapper>
  );
};
