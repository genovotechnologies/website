import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import { ARTICLES } from '../constants';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(ARTICLES.map((a) => a.category)))];

  const filteredArticles =
    selectedCategory === 'All'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === selectedCategory);

  useEffect(() => {
    document.title = "Blog | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "Insights, research, and updates from Genovo Technologies. Explore articles on AI, systems engineering, and the future of computing."
    );
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-36 md:pt-44 pb-24">
      {/* Hero */}
      <div className="max-w-[1280px] mx-auto px-6 mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7342E2] block mb-3">
          Engineering Insights
        </span>
        <h1 className="font-heading text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-none">
          THE GENOVO <br /> <span className="text-[#7342E2]">BLOG</span>
        </h1>
        <p className="text-xl text-white/70 max-w-xl font-body leading-relaxed">
          Deep dives into systems engineering, AI research, and platform updates.
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        <div className="liquid-glass rounded-[2rem] p-6 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-heading font-bold text-base text-white">FILTER BY TOPIC</span>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-white text-black shadow-lg'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-[1280px] mx-auto px-6 pb-24">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 liquid-glass rounded-[2rem]">
            <p className="text-white/60 text-lg">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <Link
                to={`/blog/${article.id}`}
                key={idx}
                className="liquid-glass group p-8 rounded-[2.5rem] min-h-[320px] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/10 rounded-2xl text-white">
                      <article.icon size={24} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/10">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-[#7342E2] transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/70 font-body leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {article.author.split(' ')[0]}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white group-hover:bg-[#7342E2] flex items-center justify-center transition-colors">
                    <ArrowRight size={14} />
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
