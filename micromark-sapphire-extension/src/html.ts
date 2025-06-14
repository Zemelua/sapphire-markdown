import { CompileContext, HtmlExtension, Token } from "micromark-util-types";

export function sapphireHtml(): HtmlExtension {
	return {
		enter: {
			ruby: function (this: CompileContext) {
				this.tag("<ruby>");
			},
			rubyLabelSegment: function (this: CompileContext, token: Token) {
				this.tag("<rb>")
			},
			rubyTextSegment: function (this: CompileContext, token: Token) {
				this.tag("<rt>");
			}
		},
		exit: {
			ruby: function (this: CompileContext, token: Token) {
				this.tag("</ruby>");
			},
			rubyLabelSegment: function (this: CompileContext, token: Token) {
				this.tag("</rb>");
			},
			rubyTextSegment: function (this: CompileContext, token: Token) {
				this.tag("</rt>");
			}
		}
	};
}
