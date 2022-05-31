import React from 'react'

function MemeLibrary({gif}) {
  const {id, title} = gif

  return (
    <li className="card">
      <img src={gif.images.original.url} alt={title}/>
      <h4>{title}</h4>
      <button>Add to Favorites</button>
    </li>
  );
}

export default MemeLibrary