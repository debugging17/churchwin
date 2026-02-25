const fs = require('fs');
let css = fs.readFileSync('src/styles/components.css', 'utf8');

// 1. Logo size
css = css.replace(/\.rdash-sidebar__logo-img\s*\{\s*height:\s*[\d.]+px;/, '.rdash-sidebar__logo-img {\n  height: 48px;');

// 2. Sidebar items gap
css = css.replace(/\.rdash-nav-item\s*\{([\s\S]*?)padding:/, '.rdash-nav-item {$1margin-bottom: 0.4rem;\n  padding:');

// 3. Footer clashing - clip rdash scroll inside main.
// .rdash-main gets padding-bottom: 4.5rem to clear footer, and background to cover scroll
css = css.replace(/\.rdash-main\s*\{([\s\S]*?)overflow:\s*hidden;\s*\}/, '.rdash-main {$1overflow: hidden;\n  padding-bottom: 4.5rem;\n  background: #ffffff;\n}');

// .rdash-content padding-bottom reduced back from 6.5rem scaled to normal ~2rem
css = css.replace(/\.rdash-content\s*\{([\s\S]*?)padding:\s*([\d.]+)rem\s+([\d.]+)rem\s+[\d.]+rem;/, '.rdash-content {$1padding: $2rem $3rem 1.5rem;');

fs.writeFileSync('src/styles/components.css', css);
console.log('CSS rules successfully updated!');
