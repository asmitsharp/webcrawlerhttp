const { sortPages } = require("./report")

test("sortPages ", () => {
  const input = {
    "https://wagslane.dev/path": 1,
    "https://wagslane.dev": 3,
  }
  const actual = sortPages(input)
  const expected = [
    ["https://wagslane.dev", 3],
    ["https://wagslane.dev/path", 1],
  ]
  expect(actual).toEqual(expected)
})

test("sortPages 6 pages", () => {
  const input = {
    "https://wagslane.dev/path": 1,
    "https://wagslane.dev": 3,
    "https://wagslane.dev/path6": 9,
    "https://wagslane.dev/path21": 4,
    "https://wagslane.dev/path5": 5,
    "https://wagslane.dev/path2": 8,
  }
  const actual = sortPages(input)
  const expected = [
    ["https://wagslane.dev/path6", 9],
    ["https://wagslane.dev/path2", 8],
    ["https://wagslane.dev/path5", 5],
    ["https://wagslane.dev/path21", 4],
    ["https://wagslane.dev", 3],
    ["https://wagslane.dev/path", 1],
  ]
  expect(actual).toEqual(expected)
})
