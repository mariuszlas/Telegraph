const fs = require("fs");
const path = require("path");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"));
document.documentElement.innerHTML = html.toString();
const script = require("../static/script");

describe("displayPost", () => {
    test("check for number of sections", () => {
        const sections = document.querySelectorAll("section");

        expect(sections.length).toBe(3);
    });

    test("number of paragraphs within postSection", () => {
        const paragraphs = document.querySelectorAll("p.postField");

        expect(paragraphs.length).toBe(5);
    });
});
