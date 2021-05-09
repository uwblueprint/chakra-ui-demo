# Chakra UI Demo

This is a showcase of using the [Chakra UI](https://chakra-ui.com/) component library.

**[Watch a 1 min video demo][loom]**

**[Try out the interactive CodeSandbox][codesandbox]**

## Why Chakra UI?

`Material UI` or `Bootstrap` have long been the go-to for bootstrapping a frontend, but (in my opinion), these libraries are outdated and have a heavy, cumbersome API. Here are some reasons to use Chakra:

### Simple, unopinionated components

- It's a component library so you get your typical components like `Container` and `Button` out of the box, but you also get more advanced components like `Modals`, `Toasts`, `Tooltips` and more out of the box!
- The components are simple & unopinionated, so you don't get intrusive styling that's impossible to remove... _cough Material UI cough_
- Chakra places a huge emphasis on a simple, easy-to-use component API

### It's also a styling and theming system - no more CSS

Perhaps the best part of Chakra is that it's also a styling and theming system. It makes it _incredibly easy_ to theme your app according to a design system — check out the two themes I've implemented in the demo! With just a few lines of code, you can theme your entire application's color, border outlines, hover effects, typography, etc.

You can easily override styles for individual components using what they call _style props_. No need for overriding css variables, nesting CSS classes, CSS mixins, or any of that!

If you don't like CSS (I mean, who does?), try this out! It's really cool — you might notice there's not a single line of CSS in this demo app. No "JSS" either.

### Fantastic documentation

Fast with tons of examples and inline editing of code samples! Try it for yourself: https://chakra-ui.com/

> _If only these docs were even half as good as Chakra's docs..._
>
> — A BP developer after trying to read documentation of other libraries after using Chakra

### Accessible

Chakra strictly follows WAI-ARIA standards for all components. You don't need to remember to add `aria` tags everywhere, and the Chakra docs also include sections on accessibility for all relevant components. This is a big benefit of using a component library over a CSS library like `Bootstrap`, `Tailwind`, or `Bulma`.

### Modern and built for React

- It's written in TypeScript, so you get great IntelliSense
- Has dark mode support out of the box
- It uses `hooks` and `ContextProviders` instead of `HOCs`.
- Complies with `React.StrictMode`
- Works out of the box with server-side rendering (SSR) like `NextJS`, no special tricks needed to "rehydrate" the stylesheet.
- It's made specifically for React, which we <3 at BP

## Bootstrapping a new Chakra app

You can check out https://chakra-ui.com/docs/getting-started. They offer a `Create React App` template!

- New project: `yarn create react-app my-app --template @chakra-ui/typescript`
- BP starter code: I haven't gotten around to adding it to BP's starter code yet, but that should be very straightforward to do! Something like `yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4` and just start using Chakra!

In terms of learning Chakra, their docs have amazing examples that you can edit inline. Another great way to learn Chakra is their official CodeSandbox template: just search for Chakra UI on CodeSandbox! Finally, you can try out https://openchakra.app/, which many of our devs found useful at times.

## Examples

The BP project [Building Up](https://github.com/uwblueprint/building-up-client) was built on Chakra (not a single line of CSS to be found in here!). Check out the repo if you're interested! Our devs all really enjoyed using Chakra, especially compared to previous libraries they've used like Material UI.

[codesandbox]: https://codesandbox.io/s/bp-chakra-ui-demo-j7o2z?file=/src/App.tsx
[loom]: todo
