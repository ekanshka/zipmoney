# Project to build a simple PayTM like App

<!-- ## Deployed Live on 🚀: -->
<!-- ### Frontend : Vercel -> https://week-3-todo-app-mern.vercel.app/
### Backend : Render -> https://week-3-todo-app-mern.onrender.com/todos -->

## Tech Stack : 💻
- Backend -> TypeScript, Express, jwt 
- Database -> MongoDB
- Frontend -> React, Tailwind


<!-- ## Tests Done (POSTMAN and FRONTEND) : ✅ 👍 -->
<!-- - successfully creates new todos
- open routes/no authentication
- mark as done capability
- all synchronous backend with frontend -->



<!-- ## Bugs : ❌ -->
<!-- - no bugs recorded for the required functioning -->


## Details of Things learnt/covered : 🎊
<!-- - allows anyone to create a todo
- allows anyone to see their existing todos
- allows anyone to mark a todo as done -->

- Backend :
    - typescript express server
    - users table and accounts table in mongoDB using mongoose orm
    - zod validation for all necessary routes
    - auth routes : 
        - POST "/user/signup", with assigning user with random balance under 10000 
        - POST "/user/signin", with jwt token return
    - user routes : 
        - PUT "/user/" , updating their information (firstname, lastname, password with encryption)
        - GET "/user/bulk", searching for users with or without filter query
    - account routes :
        - GET "/account/balance", to get their balance
        - POST "/account/transfer", to transfer money to a another user



<!-- ## Run : 🚀 -->
<!-- - Create .env in root folder and set the environment variables JWT_SECRET and MONGO_URL
- Run <code> node index.js </code> in root folder -->

