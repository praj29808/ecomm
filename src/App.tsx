import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/ui/Toast';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';

// Admin Components
import AdminRoute from './components/admin/AdminRoute';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import ProductManagement from './components/admin/ProductManagement';
import OrderManagement from './components/admin/OrderManagement';

// Customer Components
import CustomerRoute from './components/customer/CustomerRoute';
import CustomerLayout from './components/customer/CustomerLayout';
import CustomerDashboard from './components/customer/CustomerDashboard';
import CustomerOrders from './components/customer/CustomerOrders';

function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <Router>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <Home />
                  </main>
                  <Footer />
                  <Toast />
                </div>
              } />
              
              <Route path="/products" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <Products />
                  </main>
                  <Footer />
                  <Toast />
                </div>
              } />
              
              <Route path="/product/:id" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <ProductDetail />
                  </main>
                  <Footer />
                  <Toast />
                </div>
              } />
              
              <Route path="/categories" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <Categories />
                  </main>
                  <Footer />
                  <Toast />
                </div>
              } />
              
              <Route path="/cart" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <Cart />
                  </main>
                  <Footer />
                  <Toast />
                </div>
              } />
              
              <Route path="/checkout" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <Checkout />
                  </main>
                  <Footer />
                  <Toast />
                </div>
              } />
              
              <Route path="/wishlist" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <Wishlist />
                  </main>
                  <Footer />
                  <Toast />
                </div>
              } />
              
              <Route path="/about" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <About />
                  </main>
                  <Footer />
                  <Toast />
                </div>
              } />
              
              <Route path="/contact" element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <Contact />
                  </main>
                  <Footer />
                  <Toast />
                </div>
              } />

              {/* Admin Routes */}
              <Route path="/admin" element={
                <AdminRoute>
                  <AdminLayout />
                </AdminRoute>
              }>
                <Route index element={<AdminDashboard />} />
                <Route path="products" element={<ProductManagement />} />
                <Route path="categories" element={<div>Category Management Coming Soon</div>} />
                <Route path="orders" element={<OrderManagement />} />
                <Route path="customers" element={<div>Customer Management Coming Soon</div>} />
                <Route path="banners" element={<div>Banner Management Coming Soon</div>} />
                <Route path="analytics" element={<div>Analytics Coming Soon</div>} />
                <Route path="settings" element={<div>Settings Coming Soon</div>} />
              </Route>

              {/* Customer Routes */}
              <Route path="/customer" element={
                <CustomerRoute>
                  <CustomerLayout />
                </CustomerRoute>
              }>
                <Route index element={<CustomerDashboard />} />
                <Route path="orders" element={<CustomerOrders />} />
                <Route path="wishlist" element={<div>Customer Wishlist Coming Soon</div>} />
                <Route path="addresses" element={<div>Address Management Coming Soon</div>} />
                <Route path="settings" element={<div>Account Settings Coming Soon</div>} />
              </Route>

              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}

export default App;