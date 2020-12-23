---
slug: "2020-wrapup"
date: "2020/12/23"
title: "2020 Wrap Up: Should we just forget about this one?"
type: "post"
excerpt: "I review a year's worth of developer progress and look forward to 2021."
---

I don't need to tell you it's been a rough one. For all of us.

But trapped inside all the time has actually been pretty productive in a few ways. I'm going to wrap up here some of the things I got done this year, so hopefully it doesn't looks so bad in perspective.

- _Wrote a CI/CD Pipeline_

  Back in the spring I was looking to improve some processes on Hotjar's Help Centre, and with the help of some SRE colleagues I wrote a CI/CD Pipeline in Gitlab. The pipeline lints the code, compresses it and deploys it through a Node.js file process. Throughout work on the Help Centre we're fighting with our CMS - Zendesk - which has some limitations that a CMS like WordPress wouldn't have.

  For example, we can't just upload a 'theme' from a Git repo. Instead, we have to zip up a theme and send it to an endpoint. I've worked more with Zendesk's various APIs this year than I care to think about. That said, it was a great learning process for me and I feel so much more impowered to take on this kind of challenge, which previously I thought of as "for smart people" like my SRE colleagues.

- _I changed team!_

  Shortly after I implemented the CI/CD Pipeline, we decided that there are many more gains to be made in the Help Center.

  Previous to this we were doing Internal Tools - tools that made it easy for the Support team to debug users' websites. We're seeing that there's far more value in the idea of Self Service. Empowering our users to find their own answers with an easy-to-use Help Center.

  We were seeing that people who found the right article tended not to raise a ticket, but finding the right article could prove to be a challenge.

  Since then, we've improved the User Experience in the Help Center and even included some Vue apps in there. It's great to work on a new product with a new team! And we're nowhere near done. When we start seeing diminishing returns from the Help Center, we can move to the main product. We accept that things won't always work, but hiding it isn't the answer - we can empower our users to solve their own problems through documentation.

- _Started mentoring & teaching_

  In August I applied to be a mentor for [Black Codher](https://blackcodher.com/) - a coding programme for black women that teaches everything from HTML/CSS to React, Node and MongoDB.

  Mentoring has been super rewarding - as someone who loves talking about work, it's great to talk to someone who's just starting out and has the whole world in front of them. I love seeing people's minds blown by CSS that may seem mundane to me. It's easy to forget that what we do is very cool, and introducing more people - especially from under-represented groups - to that is very very exciting.

  As for instructing, I taught 10 sessions on React in the Autumn. It was hard in ways I didn't expect - it was mentally taxing and some times hard to just turn on the Zoom call, but we got through it! It was rough and super basic, but I think the important thing is to just reiterate that the learners can find the answers they're looking for on the internet and that's ok - Google is your best friend. It's true what they say, you really don't know anything until you can teach it to someone else.

  Pandemic notwithstanding, we'd have got together in a room for the sessions, which would have been very cool, and in some ways easier. We made it work though!

Doesn't look so bad after all, right? This list has been pretty cathartic, I'd recommend making such a list to anyone. You too can get a warm fuzzy feeling from looking back at the great things you've done this year, even if it was because there was nothing else happening.
