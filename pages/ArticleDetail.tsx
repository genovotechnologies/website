import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
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
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <Link
          to="/blog"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-white/10 rounded-2xl text-white">
            <Icon size={24} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/10">
            {article.category}
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-white mb-6">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-xs text-white/60">
          <span className="flex items-center gap-2">
            <User size={14} />
            {article.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar size={14} />
            {article.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} />
            {article.readTime}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="liquid-glass rounded-[2.5rem] p-8 sm:p-12 border border-white/10 text-white/90 font-body leading-relaxed text-base space-y-6">
          {article.content.split('\n').map((paragraph, idx) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={idx} className="font-heading text-2xl font-bold text-white pt-6 pb-2 border-b border-white/10">
                  {trimmed.replace('## ', '')}
                </h2>
              );
            }
            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={idx} className="font-heading text-xl font-bold text-white pt-4 pb-1">
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }
            if (trimmed.startsWith('- ')) {
              return <li key={idx} className="ml-6 text-white/80">{trimmed.replace('- ', '')}</li>;
            }
            if (trimmed.match(/^\d+\. /)) {
              return <li key={idx} className="ml-6 list-decimal text-white/80">{trimmed.replace(/^\d+\. /, '')}</li>;
            }
            if (trimmed.startsWith('`') && trimmed.endsWith('`')) {
              return (
                <code key={idx} className="block bg-white/5 border border-white/10 p-4 rounded-xl my-4 text-xs font-mono text-white/90">
                  {trimmed.slice(1, -1)}
                </code>
              );
            }
            return <p key={idx} className="text-white/80">{trimmed}</p>;
          })}
        </div>

        {/* Author Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
              <img
                src={`https://picsum.photos/seed/${article.author.replace(/ /g, '')}/100/100`}
                alt={article.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-heading font-bold text-white text-base">{article.author}</p>
              <p className="text-xs text-white/50">Genovo Technologies</p>
            </div>
          </div>

          <Link
            to="/blog"
            className="liquid-glass rounded-full px-6 py-2.5 text-xs text-white uppercase tracking-wider font-semibold hover:bg-white/10 transition-all inline-flex items-center"
          >
            <ArrowLeft size={14} className="mr-2" /> More Articles
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-[1280px] mx-auto px-6 border-t border-white/10 pt-16">
        <h2 className="font-heading text-2xl font-bold text-white mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.filter((a) => a.id !== article.id)
            .slice(0, 3)
            .map((relatedArticle, idx) => (
              <Link
                to={`/blog/${relatedArticle.id}`}
                key={idx}
                className="liquid-glass group p-6 rounded-[2rem] border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <relatedArticle.icon size={18} className="text-white" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                    {relatedArticle.category}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-[#7342E2] transition-colors">
                  {relatedArticle.title}
                </h3>
                <p className="text-xs text-white/40">{relatedArticle.date}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
