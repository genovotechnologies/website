import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react';
import { ARTICLES } from '../constants';
import NotFound from './NotFound';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = ARTICLES.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.title} | Genovo Technologies Blog`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', article.excerpt);
    }
  }, [id, article]);

  if (!article) {
    return <NotFound />;
  }

  const Icon = article.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 rounded-b-[3rem] overflow-hidden ${article.color}`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center text-sm font-bold uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/30 rounded-2xl backdrop-blur-sm">
              <Icon size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>

          <h1 className={`text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight ${article.textColor}`}>
            {article.title}
          </h1>

          <div className={`flex flex-wrap items-center gap-6 text-sm ${article.textColor} opacity-80`}>
            <span className="flex items-center gap-2">
              <User size={16} />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {article.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-[#1A1A1A] prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-[#1A1A1A] prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded max-w-none">
          {article.content.split('\n').map((paragraph, idx) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;
            
            if (trimmed.startsWith('## ')) {
              return <h2 key={idx} className="text-3xl mt-12 mb-6">{trimmed.replace('## ', '')}</h2>;
            }
            if (trimmed.startsWith('### ')) {
              return <h3 key={idx} className="text-xl mt-8 mb-4">{trimmed.replace('### ', '')}</h3>;
            }
            if (trimmed.startsWith('- ')) {
              return <li key={idx} className="ml-6">{trimmed.replace('- ', '')}</li>;
            }
            if (trimmed.match(/^\d+\. /)) {
              return <li key={idx} className="ml-6 list-decimal">{trimmed.replace(/^\d+\. /, '')}</li>;
            }
            if (trimmed.startsWith('`') && trimmed.endsWith('`')) {
              return <code key={idx} className="block bg-gray-100 p-4 rounded-xl my-4 text-sm">{trimmed.slice(1, -1)}</code>;
            }
            return <p key={idx}>{trimmed}</p>;
          })}
        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                <img 
                  src={`https://picsum.photos/seed/${article.author.replace(/ /g, '')}/100/100`}
                  alt={article.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A]">{article.author}</p>
                <p className="text-sm text-gray-500">Genovo Technologies</p>
              </div>
            </div>
            
            <Link 
              to="/blog" 
              className="inline-flex items-center px-6 py-3 bg-[#1A1A1A] text-white font-bold text-sm rounded-xl hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              More Articles
            </Link>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.filter(a => a.id !== article.id).slice(0, 3).map((relatedArticle, idx) => (
              <Link 
                to={`/blog/${relatedArticle.id}`}
                key={idx}
                className={`group p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg ${relatedArticle.color} ${relatedArticle.textColor}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <relatedArticle.icon size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">{relatedArticle.category}</span>
                </div>
                <h3 className="font-bold mb-2">{relatedArticle.title}</h3>
                <p className="text-xs opacity-70">{relatedArticle.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
