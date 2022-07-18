Plan for app

1. Fetching the data

- Fetch data with url indicating page size
- Use react-query for this
- takes query
- once received the data map only relevant data, not everything
- take into account error handling
- Looking at the API I will need the following:
    - Image
    - Track to play
    - If it's featured
    - on sale date
    - The date and time of event
    - Event Name
    - Venue name
    - City
    - Country
    - Event Info
    - Lineup
    - Tickets
    - Price of ticket
    - currency
    - event id

2. Rendering the data

- For the image, make it a background image on a div
- Will need to convert the data and time to something readable
- Title is easy, make that a h2
- Subtitle for venue and city location

3. More info

- When user clicks on plus button expands the div to render more information
- that plus button turns to minus
- Notice that if the lineup has a time it's in bold
- Notice that if the ticket is sold out it says it's sold out

4. Book now button

- Make sure to make it a Link, not a button
- If it's not on sale yet show get reminded button
- If it's sold out have disabled sold out button

5. With the price at the bottom notice that the from is rendered only if there's more than one ticket



