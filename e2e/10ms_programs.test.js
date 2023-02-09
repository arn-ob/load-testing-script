jest.setTimeout(10000000) 

describe("10MS Programs (hsc-24-cc-sci-1st-paper)", () => {

    beforeAll(async () => {
        await page.goto("https://10minuteschool.com/programs/136/hsc-24-cc-sci-1st-paper/");
    });

    it("Is 10ms Page Running", async () => {
        let selector = "#__next > main > div.md\\:max-w-\\[calc\\(100\\%_-_448px\\)\\].mx-md\\:order-2 > div.container > h1"

        await page.waitForSelector(selector);

        const text = await page.$eval(selector, (e) => e.textContent);

        expect(text).toContain("HSC 2024 ক্র্যাশ কোর্স - প্রথম পত্র [বিজ্ঞান বিভাগ]");
    });
});


describe("10MS Programs (hsc-23-sesh-muhurter-prostuti-course)", () => {

    beforeAll(async () => {
        await page.goto("https://10minuteschool.com/programs/152/hsc-23-sesh-muhurter-prostuti-course-science-group/");
    });

    it("Is 10ms Page Running", async () => {
        let selector = "#__next > main > div.md\\:max-w-\\[calc\\(100\\%_-_448px\\)\\].mx-md\\:order-2 > div.container > h1"

        await page.waitForSelector(selector);

        const text = await page.$eval(selector, (e) => e.textContent);

        expect(text).toContain("HSC 23 শেষ মুহূর্তের প্রস্তুতি কোর্স [বিজ্ঞান বিভাগ]");
    });
});


describe("10MS Programs (hsc-english-short-syllabus-course)", () => {

    beforeAll(async () => {
        await page.goto("https://10minuteschool.com/programs/105/hsc-english-short-syllabus-course/");
    });

    it("Is 10ms Page Running", async () => {
        let selector = "#__next > main > div.md\\:max-w-\\[calc\\(100\\%_-_448px\\)\\].mx-md\\:order-2 > div.container > h1"

        await page.waitForSelector(selector);

        const text = await page.$eval(selector, (e) => e.textContent);

        expect(text).toContain("HSC English Crash Course");
    });
});



describe("10MS Programs (hsc-test-paper-solve-course-accounting-finance-economics)", () => {

    beforeAll(async () => {
        await page.goto("https://10minuteschool.com/programs/6/hsc-test-paper-solve-course-accounting-finance-economics");
    });

    it("Is 10ms Page Running", async () => {
        let selector = "#__next > main > div.md\\:max-w-\\[calc\\(100\\%_-_448px\\)\\].mx-md\\:order-2 > div.container > h1"

        await page.waitForSelector(selector);

        const text = await page.$eval(selector, (e) => e.textContent);

        expect(text).toContain("HSC - শর্ট সিলেবাস টেস্ট পেপার সল্ভ কোর্স  (Accounting, Finance)");
    });
});


describe("10MS Programs (varsity-gst-admission-2022)", () => {

    beforeAll(async () => {
        await page.goto("https://10minuteschool.com/programs/103/varsity-gst-admission-2022/");
    });

    it("Is 10ms Page Running", async () => {
        let selector = "#__next > main > div.md\\:max-w-\\[calc\\(100\\%_-_448px\\)\\].mx-md\\:order-2 > div.container > h1"

        await page.waitForSelector(selector);

        const text = await page.$eval(selector, (e) => e.textContent);

        expect(text).toContain("ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২২");
    });
});