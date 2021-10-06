import { render, screen } from '@testing-library/react';

import * as appRequests from "../api/AppRequests"
import * as consts from "../utils/constants"

test('test server alive app request is empty', () => {
    const req = {}
    const res = { render: jest.fn() }
    appRequests.serverAlive()
    expect(res.render.mock.calls).toEqual([])
})

it('check if getKeyValue returns a valid key with correct input', () => {
    expect.assertions(2);
    return appRequests.getKeyValue(consts.API_COUNTER_NAMESPACE, consts.API_COUNTER_KEY)
    .then(data => {
        expect(data).toHaveProperty("path", "ton-count-api/"+ consts.API_COUNTER_KEY)
        expect(data).toHaveProperty("status", 200)
    });
}); 

it('check if getKeyValue returns correct sentence response if no data is provided', () => {
    const req = {}
    const res = { render: jest.fn() }
    expect.assertions(1);

    return appRequests.getKeyValue().then(data => {
        expect(data).toEqual('Please provide key and namespace')
    })
});

it('check if setKeyValue resets key value', () => {
    const req = {}
    const res = { render: jest.fn() }
    expect.assertions(2);

    return appRequests.setKeyValue(
        consts.API_COUNTER_NAMESPACE, 
        consts.API_COUNTER_KEY,
        100
    ).then(data => {
        expect(data).toHaveProperty("value",100)
        expect(data).toHaveProperty("old_value")
    })
});

it('check if getInfoKey get infos from key', () => {
    const req = {}
    const res = { render: jest.fn() }
    expect.assertions(8);

    return appRequests.getInfoKey(
        consts.API_COUNTER_NAMESPACE, 
        consts.API_COUNTER_KEY
    ).then(data => {
        expect(data).toHaveProperty("namespace")
        expect(data).toHaveProperty("key")
        expect(data).toHaveProperty("ttl")
        expect(data).toHaveProperty("created")
        expect(data).toHaveProperty("update_lowerbound")
        expect(data).toHaveProperty("update_upperbound")
        expect(data).toHaveProperty("enable_reset")
        expect(data).toHaveProperty("value")
        
    })
});

it('check if updateKeyValue return updated key', () => {
    const req = {}
    const res = { render: jest.fn() }
    expect.assertions(1);

    return appRequests.updateKeyValue(
        consts.API_COUNTER_NAMESPACE, 
        consts.API_COUNTER_KEY,
        1
    ).then(data => {
        expect(data).toHaveProperty("value")
    })
});

it('check if getUserInfo returns one user', () => {
    const req = {}
    const res = { render: jest.fn() }
    expect.assertions(5);

    return appRequests.getUserInfo(
        1
    ).then(data => {
        expect(data).toHaveProperty("IdUser")
        expect(data).toHaveProperty("UserName")
        expect(data).toHaveProperty("Password")
        expect(data).toHaveProperty("Email")
        expect(data).toHaveProperty("Cpf")
    })
});

it('check if createUser creates one random user', () => {
    const req = {}
    const res = { render: jest.fn() }
    expect.assertions(5);
    
    return appRequests.createUser(
        {username: "Luiz",
        password: "teste",
        email: "luiz@luiz.com",
        cpf: "12345678914"}
    ).then(data => {
        expect(data).toHaveProperty("IdUser")
        expect(data).toHaveProperty("UserName")
        expect(data).toHaveProperty("Password")
        expect(data).toHaveProperty("Email")
        expect(data).toHaveProperty("Cpf")
    })
});