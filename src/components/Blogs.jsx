import { FaMedium } from "react-icons/fa6";
import projectCycleImg from "../assets/Project cycle.jpeg";
import neuralNetworkImg from "../assets/Neural Network.jpeg";
import EntrepreneurshipImg from "../assets/EntrepreneurshipImg.png";

// Blog data
const blogs = [
  {
    id: 1,
    title: "Introducing AI Project Cycle",
    excerpt: "Project cycle is the steps taken to complete a task...",
    author: "Vikas Kashyap",
    date: "Mar 28, 2025",
    readTime: "7 min read",
    mediumLink: "https://medium.com/@vikas_kashyap/introducing-ai-project-cycle-5ad0025a6b0c",
    image: projectCycleImg,
    content: `Project cycle is the steps taken to complete a task from beginning to end.

An AI project cycle provides a framework for planning, organizing, executing, and implementing an AI project...`,
  },
  {
    id: 2,
    title: "What is Neural Network?",
    excerpt: "Neural Networks are a series of algorithms used to recognize hidden patterns...",
    author: "Vikas Kashyap",
    date: "Apr 15, 2025",
    readTime: "7 min read",
    mediumLink: "https://medium.com/@vikas_kashyap/what-is-neural-network-619cdea62925",
    image: neuralNetworkImg,
    content: `Neural Networks are a series of algorithms used to recognize hidden patterns in raw data...

They are widely used in stock markets, marketing trends, and fraud detection...`,
  },
  {
    id: 3,
    title: "Entrepreneurship Demystified",
    excerpt: "An entrepreneur is a person who makes his own business in an innovative manner and bears...",
    author: "Vikas Kashyap",
    date: "Apr 21, 2025",
    readTime: "12 min read",
    mediumLink: "https://medium.com/@vikas_kashyap/entrepreneurship-demystified-a-complete-guide-to-mindset-myths-roles-realities-64dd4b2fb95c",
    image: EntrepreneurshipImg,
    content: `An entrepreneur is a person who makes his own business in an innovative manner and bears...

Once you make more money, you can reinvest it into your business to make it bigger...`,
  },
];

// BlogCard Component
const BlogCard = ({ post }) => {
  return (
    <div className="border border-green-500 w-full rounded-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl hover:border-green-400 flex flex-col">
      <a href={post.mediumLink} target="_blank" rel="noopener noreferrer">
        <div className="h-64 md:h-80 lg:h-96 overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </a>
      <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-green-500 mb-2">{post.title}</h3>
        <div className="flex flex-wrap items-center text-green-400 text-xs sm:text-sm mb-3 space-x-2">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <p className="text-green-400 mb-4 line-clamp-3">{post.excerpt}</p>
        <a
          href={post.mediumLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-400 transition-colors"
        >
          <FaMedium className="mr-2" /> Read on Medium
        </a>
      </div>
    </div>
  );
};


// Blogs Component
const Blogs = () => {
  return (
    <section id="blogs" className="py-12 px-4 sm:px-6 md:px-8 lg:px-16 text-green-500">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <div key={post.id} className={index % 3 === 0 && index !== 0 ? 'col-span-3' : ''}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
