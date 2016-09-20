import React from 'react'
import NavLink from './NavLink'


export default class Repos extends React.Component {
   constructor(props, context){
    super(props)
    context.router
  }

  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    console.log(path)
    this.context.router.push(path)
  }

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li>
            <form>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <input type="submit" value="submit" />
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }

}


Repos.contextTypes = {
    router: React.PropTypes.object
}

// export default React.createClass({


// })
