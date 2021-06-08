# The Allente Front-End Challenge

Welcome to the Allente + Diggit Front-end Challenge! 👋, read through the challenge, understand what you need to do, then get coding!

## 🚀 Quickstart

Add link to repo

1. \*\*Clone the repository\*\*

Git clone URL

2. \*\*Inspect design handoff\*\*

Most of what you need to get started is found in the Design Handoff https://xd.adobe.com/view/dcce8486-0f50-4b5b-8cce-0d7b5dc30ea7-899d/

3. \*\*Read this file\*\*

We know you&#39;re eager to get started. Try to read over this file once. It might save you some hassle later on.

## 🎭 The Scenario

Jump into office where Product owner is presenting

&quot;The television market is huge, but the future is questionable and it&#39;s harder than ever to find the right digital provider. The content coming out from Netflix, disney+, HBO is amazing; however, the more streaming providers coming out the harder it is to find the programs available! Where do you go to find shows?&quot;

&quot;For those who watch television, there&#39;s so many providers to choose from, so many great shows exclusive to each one - like Game of Thrones only from HBO or Decoding Bill Gates by Netflix. What if you could get a bundle from all providers based on the shows that you want- without having to WORRY about having 2 or more television providers?? &quot;

Tech Lead turns to you and says &quot;Looks like we&#39;re innovating in this entertainment sector by allowing people personalized tv programs from any provider into only one subscription using a television recommendation system! Have you seen the latest designs yet? Hmm I wonder if we can rely on you to figure out how to build the frontend \*thinking\*&quot;

## 📄 Challenge Description

Your challenge is to create a recommendation web app for TV programs

### Choose - First half of page

This is the first half of the page, **and you don&#39;t have to make all of it** , it&#39;s just here for your background knowledge. Luckily your team-mate is working on this. To give background, this page allows the ML algorithm to be able to get the input of the users desired choices.

![](https://storage.googleapis.com/diggit/challenges/Picture%201.png)

Figure 1: Program provider UI

### Get Recommendations - Bottom of the page

The second half of the page, the carousel, will be the page you will build and present. Based on the users desired choice which was sent to an api, you will create the front end and create the backend API which please provides the data returned by the API&#39;s predicted top recommended shows.

![](https://storage.googleapis.com/diggit/challenges/Picture%202.png)

Figure 2: Catalog

## 🎯 Implementation Requirements

1. Build the front end of the carousel Design. Recommended to use a state management library from React JS. 
2. Use this simple API endpoint as data source: https://stoplight.io/mocks/sci-code/diggit:master/12726515/recommendations. On "GET" request it will retun array of shows for carousel. 

## 🛠️ Tech Stack

Preferred but not a requirement to use React JS - a fast, powerful, flexible and easy to use open source library for building front end components.

CSS: Sass is preferred

## 📋 Evaluation Criteria

### **Frontend Criteria**

#### > *Performance (4 points)*

Performance Task Optimizing- allowing the webapp to load even faster. Examples such as:

- Loading less assets (minimizing asset size)
- Skills within Lazy loading
- Skills within service web workers
- Caching on user machines

#### > *Clear Component Interfaces (6 Points)*

Your component interfaces matter. The names you choose for props, their descriptions and the default values all help to make it easier for other developers to build with your components.

#### > *State management (6 Points)*

State management, skills within utilizing modern practices related to this

#### > *Clean Code (4 points)*

The code should follow a consistent coding style. No specific linting preferences has been defined upfront, but the code should be consistent. E.g. if you use double-quotes, stick with double-quotes. If you use two spaces, stick with two spaces.

#### > *Modern Syntax (2 points)*

Modern syntax is preferred. As an example, using React Hooks is preferable to using class components.

### **Design Criteria**

#### > *Overall Visual Comparison (6 points)*

The running version should look as similar to the design as possible. Multiple iterations have been done on the design side in communication with potential users, so it&#39;s paramount that the end result looks as identical to the design as possible.