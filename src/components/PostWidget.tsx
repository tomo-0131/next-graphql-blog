import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getRecentPost, getSimilarPosts } from '../services';
import { Post } from '../type';

const PostWidget = ({ categories, slug }: any) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPost(categories, slug).then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className='mb-8 rounded-lg bg-white p-8 shadow-lg'>
      <h3 className='mb-8 border-b pb-4 text-xl font-semibold'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post: Post) => (
        <div key={post.title} className='flex w-full items-center'>
          <div className='flex-inline w-16'>
            <Image
              alt={post.title}
              height={60}
              width={60}
              className='rounded-full align-middle'
              src={post.featuredImage.url}
            />
          </div>
          <div className='ml-4 text-gray-500'>
            <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
