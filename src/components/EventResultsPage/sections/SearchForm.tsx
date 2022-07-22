import React, { Dispatch, SetStateAction } from 'react';
import {
  DiceLogo,
  SearchByVenueForm,
  SearchByVenueTextInput,
  SearchFormWrapper,
} from '../EventResultsPage.styles';
import logo from '../../../assets/dice-logo.png';

type Props = {
  venueName: string;
  setVenueName: Dispatch<SetStateAction<string>>;
};

export const SearchForm: React.FC<Props> = ({ venueName, setVenueName }) => {
  return (
    <SearchFormWrapper>
      <DiceLogo src={logo} alt="dice-logo" />
      <SearchByVenueForm onSubmit={(e) => e.preventDefault()}>
        <SearchByVenueTextInput
          type="search"
          name="Search"
          placeholder="Search for an event by venue"
          value={venueName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setVenueName(event.target.value)
          }
        />
      </SearchByVenueForm>
    </SearchFormWrapper>
  );
};
