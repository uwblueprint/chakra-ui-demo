# Chakra UI Demo

This is a showcase of using the [Chakra UI](https://chakra-ui.com/) component library.

## Why ChakraUI?

Material UI or Bootstrap have long been the go-to for bootstrapping a frontend, but (in my opinion), these libraries are outdated and have a heavy, cumbersome API. Here are some reasons to use Chakra:

### Simple, unopinionated components

- It's a component library so you get your typical components like `Container` and `Button` out of the box, but you also get more advanced components like `Modals`, `Toasts`, `Tooltips` and more out of the box!
- It's unopinionated, so you don't get intrusive styling that's impossible to remove... _cough Material UI cough_
- Places a huge emphasis on simple, easy-to-use component API

### It's also a styling system

Perhaps the best part of Chakra is that it's also a styling system. It makes it incredibly easy to style your components according to a design system — check out the two themes I've implemented in the demo! With just a few lines of code, you can theme your entire application's color, border outlines, hover effects, etc. No need for overriding css variables, nesting CSS classes, CSS mixins, or any of that!

If you don't like CSS (I mean, who does?), you'll love Chakra. You might notice there's not a single line of CSS in this demo app. No "JSS" either.

### Fantastic documentation

Fast with tons of examples and inline editing of code samples! Try it for yourself: https://chakra-ui.com/

> _If only these docs were even half as good as Chakra's docs..._
>
> — A BP developer after trying to read documentation after using Chakra

### Accessible

Chakra strictly follows WAI-ARIA standards for all components. You don't need to remember to add `aria` tags everywhere, and the Chakra docs also include sections on accessibility for all relevant components. This is a big benefit of using a component library over a CSS library like `Tailwind` or `Bulma`.

### Modern

- It's written in TypeScript, so you get great IntelliSense
- Has dark mode support out of the box
- It uses `hooks` and `ContextProviders` instead of `HOCs`.
- Complies with `React.StrictMode`
- Works out of the box with server-side rendering (SSR) like `NextJS`, no special tricks needed to "rehydrate" the stylesheet.

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can run `yarn start` to run the app in development mode, as well as all the other CRA commands.

## Bootstrapping a new Chakra app

You can check out https://chakra-ui.com/docs/getting-started. They offer a `Create React App` template!

## Examples

Well, this repo is a great example. [Building Up](https://github.com/uwblueprint/building-up-client) was built on Chakra (not a single line of CSS to be found in here!)
