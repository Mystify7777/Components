const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'docs', 'design-system');
const FOOTER = '\n---\nReference: [DESIGN_SYSTEM_RULES.md](../../DESIGN_SYSTEM_RULES.md)\n';

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full);
    else if (ent.isFile() && ent.name.endsWith('.md')) {
      try {
        fs.appendFileSync(full, FOOTER, { encoding: 'utf8' });
        console.log('Appended to', full);
      } catch (e) {
        console.error('Failed', full, e.message);
      }
    }
  }
}

if (fs.existsSync(ROOT)) walk(ROOT);
else console.error('Root not found:', ROOT);
