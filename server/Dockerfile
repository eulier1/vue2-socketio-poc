# Use node 12.22.1
FROM node:12.22.1

# Copy source code
COPY . /server

# Change working directory
WORKDIR /server

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 3100

# Launch application
CMD ["npm","start"]