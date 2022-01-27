import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

import { CalendarIcon } from '@heroicons/react/solid';

const PostCard: React.FC = ({ post }: any) => {
  console.log(post);

  return (
    <div className='mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8'>
      <div className='relative mb-6 overflow-hidden pb-80 shadow-md'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg'
        />
      </div>
      <h1 className='mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-300 hover:text-blue-500'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block items-center justify-center text-center lg:flex'>
        <div className='mb-4 ml-2 flex items-center justify-center'>
          <Image
            src={post.author.photo.url}
            alt={post.author.name}
            height={30}
            width={30}
            objectFit='cover'
            className='rounded-full align-middle'
          />
          <p className='inline pl-2 align-middle text-gray-700'>{post.author.name}</p>
        </div>
      </div>
      <div className='mb-4 text-center font-medium text-gray-700'>
        <CalendarIcon className='-mt-1 mr-2 inline h-5 w-5 text-red-300' />
        <span className=''>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
      <h2 className='mx-2 text-center'>{post.excerpt}</h2>
    </div>
  );
};

export default PostCard;
