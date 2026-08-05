# Backup existing docs (if any) and publish FitForge as docs for GitHub Pages

This commit moves the FitForge site into docs/ so GitHub Pages can serve it from main/docs.

- Moves FitForge/ -> docs/
- Removes root index.html redirect (so Pages serves docs/index.html)
- Keeps existing docs/ backed up at docs_backup if present
