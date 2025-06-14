export {};

declare module "mdast" {
	interface Ruby extends Parent {
		type: "ruby";
		children: Array<PhrasingContent>;
	}

	interface RubyLabel extends Parent {
		type: "rubyLabel";
		children: Array<PhrasingContent>;
	}

	interface RubyText extends Parent {
		type: "rubyText";
		children: Array<PhrasingContent>;
	}

	interface RootContentMap {
		ruby: Ruby;
		rubyLabel: RubyLabel;
		rubyText: RubyText;
	}

	interface PhrasingContentMap {
		ruby: Ruby;
		rubyLabel: RubyLabel;
		rubyText: RubyText;
	}
}
