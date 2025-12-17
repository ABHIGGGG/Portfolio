import React from "react";

const Clients = () => {
  const coursework = [
    { 
      id: 1, 
      name: 'Data Structures & Algorithms',
      description: 'Mastering efficient algorithms and data structures for optimal problem-solving',
      icon: '📊'
    },
    { 
      id: 2, 
      name: 'Operating Systems',
      description: 'Understanding system internals, process management, and memory allocation',
      icon: '⚙️'
    },
    { 
      id: 3, 
      name: 'Databases',
      description: 'Designing and optimizing relational and NoSQL database systems',
      icon: '🗄️'
    },
    { 
      id: 4, 
      name: 'Computer Architecture',
      description: 'Exploring CPU design, memory hierarchy, and parallel computing',
      icon: '🔧'
    },
    { 
      id: 5, 
      name: 'Machine Learning',
      description: 'Building intelligent systems with neural networks and data science',
      icon: '🤖'
    },
    { 
      id: 6, 
      name: 'Systems & Backend Engineering',
      description: 'Designing scalable distributed systems and microservices architecture',
      icon: '🚀'
    },
  ];

  return (
    <section className="c-space my-20">
      <h3 className="head-text">Selected Coursework & Interests</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
        {coursework.map((item) => (
          <div 
            key={item.id} 
            className="grid-container hover:border-black-500 hover:scale-[1.05] hover:shadow-xl hover:shadow-black-200 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black-500/0 to-black-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col gap-3">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <p className="grid-headtext group-hover:text-white transition-colors">{item.name}</p>
              <p className="grid-subtext group-hover:text-white-800 transition-colors text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
