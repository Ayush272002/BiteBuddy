# Tech Stack

#### Frontend

- **Framework/Libraries**:
  - React (`react`, `react-dom`): A JavaScript library for building user interfaces.
  - React Router (`react-router-dom`): A library for routing in React applications.
  - Auth0 React (`@auth0/auth0-react`): Library for integrating authentication using Auth0 in React apps.
  - React Hook Form (`react-hook-form`): Library for managing form state and validation in React applications.
  - React Query (`react-query`): Library for managing server state and fetching data in React applications.
  - Tailwind CSS (`tailwindcss`): A utility-first CSS framework for building custom designs quickly.
  - Shadcn (Assumed to be a prebuilt component library): Provides prebuilt UI components for easier frontend development.
- **UI Components and Utilities**:
  - Radix UI components (`@radix-ui/react-*`): Collection of accessible UI components for React.
  - Lucide React (`lucide-react`): Library of simply designed, consistent SVG icons for React.
  - Tailwind CSS Plugins: Additional plugins (`tailwind-merge`, `tailwindcss-animate`) for enhancing Tailwind CSS capabilities.
- **Type Checking and Validation**:
  - Zod (`zod`): Library for schema validation and TypeScript type generation.
- **Development Tools**:
  - Vite (`vite`): Next generation frontend tooling with fast dev server and optimized build.
  - TypeScript (`typescript`): Typed superset of JavaScript that compiles to plain JavaScript.

#### Backend

- **Framework/Libraries**:
  - Node.js (`node`): JavaScript runtime for server-side applications.
  - Express (`express`): Fast, minimalist web framework for Node.js.
  - Mongoose (`mongoose`): MongoDB object modeling for Node.js.
  - Stripe (`stripe`): Library for integrating Stripe payments in Node.js applications.
  - Cloudinary (`cloudinary`): Library for integrating Cloudinary image management in Node.js applications.
- **Database and Middleware**:

  - MongoDB (`mongodb`): NoSQL database for storing application data.
  - Multer (`multer`): Middleware for handling file uploads.
  - CORS (`cors`): Middleware for enabling Cross-Origin Resource Sharing in Express.
  - Dotenv (`dotenv`): Library for loading environment variables from `.env` file.

- **Authentication and Security**:

  - JSON Web Token (`jsonwebtoken`): Library for generating and verifying JSON Web Tokens.
  - Express OAuth2 JWT Bearer (`express-oauth2-jwt-bearer`): Middleware for OAuth2 JWT Bearer token authentication in Express.

- **Development Tools**:
  - TypeScript (`typescript`): Typed superset of JavaScript that compiles to plain JavaScript.
  - Nodemon (`nodemon`): Utility that restarts the server automatically on file changes during development.
  - Concurrently (`concurrently`): Utility for running multiple commands concurrently.

## Running The Backend

In the .env file fill following fields which are mentioned over there

- [MongoDB](https://www.mongodb.com/)
- [Auth0](https://auth0.com/) - For authentication
- [Cloudinary](https://cloudinary.com/) - To store images
- [Stripe](https://stripe.com/gb) - For payment purposes

If you are running the project locally then the frontend URL would be
http://localhost:5173 and you need to generate the api keys for stripe, auth0 and couldinary and tyhe required fields in the env file then execure the following command. There are test [stripe cards](https://docs.stripe.com/testing#international-cards) also if you want to test out the deployed app.

```shell
cd backend
npm i
npm run dev
```

---

## Running The Frontend

In the .env file fill the empty fields if you are running the project locally then the
`VITE_API_BASE_URL` is the url of the backend i.e.,http://localhost:7000

and the rest are the Auth0 client id and base id which you setted while creating the auth0 account

after that run the following commands

```shell
cd frontend
npm i
npm run dev
```

## Test Credentials

Email - testuser@test.com<br>
Password - Test@123

**Note** - The server might take a bit longer to startup as its deployed on free tier please wait for around 5-6 min so the backend could startup and process incoming requests.

## Contributing

If you have suggestions for new features, bug fixes, or improvements, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
