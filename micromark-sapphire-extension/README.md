# 💎 micromark-sapphire-extension

micromark extension to support 💎 Sapphire Markdown syntax.\
Please refer to [here](https://github.com/Zemelua/sapphire-markdown) for the syntax and other details of 💎 Sapphire Markdown.

## Install

```sh
npm install micromark-sapphire-extension
```

## Usage

```ts
import { micromark } from "micromark";
import { sapphireSyntax, sapphireHtml } from "micromark-sapphire-extension";

const input = "[花|緑|青]<<はな|ろく|しょう>>";
const html = micromark(input, {
  extensions: [sapphireSyntax()],
  htmlExtensions: [sapphireHtml()],
});
```

generates:

```html
<p>
  <ruby>
    <rb>花</rb><rb>緑</rb><rb>青</rb> <rt>はな</rt><rt>ろく</rt><rt>しょう</rt>
  </ruby>
</p>
```
