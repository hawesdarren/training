FROM mcr.microsoft.com/playwright:v1.44.1-jammy as playwright

WORKDIR /app

COPY . .
RUN npm ci
ENTRYPOINT npx playwright test