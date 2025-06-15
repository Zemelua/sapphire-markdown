# 💎 Sapphire Markdown

Custom syntax and tooling for writing ruby (furigana) annotations in Markdown.

## Syntax

### Basic Notation

You can write ruby annotations using the following format:

```markdown
[蒼玉]<<サファイア>>
```

Depending on the implementation, this will typically be rendered as:
<ruby> 蒼玉 <rt> サファイア </rt> </ruby>

The text enclosed in `[` `]` is the base text, and the text enclosed in `<<` `>>` is the ruby (reading).\
The ruby delimiters `<<` and `>>` are double less-than and greater-than signs (`U+003C`, `U+003E`).\
Traditionally, in Japanese environments, double corner brackets like `《` `》` have been used to indicate ruby (e.g., [Aozora Bunko ↗](https://www.aozora.gr.jp/aozora-manual/index-input.html#markup)).\
In 💎 Sapphire Markdown, we use more common and accessible ASCII symbols (`<<` `>>`) for ease of typing and better compatibility.

### Split Notation

To add ruby readings to individual characters or segments, you can split the text as follows:

```markdown
[水|天|一|碧]<<すい|てん|いっ|ぺき>>
```

The base text and ruby text must be split into the same number of segments.\
This is equivalent to:

```markdown
[水]<<すい>> [天]<<てん>> [一]<<いっ>> [碧]<<ぺき>>
```

### Skipping Ruby in Split Notation

> [!CAUTION]
> This feature is currently not implemented. It is planned for a future release.

In split notation, you can skip ruby for certain parts by leaving the corresponding ruby segment empty. For example:

```markdown
[青天|の|霹靂]<<せいてん||へきれき>>
```

Here, no ruby is applied to the second base segment "の".
This is equivalent to:

```markdown
[青天]<<せいてん>> の [霹靂]<<へきれき>>
```

### Others

You can include inline elements such as emphasis or inline code inside the base text:

```markdown
[*青色発光*]<<あおいろはっこう>>ダイオード
[**未開拓**市場]<<ブルーオーシャン>>
[`const blue = "#1A4472"`]<<アントワープブルー>>
```

## Structure

This repository includes the following extensions for the micromark / remark ecosystem:

- [micromark-sapphire-extension](/micromark-sapphire-extension)\
  An extension for Micromark that tokenizes the ruby syntax in Markdown.

- [mdast-util-sapphire](/mdast-util-sapphire)\
  A utility that converts Micromark output into mdast (Markdown Abstract Syntax Tree) nodes.

- [remark-sapphire](/remark-sapphire)\
  A plugin for Remark that processes the ruby syntax and reflects it in the HTML or other output.
