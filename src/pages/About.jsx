import '../styles/About.css'

function About() {
  return (
    <div className="about-page">
      <div className="about-content container">
        <h1>About Furniture Showcase</h1>
        
        <section className="about-section">
          <h2>Welcome</h2>
          <p>
            Welcome to our furniture showcase – where elegance meets craftsmanship.
          </p>
          <p>
            I'm Ganesh, based in Pune, and I've created this platform to highlight beautifully designed 
            furniture that brings comfort, style, and functionality into your space. Each piece showcased 
            here reflects a blend of traditional charm and modern aesthetics, carefully selected to enhance 
            your living, dining, or workspace.
          </p>
          <p>
            Whether you're seeking inspiration or exploring options for your next interior project, this 
            website is your go-to destination for timeless furniture ideas. Our goal is simple – to help 
            you discover pieces that feel just right for your home.
          </p>
          <p>
            Thank you for visiting and supporting this creative journey.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Welcome to Furniture Showcase, your premier destination for high-quality, 
            stylish furniture. Since our establishment, we've been passionate about 
            bringing beautiful, functional pieces to your home.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We believe that everyone deserves to live in a space they love. Our mission 
            is to provide exceptional furniture that combines style, comfort, and 
            affordability, making beautiful living spaces accessible to all.
          </p>
        </section>

        <section className="about-section">
          <h2>Quality & Service</h2>
          <p>
            Every piece in our collection is carefully selected for its quality, 
            design, and durability. We work with trusted manufacturers and designers 
            to ensure that our furniture meets the highest standards of craftsmanship.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Categories</h2>
          <div className="category-list">
            <div className="category-item">
              <h3>Living Room</h3>
              <p>Comfortable sofas, stylish coffee tables, and accent pieces</p>
            </div>
            <div className="category-item">
              <h3>Bedroom</h3>
              <p>Peaceful beds, practical storage, and cozy accessories</p>
            </div>
            <div className="category-item">
              <h3>Dining Room</h3>
              <p>Elegant dining sets, buffets, and dining chairs</p>
            </div>
            <div className="category-item">
              <h3>Office</h3>
              <p>Ergonomic chairs, desks, and organizational furniture</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About 