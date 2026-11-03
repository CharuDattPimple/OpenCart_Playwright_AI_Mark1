import {test,expect} from '@playwright/test';
import { DataGenerator } from '../../utils/dataGenerator';
import dotenv from 'dotenv';
import {Routes} from '../../api/endpoints/routes';

// dotenv.config({override : true});
import { getRequiredUrl, getRequiredEnv } from '../../utils/environment';


test.describe('Users API Test',() =>{
// const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
const BASE_URL = getRequiredUrl('API_BASE_URL').replace(/\/+$/, '');


        //create new user
test('POST - Create a user @master @api',async({request}) => {
    const payload = DataGenerator.generateUserPayload();
    const response = await request.post(`${BASE_URL}${Routes.CREATE_USER}`, { data : payload});
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    console.log(`User created successfully `)
})
})