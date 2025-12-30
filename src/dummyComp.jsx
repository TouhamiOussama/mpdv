import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
  
function App() {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress for parallax effects
  const text1Y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const text1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  const text2Y = useTransform(scrollYProgress, [0.5, 0.7], [100, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  return (
    <div className="app">
    

      {/* Second Section with Parallax */}
      <section className="second-section">
        <div className="parallax-container">
          {/* Fixed Image on Left */}
          <div className="image-container">
            <motion.div 
              className="image-wrapper"
            >
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern architecture"
                className="parallax-image"
              />
              <div className="image-overlay"></div>
            </motion.div>
          </div>
          {/* ---------------------------------------------------------------- */}

          {/* Scrolling Content on Right */}
          <div className="content-container">
            <motion.div 
              className="text-block first-text"
              style={{
                y: text1Y,
                opacity: text1Opacity
              }}
            >
              <h2>Architectural Innovation</h2>
              <p>
                Discover the future of architectural design where form meets function in perfect harmony. 
                Our approach combines sustainable materials with cutting-edge technology to create spaces 
                that inspire and endure. Every curve, every line, every material is carefully considered 
                to enhance both aesthetics and practicality.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
                <div className="stat">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="text-block second-text"
              style={{
                y: text2Y,
                opacity: text2Opacity
              }}
            >
              <h2>Sustainable Design Philosophy</h2>
              <p>
                We believe in creating buildings that not only look beautiful but also respect our planet. 
                Our sustainable design principles focus on energy efficiency, natural light optimization, 
                and environmentally friendly materials. Each project is an opportunity to reduce our 
                ecological footprint while maximizing comfort and functionality.
              </p>
              <ul className="feature-list">
                <li>Solar energy integration</li>
                <li>Rainwater harvesting systems</li>
                <li>Natural ventilation design</li>
                <li>Locally sourced materials</li>
                <li>Green roof implementation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default App;


let styles = `
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  overflow-x: hidden;
}

.app {
  width: 100%;
  min-height: 100vh;
}

/* First Section */
.first-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.main-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 4rem;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.content-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  transition: transform 0.3s ease;
}

.content-card:hover {
  transform: translateY(-5px);
}

.content-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.content-card p {
  opacity: 0.8;
  line-height: 1.6;
}

.scroll-indicator {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.arrow {
  font-size: 2rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

/* Second Section with Parallax */
.second-section {
  min-height: 200vh;
  background: #f8f9fa;
  position: relative;
}

.parallax-container {
  position: relative;
  width: 100%;
  min-height: 200vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.image-container {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper {
  width: 90%;
  height: 80%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.parallax-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3));
}

.content-container {
  padding: 100vh 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 50vh;
}

.text-block {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  margin-bottom: 50vh;
  transform: translateY(100px);
  opacity: 0;
}

.text-block h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-block p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2rem;
}

.stats {
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.feature-list {
  list-style: none;
  margin-top: 2rem;
}

.feature-list li {
  padding: 0.75rem 0;
  font-size: 1.1rem;
  color: #555;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 1.5rem;
}

.feature-list li:before {
  content: "✓";
  color: #667eea;
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Third Section */
.third-section {
  min-height: 50vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
}

.third-section h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.third-section p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.cta-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 3rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .parallax-container {
    grid-template-columns: 1fr;
  }
  
  .image-container {
    height: 50vh;
    position: relative;
  }
  
  .content-container {
    padding: 2rem 1rem;
    gap: 2rem;
  }
  
  .text-block {
    margin-bottom: 2rem;
  }
  
  .main-title {
    font-size: 2.5rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
  }
}
`