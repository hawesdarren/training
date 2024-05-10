FROM gradle:latest as brokenimagesbuild

WORKDIR /app

#Open port to 4444 to run tests
#EXPOSE 4444
#Copy everything
#RUN rm -rf build
COPY . .
ENTRYPOINT command gradle test; exit 0
