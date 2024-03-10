# Text Editor

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Credits](#credits)

## Description
This project is a progressive web application (PWA) text editor that allows users to create and edit notes or code snippets both online and offline. It utilizes IndexedDB for data persistence and redundancy, ensuring that user content is reliably saved and retrieved even without an internet connection. The application meets the criteria for a PWA, allowing it to be installed and used seamlessly across various devices.

## User Story
```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Acceptance Criteria
The application should meet the following criteria:

- Open the application in an editor and find a client-server folder structure.
- Start the application backend and serve the client by running `npm run start` from the root directory.
- Bundle JavaScript files using webpack.
- Generate HTML file, service worker, and a manifest file using webpack plugins.
- Use next-gen JavaScript while ensuring the text editor functions in the browser without errors.
- Immediately create an IndexedDB database storage upon opening the text editor.
- Automatically save content inside the text editor when the DOM window is unfocused.
- Retrieve saved content from IndexedDB upon reopening the text editor.
- Provide an Install button for downloading the web application as an icon on the desktop.
- Have a registered service worker using Workbox, caching static assets upon loading.
- Deploy the application to Render with proper build scripts for a webpack application.

## Installation
Clone the repository:
git clone https://github.com/OpalSnellneberger/Text-Editor
Install dependencies:
npm install
Run the application:
npm run start

## Usage
- Access the deployed application URL.
- Use the text editor to create and edit notes or code snippets.
- Content will be automatically saved in IndexedDB when the DOM window is unfocused.
- Retrieve saved content from IndexedDB when reopening the text editor.
- Click on the Install button to download the web application as an icon on the desktop.

## Technologies Used
- HTML
- CSS
- JavaScript
- IndexedDB
- Workbox
- Webpack
- Babel
