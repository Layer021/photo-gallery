.PHONY init:
init:
	[ -f .env.local ] || cp .env.example .env.local
	docker compose build
	make install

.PHONY run:
run:
	docker compose up

.PHONY install:
install:
	docker compose run --rm app npm install

.PHONY lint:
lint:
	docker compose run --rm app npm run lint

.PHONY test:
test:
	docker compose run --rm app npm run test

.PHONY generate:
generate:
	docker compose run --rm app npm run generate

.PHONY format:
format:
	docker compose run --rm app npx prettier --write .

.PHONY storycapture:
storycapture:
	docker compose run --rm storybook npx storycapture http://localhost:6006 --serverCmd "storybook dev -p 6006" --chromiumPath /root/.cache/ms-playwright/chromium-1187/chrome-linux/chrome
