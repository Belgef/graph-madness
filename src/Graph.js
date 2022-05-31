import React from 'react';
import p5 from 'p5';

let width = window.innerWidth-100, height = window.innerHeight-70;
let t = 0, i = -width/2;

class Graph extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        p.setup = () => {
            p.createCanvas(width, height);
            p.background(136,227,230);
        }

        p.draw = () => {
            p.translate(p.width/2, p.height/2)
            if (i >= p.width/2) return;
            if (t < 1) t++;
            else {
                t = 0
                var x = i / 40, y = p.cos(x);
                var x2 = (i + 1) / 40, y2 = p.cos(x2);
                p.line(i, -y * 40, i + 1, -y2 * 40);
                i++
            }
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            <div ref={this.myRef}>

            </div>
        )
    }
}

export default Graph;