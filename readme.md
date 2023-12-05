# Profile Nodejs backend server

A simple node.js app making requests to Postgres database, DVD Rental. 

Comparing get full database requests with SELECT * or asking for specific tables rows.

### Commands used:
ab -n 1000 -c 100 localhost:3000/films
ab -n 1000 -c 100 localhost:3000/films-star

wrk -t12 -c100 -d100s http://127.0.0.1/films
wrk -t12 -c100 -d100s http://127.0.0.1/films-star