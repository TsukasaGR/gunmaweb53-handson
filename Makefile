up:
	docker compose up --build
reset:
	docker compose down
	docker compose build --no-cache --force-rm
ssh:
	docker exec -it gunmaweb-53-app bash