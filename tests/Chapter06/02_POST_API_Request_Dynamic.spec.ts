import { test, expect } from '@playwright/test'
import { formatAPIRequest } from '../../src/utils/APIHelper'
import { faker } from '@faker-js/faker'

import path from 'path'
import fs from 'fs'

test.use({ baseURL: process.env.BASE_API_URL, })

test('Create POST API Request using dynamic api request body in playwright', async ({ request }) => {
   
   //Reading JSON File
   const filePath = path.join(__dirname, '../../test-data/api_requests/Dynamic_POST_API_Request.json');
   const jsonTemplate = fs.readFileSync(filePath, 'utf-8');
   const values = ['Karthik', 'Kancharla', 123];

   //Updating Post API Request body
   const postAPIRequest = await formatAPIRequest(jsonTemplate, values);

   //Create POST API Request
   const postAPIResponse = await request.post(`/booking`, { data: JSON.parse(postAPIRequest) });

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
   expect(jsonPOSTAPIResponse.booking.firstname).toBe('Karthik');
   expect(jsonPOSTAPIResponse.booking.lastname).toBe('Kancharla');
   expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15');
   expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17');

});

test('Create POST API Request using dynamic api request body in playwright with faker data', async ({ request }) => {
   
   //Reading JSON File
   const filePath = path.join(__dirname, '../../test-data/api_requests/Dynamic_POST_API_Request.json');
   const jsonTemplate = fs.readFileSync(filePath, 'utf-8');

   const firstname = faker.person.firstName();
   const lastname = faker.person.lastName();
   const price = faker.number.int({min:1000,max:10000})
   const values = [firstname, lastname,price];

   //Updating Post API Request body
   const postAPIRequest = await formatAPIRequest(jsonTemplate, values);

   //Create POST API Request
   const postAPIResponse = await request.post(`/booking`, { data: JSON.parse(postAPIRequest) });

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
   expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15');
   expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17');

});