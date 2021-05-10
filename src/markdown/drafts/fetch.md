---
slug: "intro-to-fetch"
date: ""
title: "Getting started with API Requests"
type: "post"
excerpt: "What is an API? How do I get information from it? What tools can I use to help? I'm going to break down all these questions, and more!"
---
Welcome to TIL Code and today we're learning all about APIs. We're going to break down what they are, what they're for and how we can use them in Web Development.

Maybe you've heard this acronym before, well we're going to find out what it means and how we can use it with JavaScript right in the browser. Let's get started.

## What is an API?

API stands for Application Programming Interface, and what that means in English is a way to get information from a server.

When we ask to get the contents of a website or data from a database, we use an API to ask for that information.

Every API request has two parts, the browser or client sends a 'request' with the information it wants to receive, and the server sends back a 'response' with that information. These words are going to get used a lot!

Here's an example: when you try to go to a website, your browser _requests_ the information from the server, and the server _responds_ with that information if your URL is right and you're connected to the internet. If not, you'll get an error code, which we'll go into later.

For now, let's use an API right now in the browser.

# Making Requests with Fetch

The tool we're going to use to make our requests is called _Fetch_. _Fetch_ is available right in the browser so you can use it in your code and it should 'just work'.

> Quick disclaimer though, Fetch doesn't work on all browsers. Notably older browsers and particularly Internet Explorer don't support fetch, so watch out for that. [Here's a link to the MDN info for Fetch's browser support](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#browser_compatibility).

So how do we use Fetch? Firstly, you can open up the developer console, and type fetch right in there! On this very page, if you like! Try it!

[SCREENSHOT SHOWING FETCH IN THE CONSOLE]

In here I can just execute the `fetch()` function, and it takes only one parameter, which is the URL we fetch from. For this video we're going to use the [Randomfox](https://randomfox.ca/) API to get random links to pictures of foxes. Our full syntax is as follows:

```
fetch('https://randomfox.ca/floof')
```

Did you do it? Didn't work, huh? We're looking at something like this:

[SCREENSHOT SHOWING PROMISE]

This is because Fetch returns a Promise. In another article, I'll explain in more depth, but suffice to say, this means fetch is Promising that when the request is finished, it'll be available. Due to the nature of the request, the information might take some time to return. You might have a slow connection or the API host might be super slow. Either way, it doesn't happen instantly.

Let's look at how we can handle these pesky Promises.

## Promise Chaining

To get the data we need, we have to 'chain' the Promise. There is another way to do this, with async/await, but for now I'm going to focus on chaining.

The syntax here is going to be pretty clear. We want to make this request, then when we recieve the information, we want to do something with it. The keyword in there, is _then_. We're going to use the _then_ function to carry on our code when the fetch is finished.

```
fetch('https://randomfox.ca/floof')
  .then(function (response) {
    console.log(response);
  })
```

Adding this `.then()` function, we can pass another function to tell the code what to do with the response.

> The function could well be an ES6 arrow function too, and it doesn't matter what we call the 'response' argument, as long as it's consistent.

# Request Types

Fetch defaults to GET

CRUD operations

## GET

Read data only

Parameters passed in using query parameters

## POST

Creates data on the server

Parameters passed in the body

More secure over HTTPS

## PATCH

Modifies a resource

## DELETE

Deletes data

Technically, could be done with a post request, but that's bad practice

# Response Codes

Response codes are grouped from 100-500

### 100s - informational, don't see these very much

### 200s - successful responses

200 - Everything's fine

### 300s - Redirection, if a resource has moved it may send a 300 message.

301 - Moved Permanently and comes back with URL

### 400s - Client Error Responses, normally means the request is incorrect.

400 - Bad Request

401 - Unauthorised or not logged in

404 - Not found

### 500s - Server error response

500 - Server error

# WrapUp

If you're looking to try an API I'll leave a link in the description to the public API repo on Github with a huge list of some available APIs in all sorts of categories

# Links

[https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

[https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)