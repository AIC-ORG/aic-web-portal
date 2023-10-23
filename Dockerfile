# Use the official Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Create an app directory
WORKDIR /app
ENV  NODE_ENV=production \
     NEXT_PUBLIC_API_URL=https://aic-backend.onrender.com/api/v1 \
     SANITY_SECRET_TOKEN=skWt5s6xRcBlqsjSqn47vc7zC7NYnF0UYmugB1CaF8vniXPjcQdUA94SI5Wp0MlAIru7fCLyJecLYvyIYV67BfmjOU4PStSA9TLx8uu5eOL9tWGPCnugPcpfmTctEjewmHgNEAdMOXj0fYzd21gNCvHyBaFvcNRia3UINDcxu3qTn34mP47i
# Install app dependencies
# A wildcard is used to ensure both package.json AND yarn.lock are copied
# where available (Yarn)
COPY ["package.json", "yarn.lock", "./"]

# Install dependencies using Yarn
RUN yarn install

# If you are building your code for production
# RUN yarn install --production=true

# Bundle app source
COPY . .

# Build the application (if needed)
# Replace with your actual build command
# In Next.js, the build output is typically in the .next folder
RUN yarn build

# Expose the port your application will listen on
EXPOSE 3231

# Define the command to run your application
CMD [ "yarn", "start" ]
