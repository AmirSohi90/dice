import { render, waitFor, screen } from '@testing-library/react';
import { EventDetail } from '../EventDetail';
import { Currencies } from '../../../../types/EventData';
import userEvent from '@testing-library/user-event';

const initialProps = {
  image: 'test-image',
  startDate: 'test-date',
  name: 'test',
  venue: 'test-venue',
  city: 'test-city',
  country: 'test-country',
  description: 'test-description',
  lineup: [],
  tickets: [],
  url: 'test-url',
  currency: Currencies.USD,
  previewTrack: null,
  onSaleFrom: 'onsale',
  isFeatured: false,
  index: 0,
};

describe('[EventDetail]', () => {
  it('should show the event details if user has expanded the show more button', () => {
    render(<EventDetail {...initialProps} />);
    const moreInfoText = screen.getByText(/more info/i);
    userEvent.click(moreInfoText);
    expect(screen.getByText(initialProps.description)).toBeInTheDocument();
  });

  it('should NOT show the event details if user has NOT expanded the show more button', () => {
    render(<EventDetail {...initialProps} />);
    expect(
      screen.queryByText(initialProps.description)
    ).not.toBeInTheDocument();
  });

  it('should NOT show the play button if there is no preview track', () => {
    render(<EventDetail {...initialProps} />);
    expect(screen.queryByText('Play')).not.toBeInTheDocument();

    expect(screen.queryByText('Pause')).not.toBeInTheDocument();
  });
});
