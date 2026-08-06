import ogs from 'open-graph-scraper';
import fs from 'fs';
import path from 'path';

const inputPath = path.resolve('data/blogs-read.json');
const outputPath = path.resolve('data/blogs-cache.json');

const blogs = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

function getDomain(url) {
  return new URL(url).hostname.replace('www.', '');
}

async function run() {
  const results = [];

  for (const { url } of blogs) {
    try {
      const { result } = await ogs({ url });
      const domain = getDomain(url);

      results.push({
        url,
        title: result.ogTitle || result.twitterTitle || domain,
        description: result.ogDescription || result.twitterDescription || '',
        image: result.ogImage?.[0]?.url || null,
        siteName: result.ogSiteName || domain,
        favicon: `https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
      });

      console.log(`✓ ${url}`);
    } catch (err) {
      console.error(`✗ Failed: ${url}`, err.message);
      const domain = getDomain(url);
      results.push({
        url,
        title: domain,
        description: '',
        image: null,
        siteName: domain,
        favicon: `https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
      });
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\nSaved ${results.length} entries to blogs-cache.json`);
}

run();