import Link from 'next/link';

const categories = [
  {
    name: 'React',
    slug: 'react',
  },
  {
    name: 'Web Dev',
    slug: 'wev-dev',
  },
];

function Header() {
  return (
    <div className='container mx-auto mb-8 px-10'>
      <div className='inline-block w-full border-b border-white py-8'>
        <div>
          <Link href='/'>
            <span className='cursor-pointer text-3xl font-bold text-white'>BearBlog</span>
          </Link>
        </div>

        <div className='hidden md:float-left md:contents'>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='mt-2 ml-4 cursor-pointer align-middle font-semibold md:float-right'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
