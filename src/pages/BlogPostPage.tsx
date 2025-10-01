import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { getBlogPostBySlug, getRecentBlogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const recentPosts = getRecentBlogPosts(3).filter(p => p.slug !== slug);

  useEffect(() => {
    if (post) {
      // Update page title for SEO
      document.title = `${post.title} | Astral Sanctuary`;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="page-container">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h1>Blog post not found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blog" style={{ color: 'var(--purple-lavender)' }}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Breadcrumb Navigation */}
        <nav style={{
          marginBottom: '2rem',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)'
        }}>
          <Link to="/" style={{ color: 'var(--purple-lavender)', textDecoration: 'none' }}>
            Home
          </Link>
          {' > '}
          <Link to="/blog" style={{ color: 'var(--purple-lavender)', textDecoration: 'none' }}>
            Blog
          </Link>
          {' > '}
          <span>{post.category}</span>
        </nav>

        {/* Article Header */}
        <article>
          <header style={{ marginBottom: '3rem' }}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
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

              <h1 style={{
                color: 'var(--text-primary)',
                fontSize: '2.5rem',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                {post.title}
              </h1>

              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.2rem',
                lineHeight: 1.6,
                marginBottom: '2rem'
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
                <div>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    By {post.author}
                  </span>
                  <span style={{ color: 'var(--text-secondary)', margin: '0 0.5rem' }}>•</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {post.tags.map((tag, index) => (
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
              </div>
            </motion.div>
          </header>

          {/* Article Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="blog-content"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}
          >
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 style={{
                    color: 'var(--text-primary)',
                    fontSize: '2.2rem',
                    marginTop: '3rem',
                    marginBottom: '1.5rem'
                  }}>
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 style={{
                    color: 'var(--purple-lavender)',
                    fontSize: '1.8rem',
                    marginTop: '2.5rem',
                    marginBottom: '1rem'
                  }}>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 style={{
                    color: 'var(--green-sage)',
                    fontSize: '1.4rem',
                    marginTop: '2rem',
                    marginBottom: '0.8rem'
                  }}>
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p style={{
                    marginBottom: '1.5rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul style={{
                    marginBottom: '1.5rem',
                    paddingLeft: '2rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol style={{
                    marginBottom: '1.5rem',
                    paddingLeft: '2rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li style={{
                    marginBottom: '0.5rem'
                  }}>
                    {children}
                  </li>
                ),
                strong: ({ children }) => (
                  <strong style={{
                    color: 'var(--text-primary)',
                    fontWeight: 'bold'
                  }}>
                    {children}
                  </strong>
                ),
                a: ({ href, children }) => (
                  <Link
                    to={href || '#'}
                    style={{
                      color: 'var(--purple-lavender)',
                      textDecoration: 'underline'
                    }}
                  >
                    {children}
                  </Link>
                ),
                blockquote: ({ children }) => (
                  <blockquote style={{
                    borderLeft: '4px solid var(--purple-lavender)',
                    paddingLeft: '1.5rem',
                    marginLeft: 0,
                    marginBottom: '1.5rem',
                    fontStyle: 'italic',
                    color: 'var(--text-secondary)'
                  }}>
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code style={{
                    background: 'rgba(167, 139, 250, 0.1)',
                    padding: '0.2rem 0.4rem',
                    borderRadius: '4px',
                    color: 'var(--purple-lavender)',
                    fontSize: '0.95rem'
                  }}>
                    {children}
                  </code>
                ),
                table: ({ children }) => (
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '1.5rem'
                  }}>
                    {children}
                  </table>
                ),
                th: ({ children }) => (
                  <th style={{
                    background: 'rgba(107, 70, 193, 0.2)',
                    padding: '0.75rem',
                    borderBottom: '2px solid var(--purple-lavender)',
                    color: 'var(--text-primary)',
                    textAlign: 'left'
                  }}>
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td style={{
                    padding: '0.75rem',
                    borderBottom: '1px solid rgba(167, 139, 250, 0.2)',
                    color: 'var(--text-secondary)'
                  }}>
                    {children}
                  </td>
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.div>
        </article>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-royal) 100%)',
            borderRadius: '12px',
            textAlign: 'center'
          }}
        >
          <h3 style={{
            color: 'white',
            marginBottom: '1rem'
          }}>
            Ready to explore your spiritual path?
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '1.5rem'
          }}>
            Try our free mystical tools and discover your cosmic blueprint
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              className="glow-button"
              onClick={() => navigate('/tarot')}
              style={{
                background: 'white',
                color: 'var(--purple-deep)'
              }}
            >
              Free Tarot Reading
            </button>
            <button
              className="glow-button"
              onClick={() => navigate('/birth-chart')}
              style={{
                background: 'transparent',
                border: '2px solid white',
                color: 'white'
              }}
            >
              Birth Chart Calculator
            </button>
          </div>
        </motion.div>

        {/* Related Posts */}
        {recentPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              marginTop: '4rem'
            }}
          >
            <h2 style={{
              color: 'var(--text-primary)',
              marginBottom: '2rem',
              fontSize: '1.8rem'
            }}>
              More Mystical Insights
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {recentPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                  style={{
                    background: 'rgba(26, 26, 29, 0.8)',
                    borderRadius: '8px',
                    border: '1px solid var(--purple-lavender)',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span style={{
                    background: 'var(--purple-deep)',
                    color: 'white',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem'
                  }}>
                    {relatedPost.category}
                  </span>
                  <h3 style={{
                    color: 'var(--text-primary)',
                    fontSize: '1.1rem',
                    marginTop: '1rem',
                    marginBottom: '0.5rem'
                  }}>
                    {relatedPost.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.5
                  }}>
                    {relatedPost.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back to Blog */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <Link
            to="/blog"
            style={{
              color: 'var(--purple-lavender)',
              fontSize: '1.1rem',
              textDecoration: 'none'
            }}
          >
            ← Back to All Articles
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostPage;