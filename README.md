# install
1. Clone down the repository to your machine: `git clone git@github.com:thomaspalmer/demo-react`
2. Access the folder: `cd demo-react`
3. Install node modules: `npm ci`
4. Copy the .env.example to .env `cp .env.example .env` and open and set the values to point to the API (setup separately) and place the passport details that came from the API. Make sure the REACT_APP_API_BASE_URL ends with '/api/' 
5. Run `npm run start`
6. You should be able to login using one of the logins provided during the API installation