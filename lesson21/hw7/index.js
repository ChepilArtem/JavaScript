export function createButton(buttonText) {
    const body = document.querySelector("body");
    const button = document.createElement("button");
    button.textContent = buttonText;
    return body.append(button);
}