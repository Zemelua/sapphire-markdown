# 💎 mdast-util-sapphire

mdast extension to support 💎 Sapphire Markdown syntax.\
Please refer to [here](https://github.com/Zemelua/sapphire-markdown) for the syntax and other details of 💎 Sapphire Markdown.


## Install

```sh
npm install mdast-util-sapphire
```

## Usage

### Markdown ➡️ MDAST

```ts
import { fromMarkdown } from "mdast-util-from-markdown";
import { sapphireSyntax } from "micromark-sapphire-extension";
import { sapphireMdastFromMarkdown } from "mdast-util-sapphire";

const input = "[花|緑|青]<<はな|ろく|しょう>>";
const tree = fromMarkdown(input, {
  extensions: [sapphireSyntax()],
  mdastExtensions: [sapphireMdastFromMarkdown()],
});

console.log(JSON.stringify(tree, null, 2));
```

generates:

```json
{
  "type": "root",
  "children": [
    {
      "type": "paragraph",
      "children": [
        {
          "type": "ruby",
          "children": [
            {
              "type": "rubyLabel",
              "children": [
                {
                  "type": "text",
                  "value": "花",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 2,
                      "offset": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 3,
                      "offset": 2
                    }
                  }
                }
              ],
              "data": {
                "hName": "span"
              },
              "position": {
                "start": {
                  "line": 1,
                  "column": 2,
                  "offset": 1
                },
                "end": {
                  "line": 1,
                  "column": 3,
                  "offset": 2
                }
              }
            },
            {
              "type": "rubyText",
              "children": [
                {
                  "type": "text",
                  "value": "はな",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 10,
                      "offset": 9
                    },
                    "end": {
                      "line": 1,
                      "column": 12,
                      "offset": 11
                    }
                  }
                }
              ],
              "data": {
                "hName": "rt"
              }
            },
            {
              "type": "rubyLabel",
              "children": [
                {
                  "type": "text",
                  "value": "緑",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 4,
                      "offset": 3
                    },
                    "end": {
                      "line": 1,
                      "column": 5,
                      "offset": 4
                    }
                  }
                }
              ],
              "data": {
                "hName": "span"
              },
              "position": {
                "start": {
                  "line": 1,
                  "column": 4,
                  "offset": 3
                },
                "end": {
                  "line": 1,
                  "column": 5,
                  "offset": 4
                }
              }
            },
            {
              "type": "rubyText",
              "children": [
                {
                  "type": "text",
                  "value": "ろく",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 13,
                      "offset": 12
                    },
                    "end": {
                      "line": 1,
                      "column": 15,
                      "offset": 14
                    }
                  }
                }
              ],
              "data": {
                "hName": "rt"
              }
            },
            {
              "type": "rubyLabel",
              "children": [
                {
                  "type": "text",
                  "value": "青",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 6,
                      "offset": 5
                    },
                    "end": {
                      "line": 1,
                      "column": 7,
                      "offset": 6
                    }
                  }
                }
              ],
              "data": {
                "hName": "span"
              },
              "position": {
                "start": {
                  "line": 1,
                  "column": 6,
                  "offset": 5
                },
                "end": {
                  "line": 1,
                  "column": 7,
                  "offset": 6
                }
              }
            },
            {
              "type": "rubyText",
              "children": [
                {
                  "type": "text",
                  "value": "しょう",
                  "position": {
                    "start": {
                      "line": 1,
                      "column": 16,
                      "offset": 15
                    },
                    "end": {
                      "line": 1,
                      "column": 19,
                      "offset": 18
                    }
                  }
                }
              ],
              "data": {
                "hName": "rt"
              }
            }
          ],
          "data": {
            "hName": "ruby"
          },
          "position": {
            "start": {
              "line": 1,
              "column": 1,
              "offset": 0
            },
            "end": {
              "line": 1,
              "column": 21,
              "offset": 20
            }
          }
        }
      ],
      "position": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 21,
          "offset": 20
        }
      }
    }
  ],
  "position": {
    "start": {
      "line": 1,
      "column": 1,
      "offset": 0
    },
    "end": {
      "line": 1,
      "column": 21,
      "offset": 20
    }
  }
}
```
