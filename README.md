# DrawSvg
Draw an svg stroke with the scroll 

### Usage
```js
let draw = new DrawSvg();
draw.addElement("draw-0").addElement("draw-1").addElement("draw-2");
window.addEventListener("scroll", draw.paint.bind(draw));
```
