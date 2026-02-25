const fs = require('fs');
let css = fs.readFileSync('src/styles/components.css', 'utf8');

const rdashStart = css.indexOf('/* ═══════════════════════════════════════════════\n   REVENUE DASHBOARD SLIDE');
if (rdashStart === -1) {
    console.log("Could not find .rdash section");
    process.exit(1);
}

const before = css.substring(0, rdashStart);
let rdashPart = css.substring(rdashStart);

// Let's multiply all rem values by 1.2 (approx 2 steps of 10% or just 20% increase)
// Also we must update padding-bottom of .rdash-content to clear the footer
rdashPart = rdashPart.replace(/([\d.]+)rem/g, (match, p1) => {
    if (p1 === '0') return match;
    let val = parseFloat(p1) * 1.2;
    val = Math.round(val * 1000) / 1000;
    return val + 'rem';
});

// Since the user wants to avoid gap at bottom of sidebar,
// I'll add display flex column to .rdash-sidebar__nav
rdashPart = rdashPart.replace(
    /\.rdash-sidebar__nav\s*\{[\s\S]*?flex: 1;\n\}/g,
    `.rdash-sidebar__nav {
  padding: 0.6rem 0.6rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}`
);

// We need to increase padding-bottom of .rdash-content significantly 
// It was updated to something around 3.6rem (3 * 1.2). We need it to be ~6rem 
// to prevent the footer from blending.
rdashPart = rdashPart.replace(
    /\.rdash-content\s*\{([\s\S]*?)padding: ([\d.]+)rem ([\d.]+)rem ([\d.]+)rem;/,
    `.rdash-content {$1padding: $2rem $3rem 6.5rem;`
);

fs.writeFileSync('src/styles/components.css', before + rdashPart);
console.log("Successfully scaled .rdash styles by 1.2 and adjusted footer clearance.");
