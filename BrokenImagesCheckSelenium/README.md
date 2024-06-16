# training
The purpose of this app is to learn QA engineering technologies and techniques

### Part 1 
Is to use selenium to detect broken images on a test website
### Part 2 
Is to use docker standalone grid/chrome to run the tests

### Part 3
Is to use docker gradle image to execute the test and store the result
To run the tests locally run the following command
docker compose -f docker-compose.all.yaml up --exit-code-from gradle
To copy the tes results from the gradle container to Temp/Artifacts
cp gradle:/app/build/reports/tests/test /Temp/Artifacts/
### Part 4 (todo)
Is to run in pipeline in a kubernetes hosted Jenkins instance
