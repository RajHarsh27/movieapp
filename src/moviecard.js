import {Component} from 'react';

function MovieCard(props){
    

        const {movies,addStars,decStars,toggleFav,toggleCart}=props;
        const {title,plot,price,rating,stars,fav,cart,poster}=props.movies;
        return(
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt='Poster' src={poster}/>
                    </div>

                    <div className='right'>
                    <div className='title'>{title}</div>
                    <div className='plot'>{plot}</div>
                    <div className='price'>Rs{price}</div>

                    <div className='footer'>
                    <div className='rating'>{rating}</div>
                    <div className='star-dis'>

                        <img className='str-btn' alt='decrease'
                         src='https://cdn-icons-png.flaticon.com/128/56/56889.png'
                         onClick={()=>{decStars(movies)}}
                         />

                        <img alt='star' 
                        src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'
                         className='stars'/>

                        <img className='str-btn' alt='increase'
                         src='https://cdn-icons-png.flaticon.com/128/32/32563.png'
                            onClick={()=>{addStars(movies)}}
                         />

                        <span className='starCount'>{stars}</span>

                    </div>

                    {/* {fav? <button className='unfavourite-btn' onClick={this.handleFav}>Unfavourite</button>:
                    <button className='favourite-btn' onClick={this.handleFav}>Favourite</button>} */}

                    <button className={fav?'unfavourite-btn':'favourite-btn'}
                     onClick={()=>{toggleFav(movies)}}>{fav?'unfavourite':'favourite'}</button>
                    

                    <button className={cart?"cart-btn":"removecart-btn"}
                    onClick={()=>{toggleCart(movies)}}>{cart?"Add to cart":"Remove from cart"}</button>
                    
                    </div>

                    </div>

                    

                </div>
            </div>
        )
    
}

export default MovieCard;