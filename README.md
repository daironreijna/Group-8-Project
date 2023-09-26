# <b><i><span style="color:#800020">Project: Landmark Learning Dashboard </span></b></i>


![Project Banner](./assets/images/banner-04.jpg)

![Landmark-Learning-Dashboard](https://img.shields.io/github/languages/top/daironreijna/Landmark-Learning-API) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) ![Landmark-Learning-Dashboard](https://img.shields.io/github/languages/count/daironreijna/Landmark-Learning-API)

## Overview

Welcome to our group project! <b><i><span style="color:#800020">Landmark Learning </span></b></i>  is an Interactive Front-End Application, it's important for us as front-end web developers to be able to showcase our skills and knowledge. 

The project team has used the skills and knowledge acquired during the bootcamp to build this web application from scratch. Our team has conceived and executed a design of a MVP of our project.

<b><i><span style="color:#800020">Landmark Learning </span></b></i> solves a real-world problem by integrating data received from multiple server-side API requests.

In this project several technologies are used to bring a feature rich and exciting web project to life! As a project team we thought about what would be a interesting way to guide users into exploring the world a bit more. After a few [PROJET IDEAS](./assets/PROJECT%20IDEAS.md) were brainstormed, we choose to implement two server side api's. Google's [Aerial View API](https://developers.google.com/maps/documentation/aerial-view) and Wikipedia's [Wikimedia API](https://api.wikimedia.org/wiki/Main_Page) to render a dynamic, responsive and interactive project.

```
USER STORY

As a user interested in exploring landmarks around the world, I want to use the Landmark Learning Dashboard to access information about various landmarks and view aerial videos of these landmarks. This will allow me to expand my knowledge about different places and have a visually engaging experience.

```

## Table of Contents

- [Overview](#overview)
- [Project Objectives](#project-objectives)
- [Deployment](#deployment)
- [Project Features](#project-features)
- [Contributing](#contributing)
- [Resources](#resources)
- [Accessibility Testing](#accessibility-testing)
- [Licence](#license)

### Project Objectives

By the end of this project, we have been be able to:

- Our ability to speak technically about the features that were implemented in our project.
- Explain and execute git branching workflow in a collaborative project.
- Resolve merge conflicts.
- Explain agile software development.
- Design, build, and deploy a client-side web application using GitHub Pages.
- Prepare a professional presentation and repository README for our project.


## Deployment

The Landmark Learning Dashboard Project is deployed at the following live URL:

[Landmark Learning Dashboard](https://daironreijna.github.io/Landmark-Learning-API)

The GitHub repository for this project can be found at:

[GitHub Repository](https://github.com/daironreijna/Landmark-Learning-API)

<br>
<u>In order to use this webapp, you will need to </u>

1. Create your own API key by visiting https://developers.google.com/maps/documentation/aerial-view/get-api-key 
2. Create a config.js file in the asset/js folder
3. Save the API key in the below format

<b>Example:</b> 

````javascript
var config = {
	googleAPIKEY: [YOUR_SECRET_API_KEY_GOES_HERE],
    wikipediaAPIKEY: [YOUR_SECRET_API_KEY_GOES_HERE]
};
````
````javascript
// ===== after placing your API key ===========
var config = {
	googleAPIKEY: "14c5e5e260e3e3432d141deb7d150ec3",
    wikipediaAPIKEY: "eb7d150ec314c5e5e260e3e3432d141d"
};
````

### Project Features
Our project has the following features:

- Application uses at least two server-side APIs.
- Application uses client-side storage to store persistent data.
- Application doesn't use JS alerts, prompts, or confirms (uses modals instead).
- Application uses Bootstrap.
- Application is interactive (accepts and responds to user input).
- Application user experience is intuitive and easy to navigate.
- Application user interface style is clean and polished.
- Application is responsive.
- Uses Bootstrap.
- Be deployed to GitHub Pages.
- Be interactive (in other words, accept and respond to user input).
- Use at least two server-side APIs.
- Use client-side storage to store persistent data.
- Be responsive.
- Have a polished UI.
- Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, and so on).
- Have a quality README (including a unique name, description, technologies used, screenshot, and link to the deployed application).

## <u>Resources</u>

- <i>[DAVE MCKAY (2022) How to Rename a Branch in Git](https://www.howtogeek.com/851425/git-rename-branch/)
- [W3Schools (n.d.) Git Tutorial > Git Branch Merge](https://www.w3schools.com/git/git_branch_merge.asp)
- [Zell Liew (2019) How I style my websites with my favorite CSS resets](  https://www.freecodecamp.org/news/how-i-style-my-websites-with-my-favorite-css-resets-7ace41dbc43d/)
- [edx (2023) Full Stack Blog - server-side APIs](https://coding-boot-camp.github.io/full-stack/apis/api-resources)
- [Bird Call UX (2021) What is UX, UI and Usability?](https://www.birdcallux.com/blog/what-is-ux-ui-and-usability)
- [WikiMedia API Portal (n.d.) Getting Started with Wikimedia APIs](https://api.wikimedia.org/wiki/Getting_started_with_Wikimedia_APIs)
- [Wikimedia (n.d.) API catalog > Browse all Wikimedia APIs.](https://api.wikimedia.org/wiki/API_catalog)
- [ StackOverFlow (2017 updated 2023) Why is .gitignore not ignoring my files? ](https://stackoverflow.com/questions/45400361/why-is-gitignore-not-ignoring-my-files)
- [Tim Wheeler (2018) Wikipedia API Tutorial Here's a crash course on APIs using the Wikipedia API. Get a grasp on how to use APIs for your application.](https://codesnippet.io/wikipedia-api-tutorial/)
- [Wikimedia API portal (2023, June 16th) Core REST API - Discover and interact with free knowledge from across Wikimedia projects.](https://api.wikimedia.org/wiki/Core_REST_API)
- [Google Maps Platform (2023) How does the Aerial View API work?](https://m.youtube.com/watch?v=Yor-AynWN2w)
- [Google Maps Platform (2020) Intro to Google Maps Platform](https://m.youtube.com/watch?v=kA679ERgBV4)
- [Nicole Sauk (2021) How to Get a Google Maps API Key - Quick, Easy, and Free](https://m.youtube.com/watch?v=rREAme4P1u0)
- [Google Maps Platform (2023) Announcing Photorealistic 3D Tiles and the Aerial View API to create immersive map experiences](https://m.youtube.com/watch?v=Yj11hdq2jgA)
- [Google Maps Platform (2023) How to use data-driven, advanced styling capabilities to build immersive geospatial experiences](https://m.youtube.com/watch?v=5dAqwpNJbnw)
- [Net Ninja (2021) Bootstrap 5 Crash Course Tutorial #16 - Modals](https://www.youtube.com/watch?v=tt5uUMQgzl0)
- [Google Maps Platform (2023, 21 Sept) Documentation > Aerial View API overview](https://developers.google.com/maps/documentation/aerial-view/overview)
- [Google Maps Platform (2023) Aerial View API > Lets you create and display aerial view videos rendered using Google's 3D geospatial imagery](https://developers.google.com/maps/documentation/aerial-view/)
- [MDN Web Docs (n.d.) References > Web APIs > Fetch API > Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN Web Docs (n.d.) References > Web APIs > fetch() global function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch)
- [StackTuts (2023) How to use fetch within a for-loop, wait for results and then console.log it in Javascript](https://stacktuts.com/how-to-use-fetch-within-a-for-loop-wait-for-results-and-then-console-log-it-in-javascript)
- [Google Maps Platform (2023) Architecture Center > Visualize the Data > Engage Customers with Aerial View](https://developers.google.com/maps/architecture/engage-customers-with-aerial-view?hl=en)
- [Material Design (n.d.) Choosing buttons](https://m3.material.io/components/all-buttons)
- [Google Maps Platform (2023) Architecture Center > Enhance the accuracy of Address input for Aerial View](https://developers.google.com/maps/architecture/enhance-accuracy-address-aerial-view?hl=en)
- [Google Maps Platform (2023) Best Practices Using Aerial View API Web Services](https://developers.google.com/maps/documentation/aerial-view/web-api-best-practices)
- [Google Maps Platform (2023) API Improvement Proposals > General AIPs  > HTTP and gRPC Transcoding](https://google.aip.dev/127)
- [Matt Brightman (2023) The Aerial View API is now generally available. Google Maps Platform.](https://cloud.google.com/blog/products/maps-platform/aerial-view-api-now-generally-available) 
- [Using the Fetch API with URLSearchParams in JavaScript](https://www.youtube.com/watch?v=BOQ9mmUd3dI)
- [Kris Koishigawa (2020) How to Use HTML to Open a Link in a New Tab](https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/)
</i>


## Contributing 

Coding and design completed by 

<table>
  <tr>
    <td align="center"><a href="https://github.com/daironreijna"><img src="https://avatars.githubusercontent.com/u/140647099?v=4" width="100px;" alt="headshot of Dairon Reijna"/><br /><sub><b>Dairon Reijna</b></sub></a><br /></a><a href="https://github.com/daironreijna/Landmark-Learning-API" title="Design">🎨</a><a href="https://github.com/daironreijna/Landmark-Learning-API" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/kapil319"><img src="https://avatars.githubusercontent.com/u/140269745?v=4" width="100px;" alt="headshot of Kapil Rekhi"/><br /><sub><b>Kapil Rekhi</b></sub></a><br /></a><a href="https://github.com/daironreijna/Landmark-Learning-API" title="Design">🎨</a><a href="https://github.com/daironreijna/Landmark-Learning-API" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/IWAINS23"><img src="https://avatars.githubusercontent.com/u/140549905?v=4" width="100px;" alt="headshot of Ishmam Wains"/><br /><sub><b>Ishmam Wains</b></sub></a><br /></a><a href="https://github.com/daironreijna/Landmark-Learning-API" title="Design">🎨</a><a href="https://github.com/daironreijna/Landmark-Learning-API" title="Code">💻</a></td>
  </tr>
</table>

<br>We welcome contributions from the community to enhance this Portfolio Project. By participating in this project, you contribute to a vibrant and inclusive environment. To ensure a positive experience the code of conduct we will adhere to is based on [The Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md). Please review and follow these guidelines when contributing.

## Accessibility Testing

As leaders in front-end web development we aim to develop websites that are built mobile first, with accessibility in prime focus. Should you have any feedback please let us know. It would also be helpful for users to test our project website for accessibility. For further details please visit this page: [Accessibility Testing and Inclusive Design](./assets/Accessibility%20Testing%20and%20Inclusive%20Design.md).

## License

This project is licensed under a [MIT License](./LICENCE).

---

© 2023 - Kapil Rekhi, Dairon Reijna, Ishmam Wains.