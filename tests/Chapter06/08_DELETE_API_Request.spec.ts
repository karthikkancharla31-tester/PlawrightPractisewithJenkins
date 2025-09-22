import { test, expect } from '@playwright/test'
import { getPOSTAPIRequestBody } from '../../src/utils/APIHelper'
import { faker } from '@faker-js/faker'
import tokenAPIRequest from '../../test-data/api_requests/Token_API_Request.json'
import patchAPIRequest from '../../test-data/api_requests/PATCH_API_Request.json'

test.use({ baseURL: process.env.BASE_API_URL, })

test('DELETE API request using playwright',{tag:['@PlaywrightWithJenkins']}, async ({ request }) => {

    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const price = faker.number.int({ min: 1000, max: 10000 })
    const values = [firstname, lastname, price];

    const postAPIRequest = await getPOSTAPIRequestBody(
        firstname,
        lastname,
        price,
        true,
        "breakfast",
        "2025-09-21",
        "2025-10-12"
    )

    //Create POST API Request
    const postAPIResponse = await request.post(`/booking`, { data: postAPIRequest });

    //Print JSON API Response 
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('POST API Response: ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));

    //Validating API Response
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

    //Validate porperty/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    //Validating API Response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstname);
    expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastname);
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-09-21');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-10-12');

    //GET API Request
    const bookingID = jsonPOSTAPIResponse.bookingid;
    console.log("Booking ID: " + bookingID);
    const getAPIResponse = await request.get(`/booking/${bookingID}`);

    //validate  status code, status text
    expect(getAPIResponse.status()).toBe(200);
    expect(getAPIResponse.statusText()).toBe('OK');

    //Print JSON API Response 
    const jsonGETAPIResponse = await getAPIResponse.json();
    console.log('GET API Response: ' + JSON.stringify(jsonGETAPIResponse, null, 2));

    //Generate Token
    const tokenAPIResponse = await request.post(`/auth`, { data: tokenAPIRequest });

    //validate  status code, status text
    expect(tokenAPIResponse.status()).toBe(200);
    expect(tokenAPIResponse.statusText()).toBe('OK');

    //Print JSON API Response 
    const jsonTOKENAPIResponse = await tokenAPIResponse.json();
    const token = jsonTOKENAPIResponse.token;
    console.log('GET Token API Response: ' + JSON.stringify(jsonTOKENAPIResponse, null, 2));
    console.log('Token is : ' + token);

    //Create DELETE API Request
    const deleteAPIResponse = await request.delete(`/booking/${bookingID}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`
        }
    });

    //validate  status code, status text
    expect(deleteAPIResponse.status()).toBe(201);
    expect(deleteAPIResponse.statusText()).toBe('Created');

    console.log('Delete API Response '+await deleteAPIResponse.text());
});