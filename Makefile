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
