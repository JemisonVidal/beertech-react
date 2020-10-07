export default class CustomPlayer {
  constructor(width, height, message) {
    this.width = width;
    this.height = height;
    this.message = message;

    this.videoElementHTML = document.createElement("video");
    this.videoElementHTML.setAttribute("width", this.width)
    this.videoElementHTML.setAttribute("height", this.height)
    this.videoElementHTML.innerHTML = this.message;
  }

  setSources(sources) {
    sources.map(source => {
      const sourceElement = document.createElement("source");
      sourceElement.setAttribute("src", source.src)
      sourceElement.setAttribute("type", source.type)
      this.videoElementHTML.appendChild(sourceElement)
    })
  }

  render(containerHTML) {
    try {
      const containerElement = document.getElementById(containerHTML);
      if (!containerElement) {
        const sectionElement = document.createElement("section");
        sectionElement.setAttribute("id", containerHTML)
        sectionElement.appendChild(this.videoElementHTML);
        document.body.appendChild(sectionElement);
      } else {
        containerHTML.appendChild(this.videoElementHTML);
      }
    } catch (error) {
      throw (`Error: ${error}`);
    }
  }
}