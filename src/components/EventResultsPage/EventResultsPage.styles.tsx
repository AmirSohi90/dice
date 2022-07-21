import styled from '@emotion/styled';
import { breakPoints, colours } from '../../helpers/styles';

type EventImageProps = {
  image: string;
  isExpanded: boolean;
};

type EventIsExpanded = {
  isExpanded: boolean;
};

const SearchFormWrapper = styled.div`
  padding: 80px 10% 0;
  z-index: 1;
  background-color: ${colours.black};
  display: flex;
  justify-content: center;
`;

const SearchByVenueForm = styled.form`
  width: 100%;
  max-width: 1080px;
`;

const EventImageWrapper = styled.div<EventImageProps>`
  background: ${({ image }) => `url(${image})`};
  height: ${({ isExpanded }) => (isExpanded ? '160px' : '320px')};
  background-size: cover;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const SearchByVenueTextInput = styled.input`
  appearance: none;
  color: inherit;
  padding: 12px;
  border-radius: 32px;
  background-color: ${colours.white};
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  outline: none;
  border: ${colours.black} solid 1px;
`;

const EventsWrapper = styled.div`
  padding: 16px 10%;
  min-width: 288px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
  &:last-of-type {
    margin-bottom: 0;
  }
  @media screen and (min-width: ${breakPoints.tablet}) {
    width: 48%;
  }
  @media screen and (min-width: ${breakPoints.desktop}) {
    width: 31%;
  }
`;

const EventDataAndTime = styled.span`
  color: ${colours.black};
  font-size: 1rem;
  margin-bottom: 8px;
`;

const EventName = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 16px;
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  background-color: ${colours.grey};
  margin-bottom: 24px;
`;

const EventDescriptionText = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
`;

const EventInfoTitle = styled.span`
  font-size: 0.875rem;
  color: ${colours.blue};
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
  background-color: ${colours.blue};
  text-decoration: none;
  color: ${colours.white};
  font-weight: bold;
  text-align: center;
  font-size: 0.875rem;
  padding: 12px 0;
`;

const EventSoldOutText = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${colours.black};
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
  background-color: ${colours.black};
  opacity: 0.6;
  color: ${colours.white};
  margin-top: ${({ isExpanded }) => (isExpanded ? '110px' : '270px')};
`;

const EventFeatured = styled.span<EventIsExpanded>`
  background-color: ${colours.blue};
  color: ${colours.white};
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
  EventDescriptionText,
  EventInfoTitle,
  EventLineupOrderedList,
  EventLineupListItem,
  EventTicketsOrderedList,
  EventTicketListItem,
  EventButtonWrapper,
  EventButtonLink,
  EventImageWrapper,
  EventSoldOutText,
  EventLowestTicketPriceText,
  EventMoreInfo,
  EventMoreInfoText,
  EventTrack,
  EventFeatured,
};
