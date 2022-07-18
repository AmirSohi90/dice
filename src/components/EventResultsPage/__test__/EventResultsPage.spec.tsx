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
  it('should display what what term the user has searched for', async () => {
    render(withProviders(<EventsResultsPage />));

    const input = screen.getByRole('textbox');
    await userEvent.type(input, data.venue);

    await waitFor(() => {
      expect(screen.getByText(/Your search results for Public Records/i)).toBeInTheDocument();
    });
  });
});
