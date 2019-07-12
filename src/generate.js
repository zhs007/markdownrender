const MarkdownIt = require('markdown-it');
const fs = require('fs');

/**
 * generate
 * @param {string} filename - filename
 * @param {string} outputfile - outputfile
 */
function generate(filename, outputfile) {
  const md = new MarkdownIt();

  const data = fs.readFileSync(filename, 'utf-8');
  const result = md.render(data);
  fs.writeFileSync(outputfile, result, 'utf-8');
}

exports.generate = generate;
