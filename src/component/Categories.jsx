import React, {useState} from "react";

const Categories = ({items}) => {

    const [activeItem, selectItem] = useState()

    const selectItemActive = (index) => {
        selectItem(index)
    }

    console.log(items)

    return (
        <div>
            <div className="categories">
                <ul>
                    <li
                        className={activeItem === null ? 'active' : ''}
                        onClick={() => selectItemActive(null)}>Все
                    </li>

                    {items && items.map((name, i) => <li
                        onClick={() => selectItemActive(i)}
                        className={activeItem === i ? 'active' : ''}
                        key={`${name}_${i}`}>{name}</li>)}
                </ul>
            </div>
        </div>
    )
}

/*class Categories extends React.Component {
    state = {
        activeItem: null,
    }

    selectItemActive = (name,index) => {
        this.setState({
            activeItem: index
        })
    }

    render() {
        const {items} = this.props
        console.log(this.state)
        return (
            <div>
                <div className="categories">
                    <ul>
                        <li>Все</li>

                        {items.map((name, i) => <li
                            className={this.state.activeItem === i ? 'active' : ''}
                            onClick={()=>this.selectItemActive(name,i)}
                            key={`${name}_${i}`}
                        >
                            {name}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}*/


export default Categories;