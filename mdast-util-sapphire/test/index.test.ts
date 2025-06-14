import { fromMarkdown } from "mdast-util-from-markdown";
import { sapphireSyntax } from "micromark-sapphire-extension";
import { describe, expect, it } from "vitest";
import { sapphireMdastFromMarkdown } from "../src/index";

describe('first', () => {
	it("Base syntax", () => {
		const input = "こんにちは、[明日]<<あした>>！";
		const tree = fromMarkdown(input, {
			extensions: [sapphireSyntax()],
			mdastExtensions: [sapphireMdastFromMarkdown()],
		});

		expect(tree).toEqual(expect.objectContaining({
			type: "root",
			children: [
				expect.objectContaining({
					type: "paragraph",
					children: [
						expect.objectContaining({
							type: "text",
							value: "こんにちは、"
						}),
						expect.objectContaining({
							type: "ruby",
							children: [
								expect.objectContaining({
									type: "rubyLabel",
									children: [
										expect.objectContaining({
											type: "text",
											value: "明日"
										})
									],
									data: {
										hName: "span"
									}
								}),
								expect.objectContaining({
									type: "rubyText",
									children: [
										expect.objectContaining({
											type: "text",
											value: "あした"
										})
									],
									data: {
										hName: "rt"
									}
								})
							],
							data: {
								hName: "ruby"
							}
						}),
						expect.objectContaining({
							type: "text",
							value: "！"
						})
					]
				})
			]
		}));
	});

	it("Divided syntax", () => {
		const input = "[水|天|一|碧]<<すい|てん|いっ|ぺき>>";
		const tree = fromMarkdown(input, {
			extensions: [sapphireSyntax()],
			mdastExtensions: [sapphireMdastFromMarkdown()],
		});

		expect(tree).toEqual(expect.objectContaining({
			type: "root",
			children: [
				expect.objectContaining({
					type: "paragraph",
					children: [
						expect.objectContaining({
							type: "ruby",
							children: [
								expect.objectContaining({
									type: "rubyLabel",
									children: [
										expect.objectContaining({
											type: "text",
											value: "水"
										})
									],
									data: {
										hName: "span"
									}
								}),
								expect.objectContaining({
									type: "rubyText",
									children: [
										expect.objectContaining({
											type: "text",
											value: "すい"
										})
									],
									data: {
										hName: "rt"
									}
								}),
								expect.objectContaining({
									type: "rubyLabel",
									children: [
										expect.objectContaining({
											type: "text",
											value: "天"
										})
									],
									data: {
										hName: "span"
									}
								}),
								expect.objectContaining({
									type: "rubyText",
									children: [
										expect.objectContaining({
											type: "text",
											value: "てん"
										})
									],
									data: {
										hName: "rt"
									}
								}),
								expect.objectContaining({
									type: "rubyLabel",
									children: [
										expect.objectContaining({
											type: "text",
											value: "一"
										})
									],
									data: {
										hName: "span"
									}
								}),
								expect.objectContaining({
									type: "rubyText",
									children: [
										expect.objectContaining({
											type: "text",
											value: "いっ"
										})
									],
									data: {
										hName: "rt"
									}
								}),
								expect.objectContaining({
									type: "rubyLabel",
									children: [
										expect.objectContaining({
											type: "text",
											value: "碧"
										})
									],
									data: {
										hName: "span"
									}
								}),
								expect.objectContaining({
									type: "rubyText",
									children: [
										expect.objectContaining({
											type: "text",
											value: "ぺき"
										})
									],
									data: {
										hName: "rt"
									}
								})
							],
							data: {
								hName: "ruby"
							}
						})
					]
				})
			]
		}));
	});
});
