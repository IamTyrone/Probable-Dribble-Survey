# Overview

The survey taker arrives at this application if they opt to take the survey. Located in the url is a queryp arameter, carrying the url of the website being reviewed.

The User enters their score on each question. When they are done, they click the done button. The application then first makes a request to the backend to create a questionnaire with the
url in the query parameter. Should that post request to create the questionnaire succeed, we then loop through all the answers given by the user, each instance in the loop creating a post request
and creating an answer record to the questionnaire untill all questions are answered.


After that, they are moved to a page where they can enter an explicit suggestion for how the institution can have their website look better for readers.

At this point, the survey will be complete.


## Available Scripts

In the project directory, you can run:


### `npm install`

Installs all dependencies in the package.json file.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
