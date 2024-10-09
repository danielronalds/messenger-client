run:
	npm run tauri dev

flake-run:
	nix develop --command npm run tauri dev

flake-run-2:
	nix develop --command npm run tauri dev --port 1444

fmt:
	prettier -w src/*
