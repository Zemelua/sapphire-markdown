# 💎 remark-sapphire

remark plugin to support 💎 Sapphire Markdown syntax.\
Please refer to [here](https://github.com/Zemelua/sapphire-markdown) for the syntax and other details of 💎 Sapphire Markdown.

## Install

```sh
npm install remark-sapphire
```

## Usage

```ts
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { remarkSapphire } from "remark-sapphire";

const input = "[花|緑|青]<<はな|ろく|しょう>>";
const file = await unified()
  .use(remarkParse)
  .use(remarkSapphire)
  .use(remarkRehype)
  .use(rehypeStringify)
  .process(input);

console.log(file);
```

generates:

```html
<p>
  <ruby>
    <span>花</span><rt>はな</rt>
	<span>緑</span><rt>ろく</rt>
	<span>青</span><rt>しょう</rt>
  </ruby>
</p>
```
