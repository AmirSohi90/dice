# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Setup`

Please ensure that you set up a .env file in the project root with the environment variable `REACT_APP_API_KEY` with the API you provided. I wasn't sure if it was okay to have on github so I played it safe

### `End Result`

End result functionally does everything that was required. Fetches results based on the venue name and displays the results with the relevant information. I have added some tests but not full coverage just to save on time.

### `Some nice to haves`

Image compression is a must for this, the images are incredibly large and some sort of compression tool would've been handy. I tried to find something for free but was unable to. I changed the image size but as I'm sure you know css doesn't compress the file size. As you scroll through you can see how long it takes to render. This would be poor user experience.

For this task storybook would've been incredibly useful, especially being able to have some mock data and designing the component that rendered an event item. If this was something for production I'd have implemented it.

Not necessarily prod code but a text saying no search results found would be good to have also.