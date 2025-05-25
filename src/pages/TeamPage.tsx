import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import Section from '../components/ui/Section';
import PageHeader from '../components/shared/PageHeader';

const teamMembers = [
  {
    name: "Comr. Josiah Adeyemo",
    role: "Program Director",
    bio: "Leading BIP's strategic vision and partnerships to create lasting impact for Nigerian students.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "josiah@billioncodes.org"
    }
  },
  {
    name: "Comr. Omibiyi Samson",
    role: "Programs Coordinator",
    bio: "Overseeing the implementation of BIP programs across Nigerian institutions.",
    image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "samson@billioncodes.org"
    }
  },
  {
    name: "Comr. Idowu Samuel",
    role: "Outreach Director",
    bio: "Spearheading community engagement and ensuring BIP's impact reaches students across all geopolitical zones.",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "samuel@billioncodes.org"
    }
  },
  {
    name: "Dr. Sarah Adebayo",
    role: "Mental Health Program Lead",
    bio: "Leading mental health advocacy initiatives and counseling programs across partner institutions.",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@billioncodes.org"
    }
  },
  {
    name: "Engr. Oluwaseun Ogunleye",
    role: "Tech Programs Director",
    bio: "Developing and managing tech bootcamps and innovation challenges for Nigerian students.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "seun@billioncodes.org"
    }
  },
  {
    name: "Mrs. Aisha Ibrahim",
    role: "Scholarship Coordinator",
    bio: "Managing scholarship programs and ensuring transparent selection processes.",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "aisha@billioncodes.org"
    }
  }
];

const advisoryBoard = [
  {
    name: "Prof. Oluwole Familoni",
    role: "Board Chairman",
    bio: "Former Vice-Chancellor with over 30 years of experience in education leadership.",
    image: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg",
    social: {
      linkedin: "#",
      email: "familoni@billioncodes.org"
    }
  },
  {
    name: "Dr. Amina Oyagbola",
    role: "Education Policy Advisor",
    bio: "Expert in education policy and curriculum development.",
    image: "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg",
    social: {
      linkedin: "#",
      email: "amina@billioncodes.org"
    }
  },
  {
    name: "Mr. Babajide Ogunlesi",
    role: "Tech Industry Advisor",
    bio: "Tech entrepreneur and advocate for digital skills education.",
    image: "https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg",
    social: {
      linkedin: "#",
      email: "babajide@billioncodes.org"
    }
  }
];

const TeamPage = () => {
  useEffect(() => {
    document.title = 'Our Team | BillionCodes Initiative Program';
  }, []);

  return (
    <>
      <PageHeader
        title="Meet Our Team"
        description="The dedicated individuals working to empower Nigerian students through education and innovation."
      />

      {/* Core Team Section */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Core Team</h2>
          <p className="text-gray-600">
            Meet the passionate individuals driving our mission forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-800 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-blue-800 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={20} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-blue-800 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-blue-800 transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Advisory Board Section */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Advisory Board</h2>
          <p className="text-gray-600">
            Distinguished professionals guiding our strategic direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advisoryBoard.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-800 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-blue-800 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={20} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-blue-800 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Join Our Team Section */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-8">
            We're always looking for passionate individuals to join our mission of empowering Nigerian students.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/careers" 
              className="btn btn-primary"
            >
              View Open Positions
            </a>
            <a 
              href="/volunteer" 
              className="btn btn-outline"
            >
              Volunteer Opportunities
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default TeamPage;