export default class ReadMore {
  constructor(text) {
    this.text = document.querySelectorAll(text);
  }


  addReadMore(items, size){
    const fistPartText = items.innerText.slice(0,size/2)
    const secondPartText = items.innerText.substring(size/2)
    
    items.children[0].textContent = fistPartText
    
    // items.textContent = fistPartText

    this.addElement('p',  fistPartText,items.id, )
        
  }

  addElement(element, content, elementId){
    const newElement = document.createElement(element)
    const newContent = document.createTextNode(content)

    newElement.appendChild(newContent)
    // document.body.replaceChild(newElement, currentElement)
  }

  
  cuttingText(items) {
    const textSize = items.innerText.length;
    // console.log(items);
    
    if (textSize > 500) {
      // const halfOfTheText = items.innerText.substring(textSize/2)
      this.addReadMore(items, textSize)
    }
  }

  init() {
    if (this.text) {
      this.text.forEach((item) => this.cuttingText(item));
    }

    return this;
  }
}
