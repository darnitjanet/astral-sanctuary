import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Mystical Blog</h1>
          <p className="page-subtitle">Spiritual insights, guides, and cosmic wisdom</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * parseInt(post.id) }}
              onClick={() => navigate(`/blog/${post.slug}`)}
              style={{
                background: 'rgba(26, 26, 29, 0.8)',
                borderRadius: '12px',
                border: '1px solid var(--purple-lavender)',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(167, 139, 250, 0.3)'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{
                  background: 'var(--purple-deep)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem'
                }}>
                  {post.category}
                </span>
                <span style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem'
                }}>
                  {post.readTime}
                </span>
              </div>

              <h2 style={{
                color: 'var(--text-primary)',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                lineHeight: 1.3
              }}>
                {post.title}
              </h2>

              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                {post.excerpt}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(167, 139, 250, 0.2)'
              }}>
                <span style={{
                  color: 'var(--gold-accent)',
                  fontSize: '0.9rem'
                }}>
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span style={{
                  color: 'var(--purple-lavender)',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  Read More →
                </span>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: '1rem'
              }}>
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      background: 'rgba(167, 139, 250, 0.1)',
                      color: 'var(--purple-lavender)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* SEO Content Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: '4rem',
            padding: '3rem',
            background: 'rgba(76, 29, 149, 0.1)',
            borderRadius: '12px',
            border: '1px solid var(--purple-deep)',
            textAlign: 'center'
          }}
        >
          <h2 style={{
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            fontSize: '2rem'
          }}>
            Your Guide to Spiritual Wisdom
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Our blog features comprehensive guides on tarot readings, astrology, numerology, and spiritual practices.
            From detailed tarot card meanings to understanding Mercury retrograde, we provide free resources to support
            your mystical journey. Updated regularly with cosmic insights and practical spiritual guidance.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default BlogPage;