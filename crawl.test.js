const { normalizeURL } = require("./crawl")

test("normalizeURL strip protocol", () => {
  const input = "https://blog.asmit.dev/path"
  const actual = normalizeURL(input)
  const expected = "blog.asmit.dev/path"

  expect(actual).toEqual(expected)
})

test("normalizeURL strip trailing slash", () => {
  const input = "https://blog.asmit.dev/path/"
  const actual = normalizeURL(input)
  const expected = "blog.asmit.dev/path"

  expect(actual).toEqual(expected)
})

test("normalizeURL capital", () => {
  const input = "https://BLOG.Asmit.dev/path/"
  const actual = normalizeURL(input)
  const expected = "blog.asmit.dev/path"

  expect(actual).toEqual(expected)
})

test("normalizeURL strip another protocol", () => {
  const input = "http://BLOG.Asmit.dev/path/"
  const actual = normalizeURL(input)
  const expected = "blog.asmit.dev/path"

  expect(actual).toEqual(expected)
})
