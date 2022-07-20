import styled from '@emotion/styled';

type EventImageProps = {
  image: string;
  isExpanded: boolean;
};

type EventIsExpanded = {
  isExpanded: boolean;
};

const SearchFormWrapper = styled.div`
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

const EventImage = styled.div<EventImageProps>`
  background: ${({ image }) => `url(${image})`};
  height: ${({ isExpanded }) => (isExpanded ? '160px' : '320px')};
  width: 100%;
  background-size: cover;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
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

const EventsWrapper = styled.div`
  padding: 16px;
`;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 0;
  }
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

const EventSoldOutText = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  color: #000000;
  opacity: 0.5;
`;

const EventLowestTicketPriceText = styled.span`
  font-size: 2rem;
`;

const EventMoreInfo = styled.div<EventIsExpanded>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ isExpanded }) => (isExpanded ? `19px` : '0')};
`;

const EventMoreInfoText = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const EventTrack = styled.div<EventIsExpanded>`
  height: 50px;
  width: 50px;
  background-color: #000000;
  opacity: 0.6;
  color: #ffffff;
  margin-top: ${({ isExpanded }) => (isExpanded ? '110px' : '270px')};
`;

const EventFeatured = styled.span<EventIsExpanded>`
  background-color: #3c74ff;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 6px 8px;
  height: 16px;
  margin-top: ${({ isExpanded }) => (isExpanded ? '120px' : '280px')};
  margin-right: 16px;
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
  EventSoldOutText,
  EventLowestTicketPriceText,
  EventMoreInfo,
  EventMoreInfoText,
  EventTrack,
  EventFeatured,
};
