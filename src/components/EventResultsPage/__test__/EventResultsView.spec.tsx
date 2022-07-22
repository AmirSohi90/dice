import { render, screen, waitFor } from '@testing-library/react';
import { EventResultsPageView } from '../EventResultsPageView';
import { Currencies } from '../../../types/EventData';
import userEvent from '@testing-library/user-event';
import { ResponseStatus } from '../hooks/calculateResponseStatus';

const initialProps = {
  venueName: 'test-venue',
  setVenueName: jest.fn(),
  events: [
    {
      id: 'test-id',
      image: 'test-image',
      startDate: '2023-03-09T18:30:00Z',
      name: 'test',
      venue: 'test-venue',
      city: 'test-city',
      country: 'test-country',
      description: 'test-description',
      lineup: [],
      tickets: [],
      url: 'test-url',
      currency: Currencies.USD,
      previewTrack: '',
      onSaleFrom: '2022-03-09T18:30:00Z',
      isFeatured: false,
      isSoldOut: false,
      startTime: 'test-startDate',
    },
  ],
  hasNextPage: false,
  setPageNumber: jest.fn(),
  pageNumber: 1,
  responseStatus: ResponseStatus.SUCCESS,
};

describe('[EventDetail]', () => {
  it('should show the event details if user has expanded the show more button', () => {
    render(<EventResultsPageView {...initialProps} />);
    const moreInfoText = screen.getByText(/more info/i);
    userEvent.click(moreInfoText);
    expect(
      screen.getByText(initialProps.events[0].description)
    ).toBeInTheDocument();
  });

  it('should NOT show the event details if user has NOT expanded the show more button', () => {
    render(<EventResultsPageView {...initialProps} />);
    expect(
      screen.queryByText(initialProps.events[0].description)
    ).not.toBeInTheDocument();
  });

  it('should NOT show the play button if there is no preview track', () => {
    render(<EventResultsPageView {...initialProps} />);
    expect(screen.queryByText('Play')).not.toBeInTheDocument();

    expect(screen.queryByText('Pause')).not.toBeInTheDocument();
  });

  it('should show the play button if there is a preview track', () => {
    const updatedEvent = [
      { ...{ ...initialProps.events[0], previewTrack: 'test-track' } },
    ];
    render(
      <EventResultsPageView {...{ ...initialProps, events: updatedEvent }} />
    );
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.queryByText('Pause')).not.toBeInTheDocument();
  });

  it('should show the pause button if the preview track is playing', async () => {
    const updatedEvent = [
      { ...{ ...initialProps.events[0], previewTrack: 'test-track' } },
    ];

    render(
      <EventResultsPageView {...{ ...initialProps, events: updatedEvent }} />
    );
    const playButton = screen.getByText('Play');
    expect(playButton).toBeInTheDocument();
    userEvent.click(playButton);
    await waitFor(() => {
      expect(screen.getByText('Pause')).toBeInTheDocument();
    });
  });

  it('should show the featured text if event is features', () => {
    const updatedEvent = [
      { ...{ ...initialProps.events[0], isFeatured: true } },
    ];

    render(
      <EventResultsPageView {...{ ...initialProps, events: updatedEvent }} />
    );
    expect(screen.getByText(/featured/i)).toBeInTheDocument();
  });

  it('should show the term a user searched for in the header', () => {
    render(<EventResultsPageView {...initialProps} />);
    expect(
      screen.getByText(/Your search results for test-venue/i)
    ).toBeInTheDocument();
  });

  it('should NOT show the prefix to the searched term header', () => {
    render(<EventResultsPageView {...{ ...initialProps, venueName: '' }} />);
    expect(
      screen.queryByText(/Your search results for/i)
    ).not.toBeInTheDocument();
  });

  it('should link a user to where they can buy tickets if tickets are currently sale', () => {
    jest
      .spyOn(global.Date, 'now')
      .mockImplementationOnce(() =>
        new Date('2022-05-14T11:01:58.135Z').valueOf()
      );
    render(<EventResultsPageView {...initialProps} />);
    expect(screen.getByText(/book now/i)).toBeInTheDocument();
  });
});
