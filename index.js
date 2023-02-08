// include node fs module
var fs = require('fs');
const csv = require('csvtojson')

const csvFilePath = 'tokens.csv';

const run = async () => {

  let jsonArray = await csv().fromFile(csvFilePath);

  jsonArray.forEach((item, index) => {

    const number = index;
    const token = item.a

    const text = `
config:
  target: "https://api.10minuteschool.com"
  phases:
    - duration: 5
      arrivalRate: 100
      name: Sustained load

scenarios:
  - flow:
      - get:
          url: "/k12-course-service/api/v2/routine?program_id=139&page=home"
          headers: 
            authority: "api.10minuteschool.com"
            accept: "application/json, text/plain, */*"
            "accept-language": "en-US,en;q=0.9,bn;q=0.8"
            authorization: "${token}"
            origin: "https://10minuteschool.com"
            publickey: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVjMzhhOTA4Nzc4ODhlOTViZTNmYjczNzE1NmVkMWM2MmMwYTBhMjlmNDUwYmJjZmY5ZGNjOGY1MGExYTg4YWZjYjU0MTdlNTI5YzdhZGNkIn0.eyJhdWQiOiIzIiwianRpIjoiZWMzOGE5MDg3Nzg4OGU5NWJlM2ZiNzM3MTU2ZWQxYzYyYzBhMGEyOWY0NTBiYmNmZjlkY2M4ZjUwYTFhODhhZmNiNTQxN2U1MjljN2FkY2QiLCJpYXQiOjE1NDM0Nzg3NTcsIm5iZiI6MTU0MzQ3ODc1NywiZXhwIjoxNTc1MDE0NzU3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.BTBFq-5QhNkskRpp_AK1zrGAz_gbzsawBWyuw3K2RQY7ck7a4JnMH7jX8csaG29eS8dmJSmVko_swEoCl8W1Ucc4Hiy25vMtN8n7eyeeesxGJcDgUtXZp6KZWCRIG_-pp098RZwNan2NZvgzx3DKzgXEIqTCvvAzAO6jQGhVlTe8qSW972meuLTrg2upG3VLRVtRdGLiXXfaoQBv_fdTafz_3jVlulxN7UY9B1TnsBFfywt9QcNgvYYBhRUQeP9aTyQmH_1h7itk4ETcX_o8ZvqNhU8MyJt4gr4eKUzPccGpWSsLFFNa0E-1MvxMZK7Vr0__l-843kzcJOQWAjxysh6aaVXkxs-MghvkBlppsnD3TA1fl-SCdlvixXRVpaHv7Qn0wtoNfxTIgpR2hPp54nGRl3qB2aefQp6JQbjiXqGbcO4RQEyAZbJR_n8HsIJhm3LwEs_QSEmNVbBMNHuGU2JW5_TpBjfcmzbxp-4kTH8Xh5Cnu0kCPlg4t0F2K94t_IDvu9i2VxjVMhCya60QwVxJYygNnn7YaeVuIcQ35IkQ1xzFCVuKzBJPoJnR-WT-AdmF0DsgMQ6hzis62ohRDJbl8hhYp4BAL84rEZdgjecyACz9qPe3zdb7oL99tDC2Qg932az2atv4lfV4rI5duYdiXOz4O6a6YBUTDt9Qm10"
            referer: "https://10minuteschool.com/"
  `


    // writeFile function with filename, content and callback function
    fs.writeFile(`art/routine-test-${number}.yaml`, text, async function (err) {
      if (err) throw err;

      console.log('File is created successfully.');
    });

  })
}
run()