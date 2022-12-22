Route: `/healthcheck`
 - Check if the API is   healthy    

Route: `/country/:name`  
 - Search for a country, replacing ":name" with the country name. 

Run Docker Compose:
- `docker compose -f ./Docker/docker-compose.yml --env-file ./.env up --build --remove-orphans`

Example URL: `http://localhost:3001/api/country/brazil`

