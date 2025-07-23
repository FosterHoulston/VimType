# VimType: A Typing Trainer for Vim Users
**VimType** is a web‑based typing trainer that blends Vim‑style editing with code practice. Instead of random words, you re‑type code snippets implementing classic data structures and algorithms, navigating and editing entirely with Vim commands.
## Disclaimer
🚧 Work‑in‑progress: core engine not yet implemented.
## Features
1. **Lightning-fast navigation** powered by popular Vim key-bindings
2. **Interview prep** with curated code snippets of classic data structures and algorithims
3. **Post-game code review** - revisit your run and learn about the significance of what you just wrote
4. **Trackable progress** through detailed score history
## Prerequisites
1. | Node.js | v22.17.1 or higher | <https://nodejs.org> |
2. | npm | v10.9.2 or higher | comes with Node |
3. | Docker Engine + Docker-Compose plugin | Latest stable | <https://docs.docker.com/get-docker/> |
4. | Supabase CLI | v2.31.8 or higher | macOS & Linux (Homebrew): `brew install supabase/tap/supabase`  ·  Windows: `scoop install supabase` |
## Quick Start (dev)
### 1. Clone & enter the project
- Clone the repo with `git clone https://github.com/yourname/vimtype.git`
- Navigate into the new local project with `cd vimtype` 
### 2. Install JS dependencies
- Use `npm install`
### 3. Spin up local Supabase (requires Docker)
- Use `supabase start`
### 4. Launch the hot-reload dev server
- Use `npm run dev`
### 5. Happy coding!
- Edit files in src/ and watch the browser refresh.
### 6. Shut down Supabase containers when finished
- Use `supabbase stop`

