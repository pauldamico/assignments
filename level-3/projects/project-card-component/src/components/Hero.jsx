import photogrid from "../images/photogrid.png"
export default function Hero (){
    return(
        <section className="hero">
            <div className="hero-photo-div">
            <img src={photogrid} className="hero-photo" />
            </div><div className="hero-lower-div">

           
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
            </div>
        
        </section>
    )
}