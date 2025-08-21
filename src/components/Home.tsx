import HeroButton from "./HeroButton";
import Hero from "../assets/hero-bg.jpg";

const Home = () => {
    return (
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
  
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
          <div className="inset-0 bg-black bg-opacity-60">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-center">
            EM Software Solutions
          </h1>
          </div>
          <br/>
          <br/>
          <HeroButton />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>&#169; 2024 Evan Mastro</p>
        </div>
      </section>
    );
  };
  
  export default Home;