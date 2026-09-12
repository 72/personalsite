/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const Parser = require("rss-parser")

const SUBSTACK_FEED_URL = "https://72mena.substack.com/feed"

// Declared explicitly so the `allSubstackPost` query still resolves (to an
// empty list) even if the feed fetch below fails and creates zero nodes.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type SubstackPost implements Node {
      title: String
      link: String
      isoDate: Date
    }
  `)
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  const parser = new Parser()

  let feed
  try {
    feed = await parser.parseURL(SUBSTACK_FEED_URL)
  } catch (error) {
    console.warn(
      `Could not fetch Substack feed (${SUBSTACK_FEED_URL}), skipping. Error: ${error.message}`
    )
    return
  }

  feed.items.forEach(item => {
    const nodeContent = {
      title: item.title,
      link: item.link,
      isoDate: item.isoDate || item.pubDate,
    }

    createNode({
      ...nodeContent,
      id: createNodeId(`SubstackPost-${item.link}`),
      parent: null,
      children: [],
      internal: {
        type: "SubstackPost",
        content: JSON.stringify(nodeContent),
        contentDigest: createContentDigest(nodeContent),
      },
    })
  })
}
