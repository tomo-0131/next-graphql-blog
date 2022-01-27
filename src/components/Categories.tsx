import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCategories } from '../services';
import { Category } from '../type';

// export interface Category {
//   name: string;
//   slug: string;
//   children?: React.ReactNode;
// }

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className='mb-8 rounded-md bg-white p-8 pb-12 shadow-lg'>
      <h3 className='mb-8 border-b pb-4 text-xl font-semibold'>Categories</h3>
      {categories.map((category: Category, index) => (
        <>
          <Link href={`/category/${category.slug}`} key={index}>
            <span
              className={`block cursor-pointer ${
                index === categories.length - 1 ? null : 'border-b'
              } mb-3 pb-3`}
            >
              {category.name}
            </span>
          </Link>
        </>
      ))}
    </div>
  );
}

export default Categories;
