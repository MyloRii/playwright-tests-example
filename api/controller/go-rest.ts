import got from "got";
import {URLSearchParams} from "url";
import {JsonRequest} from "../json-request";

export class GoRest {
    async getUsers() {
       return (
           await new JsonRequest()
               .url("https://gorest.co.in/public-api/users")
               .send()
       ).body
    }

    async getUsersById(id: string | string[]) {
        return (
            await new JsonRequest()
                .url("https://gorest.co.in/public-api/users")
                .searchParams(new URLSearchParams({id}))
                .send()
        ).body
    }

    async createUser(user: {
        "name": string,
        "gender": string,
        "email": string,
        "status": string
    }) {
        return (
            await new JsonRequest()
                .url("https://gorest.co.in/public-api/users")
                .method("POST")
                .body(user)
                .send()
        ).body
    }

    async updateUser(user: {
        "name": string,
        "gender": string,
        "email": string,
        "status": string
    }, id: string | string[]) {
        return (
            await new JsonRequest()
                .url("https://gorest.co.in/public-api/users")
                .method("PUT")
                .body(user)
                .searchParams(new URLSearchParams({id}))
                .send()
        ).body
    }

    /**
     * Left here to demonstrate usual approach
     * @param id
     */
    async delete(id: number | string) {
        const response = await got(`https://gorest.co.in/public-api/users/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization" : `Bearer ${process.env.API_TOKEN}`,
            }
        })
        return JSON.parse(response.body);
    }
}