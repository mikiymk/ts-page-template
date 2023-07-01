import { test, expect } from "vitest";

import { add } from "./add";

test("add 1 and 2", () => {
	const actual = add(1, 2);
	const expected = 3;

	expect(actual).toBe(expected);
});
