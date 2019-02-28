const Bundler = require("parcel-bundler");
const { join } = require("path");
const config = require("./config");
const program = require("commander");
const { writeFileSync } = require("fs");

program.option("-c, --challenge <challenge>", "Challenge").parse(process.argv);

if (!program.challenge) {
  console.log(`
    No challenge selected to run. Check README.
    eg. npm run dev -- -c 1
  `);
  return;
}

if (!config[program.challenge]) {
  console.log("No challenge found.");
  return;
}

const getIndexHtml = js => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>CSS Challenges</title>
</head>
<body>
  <script src="/src/${js}/index.js"></script>
</body>
</html>
`;

writeFileSync(
  join(__dirname, "index.html"),
  getIndexHtml(config[program.challenge])
);

const entryFiles = join(__dirname, "./index.html");
(async function() {
  const bundler = new Bundler(entryFiles, {});
  bundler.serve();
})();
