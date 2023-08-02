import {Component} from 'react';
import MovieCard from './moviecard';
import {movies} from './moviedata';

class MovieList extends Component{
    


    


    render(){
        // const {title,plot,price,rating,stars,fav,cart,poster}=this.state.movies;
        const {movies,addStars,decStars,toggleFav,toggleCart}=this.props;
        return(
            <>

                    {movies.map((movie)=><MovieCard movies={movie} 
                                                    addStars={addStars}
                                                    decStars={decStars}
                                                    toggleFav={toggleFav}
                                                    toggleCart={toggleCart}
                                                    key={movie.id}
                                            />)}
                
            </>
        )
    }
}

export default MovieList;








// addStars=()=>{
//         if(this.state.stars>=5){
//             return;
//         }
//         // Ist FORM  of setState
//             // this.setState({
//             //     stars:this.state.stars+0.5
//             // })

//         // IInd FORM of setState
//             this.setState((prevState)=>{
//                 return{
//                     stars:prevState.stars+0.5
//                 }
//             })

//         // this.state.stars+=0.5;
//         // console.log("this.state.stars:", this.state.stars)
//     }
    
    

//     decStars=()=>{
//         // Ist FORM  of setState
//         if(this.state.stars<=0){
//             return;
//         }
//             this.setState({
//                 stars:this.state.stars-0.5
//             })

//         // IInd FORM of setState
//         //     this.setState((prevState)=>{
//         //         return{
//         //             stars:prevState.stars-0.5
//         //         }
//         //     })

//         // this.state.stars-=0.5;
//         // console.log("this.state.stars:", this.state.stars)
//     }


//     handleCart=()=>{
//         this.setState({
//             cart: !this.state.cart
//         })
//     }


//     handleFav=()=>{
//         this.setState({
//             fav: !this.state.fav
//         })
//     }
