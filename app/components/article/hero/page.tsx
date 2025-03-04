'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function NewsGrid() {
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
    <div className="bg-black text-white max-w-12xl mx-auto">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Left side: large card */}
          <div className="lg:col-span-2">
          {blogs.slice(0, 1).map((blog) => (
            <div key={blog.id} className="bg-black rounded-lg p-4 h-full flex flex-col justify-end">
              <Image 
                src="/articles/3.jpg" 
                alt="Large placeholder image" 
                width={600} 
                height={400}
                className="w-full h-70 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">
              {blog.title}
              </h2>
              <p className="text-green-500">
              {blog.category} · <span className="text-white">{new Date(blog.createdAt).toLocaleDateString()}</span>
              </p>
            </div>
          ))}
          </div>

          {/* Right side: smaller cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogs.slice(0, 9999).map((blog) => (
                <div key={blog.id} className="bg-black rounded-lg p-3">
                  <Image 
                    src="/articles/2.jpg" 
                    alt="Small placeholder image" 
                    width={150} 
                    height={100}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <div>
                    <p className="text-sm mb-2">
                    {blog.title}
                    </p>
                    <p className="text-green-500 text-sm">
                    {blog.category} <span className='text-white'> {new Date(blog.createdAt).toLocaleDateString()} </span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
