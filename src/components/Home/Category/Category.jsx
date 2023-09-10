

const Category = ({ category }) => {
    const { id, title, num_jobs, image } = category;
    return (
        <div className="border p-10">
            <img src={image} alt="" className="w-20 my-5" />
            <h5 className="text-xl font-bold my-3">{title}</h5>
            <p>{num_jobs} jobs remaining</p>
          
        </div>
    );
};

export default Category;