const { normalizeURL, getURLsFromHTML } = require("./crawl")

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

test("getURLsFromHTML", () => {
  const input = `
    <html>
        <body>
            <a href="https://blog.asmit.dev/path">
            </a>
        </body>
    </html>
    `
  const inputBaseURL = "https://blog.asmit.dev"
  const actual = getURLsFromHTML(input)
  const expected = ["https://blog.asmit.dev/path"]
  expect(actual).toEqual(expected)
})

test("getURLsFromHTML relative", () => {
  const input = `
      <html>
          <body>
              <a href="/path/">
              </a>
          </body>
      </html>
      `
  const inputBaseURL = "https://blog.asmit.dev"
  const actual = getURLsFromHTML(input, inputBaseURL)
  const expected = ["https://blog.asmit.dev/path/"]
  expect(actual).toEqual(expected)
})

test("getURLsFromHTML relative and absolute", () => {
  const input = `
        <html>
            <body>
                <a href="https://blog.asmit.dev/path1">
                </a>
                <a href="/path2">
                </a>
            </body>
        </html>
        `
  const inputBaseURL = "https://blog.asmit.dev"
  const actual = getURLsFromHTML(input, inputBaseURL)
  const expected = [
    "https://blog.asmit.dev/path1",
    "https://blog.asmit.dev/path2",
  ]
  expect(actual).toEqual(expected)
})

test("getURLsFromHTML invalid", () => {
  const input = `
        <html>
            <body>
                <a href="invalid">
                </a>
            </body>
        </html>
        `
  const inputBaseURL = "https://blog.asmit.dev"
  const actual = getURLsFromHTML(input, inputBaseURL)
  const expected = []
  expect(actual).toEqual(expected)
})
