import react from 'React';
import { render, waitFor, screen } from '@testing-library/react';
import apis from '../../../apis/apis';
import { EventData } from '../../../types/EventData';
import { EventDataBuilder } from '../../../testHelpers/builders/eventDataBuilder';
import { withProviders } from '../../../testHelpers/withProviders';
import { EventsResultsPage } from '../index';
import userEvent from '@testing-library/user-event';

const data: EventData = new EventDataBuilder().build();

describe('[EventsResultsPage]', () => {
  afterEach(() => jest.resetAllMocks());

  it('should display what what term the user has searched for', async () => {
    render(withProviders(<EventsResultsPage />));

    const input = screen.getByRole('textbox');
    await userEvent.type(input, data.venue);

    await waitFor(() => {
      expect(
        screen.getByText(/Your search results for Test Venue/i)
      ).toBeInTheDocument();
    });
  });

  it('should not render the display text if search value is empty', () => {
    render(withProviders(<EventsResultsPage />));

    expect(
      screen.queryByText(/Your search results for/)
    ).not.toBeInTheDocument();
  });

  it('should render the search results', async () => {
    jest
      .spyOn(apis, 'getEventsByVenue')
      .mockResolvedValueOnce({ data: [data], links: { self: 'link' } });

    render(withProviders(<EventsResultsPage />));

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Valid search result');

    await waitFor(() => {
      expect(screen.getByText(new RegExp(data.name))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(data.venue))).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(data.location.city))
      ).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(data.location.country))
      ).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(data.description))
      ).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(data.lineup[1].details))
      ).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(data.ticket_types[0].name))
      ).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(`${data.ticket_types[0].price.total}`))
      ).toBeInTheDocument();
    });
  });
});
