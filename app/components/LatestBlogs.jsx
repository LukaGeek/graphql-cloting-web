"use client";

import Image from "next/image";

export default function LatestBlogs() {
  const blogs = [
    {
      id: 1,
      image: "/Blogs/1.webp",
      title: "10 Must-Have Fashion Items for This Summer",
      excerpt:
        "Discover the hottest fashion trends and must-have pieces for your summer wardrobe. Stay stylish and beat the heat with these essentials.",
      author: "admin",
      date: "June 6, 2025",
    },
    {
      id: 2,
      image: "/Blogs/2.webp",
      title: "Skincare Secrets: Achieve Glowing Skin Naturally",
      excerpt:
        "Learn how to take care of your skin with natural products and easy tips that will leave your skin glowing and healthy.",
      author: "admin",
      date: "June 4, 2025",
    },
    {
      id: 3,
      image: "/Blogs/3.webp",
      title: "How to Style Oversized Jackets Effortlessly",
      excerpt:
        "Oversized jackets are in! Here’s how you can style them in ways that look chic and effortless for any occasion.",
      author: "admin",
      date: "June 2, 2025",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-3">
          Latest Articles
        </h2>
        <p className="text-gray-600 text-center max-w-md">
          Stay updated with the latest fashion, beauty, and lifestyle articles
          curated by our experts.
        </p>
        <div className="w-16 h-1 bg-red-500 mt-4"></div>
      </div>
      <div className="flex flex-col space-y-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col sm:flex-row gap-6 items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <div className="relative w-full sm:w-1/3 h-56 rounded overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover object-center"
                draggable="false"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                <span>
                  By {blog.author} | {blog.date}
                </span>
                <span className="text-red-500 hover:underline font-medium">
                  Read more →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
