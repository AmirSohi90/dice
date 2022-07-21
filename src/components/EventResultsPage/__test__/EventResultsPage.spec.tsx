import react from 'React';
import { render, waitFor, screen } from '@testing-library/react';
import apis from '../../../apis/apis';
import { EventData } from '../../../types/EventData';
import { EventDataBuilder } from '../../../testHelpers/builders/eventDataBuilder';
import { EventsResultsPage } from '../index';
import userEvent from '@testing-library/user-event';

const data: EventData = new EventDataBuilder().build();

describe('[EventsResultsPage]', () => {
  afterEach(() => jest.resetAllMocks());

  it('should display what what term the user has searched for', async () => {
    render(<EventsResultsPage />);

    const input = screen.getByRole('searchbox');
    await userEvent.type(input, data.venue);

    await waitFor(() => {
      expect(
        screen.getByText(/Your search results for Test Venue/i)
      ).toBeInTheDocument();
    });
  });

  it('should not render the display text if search value is empty', () => {
    render(<EventsResultsPage />);

    expect(
      screen.queryByText(/Your search results for/)
    ).not.toBeInTheDocument();
  });

  it('should render the search results', async () => {
    jest.spyOn(apis, 'getEventsByVenue').mockResolvedValueOnce({
      data: [data],
      links: { self: 'link' },
    });

    render(<EventsResultsPage />);

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    const input = screen.getByRole('searchbox');
    await userEvent.type(input, 'Valid search result');

    await waitFor(() => {
      const moreInfoText = screen.getByText(/more info/i);
      expect(moreInfoText).toBeInTheDocument();
    });

    userEvent.click(screen.getByText(/more info/i));

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
        screen.getByText(new RegExp(data.raw_description))
      ).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(data.lineup[1].details))
      ).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(data.ticket_types[0].name))
      ).toBeInTheDocument();
      expect(screen.getAllByText('$83.85')[0]).toBeInTheDocument();
      expect(screen.getByText(/Sun 3 Apr - 18:00/)).toBeInTheDocument();
    });
  });

  it('should show the sold out text if ticket is sold out', async () => {
    const soldOutTicket = {
      id: 204638,
      name: 'General Admission',
      price: {
        face_value: 7000,
        fees: 1385,
        total: 8385,
      },
      sold_out: true,
    };

    const dataWithSoldOutTicket = new EventDataBuilder()
      .withTicketTypes([soldOutTicket])
      .build();

    jest.spyOn(apis, 'getEventsByVenue').mockResolvedValueOnce({
      data: [dataWithSoldOutTicket],
      links: { self: 'link' },
    });

    render(<EventsResultsPage />);

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    const input = screen.getByRole('searchbox');
    await userEvent.type(input, 'Valid search result');

    await waitFor(() => {
      const moreInfoText = screen.getByText(/more info/i);
      expect(moreInfoText).toBeInTheDocument();
    });

    userEvent.click(screen.getByText(/more info/i));

    await waitFor(() => {
      expect(screen.getByText(/sold out/i)).toBeInTheDocument();
    });
  });

  it('should display the lowest price of the tickets', async () => {
    const ticket1 = {
      id: 204638,
      name: 'General Admission',
      price: {
        face_value: 7000,
        fees: 1385,
        total: 8385,
      },
      sold_out: false,
    };

    const ticket2 = {
      id: 204638,
      name: 'General Admission',
      price: {
        face_value: 1200,
        fees: 1300,
        total: 2500,
      },
      sold_out: false,
    };

    const dataWithMultipleTickets = new EventDataBuilder()
      .withTicketTypes([ticket1, ticket2])
      .build();

    jest.spyOn(apis, 'getEventsByVenue').mockResolvedValueOnce({
      data: [dataWithMultipleTickets],
      links: { self: 'link' },
    });

    render(<EventsResultsPage />);

    const input = screen.getByRole('searchbox');
    await userEvent.type(input, 'Valid search result');

    await waitFor(() => {
      const moreInfoText = screen.getByText(/more info/i);
      expect(moreInfoText).toBeInTheDocument();
    });

    userEvent.click(screen.getByText(/more info/i));

    await waitFor(() => {
      expect(screen.getAllByText('$25')[1]).toBeInTheDocument();
    });
  });
});
