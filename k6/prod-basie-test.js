import http from "k6/http";
import { check, sleep } from "k6";

// Test configuration
export const options = {
  ext: {
    loadimpact: {
      projectID: 3626170,
      // Test runs with the same name groups test runs together
      name: "10ms Load Test"
    }
  },
  thresholds: {
    // Assert that 99% of requests finish within 3000ms.
    http_req_duration: ["p(99) < 3000"],
  },
  // Ramp the number of virtual users up and down
  stages: [
    { duration: "30s", target: 15 },
    { duration: "1m", target: 15 },
    { duration: "20s", target: 0 },
  ],
};

// Simulated user behavior
export default function () {
  let res = http.get("https://10minuteschool.com");
  // Validate response status
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
