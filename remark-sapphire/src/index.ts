import { Root } from 'mdast';
import { Extension as FromMarkdownExtension } from 'mdast-util-from-markdown';
import { sapphireMdastFromMarkdown } from "mdast-util-sapphire";
import { sapphireSyntax } from "micromark-sapphire-extension";
import { Extension as MicromarkExtension } from "micromark-util-types";
import { Plugin, Processor } from "unified";

declare module 'unified' {
	interface Data {
		micromarkExtensions?: Array<MicromarkExtension> | undefined
		fromMarkdownExtensions?: Array<FromMarkdownExtension> | undefined;
	}
}

export const remarkSapphire: Plugin<void[], Root> = function (this: Processor) {
	const data = this.data();

	const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);
	const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);

	micromarkExtensions.push(sapphireSyntax());
	fromMarkdownExtensions.push(sapphireMdastFromMarkdown());
}
