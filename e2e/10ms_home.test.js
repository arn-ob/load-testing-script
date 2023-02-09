
jest.setTimeout(10000000) 



describe("10MS HomePage", () => {

  beforeAll(async () => {
    await page.goto("https://10minuteschool.com");
  });

  it("Is 10ms Page Running", async () => {
    let selector = "#__next > div:nth-child(4) > div.container.mt-5 > div.py-5.flex.flex-col.md\\:flex-row.md\\:flex-\\[2_2_0\\%\\].mb-3.md\\:mb-20 > div.flex-1.grid.grid-cols-\\[1fr_1fr\\].gap-4.md\\:mr-\\[57px\\].mb-10.md\\:mb-0 > div:nth-child(3) > h2";

    await page.waitForSelector(selector);

    const text = await page.$eval(selector, (e) => e.textContent);
    
    expect(text).toContain("3,000+");
  });
});




describe("10MS Academic Page", () => {

  beforeAll(async () => {
    await page.goto("https://10minuteschool.com/academic/10/?group=science");
  });

  it("Is 10ms Page Running", async () => {

    let selector = "#__next > div:nth-child(4) > div.mb-10 > div > h1";

    await page.waitForSelector(selector);

    const text = await page.$eval(selector, (e) => e.textContent);
    
    expect(text).toContain("বিষয়ভিত্তিক ফ্রি ভিডিও");
  });
});




describe("10MS skills Page", () => {

  beforeAll(async () => {
    await page.goto("https://10minuteschool.com/skills/");
  });

  it("Is 10ms Page Running", async () => {

    let selector = "#__next > h1";

    await page.waitForSelector(selector);

    const text = await page.$eval(selector, (e) => e.textContent);
    
    expect(text).toContain("স্কিলস কোর্সসমূহ");
  });
});



describe("10MS admission Page", () => {

  beforeAll(async () => {
    await page.goto("https://10minuteschool.com/admission/");
  });

  it("Is 10ms Page Running", async () => {

    let selector = "#__next > h1";

    await page.waitForSelector(selector);

    const text = await page.$eval(selector, (e) => e.textContent);
    
    expect(text).toContain("ভর্তি প্রস্তুতি কোর্সসমূহ");
  });
});



describe("10MS jobs-prep Page", () => {

  beforeAll(async () => {
    await page.goto("https://10minuteschool.com/jobs-prep/");
  });

  it("Is 10ms Page Running", async () => {

    let selector = "#__next > div.mb-11 > h1";

    await page.waitForSelector(selector);

    const text = await page.$eval(selector, (e) => e.textContent);
    
    expect(text).toContain("চাকরি প্রস্তুতি কোর্সসমূহ");
  });
});



describe("10MS online-batch Page", () => {

  beforeAll(async () => {
    await page.goto("https://10minuteschool.com/online-batch/");
  });

  it("Is 10ms Page Running", async () => {

    let selector = "#__next > div.relative.\\[background-size\\:20px_20px\\].md\\:\\[background-size\\:40px_40px\\] > div.container.relative.z-\\[1\\].flex.flex-col.items-center.justify-center.py-8.text-center.md\\:py-16 > div.mb-0 > div > div.max-w-\\[710px\\].mx-auto > h1";

    await page.waitForSelector(selector);

    const text = await page.$eval(selector, (e) => e.textContent);
    
    expect(text).toContain("৬ষ্ঠ-১০ম শ্রেণির পড়াশোনার সবকিছু নিয়ে টেন মিনিট স্কুল অনলাইন ব্যাচ!");
  });
});