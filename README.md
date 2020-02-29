# Sitecore Meetup Website

![Hackathon Logo](documentation/images/hackathon.png?raw=true "Hackathon Logo")

This was a submission for Sitecore Hackathon 2020, created by Sitecore Technology MVPs Tony Mamedbekov and Dylan Young.

## About

Our website is developed in JSS to provide headless content data from the Sitecore Experience Platform.  We have several customizations to the OOTB behavior to handle a custom identity provider and to work

## Documentation

To learn more about the module and it's purposes, refer to the [Documentation](/documentation/README.md).

## Developer Setup

There are two ways to use this website.  First you can download the latest package and install in a fresh Sitecore instance.  Or if you plan to extend this website and/or add contributions to the solution, you can clone the repository locally and update npm packages:

```
  c:\> git clone https://github.com/Sitecore-Hackathon/2020-Sitecore-Lunatics.git

  c:\> cd 2020-Sitecore-Lunatics

  c:\2020-Sitecore-Lunatics> npm install
```
*Location of your Directory may vary*

Once you are done, you can open either open up the Sitecore Visual Studio solution and work on backend changes, or use Visual Studio Code (or a similar editor) in `.\src\Project\SitecoreMeetup\app` and start working on the React application that drives the website.

### Sitecore Docker Environment

To get started with the Sitecore environment, the development environment of this module utilizes the [Sitecore Docker Images](https://github.com/Sitecore/docker-images).  You will need to ensure you've installed JSS and 9.3 Docker images before you run the next set of commands.

```
  c:\2020-Sitecore-Lunatics> docker-compose up -d
```
*This is all that should be needed, just make sure you are in the root of the site, have the correct Sitecore docker images created*

