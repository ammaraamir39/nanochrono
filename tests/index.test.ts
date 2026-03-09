import { expect, test } from "vitest"
import { formatRelative } from "../src/index.js"

test("should format past time correctly", () => {
  const tenSecondsAgo = Date.now() - 10000
  expect(formatRelative(tenSecondsAgo)).toBe("10 seconds ago")
})

test("should format future time correctly", () => {
  const inOneHour = Date.now() + 60 * 60 * 1000
  expect(formatRelative(inOneHour)).toBe("in 1 hour")
})

test("should support different locales (French)", () => {
  const twoDaysAgo = Date.now() - 2 * 24 * 60 * 60 * 1000
  // Change the expectation to what the browser actually outputs
  expect(formatRelative(twoDaysAgo, "fr")).toBe("avant-hier")
})
