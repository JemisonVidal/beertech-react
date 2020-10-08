import ISource from "./ISource";

export default class CustomPlayer {

  private videoElementHTML: HTMLVideoElement;

  public constructor(private width: number, private height: number, private message: string) {
    this.width = width;
    this.height = height;
    this.message = message;

    this.videoElementHTML = document.createElement("video");
    this.videoElementHTML.setAttribute("width", this.width.toString());
    this.videoElementHTML.setAttribute("height", this.height.toString());
    this.videoElementHTML.innerHTML = this.message;
  }

  setSources(sources: ISource[]) {
    sources && sources.map(source => {
      const sourceElement = document.createElement("source");
      sourceElement.setAttribute("src", source.src)
      sourceElement.setAttribute("type", source.type)
      this.videoElementHTML.appendChild(sourceElement)
    })
  }

  render(containerHTML: string) {
    try {
      const sectionElement = document.createElement("section");
      sectionElement.setAttribute("id", containerHTML)
      sectionElement.appendChild(this.videoElementHTML);
      document.body.appendChild(sectionElement);
    } catch (error) {
      throw (`Error creating component: ${error}`);
    }
  }
}