import React, { useState } from 'react';
import {
    SearchByVenueForm,
    SearchByVenueTextInput,
    SearchFormWrapper,
} from './EventResultsPage.styles';

export const EventsResultsPage = () => {
    const [venueName, setVenueName] = useState('');

    return (
        <div>
            <SearchFormWrapper>
                <SearchByVenueForm>
                    <SearchByVenueTextInput
                        type="text"
                        name="Search"
                        placeholder="Search for an event by venue"
                        value={venueName}
                        onChange={event => setVenueName(event.target.value)}
                    />
                </SearchByVenueForm>
            </SearchFormWrapper>
            <div>Your search results for {venueName}</div>
        </div>
    );
};
