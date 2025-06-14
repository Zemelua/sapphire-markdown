import { micromark } from 'micromark';
import { describe, expect, it } from "vitest";
import { sapphireHtml } from '../src/html';
import { sapphireSyntax } from '../src/index';

describe("Sapphire syntax Test", () => {
	it("Base syntax", () => {
		const text = "こんにちは、[明日]<<あした>>！";
		const html = micromark(text, {
			extensions: [sapphireSyntax()],
			htmlExtensions: [sapphireHtml()]
		});

		expect(html).toContain("<p>こんにちは、<ruby><rb>明日</rb><rt>あした</rt></ruby>！</p>");
	});

	it("Divided syntax", () => {
		const text = "[水|天|一|碧]<<すい|てん|いっ|ぺき>>";
		const html = micromark(text, {
			extensions: [sapphireSyntax()],
			htmlExtensions: [sapphireHtml()]
		});

		expect(html).toContain("<p><ruby><rb>水</rb><rb>天</rb><rb>一</rb><rb>碧</rb><rt>すい</rt><rt>てん</rt><rt>いっ</rt><rt>ぺき</rt></ruby></p>");
	});

	// TODO: Implement this feature
	it("Skip ruby text syntax", () => {
		const text = "[青天|の|霹靂]<<せいてん||へきれき>>";
		const html = micromark(text, {
			extensions: [sapphireSyntax()],
			htmlExtensions: [sapphireHtml()]
		});

		expect(html).toContain("<p><ruby><rb>青天</rb><rb>の</rb><rb>霹靂</rb><rt>せいてん</rt><rt>の</rt><rt>へきれき</rt></ruby></p>");
	});
});
