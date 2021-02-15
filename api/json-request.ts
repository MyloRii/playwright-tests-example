import type {Method, Options} from "got";
import got from "got";

require('dotenv').config()

export class JsonRequest {

    protected options: any = {
        responseType: 'json', //for not using JSON.parse
        headers: {
            "Authorization" : `Bearer ${process.env.API_TOKEN}`,
        }
    }

    public url(url: string | URL): this {
        this.options.url = url;
        return this;
    }

    public method(method: Method): this {
        this.options.method = method;
        return this;
    }

    public searchParams(searchParams: Options['searchParams']): this {
        this.options.searchParams = searchParams;
        return this;
    }

    public body(body: any): this {
        this.options.json = body;
        return this;
    }

    public send() {
        return got<any>(this.options);
    }
}