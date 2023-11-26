
export class DrawSvg {

    #prep = [];

    addElement(elem) {
        let path = document.getElementById(elem);

        if(path) {
            let length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            this.#prep.push(this.#drawLine.bind(this, path, length));
        } else {
            console.error("Could not find the element. The element has to be an ID!");
        }
        return this;
    }

    paint() {
        if(typeof this.#prep === "object" && this.#prep.length > 0) {
            for(let i = 0; i < this.#prep.length; i++) this.#prep[i]();
        } else {
            console.warn("There is nothing to paint! Please add some elements with @addElement.");
        }
    }
    
    #drawLine(path, length) {
        let scrollpercent = this.#calcDocumentHeight(), 
        draw = length * scrollpercent;
        path.style.strokeDashoffset = length - draw;
    }

    #calcDocumentHeight() {
        return (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    }
}
