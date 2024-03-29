## What it does
It receives HTTP requests and replays it to multiple URLs.

![image](https://user-images.githubusercontent.com/6817390/216839688-b0306e19-12fc-440f-b66b-345a36575218.png)


## Configuration
In `servers.yml` you can define webhook `types`. Each type should contain an array of URLs it should replay the webhook to.
When calling http://localhost:3000/hook/test-type, it will distribute the request to all the URLs that are in your `servers.yml` under "test-type"


### Example servers.yml:
```
test-type:
  - https://webhook.site/ebe06895-6442-4382-94f4-c00e4d2b979a
  - https:/staging.example.com/webhook/test-type
  - https:/development.example.com/webhook/test-type
whatsapp:
  - https://webhook.site/ebe06895-6442-4382-94f4-c00e4d2b979a
  - https://staging.example.com/webhook/whatsapp
  - https://development.example.com/hook/whatsapp
```

## Installing
`$ npm install`.

Then create your `servers.yml` file. See the example above.


## Running
`$ npm run start`.
