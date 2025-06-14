import { PhrasingContent, Ruby, RubyText } from "mdast";
import { Extension, Token } from "mdast-util-from-markdown";

export function sapphireMdastFromMarkdown(): Extension {
	return {
		enter: {
			ruby(token: Token) {
				this.enter({
					type: "ruby", children: [], data: {
						hName: "ruby",
					}
				}, token);
			},
			rubyLabelSegment(token: Token) {
				this.enter({
					type: "rubyLabel", children: [], data: {
						hName: "span"
					}
				}, token);
			},
			rubyTextSegment(_token: Token) {
				this.stack.push({
					type: "rubyText", children: [], data: {
						hName: "rt",
					}
				});
			}
		},
		exit: {
			ruby(token: Token) {
				this.exit(token);
			},
			rubyLabelSegment(token: Token) {
				this.exit(token);
			},
			rubyTextSegment(_token: Token) {
				const text = this.stack.pop() as RubyText;
				const ruby = this.stack[this.stack.length - 1] as Ruby;
				const result: PhrasingContent[] = [];
				let pushed = false;
				for (let i = 0; i < ruby.children.length; i++) {
					result.push(ruby.children[i]);
					if (ruby.children[i].type === "rubyLabel" && (i + 1 >= ruby.children.length || ruby.children[i + 1].type !== "rubyText") && !pushed) {
						result.push(text);
						pushed = true;
					}
				}

				ruby.children = result;
			}
		}
	};
}
