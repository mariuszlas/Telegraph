docker-compose up -d
docker exec -it telegraph_server_1 bash -c "npm install && npm test"
