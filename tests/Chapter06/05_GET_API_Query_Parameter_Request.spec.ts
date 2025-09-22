import { test, expect } from '@playwright/test'
import { getPOSTAPIRequestBody } from '../../src/utils/APIHelper'
import { faker } from '@faker-js/faker'

test.use({ baseURL: process.env.BASE_API_URL, })

test('GET API request using query parameters in playwright', async ({ request }) => {

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
    const postAPIResponse = await request.post(`/booking`, { data: postAPIRequest});

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

    //GET API Request using Query Parameters
    const bookingID = jsonPOSTAPIResponse.bookingid;

    console.log("Booking ID: "+bookingID);

    const getAPIResponse = await request.get(`/booking/`,{
        params:{
            firstname:firstname,
            lastname:lastname
        }
    });

    //validate  status code, status text

    expect(getAPIResponse.status()).toBe(200);
    expect(getAPIResponse.statusText()).toBe('OK');

    //Print JSON API Response 
    const jsonGETAPIResponse = await getAPIResponse.json();
    console.log('GET API Response: ' + JSON.stringify(jsonGETAPIResponse, null, 2));

});