import React from 'react';

export interface Post {
  title: string;
  createdAt: string;
  slug: string;
  featuredImage: {
    url: string;
  };
}

export interface Category {
  name: string;
  slug: string;
  children?: React.ReactNode;
}
