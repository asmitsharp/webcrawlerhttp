const { crawlPage } = require("./crawl")
const { printsReport } = require("./report")

async function main() {
  if (process.argv.length < 3) {
    console.log("no website provided")
    process.exit(1)
  }
  if (process.argv.length > 3) {
    console.log("too many command line arguments")
    process.exit(1)
  }

  const baseUrl = process.argv[2]
  console.log(`starting crawl of ${baseUrl}`)
  const pages = await crawlPage(baseUrl, baseUrl, {})

  printsReport(pages)
}

main()
