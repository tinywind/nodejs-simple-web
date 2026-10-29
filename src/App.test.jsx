import React, {act} from "react";
import {createRoot} from "react-dom/client";
import {afterEach, beforeEach, expect, it, vi} from "vitest";
import App from "./App";
import PropsValidation from "./component/PropsValidation";

let container;
let root;
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
const base = "/tinywind/nodejs-simple-web";

beforeEach(() => {
    vi.stubEnv("BASE_URL", base + "/");
    window.history.replaceState({}, "", base + "/");
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
});

afterEach(async () => {
    await act(() => root.unmount());
    container.remove();
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
});

async function render(path = "/") {
    window.history.replaceState({}, "", base + path);
    await act(() => root.render(<App/>));
}

async function click(element) {
    expect(element).toBeTruthy();
    await act(() => element.click());
}

async function fill(input, value) {
    await act(() => {
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set.call(input, value);
        input.dispatchEvent(new Event("input", {bubbles: true}));
    });
}

it("renders the home page and preserves route parameters", async () => {
    await render();
    expect(container.querySelector("h2").textContent).toBe("ROOT");
    await click(container.querySelector('a[href="/tinywind/nodejs-simple-web/path-value/abc"]'));
    expect(container.querySelector(".App-intro").textContent.trim()).toBe("abc");
    await click(container.querySelector('a[href="/tinywind/nodejs-simple-web/topic"]'));
    expect(container.querySelector(".App-intro").textContent).toContain("match.url: /topic");
    await click(container.querySelector('a[href="/tinywind/nodejs-simple-web/incorrect-page"]'));
    expect(container.querySelector(".App-intro").textContent).toContain("Following page is not found: /incorrect-page");
});

it("keeps Redux increments, decrements and configurable step values", async () => {
    await render("/using-redux");
    expect(container.querySelector(".App-intro h1").textContent).toBe("VALUE: 0");
    const buttons = container.querySelectorAll(".App-intro button");
    await click(buttons[0]);
    expect(container.querySelector(".App-intro h1").textContent).toBe("VALUE: 1");
    await click(buttons[1]);
    expect(container.querySelector(".App-intro h1").textContent).toBe("VALUE: 0");
    await fill(container.querySelector(".App-intro input"), "5");
    await click(buttons[0]);
    expect(container.querySelector(".App-intro h1").textContent).toBe("VALUE: 5");
});

it("keeps ref initialization and input focus", async () => {
    await render("/using-ref");
    const input = container.querySelector(".App-intro input");
    await click(container.querySelector(".App-intro button"));
    expect(input.value).toBe("initialized");
    expect(document.activeElement).toBe(input);
});

it("inserts, edits and removes contacts through immutable updates", async () => {
    await render("/iterated-state-value");
    const intro = container.querySelector(".App-intro");
    const inputs = intro.querySelectorAll("input");
    const button = label => [...intro.querySelectorAll("button")].find(item => item.textContent === label);
    expect(intro.querySelectorAll("li")).toHaveLength(4);
    await fill(inputs[0], "Delta");
    await fill(inputs[1], "010-0000-0005");
    await click(button("Insert"));
    expect(intro.querySelectorAll("li")).toHaveLength(5);
    await click(intro.querySelectorAll("li")[4]);
    await fill(inputs[2], "Echo");
    await click(button("Edit"));
    expect(intro.textContent).toContain("Echo");
    expect(intro.textContent).not.toContain("Delta");
    await click(button("Remove selected contact"));
    expect(intro.querySelectorAll("li")).toHaveLength(4);
    expect(intro.textContent).not.toContain("Echo");
});

it("preserves the required-prop warning example", async () => {
    const messages = [];
    vi.spyOn(console, "error").mockImplementation((...args) => messages.push(args.join(" ")));
    await act(() => root.render(<PropsValidation title="Example"/>));
    expect(messages.some(message => message.includes("body") && message.includes("required"))).toBe(true);
});
