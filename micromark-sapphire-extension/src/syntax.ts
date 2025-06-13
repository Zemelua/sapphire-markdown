import { codes } from "micromark-util-symbol";
import { Code, Effects, Extension, State } from "micromark-util-types";

export function sapphireSyntax(): Extension {
	return {
		text: {
			// '['
			[codes.leftSquareBracket]: {
				tokenize: tokenize
			}
		}
	};
}

function tokenize(effects: Effects, ok: State, nok: State): State {
	return start;

	function start(code: Code): State | undefined {
		if (code !== codes.leftSquareBracket) return nok(code);

		effects.enter("ruby");
		effects.enter("rubyLabel");
		effects.enter("rubyLabelMarker");
		effects.consume(code);
		effects.exit("rubyLabelMarker");
		effects.enter("rubyLabelContent")
		effects.enter("rubyLabelSegment");
		effects.enter("rubyLabelSegmentText", { contentType: "text" });

		return inside;
	}

	function inside(code: Code): State | undefined {
		if (code === codes.verticalBar) {
			effects.exit("rubyLabelSegmentText");
			effects.exit("rubyLabelSegment");
			effects.consume(code);
			effects.enter("rubyLabelSegment");
			effects.enter("rubyLabelSegmentText", { contentType: "text" });

			return inside;
		}

		if (code === codes.rightSquareBracket) {
			effects.exit("rubyLabelSegmentText");
			effects.exit("rubyLabelSegment");
			effects.exit("rubyLabelContent");
			effects.enter("rubyLabelMarker");
			effects.consume(code);
			effects.exit("rubyLabelMarker");
			effects.exit("rubyLabel");

			return textStart;
		}

		if (code === codes.eof) {
			return nok(code);
		}

		effects.consume(code);
		return inside;
	}

	function textStart(code: Code): State | undefined {
		if (code === codes.lessThan) {
			effects.enter("rubyText");
			effects.enter("rubyTextMarker")
			effects.consume(code);

			return textStartSecond;
		}

		return nok(code);
	}

	function textStartSecond(code: Code): State | undefined {
		if (code === codes.lessThan) {
			effects.consume(code);
			effects.exit("rubyTextMarker");
			effects.enter("rubyTextContent");
			effects.enter("rubyTextSegment");
			effects.enter("rubyTextSegmentString", { contentType: "string" });

			return textInside;
		}

		return nok(code);
	}

	function textInside(code: Code): State | undefined {
		if (code === codes.verticalBar) {
			effects.exit("rubyTextSegmentString");
			effects.exit("rubyTextSegment");
			effects.consume(code);
			effects.enter("rubyTextSegment");
			effects.enter("rubyTextSegmentString", { contentType: "string" });

			return textInside;
		}

		if (code === codes.greaterThan) {
			effects.exit("rubyTextSegmentString");
			effects.exit("rubyTextSegment");
			effects.exit("rubyTextContent");
			effects.enter("rubyTextMarker");
			effects.consume(code);

			return textEnd;
		}

		if (code === codes.eof) {
			return nok(code);
		}

		effects.consume(code);
		return textInside;
	}

	function textEnd(code: Code): State | undefined {
		if (code === codes.greaterThan) {
			effects.consume(code);
			effects.exit("rubyTextMarker");
			effects.exit("rubyText");
			effects.exit("ruby");

			return ok(code);
		}

		return nok(code);
	}
}
