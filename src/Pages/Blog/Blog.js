import React, { useState } from 'react';
import './Blog.css';

// Importing images directly
import RHook from "./RHook.jpg";
import FlexboxGuide from "./RHook.jpg";
import ES6Features from "./RHook.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    date: "February 10, 2025",
    author: "John Doe",
    excerpt: "React Hooks are functions that let you use state and other React features without writing a class...",
    image: RHook,
    category: "Tech"
  },
  {
    id: 2,
    title: "A Guide to CSS Flexbox",
    date: "January 25, 2025",
    author: "Jane Smith",
    excerpt: "CSS Flexbox is a layout module that makes it easier to design flexible responsive layout structure...",
    image: FlexboxGuide,
    category: "Design"
  },
  {
    id: 3,
    title: "JavaScript ES6 Features",
    date: "December 15, 2024",
    author: "Alice Johnson",
    excerpt: "ES6 introduced several new features to JavaScript, including let and const, arrow functions, template literals...",
    image: ES6Features,
    category: "Tech"
  },
  {
    id: 4,
    title: "Advanced React Patterns",
    date: "March 5, 2025",
    author: "Michael Brown",
    excerpt: "Explore advanced patterns in React to improve your application's performance and maintainability...",
    image: RHook,
    category: "Tech"
  },
  {
    id: 5,
    title: "State Management with Redux",
    date: "April 10, 2025",
    author: "Sarah Wilson",
    excerpt: "Learn how to manage state in your React applications using Redux...",
    image: RHook,
    category: "Tech"
  },
  {
    id: 6,
    title: "Marketing Strategies for 2025",
    date: "May 15, 2025",
    author: "Emily Davis",
    excerpt: "Discover the latest marketing strategies to boost your business in 2025...",
    image: FlexboxGuide,
    category: "Marketing"
  },
  {
    id: 7,
    title: "Social Media Marketing Tips",
    date: "June 20, 2025",
    author: "David Lee",
    excerpt: "Learn effective social media marketing tips to engage your audience...",
    image: ES6Features,
    category: "Marketing"
  },
  {
    id: 8,
    title: "Content Marketing Best Practices",
    date: "July 10, 2025",
    author: "Sophia Martinez",
    excerpt: "Explore the best practices for content marketing to drive traffic and sales...",
    image: RHook,
    category: "Marketing"
  },
  {
    id: 9,
    title: "Healthy Living Tips",
    date: "August 1, 2025",
    author: "Laura Green",
    excerpt: "Discover tips for a healthier lifestyle...",
    image: FlexboxGuide,
    category: "Lifestyle"
  },
  {
    id: 10,
    title: "Traveling the World",
    date: "September 15, 2025",
    author: "Mark Brown",
    excerpt: "Explore the best travel destinations around the world...",
    image: ES6Features,
    category: "Travel"
  },
  {
    id: 11,
    title: "Delicious Recipes",
    date: "October 10, 2025",
    author: "Anna White",
    excerpt: "Try out these delicious recipes...",
    image: RHook,
    category: "Food"
  },
  {
    id: 12,
    title: "Fitness and Wellness",
    date: "November 20, 2025",
    author: "Chris Black",
    excerpt: "Stay fit and healthy with these wellness tips...",
    image: FlexboxGuide,
    category: "Health"
  },
  // Add more blog posts as needed
];

const categories = ["All", "Tech", "Design", "Marketing", "Lifestyle", "Travel", "Food", "Health"];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog-container">
      <h1 className="blog-heading">Blog</h1>
      <div className="blog-navbar">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1); // Reset to first page when category changes
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={`blog-posts ${selectedCategory === "Marketing" ? "marketing-layout" : ""}`}>
        {currentPosts.map((post, index) => (
          <div key={post.id} className={`blog-post ${selectedCategory === "Marketing" && index >= 2 ? "full-width" : ""}`}>
            <img src={post.image} alt={post.title} className="blog-post-image" />
            <div className="blog-post-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-date">{post.date} by {post.author}</p>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <button className="read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Blog;