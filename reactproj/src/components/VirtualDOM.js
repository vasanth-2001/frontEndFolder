import React, { Component } from 'react'

class VirtualDOM extends Component {
    constructor(props) {
        super(props)

        this.state = {
            game: [
                { id: 101, name: "cricket", players: "11" },
                { id: 102, name: "Kabaddi", players: "07" },
                { id: 103, name: "Tennis", players: "04" },
                { id: 104, name: "BasketBall", players: "06" }
            ],
            courses: ["Javascript", "react", "Angular", "Jaava", "python", "DotNet"]
        }
    }
    render() {
        const { game, courses } = this.state;
        return (
            <div>
                <h2>This is Virtual DOM</h2>
                <ul>
                    {
                        game.length > 0 && game.map((val, index) => {
                            return <li key={val.id}>{val.id}-{val.name}-{val.players}</li>
                        })
                    }
                </ul>
                <hr />
                <label>Select course : </label>
                <select>
                    {
                        courses.map((val, index) => {
                            return <option value={val} key={index}>{val}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

export default VirtualDOM