import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({id, description, urls}) => {
        // return <div key={id}>
        //      <img src={urls.regular} alt={description}/>
        //     </div>
        return (
          <div className="ui column grid" key={id}>
            <div className="column">
              <div className="ui fluid card">
                <div className="image">
                  <img src={urls.regular} alt={description} />
                </div>
                <div className="content">
                  <h5 className="header">{description}</h5>
                </div>
              </div>
            </div>
          </div>
        );
  })

  return (
    <div>
      {images}
    </div>
  )
}

export default ImageList;