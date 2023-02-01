import http from 'k6/http';

export default function () {
  const url = 'https://stage-api.10minuteschool.net/k12-course-service/api/v2/routine?program_id=142&page=home';
  
  const params = {
    headers: {
        "authority": "api.10minuteschool.net",
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,bn;q=0.8",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjc0MTc1MmMxYTFlNDYxM2YzOGY1OSIsImlzX2FkbWluIjpmYWxzZSwiY29udGFjdCI6Iis4ODAxNzY2MDk5MzMxIiwiZW1haWwiOiIiLCJsb2dpbl90eXBlIjoicGhvbmUiLCJuYW1lIjoiYW1kYWQ1NSIsImlzX2FjdGl2ZSI6ZmFsc2UsInZlcmlmaWVkIjp0cnVlLCJ1c2VyX3N0YXR1cyI6IiIsImRhdGVfam9pbmVkIjoiMjAyMi0xMS0wNlQwNTowOTowOS4zNDlaIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImV4cCI6MTY4Mjc1NTU4OX0.OFM1HkIOAWuVlAF38jwgSX8QGV3SSJG6yt5t44Eh0oA",
        "origin": "https://10minuteschool.net",
        "publickey": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVjMzhhOTA4Nzc4ODhlOTViZTNmYjczNzE1NmVkMWM2MmMwYTBhMjlmNDUwYmJjZmY5ZGNjOGY1MGExYTg4YWZjYjU0MTdlNTI5YzdhZGNkIn0.eyJhdWQiOiIzIiwianRpIjoiZWMzOGE5MDg3Nzg4OGU5NWJlM2ZiNzM3MTU2ZWQxYzYyYzBhMGEyOWY0NTBiYmNmZjlkY2M4ZjUwYTFhODhhZmNiNTQxN2U1MjljN2FkY2QiLCJpYXQiOjE1NDM0Nzg3NTcsIm5iZiI6MTU0MzQ3ODc1NywiZXhwIjoxNTc1MDE0NzU3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.BTBFq-5QhNkskRpp_AK1zrGAz_gbzsawBWyuw3K2RQY7ck7a4JnMH7jX8csaG29eS8dmJSmVko_swEoCl8W1Ucc4Hiy25vMtN8n7eyeeesxGJcDgUtXZp6KZWCRIG_-pp098RZwNan2NZvgzx3DKzgXEIqTCvvAzAO6jQGhVlTe8qSW972meuLTrg2upG3VLRVtRdGLiXXfaoQBv_fdTafz_3jVlulxN7UY9B1TnsBFfywt9QcNgvYYBhRUQeP9aTyQmH_1h7itk4ETcX_o8ZvqNhU8MyJt4gr4eKUzPccGpWSsLFFNa0E-1MvxMZK7Vr0__l-843kzcJOQWAjxysh6aaVXkxs-MghvkBlppsnD3TA1fl-SCdlvixXRVpaHv7Qn0wtoNfxTIgpR2hPp54nGRl3qB2aefQp6JQbjiXqGbcO4RQEyAZbJR_n8HsIJhm3LwEs_QSEmNVbBMNHuGU2JW5_TpBjfcmzbxp-4kTH8Xh5Cnu0kCPlg4t0F2K94t_IDvu9i2VxjVMhCya60QwVxJYygNnn7YaeVuIcQ35IkQ1xzFCVuKzBJPoJnR-WT-AdmF0DsgMQ6hzis62ohRDJbl8hhYp4BAL84rEZdgjecyACz9qPe3zdb7oL99tDC2Qg932az2atv4lfV4rI5duYdiXOz4O6a6YBUTDt9Qm10",
        "referer": "https://10minuteschool.net",
    },
  };

  http.get(url, params);
}
