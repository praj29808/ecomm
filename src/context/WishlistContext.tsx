import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { Product } from '../types';

interface WishlistState {
  items: Product[];
}

type WishlistAction =
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: number }
  | { type: 'CLEAR_WISHLIST' }
  | { type: 'LOAD_WISHLIST'; payload: Product[] };

const WishlistContext = createContext<{
  state: WishlistState;
  dispatch: React.Dispatch<WishlistAction>;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
} | null>(null);

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      }
      return { items: [...state.items, action.payload] };
    
    case 'REMOVE_FROM_WISHLIST':
      return { items: state.items.filter(item => item.id !== action.payload) };
    
    case 'CLEAR_WISHLIST':
      return { items: [] };
    
    case 'LOAD_WISHLIST':
      return { items: action.payload };
    
    default:
      return state;
  }
};

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      try {
        const items = JSON.parse(storedWishlist);
        dispatch({ type: 'LOAD_WISHLIST', payload: items });
      } catch (error) {
        localStorage.removeItem('wishlist');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.items));
  }, [state.items]);

  const addToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const removeFromWishlist = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  const isInWishlist = (productId: number) => {
    return state.items.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ state, dispatch, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};