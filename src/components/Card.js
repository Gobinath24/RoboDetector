import React from 'react';

const Card = (props) => {
    const { name, email , id} = props;
    return(
        <div className='bg-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={`https://robohash.org/${id}?set=set3`} alt='robots' />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        </div>
    );
}

export default Card;