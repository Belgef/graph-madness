import React from 'react';
import p5 from 'p5';

let t = 0, i = -200;

class Graph extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        alert("created")
    }

    Sketch = (p) => {

        p.setup = () => {
            p.createCanvas(400, 400);
            p.background(220);
        }

        p.draw = () => {
            p.translate(200, 200)
            if (i >= 200) return;
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
        alert("mount")
    }

    render() {
        return (
            <div ref={this.myRef}>

            </div>
        )
    }
}

export default Graph;