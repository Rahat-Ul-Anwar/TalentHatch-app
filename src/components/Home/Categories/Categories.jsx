import Category from "../Category/Category";
import image1 from '../../../assets/images/image-1.png' 
import image2 from '../../../assets/images/image-2.png' 
import image3 from '../../../assets/images/image-3.png' 
import image4 from '../../../assets/images/image-4.jpg' 

const Categories = () => {
   const jobCategories =  [
    {
      "id": "1",
      "title": "Information Technology",
      "image": image1,
      "num_jobs": 1500
    },
    {
      "id": "2",
      "title": "Sales and Marketing",
      "image": image2,
      "num_jobs": 800
    },
    {
      "id": "3",
      "title": "Healthcare",
      "image": image3,
      "num_jobs": 1200
    },
    {
      "id": "4",
      "title": "Finance and Accounting",
      "image": image4,
      "num_jobs": 950 
    }
  ]
    
    


  return (
    <div className="mt-20">
          <h2 className="text-3xl text-center font-bold">Job Category List</h2>
          <div className="grid gap-10 mt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {
                  jobCategories.map(category => <Category category={category} key={category.id}></Category>)
              }
          </div>
    </div>
  );
};

export default Categories;
