import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { describe, expect, it } from "vitest";
import { remarkSapphire } from "../src";

describe("to HTML", () => {
	it("Base syntax", async () => {
		const input = "こんにちは、[明日]<<あした>>！"

		const file = await unified()
			.use(remarkParse)
			.use(remarkSapphire)
			.use(remarkRehype)
			.use(rehypeStringify)
			.process(input);

		expect(file.toString()).toMatch("<p>こんにちは、<ruby><span>明日</span><rt>あした</rt></ruby>！</p>")
	});

	it("Divided syntax", async () => {
		const input = "[水|天|一|碧]<<すい|てん|いっ|ぺき>>"

		const file = await unified()
			.use(remarkParse)
			.use(remarkSapphire)
			.use(remarkRehype)
			.use(rehypeStringify)
			.process(input);

		expect(file.toString()).toMatch("<p><ruby><span>水</span><rt>すい</rt><span>天</span><rt>てん</rt><span>一</span><rt>いっ</rt><span>碧</span><rt>ぺき</rt></ruby></p>")
	});
});
