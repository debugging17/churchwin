const fs = require('fs');
let css = fs.readFileSync('src/styles/components.css', 'utf8');

// Find the .rdash section
const rdashStart = css.indexOf('/* ═══════════════════════════════════════════════\n   REVENUE DASHBOARD SLIDE');
if (rdashStart === -1) {
  console.log("Could not find .rdash section");
  process.exit(1);
}

const before = css.substring(0, rdashStart);
let rdashPart = css.substring(rdashStart);

// Scale factor
const SF = 1.15; // roughly 2 visual steps

// Replace rem values
rdashPart = rdashPart.replace(/([\d.]+)rem/g, (match, p1) => {
  if (p1 === '0') return match;
  let val = parseFloat(p1) * SF;
  val = Math.round(val * 1000) / 1000;
  return val + 'rem';
});

// Replace px values
rdashPart = rdashPart.replace(/([\d.]+)px/g, (match, p1) => {
  if (p1 === '0' || match === '1px') return match; // keep 1px borders
  let val = parseFloat(p1) * SF;
  val = Math.round(val);
  return val + 'px';
});

fs.writeFileSync('src/styles/components.css', before + rdashPart);
console.log("Successfully scaled .rdash styles by " + SF);
