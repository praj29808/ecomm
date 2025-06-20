import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Heart, 
  MapPin, 
  CreditCard, 
  Package, 
  Truck, 
  CheckCircle,
  Clock
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const CustomerDashboard: React.FC = () => {
  const { state } = useAuth();

  const recentOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Processing',
      total: 299.99,
      items: 2
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Delivered',
      total: 149.50,
      items: 1
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'Shipped',
      total: 89.99,
      items: 3
    }
  ];

  const quickStats = [
    {
      title: 'Total Orders',
      value: '12',
      icon: ShoppingBag,
      color: 'bg-blue-500'
    },
    {
      title: 'Wishlist Items',
      value: '8',
      icon: Heart,
      color: 'bg-red-500'
    },
    {
      title: 'Saved Addresses',
      value: '3',
      icon: MapPin,
      color: 'bg-green-500'
    },
    {
      title: 'Total Spent',
      value: '$1,234',
      icon: CreditCard,
      color: 'bg-purple-500'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing': return <Package className="w-4 h-4" />;
      case 'Shipped': return <Truck className="w-4 h-4" />;
      case 'Delivered': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Shipped': return 'bg-purple-100 text-purple-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {state.user?.name}!</h1>
        <p className="text-blue-100">Manage your orders, wishlist, and account settings.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
              <Link
                to="/customer/orders"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        {getStatusIcon(order.status)}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date} • {order.items} items</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">${order.total.toFixed(2)}</p>
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/customer/orders"
                className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ShoppingBag className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">My Orders</span>
              </Link>
              
              <Link
                to="/customer/wishlist"
                className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Heart className="w-8 h-8 text-red-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">Wishlist</span>
              </Link>
              
              <Link
                to="/customer/addresses"
                className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <MapPin className="w-8 h-8 text-green-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">Addresses</span>
              </Link>
              
              <Link
                to="/customer/settings"
                className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Settings className="w-8 h-8 text-purple-600 mb-2" />
                <span className="text-sm font-medium text-gray-900">Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Personal Details</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Name:</span> {state.user?.name}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Email:</span> {state.user?.email}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Member since:</span> January 2024
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Preferences</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Newsletter:</span> Subscribed
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">SMS Updates:</span> Enabled
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Currency:</span> USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;