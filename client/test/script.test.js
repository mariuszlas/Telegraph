const fs = require("fs");
const path = require("path");
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

    test("it updates text content in post paragraphs", () => {
        const testData = {
            title: "post",
            author: "author",
            body: "text",
            path: "text-2021-3-21-23-23",
        };
        script.displayPost(testData);

        const title = document.querySelector("#titlePost");
        const author = document.querySelector("#userPost");

        expect(title.textContent).toBe(testData.title);
        expect(author.textContent).toBe(testData.author);
    });
});
