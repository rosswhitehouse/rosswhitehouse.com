---
slug: "nth-child"
date: "2019-12-13"
title: "👪 The Power of Nth Child and All-CSS Dynamic Widths"
type: "post"
excerpt: "Here's an awesome use for CSS nth-child rules that I learned recently."
---

Here's an awesome use for CSS nth-child rules that I learned recently.

Here goes:

On a page there are some buttons.

There might be up to three buttons.

Style appropriately.

## Option One: Javascript

So we count the number of boxes, then add a class such as one-of-three to assign some width-dependent CSS. Something like this:

```javascript
var wrapper = document.getElementById("div.buttonWrap");
var count = wrapper.childElementCount();
wrapper.classList.add("children-" + count);
```

This isn’t bad. Sure, it’ll work, but what if we could remove that JavaScript altogether? What if we can do this with just HTML and CSS?

## A Better Way

Or at least more interesting.

I was hunting around for a better way to do this that didn’t involve going into JS at all, and I found one. [This idea](https://lea.verou.me/2011/01/styling-children-based-on-their-number-with-css3/) from Lea Verou is just what I need, and I’ll try to explain it to you.
To get the ball rolling lets do a little thought experiment.

Something about proportional amounts.

To start with let’s line up our variables. We don’t know how many buttons we have. We do know how much space we have and we also know that if we have three buttons we want them to be a third each, halves for two, and one button would be full-width. Now removing JS means we encounter an issue: CSS can’t count. Or at least it can’t tell us. We can’t say tell us how many there are and if there’s three, do something.

But CSS can (and will) tell us some things about the position of individuals. We can specifically target:

- `first-child` – the first one
- `last-child` – the last one
- `nth-child` – the nth one. You can also substitute n for an equation to get every one after the second (`n + 3`), every second one (`2n`) the even ones (`even`) and odd ones.
- `nth-last-child(n)` – now this one is interesting. This pseudo selector gets the nth from last. So if `n = 2`, that’s the second to last. This can help us in our situation.

> NB. There are more of these. [CSS tricks has a great reference](https://css-tricks.com/useful-nth-child-recipies/). With pictures!

Let’s say we have just the one button. In this case this button is both the first and the last. We can target that example.

```css
.button:first-child:last-child {
  width: 100%;
}
```

It’s the first child, and it’s the last child. So it’s targeted!

Now is the clever bit, using that `nth-last-child` selector we looked at. Let’s say there’s two now. The first one is `first-child`, and the last one is `last-child`. But that first one is now also `nth-last-child(2)`. this way, without CSS telling us there’s two buttons, we can target the first button only when there are two buttons. Any more or less than that, our CSS won’t apply.

```css
// When there's two boxes, the first one is the second-from-last
.button:first-child:nth-last-child(2) {
  width: 50%;
}
// When there's three, the first is third-from-last
.button:first-child:nth-last-child(3) {
  width: 33.33%;
}
```

Similarly, if we have three, the first-child will be the `nth-last-child(3)` as well, so we can target that.

Then we just need to target the other buttons to make them the same size too. Luckily we have our trusty `~` selector, which selects all siblings of an element of a given element type, like this:

```css
// When there's two boxes, the first one is the second-from-last
.button:first-child:nth-last-child(2),
.button:first-child:nth-last-child(2) ~ .box {
  width: 50%;
}
// When there's three, the first is third-from-last
.button:first-child:nth-last-child(3),
.button:first-child:nth-last-child(3) ~ .box {
  width: 33.33%;
}
```

And that’s it! It’s a handy little CSS solution for a JavaScript problem. And no, this wouldn’t be many good for more than a possible three buttons because you’d have to write lots of repetitive CSS. And the JavaScript impact is pretty small. This is just a neat CSS-nerd trick I found, and I love it.

<div>
  <p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rossdw" data-slug-hash="ppvwzN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="All-CSS Widths depending on div quantity">
    <span>See the Pen <a href="https://codepen.io/rossdw/pen/ppvwzN">
    All-CSS Widths depending on div quantity</a> by Ross Whitehouse (<a href="https://codepen.io/rossdw">@rossdw</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
  </p>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>

## Bonus Ball

Nowadays with CSS variables and modern techniques there might be a way to look over that first selector with numbers 1–3. If there is drop me a comment! If there’s an even better way, or you just prefer the JavaScript way I’d like to hear about that too. Is this unnecessarily complicated for the real world or is it one step away from being useful? Let me know!
