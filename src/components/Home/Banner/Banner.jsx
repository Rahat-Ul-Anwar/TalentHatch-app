import banner from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="hero py-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="lg:w-1/2 rounded-lg shadow-2xl" />
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">
            One Step <br />
            Closer To Your <br />
         <span className="text-blue-700">   Dream Job</span>
          </h1>
          <p className="py-6 w-2/3">
            "Discover Your Next Career Opportunity Here! Explore a world of
            exciting job prospects with our user-friendly platform. Find your
            perfect job match today!"
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
