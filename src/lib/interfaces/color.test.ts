import { describe, beforeEach, it, expect } from 'vitest';
import { Color } from './Color';

describe('Color', () => {
	const TEST_R_VALUE = 59;
	const TEST_G_VALUE = 23;
	const TEST_B_VALUE = 232;

	let test_color: Color;

	beforeEach(() => {
		test_color = new Color(TEST_R_VALUE, TEST_G_VALUE, TEST_B_VALUE);
	});

	it('constructs properly', () => {
		test_color = new Color(TEST_R_VALUE, TEST_G_VALUE, TEST_B_VALUE);
		expect(test_color).toBeDefined();
	});

	it('Accesses the r getter properly', () => {
		expect(test_color.getR).toEqual(TEST_R_VALUE);
	});
	it('Accesses the g getter properly', () => {
		expect(test_color.getG).toEqual(TEST_G_VALUE);
	});
	it('Accesses the b getter properly', () => {
		expect(test_color.getB).toEqual(TEST_B_VALUE);
	});

  it("Generates the background classname properly", () => {
    expect(test_color.generateCssBgClassname()).toEqual(`background-color: rgb(${TEST_R_VALUE}, ${TEST_G_VALUE}, ${TEST_B_VALUE})`)
  })

  it("returns the full rgb as a list", () => {
    expect(test_color.getRGBAsList()).toContain(TEST_R_VALUE)
    expect(test_color.getRGBAsList()).toContain(TEST_G_VALUE)
    expect(test_color.getRGBAsList()).toContain(TEST_B_VALUE)
    expect(test_color.getRGBAsList()).toHaveLength(3)
  })
});
