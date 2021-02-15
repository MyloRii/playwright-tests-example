import {GoRest} from "../api/controller/go-rest";
import {describe, expect, it} from "@playwright/test";

const goRestController = new GoRest();

describe('GoRest controller',() => {
    it('should get users list', async() => {
        const usersList = await goRestController.getUsers();
        expect(usersList.data).toBeDefined();
    })

    it('should add and delete user', async() => {
        const user = {
            "name":"Tenali Ramakrishna",
            "gender":"Male",
            "email":"tenaliya.ramakrishnauhavav@15ce.com",
            "status":"Active"
        };

        const createdUser = await goRestController.createUser(user);
        expect(createdUser.data.id).toBeDefined();
        expect(createdUser.data.name).toBe(user.name);
        expect(createdUser.data.email).toBe(user.email);
        expect(createdUser.data.status).toBe(user.status);

        const deletedUserResp = await goRestController.delete(createdUser.data.id);
        expect(deletedUserResp.code).toBe(204);
    })
})