import http from "k6/http";
import { check, sleep } from "k6";

// Test configuration
export const options = {
    // ext: {
    //     loadimpact: {
    //         projectID: 3626170,
    //         // Test runs with the same name groups test runs together
    //         name: "10ms Load Test"
    //     }
    // },
    thresholds: {
        // Assert that 99% of requests finish within 3000ms.
        http_req_duration: ["p(99) < 3000"],
    },
    // Ramp the number of virtual users up and down
    stages: [
        { duration: "30s", target: 100 },
    ],
};

const params = {
    headers: {
        "accept": "application/json",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzIyOWQyNmE2MzYzODU3MzNlZjI5YSIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxNzg4NTAwNDIxIiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJuYW1lIjoiU2h1dnJvIDEwTVMiLCJpc19hY3RpdmUiOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZSwidXNlcl9zdGF0dXMiOiIiLCJkYXRlX2pvaW5lZCI6IjIwMjItMTEtMTRUMTE6NDM6MTQuNTQ5WiIsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJleHAiOjE2ODA2ODc5NjB9.MFmYrcwXluuy7ZItNyqcrzGDzVyRQkdX2OBLKGDEHgU",
    },
    body: {"body":"sd","conversation_id":"308","thread_id":"59","client_identification_id":"1676179486276","session":{"name":"January First","identification_type":"live_class","identification_id":"JUxBRrfy7f"},"attachments":[]}
};


// Simulated user behavior
export default function () {

    let res = http.post("https://stage-api.10minuteschool.net/superchat-service/api/v1/messages", params);

    // Validate response status
    check(res, { "status was 200": (r) => r.status == 200 });
    sleep(1);
}
