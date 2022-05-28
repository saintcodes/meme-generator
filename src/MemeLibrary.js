import React from 'react'

function MemeLibrary({gif}) {
  const {embed_url, id, title} = gif

  return (
    <li className="card">
      <img src={embed_url} alt={title}/>
      <h4>{title}</h4>
      <button>Add to Favorites</button>
    </li>
  );
}

export default MemeLibrary