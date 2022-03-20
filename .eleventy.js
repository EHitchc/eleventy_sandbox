module.exports = function (eleventyConfig) {

  const CSS_STYLE_SHEET = "src/style/css/skeleton.css"
  eleventyConfig.addPassthroughCopy({[CSS_STYLE_SHEET]: "static/style.css"})
  eleventyConfig.addWatchTarget(CSS_STYLE_SHEET)

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "liquid"
  };
};