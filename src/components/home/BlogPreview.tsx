import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

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
    slug: "scholarship-transformed-academic-journey",
    category: "Success Stories"
  },
  {
    id: 2,
    title: "Breaking Barriers: Women in Tech Bootcamp Success",
    excerpt: "How our Women in Tech initiative is helping female students break into the tech industry and build successful careers.",
    date: new Date(2023, 9, 3),
    author: "Amina Ibrahim",
    authorImage: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
    slug: "women-in-tech-bootcamp-success",
    category: "Programs"
  },
  {
    id: 3,
    title: "Mental Health Matters: Our Advocacy Journey on Campus",
    excerpt: "Learn about BIP's mental health initiatives and how they're making a difference in students' lives across Nigeria.",
    date: new Date(2023, 10, 21),
    author: "Dr. Olufemi Adeyemi",
    authorImage: "https://images.pexels.com/photos/6551556/pexels-photo-6551556.jpeg",
    image: "https://images.pexels.com/photos/6383152/pexels-photo-6383152.jpeg",
    slug: "mental-health-matters-advocacy-journey",
    category: "Mental Health"
  }
];

const BlogPreview = () => {
  return (
    <Section background="gray">
      <SectionTitle
        title="Latest from Our Blog"
        subtitle="Stories, updates, and insights from the BIP community."
        center
      />
      
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
                    <p className="text-xs text-gray-500">{format(post.date, 'MMM d, yyyy')}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-800 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="flex items-center text-blue-800 font-medium hover:underline"
                >
                  Read more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/blog"
          className="btn btn-primary inline-flex items-center"
        >
          Read All Articles
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </Section>
  );
};

export default BlogPreview;