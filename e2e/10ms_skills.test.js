jest.setTimeout(10000000) 

describe("10MS Programs (ghore-boshe-spoken-english)", () => {

    beforeAll(async () => {
        await page.goto("https://10minuteschool.com/skills/courses/14/ghore-boshe-spoken-english");
    });

    it("Is 10ms Page Running", async () => {
        let selector = "#__next > div:nth-child(7) > main > section.order-2.flex-1.md\\:order-1.md\\:max-w-\\[calc\\(100\\%_-_348px\\)\\].lg\\:max-w-\\[calc\\(100\\%_-_448px\\)\\] > h1"

        await page.waitForSelector(selector);

        const text = await page.$eval(selector, (e) => e.textContent);

        expect(text).toContain("ঘরে বসে Spoken English");
    });
});
