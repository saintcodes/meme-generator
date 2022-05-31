import React from 'react'

function MemeLibrary({gif}) {
  const {embed_url, id, title} = gif

  return (
    <div>
      <h1>MEME LIBRARY !!!</h1>
      <li className="card">
        <img src={embed_url} alt={title}/>
        <h4>{title}</h4>
        <button>Add to Favorites</button>
      </li>
    </div>
  );
}

export default MemeLibrary