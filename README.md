# Tech-Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This tech blog is a web application built using Node.js, Express.js, Sequelize, and Handlebars.js. It allows users to create, read, update, and delete blog posts. The application also supports user authentication, session management, and comment functionality. The blog is styled using Bootstrap for a responsive design.

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)
- [Acknowledgments](#Acknowledgments)

# Overview

## The Challenge:
Create a website that lets users post articles, edit posts, add comments, and delete content.

## User Story
```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria
```md
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
Mock-Up
```

## Usage Instructions:
Visit the homepage. To get started, "Login" or "Sign Up" for an account if you don't already have one.

**Option A: Account Login**
1. Click on "Login" in the navigation menu.
2. Enter your Username and Password.
3. Click "Sign In" to proceed.

**Option B: Account Sign Up**
1. Click on "Sign Up" in the navigation menu.
2. Enter your Username, Email, and Password.
3. Click "Sign Up" to proceed.

Once you have an account, you can create blog posts and comment on other users' posts.

**Create a Blog Post**
1. Click on "Dashboard" in the navigation menu.
2. Select "Create a New Blog Post."
3. Enter a title and content for your Chess Blog Contribution.
4. Click "Create Post" to save and publish.

**View Existing Blog Posts**
- Click on "Home" in the navigation menu to view existing blog posts.

**Comment on a Blog Post**
1. Go to any blog post.
2. Click on the post to open it.
3. View the comment history or add a new comment.

**Edit or Delete Your Blog Post**
1. Click on "Dashboard" in the navigation menu.
2. Select the post you wish to edit or delete.

**Account Logout**
- Click on "Logout" in the navigation menu.

## Deployed Application Link:
https://murmuring-savannah-96032-f725ef32afe1.herokuapp.com/

## GitHub Repository:
https://github.com/via-skillings/Tech-Blog

## YouTube Walkthrough Video:
https://www.youtube.com/watch?v=oEx91n1NSMU

## Installation Process:
**Clone the Repository from GitHub**
1. Clone the repository from GitHub, or download the zip folder from the repository.
2. Open the cloned or downloaded repository in any source code editor.

## Built With:
Saiyan Pride
JSON
Dynamic JavaScript
Node.js Version 16.18.1
Express.js
Bcryptjs
Sequelize
Dotenv
Express
Express Handlebars
Express-Session
Handlebars.js
Node MySql2
Visual Studio Code: Website

## What I Learned:
- Implementing the Model-View-Controller (MVC) architecture.
- Creating and interacting with a MySQL database using the Sequelize ORM.
- Creating and using Express.js servers and routes.
- Using Handlebars.js to create and display dynamic templates.
- Implementing user authentication and password hashing with bcrypt.
- Using Bootstrap for styling and layout.

## Continued Development:
I will stylize the webpage more and add a way for users to inport photos/videos.

## License & Copyright ©
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

### Copyright © 2023 Olivia Skillings
```md
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Author

Follow me on Github at [Olivia Skillings](https://github.com/via-skillings)! Additional questions or concerns? feel free to contact me at viaskillings@gmail.com.