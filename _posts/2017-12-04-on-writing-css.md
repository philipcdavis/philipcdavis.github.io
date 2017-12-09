---
layout: post
title:  On Writing CSS
---

# On Writing CSS
A good styling system will depend on the team and project that uses it. A lone ranger may need a different system than a team of 20. Designers who are heavily involved in developing the front end may decide on a much smaller library of components.

After experimenting with css systems using vanilla css, sass, postcss, css-components, and CSS in JS solutions I figured I would some thoughts on the type of CSS that I like to write and use.

## Boring
I'm done with the clever, give me boring CSS.
I'm not against all modern features, but I'm wary of highly engineered systems. Styles don’t need to be complex.

## Flat
CSS is hard enough to wrangle in one dimension. I stay away from nesting with the exception of pseudo classes, elements selectors, and markup you don't have access to.

## Isolated
Using react changed my views about organizing CSS files.
I used to have two types of CSS files. Pages and components. CSS Components would be reused, pages wouldn't. Using react convinced me that the purpose of components wasn't reusability. It was about isolation.

Now, I have one type of CSS file: a component. The files can be grouped by folders to match the app structure, but that's all it is.

The benefits of isolation is that it enables you to kill the global scope. CSS's global nature is something you need to deal with. There are lots of different workable ways of doing this. If you're using a CSS in JS solution, you're done. If you aren't, scoping your variables can be accomplished through BEM and utility classes.

## Functional
One of the nice things about CSS libraries like Tachyons & BassCSS is that they've shown you can build most things my composing small utility styles together. These libraries won't give you everything you need when writing CSS for complex web applications, but using a set of utility classes can go a long way in reducing the amount of CSS you need to write.

<hr>

There isn't one right way of writing CSS. A lot depends on the team that's using it. Conventions and libraries have made styling web applications much easier. I know it’s not perfect, but CSS solutions aren’t the dumpster fire that they are made out to be. As for me, I haven’t lost sleep over a css codebase the past few years. I’ve got a system that works which is good enough for me.
