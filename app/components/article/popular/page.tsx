'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function NewsPage() {
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
    <div className="bg-black text-white">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Most Popular Section */}
          <div className="lg:col-span-2 bg-black p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Most Popular</h2>
            {blogs.slice(0, 1).map((blog) => (
              <div key={blog.id} className="flex flex-col lg:flex-row">
                <Image
                  src={`/articles/3.jpg`}
                  alt={blog.title}
                  width={600}
                  height={300}
                  className="rounded-lg w-full lg:w-1/2"
                />
                <div className="lg:pl-8 mt-4 lg:mt-0">
                  <h3 className="text-xl lg:text-2xl font-bold">{blog.title}</h3>
                  <p className="text-gray-400 mt-4 text-sm lg:text-base">
                    {blog.description.substring(0, 100)}...
                  </p>
                  <p className="text-green-500 mt-4 text-sm lg:text-base">
                    {blog.category} · <span className="text-white">{new Date(blog.createdAt).toLocaleDateString()}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Recents Section */}
          <div className="bg-black p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Recents</h2>
            <ul>
              {blogs.map((blog) => (
                <li key={blog.id} className="mb-6">
                  <a href="#" className="flex items-center text-gray-400 text-sm lg:text-base">
                    <span>{blog.title}</span>
                  </a>
                  <p className="text-green-500 text-sm lg:text-base mt-2">
                    {blog.category} · <span className="text-white">{new Date(blog.createdAt).toLocaleDateString()}</span>
                  </p>
                </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  
  );
}
