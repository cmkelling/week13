import { Component } from "react"

export default class NavigationBar extends Component {
    render() {
      return(
        <div>
            <header className="row">
                <h4 className="col-sm text-left">React App</h4>
                <a className="col-sm text-left nav-link" href="#">Home</a>
                <a className="col-sm text-left nav-link" href="#">About</a>
                <form class="form-inline col-md">
                    <input class="col-sm" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success col-sm" type="submit">Search</button>
                </form>
            </header>
        </div>
        
      )
    }
  }