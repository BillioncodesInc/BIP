import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import Section from '../components/ui/Section';
import PageHeader from '../components/shared/PageHeader';
import Card from '../components/ui/Card';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How the BIP Scholarship Transformed My Academic Journey",
    excerpt: "Adewale shares his inspiring story of overcoming financial challenges to pursue his degree in Computer Science.",
    date: new Date(2023, 8, 15),
    author: "Adewale Johnson",
    authorImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    image: "https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg",
    category: "Success Stories",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Breaking Barriers: Women in Tech Bootcamp Success",
    excerpt: "How our Women in Tech initiative is helping female students break into the tech industry and build successful careers.",
    date: new Date(2023, 9, 3),
    author: "Amina Ibrahim",
    authorImage: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
    category: "Programs",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Mental Health Matters: Our Advocacy Journey on Campus",
    excerpt: "Learn about BIP's mental health initiatives and how they're making a difference in students' lives across Nigeria.",
    date: new Date(2023, 10, 21),
    author: "Dr. Olufemi Adeyemi",
    authorImage: "https://images.pexels.com/photos/6551556/pexels-photo-6551556.jpeg",
    image: "https://images.pexels.com/photos/6383152/pexels-photo-6383152.jpeg",
    category: "Mental Health",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Innovation Challenge 2023: Showcasing Student Creativity",
    excerpt: "Highlights from our annual innovation challenge where students presented groundbreaking solutions to real-world problems.",
    date: new Date(2023, 11, 5),
    author: "Emmanuel Oladele",
    authorImage: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    category: "Events",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "From Campus to Career: Tech Bootcamp Success Stories",
    excerpt: "Meet the graduates of our tech bootcamp who are now making waves in Nigeria's tech industry.",
    date: new Date(2023, 11, 15),
    author: "Chioma Okafor",
    authorImage: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
    category: "Success Stories",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Building Tomorrow's Leaders: Leadership Workshop Insights",
    excerpt: "Key takeaways from our recent leadership development workshop for student leaders across Nigerian institutions.",
    date: new Date(2023, 11, 28),
    author: "Prof. Sarah Adebayo",
    authorImage: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
    image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg",
    category: "Leadership",
    readTime: "4 min read"
  }
];

// Sample categories
const categories = [
  "All Posts",
  "Success Stories",
  "Programs",
  "Mental Health",
  "Events",
  "Leadership",
  "Partnerships"
];

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Blog | BillionCodes Initiative Program';
  }, []);

  return (
    <>
      <PageHeader
        title="BIP Blog"
        description="Stories, insights, and updates from the BillionCodes Initiative Program community."
      />

      <Section background="white">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          
          <div className="flex gap-4">
            <div className="relative">
              <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-50">
                <Filter size={20} />
                <span>Filter</span>
              </button>
            </div>
            
            <select className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:ring focus:ring-blue-200 focus:outline-none">
              <option>Latest First</option>
              <option>Oldest First</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-3">
                    <img 
                      src={post.authorImage} 
                      alt={post.author} 
                      className="w-8 h-8 rounded-full object-cover mr-2"
                    />
                    <div>
                      <p className="text-sm font-medium">{post.author}</p>
                      <p className="text-xs text-gray-500">
                        {post.date.toLocaleDateString('en-US', { 
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })} · {post.readTime}
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">
                    <a href={`/blog/${post.id}`} className="hover:text-blue-800 transition-colors">
                      {post.title}
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  
                  <a 
                    href={`/blog/${post.id}`}
                    className="text-blue-800 font-medium hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="btn btn-outline">
            Load More Articles
          </button>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section background="blue">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest updates, stories, and opportunities delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:outline-none"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe Now
            </button>
          </form>
        </div>
      </Section>
    </>
  );
};

export default BlogPage;