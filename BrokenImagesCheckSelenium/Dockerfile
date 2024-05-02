FROM gradle:latest as build

WORKDIR /app

#Open port to 4444 to run tests
EXPOSE 4444
#Copy everything
COPY . .
RUN gradle clean
RUN gradle test