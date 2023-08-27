import React from 'react';

const MenuCard = ({menuData}) => {
  // console.log(menuData)
  return (
    <>
    <section className='main-card--container'>

    {menuData.map((curElem)=>{
      const{id,name,category,image,description}= curElem;
  return(
   <>
    <div className="card-container" key={id}>
      <div className='card'>
        <div className='card-body'>
          <span className='card-number card-circle subtle'>{id}</span>
            <span className='card-author subtle'> {category}</span>
            <h2 className='card-title'>{name}</h2>
            <span className='card-description subtle'>
            {description}
            </span>
            <div className='card-read'>Read</div>
            </div>
            <img src={image} alt ="images" className='card-media'/>
            <a
                  href='https://www.zomato.com/pune'
                  target='_blank'  // Opens link in a new tab
                  rel='noopener noreferrer'  // Recommended for security
                  className='card-tag subtle'
                >
                  Order Now
                </a>
        </div>
      </div>
    </>
    );
  })}
  </section>
  </>
  );
};
export default MenuCard;
