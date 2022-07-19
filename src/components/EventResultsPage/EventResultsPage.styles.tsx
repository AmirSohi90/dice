import styled from '@emotion/styled';

type EventImageProps = {
  image: string;
};

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

const EventImage = styled.img<EventImageProps>`
  background: ${(props) => `url(${props.image})`};
  height: 160px;
  width: 100%;
  background-size: cover;
  margin-bottom: 16px;
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

const EventsWrapper = styled.div``;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventDataAndTime = styled.span`
  color: #000000;
  font-size: 1rem;
  margin-bottom: 8px;
`;

const EventName = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const EventVenue = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

const EventVenueLocation = styled.span`
  font-size: 1rem;
  margin-bottom: 16px;
`;

const EventDescriptionWrapper = styled.div`
  padding: 11px 16px;
  background-color: #f2f2f2;
  margin-bottom: 24px;
`;

const EventDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
`;

const EventInfoTitle = styled.span`
  font-size: 0.875rem;
  color: #3c74ff;
  margin-bottom: 16px;
  display: block;
  font-weight: bold;
`;

const EventLineupOrderedList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 0;
`;

const EventLineupListItem = styled.li`
  display: block;
  font-size: 1rem;
  margin-bottom: 8px;
`;

const EventTicketsOrderedList = styled(EventLineupOrderedList)`
  margin-bottom: 0;
`;

const EventTicketListItem = styled(EventLineupListItem)`
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const EventButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EventButtonLink = styled.a`
  display: block;
  width: 160px;
  background-color: #3c74ff;
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size: 0.875rem;
  padding: 12px 0;
`;

export {
  SearchFormWrapper,
  SearchByVenueForm,
  SearchByVenueTextInput,
  EventsWrapper,
  EventWrapper,
  EventDataAndTime,
  EventName,
  EventVenue,
  EventVenueLocation,
  EventDescriptionWrapper,
  EventDescription,
  EventInfoTitle,
  EventLineupOrderedList,
  EventLineupListItem,
  EventTicketsOrderedList,
  EventTicketListItem,
  EventButtonWrapper,
  EventButtonLink,
  EventImage,
};
