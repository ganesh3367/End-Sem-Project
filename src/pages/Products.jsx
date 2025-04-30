import { useState } from 'react'
import { expandedFurnitureData } from '../furnitureData'

function Products() {
  const [furniture] = useState(expandedFurnitureData)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', ...new Set(expandedFurnitureData.map(item => item.category))]
  
  const filteredFurniture = furniture
    .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
    .filter(item => 
      searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="products-page">
      <div className="search-and-filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search furniture..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <i className="search-icon">🔍</i>
        </div>
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="main-content">
        <div className="results-count">
          Showing {filteredFurniture.length} {filteredFurniture.length === 1 ? 'item' : 'items'}
        </div>
        <div className="furniture-grid">
          {filteredFurniture.map((item) => (
            <div key={item.id} className="furniture-card">
              <div className="image-container">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="card-overlay">
                  <button className="quick-view">Quick View</button>
                </div>
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p className="category">{item.category}</p>
                <p className="price">${item.price.toFixed(2)}</p>
                <p className="description">{item.description}</p>
                <button className="add-to-cart">
                  <span>Add to Cart</span>
                  <i className="cart-icon">🛒</i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Products 