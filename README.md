<h2> <u> Assessment </u> </h2>

<p>The goal of this assessment it to determine your understading of JSON (i.e how to read and use it). The instruction here is pretty straight forward and it comes with tests to help facilitate QA</p>

<p>The subject of interest in this assessment is the <code>parser</code> method located in <code>src/parser.ts</code>. This function takes in a JSON input of a speified format, converts it to an array of object prepared for a specific use case and ensures all prepared data of the same format.</p>

<h4><u>JSON specification</u> </h4>
<p>The sample JSON file, <code>users.json</code> containts the expected format for the JSON to be fed into our  <code>parser</code> function. A complete user has the following format: </p>

```json
  {
    "firstName": "first name",
    "lastName": "last name",
    "email": "email address",
    "phone": "phone number",
    "address": {
      "address": "address",
      "city": "city",
      "coordinates": {
        "lat": lat,
        "lng": lng
      },
      "postalCode": "postal code",
      "state": "state"
    }
  },
```

<h4><u>User specification</u> </h4>
<p> The goal of the <code>parse</code> function is to return a list of users defined as <code>User</code> in <code>src/user.ts</code> . To convert a JSON user to a user for our app, here are the mappings used. The object below shows how a <code>User</code> can be gotten from the JSON list of users </p>

```
{
  fullname: firstName lastName;
  email_address: email;
  phone_number: phone;
  city: address.city;
}
```

<h4><u>Task</u> </h4>
<p> Your task is to <b>Complete the parse function logic to work as expected!</b>. It should be noted that not all users in the JSON files have all the properties required to be a parsed user. Hence, ensure only users that meets the requirements are parsed and returned as users from the <code>parse</code> function. </p>

<b>NOTE: do not update the test files! the test files are to ensure your function is correct and behaving as expected</b>

<h3><u>Installation Guide</u></h3>

```sh
# Assuming you are currently in the directory of this repo:

# Install dependencies
$ npm install

# Test your work
$ npm run test

# To run test in watch mode
$ npm run test:watch

```

<h3><u>Submission Guide</u></h3>
<ol>
<li>Fork this repository</li>
<li>Attempt the assessment</li>
<li>Send a link to your forked repository showing proof of work. Also add screenshots of 100% test case success</li>
</ol>

<h3><u>Submission Evidence</u></h3>
<p>Below is a screenshot of the test case success</p>
<img src="test_case.png"></img>
