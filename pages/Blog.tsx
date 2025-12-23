import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import { ARTICLES } from '../constants';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(ARTICLES.map(a => a.category)))];
  
  const filteredArticles = selectedCategory === 'All' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category === selectedCategory);

  useEffect(() => {
    document.title = "Blog | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Insights, research, and updates from Genovo Technologies. Explore articles on AI, systems engineering, and the future of computing.");
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="inline-flex items-center space-x-2 mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Engineering Insights</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-6 tracking-tighter leading-[0.9]">
          THE GENOVO <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] to-gray-500">BLOG</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-xl font-light leading-relaxed">
          Deep dives into systems engineering, AI research, and company updates.
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-bold text-lg text-[#1A1A1A]">FILTER BY TOPIC</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, idx) => (
              <button 
                key={idx} 
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === category 
                    ? 'bg-[#1A1A1A] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <Link 
                to={`/blog/${article.id}`}
                key={idx} 
                className={`group p-8 rounded-[2.5rem] min-h-[320px] flex flex-col justify-between transition-all hover:-translate-y-2 hover:shadow-xl ${article.color} ${article.textColor}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/30 rounded-2xl backdrop-blur-sm">
                      <article.icon size={24} className="opacity-90" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-3">{article.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-black/10">
                  <div className="flex items-center gap-4 text-xs opacity-70">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {article.author.split(' ')[0]}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 p-2 rounded-full">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
