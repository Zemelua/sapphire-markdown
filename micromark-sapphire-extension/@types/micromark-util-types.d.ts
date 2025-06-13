export {};

declare module "micromark-util-types" {
	interface TokenTypeMap {
		ruby: "ruby";
		rubyLabel: "rubyLabel";
		rubyLabelMarker: "rubyLabelMarker";
		rubyLabelContent: "rubyLabelContent";
		rubyLabelSegment: "rubyLabelSegment";
		rubyLabelSegmentText: "rubyLabelSegmentText";
		rubyText: "rubyText";
		rubyTextMarker: "rubyTextMarker";
		rubyTextContent: "rubyTextContent";
		rubyTextSegment: "rubyTextSegment";
		rubyTextSegmentString: "rubyTextSegmentString";
	}
}
