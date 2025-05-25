import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

// Sample blog post data
const blogPost = {
  id: 1,
  title: "How the BIP Scholarship Transformed My Academic Journey",
  content: `
    <p>When I first received the news of being selected for the BillionCodes Initiative Program scholarship, I couldn't believe it. As a Computer Science student from a humble background in Lagos, the financial burden of higher education had always been a significant challenge for my family.</p>
    
    <h2>The Beginning of Change</h2>
    <p>The scholarship didn't just ease my financial burden; it opened doors to opportunities I never thought possible. With the pressure of tuition fees lifted, I could focus entirely on my studies and participate in extra-curricular activities that enhanced my learning experience.</p>
    
    <h2>Beyond Financial Support</h2>
    <p>What makes the BIP scholarship unique is its holistic approach to student support. Along with financial aid, I received:</p>
    <ul>
      <li>Mentorship from industry professionals</li>
      <li>Access to tech workshops and bootcamps</li>
      <li>Networking opportunities with other scholars</li>
      <li>Career guidance and internship placements</li>
    </ul>
    
    <h2>Academic Excellence</h2>
    <p>With the support of BIP, I maintained a CGPA of 4.8 and even developed a mobile application that helps students track their academic performance. The project won first place at our university's tech innovation fair.</p>
    
    <h2>Looking Forward</h2>
    <p>As I approach my final year, I'm confident about my future in tech. The BIP scholarship has not only supported my education but has also shaped me into a well-rounded professional ready to contribute to Nigeria's tech ecosystem.</p>
    
    <p>To future applicants, I say: The BIP scholarship is more than financial aid; it's a transformative program that nurtures your potential and sets you on the path to success.</p>
  `,
  date: new Date(2023, 8, 15),
  readTime: "5 min read",
  author: {
    name: "Adewale Johnson",
    role: "Computer Science Student",
    institution: "University of Lagos",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
  },
  category: "Success Stories",
  image: "https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg",
  tags: ["Scholarship", "Success Story", "Education", "Technology", "Student Life"]
};

// Related posts
const relatedPosts = [
  {
    id: 2,
    title: "Breaking Barriers: Women in Tech Bootcamp Success",
    excerpt: "How our Women in Tech initiative is helping female students break into the tech industry.",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
    date: new Date(2023, 9, 3),
    author: "Amina Ibrahim"
  },
  {
    id: 3,
    title: "From Campus to Career: Tech Bootcamp Success Stories",
    excerpt: "Meet the graduates of our tech bootcamp who are now making waves in Nigeria's tech industry.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
    date: new Date(2023, 11, 15),
    author: "Chioma Okafor"
  }
];

const BlogPostPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    document.title = `${blogPost.title} | BillionCodes Initiative Program`;
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-blue-800 text-white pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-6">
              <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{blogPost.title}</h1>
            <div className="flex items-center justify-center gap-6 text-blue-100">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{blogPost.date.toLocaleDateString('en-US', { 
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Author Info */}
          <div className="flex items-center mb-8 p-6 bg-gray-50 rounded-lg">
            <img
              src={blogPost.author.image}
              alt={blogPost.author.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">{blogPost.author.name}</h3>
              <p className="text-gray-600">{blogPost.author.role}</p>
              <p className="text-gray-500 text-sm">{blogPost.author.institution}</p>
            </div>
          </div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="border-t border-b border-gray-200 py-6 mb-12">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center">
                <Share2 size={20} className="mr-2" />
                Share this article
              </h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="!p-2"
                  onClick={() => {}}
                >
                  <Facebook size={20} />
                </Button>
                <Button
                  variant="outline"
                  className="!p-2"
                  onClick={() => {}}
                >
                  <Twitter size={20} />
                </Button>
                <Button
                  variant="outline"
                  className="!p-2"
                  onClick={() => {}}
                >
                  <Linkedin size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      <a href={`/blog/${post.id}`} className="hover:text-blue-800 transition-colors">
                        {post.title}
                      </a>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.date.toLocaleDateString()}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogPostPage;