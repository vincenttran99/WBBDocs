const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const APPS_DIR = path.join(__dirname, '../apps');
const OUTPUT_DIR = path.join(__dirname, '../dist');

if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true });
}
fs.mkdirSync(OUTPUT_DIR);

const apps = fs.readdirSync(APPS_DIR).filter(
  name => fs.statSync(path.join(APPS_DIR, name)).isDirectory()
);

// Build portal first so other apps can overwrite subdirs cleanly
const ordered = ['portal', ...apps.filter(a => a !== 'portal')];

for (const appName of ordered) {
  if (!apps.includes(appName)) continue;
  console.log(`\n=== Building ${appName} ===`);
  execSync('npm run build', {
    cwd: path.join(APPS_DIR, appName),
    stdio: 'inherit',
  });

  const buildDir = path.join(APPS_DIR, appName, 'build');
  const destDir = appName === 'portal'
    ? OUTPUT_DIR
    : path.join(OUTPUT_DIR, appName);

  fs.cpSync(buildDir, destDir, { recursive: true });
  console.log(`✓ ${appName} → ${path.relative(process.cwd(), destDir)}`);
}

console.log('\nAll apps built successfully → dist/');
