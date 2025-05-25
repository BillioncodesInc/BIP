import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import PageHeader from '../components/shared/PageHeader';
import Card from '../components/ui/Card';

const successStories = [
  {
    id: 1,
    name: "Adewale Johnson",
    title: "From Financial Struggle to Tech Success",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    institution: "University of Lagos",
    program: "Tech Bootcamp & Scholarship",
    year: "2023",
    story: `When I first received the news of being selected for the BillionCodes Initiative Program scholarship, 
    I couldn't believe it. As a Computer Science student from a humble background in Lagos, the financial burden 
    of higher education had always been a significant challenge for my family.

    The scholarship didn't just ease my financial burden; it opened doors to opportunities I never thought possible. 
    With the pressure of tuition fees lifted, I could focus entirely on my studies and participate in the tech bootcamp 
    that enhanced my learning experience.

    Today, I work as a software developer at a leading tech company, and I'm giving back by mentoring other students 
    through BIP's programs.`,
    achievements: [
      "Graduated with First Class Honours",
      "Secured internship at Microsoft",
      "Founded campus tech community",
      "Won national coding competition"
    ],
    quote: "The BIP scholarship and bootcamp didn't just fund my education; they transformed my entire career trajectory."
  },
  {
    id: 2,
    name: "Amina Ibrahim",
    title: "Breaking Barriers in Tech",
    image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg",
    institution: "Ahmadu Bello University",
    program: "Women in Tech Initiative",
    year: "2023",
    story: `As a female engineering student, I often felt out of place in my male-dominated classes. The Women in Tech 
    program by BIP changed everything. Through mentorship, skill-building workshops, and a supportive community, I gained 
    the confidence to pursue my dreams in technology.

    The program connected me with successful women in tech who became my mentors and role models. Their guidance helped 
    me navigate challenges and seize opportunities I wouldn't have known about otherwise.

    Now, I'm leading a tech startup that focuses on educational technology, and I'm passionate about encouraging more 
    women to pursue careers in STEM.`,
    achievements: [
      "Founded EdTech startup",
      "Featured in Tech Women Magazine",
      "Awarded Young Innovator of the Year",
      "Mentored 20+ female students"
    ],
    quote: "BIP's Women in Tech program showed me that gender shouldn't limit anyone's potential in technology."
  },
  {
    id: 3,
    name: "Oluwaseun Ogunleye",
    title: "Mental Health Journey to Academic Excellence",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    institution: "University of Nigeria",
    program: "Mental Health Support & Scholarship",
    year: "2023",
    story: `My journey through university wasn't just about academic challenges; I struggled with anxiety and depression 
    that affected my performance. BIP's mental health program provided the support system I desperately needed.

    Through counseling sessions and wellness workshops, I learned to manage my mental health effectively. The program 
    also connected me with other students facing similar challenges, creating a supportive community.

    The combination of mental health support and academic scholarship allowed me to focus on my wellbeing while 
    maintaining academic excellence.`,
    achievements: [
      "Improved CGPA from 2.8 to 4.5",
      "Started campus mental health awareness club",
      "Published research on student wellness",
      "Received university leadership award"
    ],
    quote: "BIP taught me that mental health is just as important as academic success."
  },
  {
    id: 4,
    name: "Chioma Okafor",
    title: "Innovation Challenge to Market Success",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    institution: "Federal University of Technology, Akure",
    program: "Innovation Challenge",
    year: "2023",
    story: `Participating in BIP's Innovation Challenge was the turning point in my entrepreneurial journey. My team 
    developed a mobile app for connecting local farmers with urban markets, and winning the challenge provided the 
    resources and mentorship needed to turn our idea into a reality.

    The program didn't just offer funding; it provided comprehensive support including business development workshops, 
    technical mentorship, and networking opportunities with industry leaders.

    Today, our app serves over 5,000 farmers and has attracted investment from major agricultural firms.`,
    achievements: [
      "Won first place in Innovation Challenge",
      "Secured seed funding of $50,000",
      "Featured in Forbes Africa 30 Under 30",
      "Created jobs for 20 people"
    ],
    quote: "BIP's Innovation Challenge gave us the platform to turn our idea into a successful business."
  }
];

const SuccessStoriesPage = () => {
  useEffect(() => {
    document.title = 'Success Stories | BillionCodes Initiative Program';
  }, []);

  return (
    <>
      <PageHeader
        title="Success Stories"
        description="Inspiring journeys of students whose lives have been transformed through our programs."
      />

      <Section background="white">
        <div className="space-y-12">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative h-full">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">{story.name}</h2>
                      <p className="text-white/80">{story.title}</p>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-1" />
                        {story.institution}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-1" />
                        {story.year}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Program</h3>
                      <p className="text-blue-800 font-medium">{story.program}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Story</h3>
                      <p className="text-gray-700 whitespace-pre-line">{story.story}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Key Achievements</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {story.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <ArrowRight size={16} className="text-blue-800 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800">
                      <p className="text-gray-700 italic">"{story.quote}"</p>
                    </blockquote>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
          <p className="text-gray-600 mb-8">
            Are you a BIP program beneficiary with a success story to share? We'd love to hear from you!
          </p>
          <a 
            href="/contact" 
            className="btn btn-primary inline-flex items-center"
          >
            Submit Your Story
          </a>
        </div>
      </Section>
    </>
  );
};

export default SuccessStoriesPage;