FROM alekzonder/puppeteer
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
WORKDIR /app
RUN npm install -q --no-color --no-progress
COPY src /app/src
CMD ["npm", "run", "start"]
