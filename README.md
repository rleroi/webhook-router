# Webhook Nemesis
The name Nemesis is related to the Greek word νέμειν némein, meaning "to give what is due", from Proto-Indo-European nem- "distribute". -- Wikipedia.org


## What it does
It receives HTTP requests and replays it to multiple URLs.


## Configuration
In `servers.yml` you can define webhook `types`. Each type should contain an array of URLs it should replay the webhook to.
When calling http://localhost:3000/test-type, it will distribute the request to all the URLs that are in your `servers.yml` under "test-type"


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


## Running
`$ npm run start`.
