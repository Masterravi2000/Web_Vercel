'use client'
import { useEffect, useState } from 'react';
import NewsCard from './../description/newscard'

export default function Description() {
  const [blogs, setBlogs] = useState<{ id: number; title: string; category: string; createdAt: string; description: string; }[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('api/blog', {
          method: 'GET',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibXJpbm1veWhhbGRlcjg1OUBnbWFpbC5jb20iLCJpYXQiOjE3Mzg3MzA4OTN9.u4ruJyQ9YfZEzxco1a3Mcwe25EvZnx58h_jJk0x9Fuc',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {blogs.map((blog) => (
          <NewsCard 
          key={blog.id}
          title={blog.title}
          category={blog.category}
          createdAt={new Date(blog.createdAt).toLocaleDateString()}
          description={blog.description}/>
      ))}
      </div>
    </div>
  )
}

