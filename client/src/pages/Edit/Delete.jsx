import React from 'react'

const Delete = () => {
    return (
        <div className="dropdown">
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Delete
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/edit">Add</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Delete