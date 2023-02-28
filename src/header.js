export default function header()
{
    const content = document.querySelector("#content");
    const header = document.createElement("div");
    header.classList.add("header");

    const img = document.createElement("img");
    img.setAttribute("src","iconn.png");

    const headerText = document.createElement("div");
    headerText.classList.add("header-text");
    headerText.innerHTML = "TO-DO LIST"

    header.appendChild(img);
    header.appendChild(headerText);
    content.appendChild(header);
}