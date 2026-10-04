import React, { useState } from 'react';
import { Container, Card, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import product components
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Image from './Components/Image';

// Provide your name as a variable above the root component
const firstName = "Alex";
// Note: Set firstName to "" or comment out to test "Hello, there!" state.

// User avatar image URL used when first name is provided
const userAvatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";

function App() {
  // Interactive state initialized with the variable above, allowing live testing
  const [currentName, setCurrentName] = useState(firstName);

  return (
    <div className="app-viewport d-flex flex-column align-items-center justify-content-center min-vh-100 py-5">
      <Container className="d-flex flex-column align-items-center" style={{ maxWidth: '480px' }}>
        
        {/* Header Branding */}
        <header className="text-center mb-4">
          <Badge bg="dark" className="px-3 py-2 text-uppercase letter-spacing-2 rounded-pill shadow-sm border border-secondary mb-2">
            ✨ Exclusive Audio Tech
          </Badge>
          <h1 className="main-title text-gradient fw-bold">Aura Tech Showcase</h1>
        </header>

        {/* Product Card created using React-Bootstrap */}
        <Card className="custom-product-card shadow-2xl overflow-hidden w-100 border-0 rounded-4">
          <div className="card-image-box position-relative">
            <Image />
            <Badge className="price-tag-floating position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill">
              In Stock
            </Badge>
          </div>
          <Card.Body className="p-4 d-flex flex-column gap-3">
            <div className="d-flex justify-content-between align-items-baseline">
              <Name />
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <Price />
              <div className="star-rating text-warning small">
                ★★★★★ <span className="text-muted ms-1">(4.9)</span>
              </div>
            </div>

            <Description />

            {/* Action buttons */}
            <div className="d-flex gap-2 mt-2">
              <Button className="btn-buy flex-grow-1 py-2 fw-semibold rounded-3 shadow">
                🛒 Add to Cart
              </Button>
              <Button variant="outline-light" className="btn-wishlist px-3 rounded-3">
                ❤️
              </Button>
            </div>
          </Card.Body>
        </Card>

        {/* Dynamic User Greeting Section below the Card */}
        <div className="user-greeting-wrapper mt-4 text-center w-100">
          <div className="greeting-card p-3 rounded-4 d-flex align-items-center justify-content-center gap-3 shadow-lg border">
            {currentName && currentName.trim() !== "" ? (
              <>
                {/* Display an image if first name is provided */}
                <img 
                  src={userAvatarUrl} 
                  alt={`${currentName}'s profile`} 
                  className="user-avatar rounded-circle shadow-sm"
                />
                <h3 className="greeting-text m-0 fw-semibold text-white">
                  Hello, <span className="highlight-name">{currentName}</span>! 👋
                </h3>
              </>
            ) : (
              <h3 className="greeting-text m-0 fw-semibold text-white">
                Hello, there! 👋
              </h3>
            )}
          </div>

          {/* Interactive Controller for Name Toggle */}
          <div className="interactive-controls mt-3 p-2 rounded-3">
            <label className="small text-muted mb-1 d-block">Test Name Variable Live:</label>
            <div className="d-flex justify-content-center gap-2">
              <input 
                type="text" 
                className="form-control form-control-sm w-50 text-center bg-dark text-white border-secondary" 
                value={currentName} 
                onChange={(e) => setCurrentName(e.target.value)}
                placeholder="Type a name or leave empty"
              />
              <Button 
                variant="outline-secondary" 
                size="sm"
                onClick={() => setCurrentName(currentName ? "" : "Alex")}
              >
                {currentName ? "Clear Name" : "Reset Name"}
              </Button>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}

export default App;