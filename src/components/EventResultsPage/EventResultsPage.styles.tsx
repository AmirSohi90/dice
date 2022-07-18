import styled from '@emotion/styled';

const SearchFormWrapper = styled.div`
  //position: fixed;
  padding: 80px 0 0;
  z-index: 1;
  background-color: rgb(0, 0, 0);
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SearchByVenueForm = styled.form`
  max-width: 1080px;
`;

const SearchByVenueTextInput = styled.input`
  appearance: none;
  color: inherit;
  padding: 12px;
  margin-left: -12px;
  border-radius: 32px;
  background-color: rgb(255, 255, 255);
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  outline: none;
  border: black solid 1px;
`;

export { SearchFormWrapper, SearchByVenueForm, SearchByVenueTextInput };
