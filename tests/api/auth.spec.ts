import {test,expect} from '@playwright/test';
import { DataGenerator } from '../../utils/dataGenerator';
import dotenv from 'dotenv';
import {Routes} from '../../api/endpoints/routes';
import { TIMEOUT } from 'node:dns';

dotenv.config({override : true});


test.describe('authenticate',() =>{

const BASE_URL = process.env.API_BASE_URL || Routes.BASE_URL;
const VALID_USERNAME = process.env.USERNAME || 'mor_2314';
const VALID_PASSWORD = process.env.PASSWORD || '83r5^_';

test('POST - Verify authentication @master @api',async({request}) => {
    console.log(`username ${VALID_USERNAME} and password ${VALID_PASSWORD}`)
    const response = await request.post(`${BASE_URL}${Routes.AUTH_LOGIN}`,{
        data : {
            username: VALID_USERNAME,
            password: VALID_PASSWORD
        }
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('token');
    expect(typeof responseBody.token).toBe('string');
    expect(responseBody.token.length).toBeGreaterThan(0);
    const token = responseBody.token;
     console.log(`User authenticated successfully using username ${VALID_USERNAME} and password ${VALID_PASSWORD} and got token as ${token}`)
})
})
