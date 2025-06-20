import React, { useState } from 'react';
import { Search, Filter, Eye, Package, Truck, CheckCircle, Clock, X, Download } from 'lucide-react';

const CustomerOrders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Processing',
      total: 299.99,
      items: [
        { name: 'Traditional Bengali Saree', quantity: 1, price: 299.99, image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' }
      ],
      shippingAddress: '123 Main St, New York, NY 10001',
      trackingNumber: 'TRK123456789',
      estimatedDelivery: '2024-01-20'
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Delivered',
      total: 149.50,
      items: [
        { name: 'Bengali Cookbook', quantity: 1, price: 34.99, image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
        { name: 'Brass Diya Set', quantity: 1, price: 89.99, image: 'https://images.pexels.com/photos/2306782/pexels-photo-2306782.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' }
      ],
      shippingAddress: '123 Main St, New York, NY 10001',
      trackingNumber: 'TRK987654321',
      deliveredDate: '2024-01-12'
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'Shipped',
      total: 89.99,
      items: [
        { name: 'Rabindra Sangeet Collection', quantity: 1, price: 49.99, image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
        { name: 'Bengali Sweets Box', quantity: 1, price: 39.99, image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' }
      ],
      shippingAddress: '123 Main St, New York, NY 10001',
      trackingNumber: 'TRK456789123',
      estimatedDelivery: '2024-01-18'
    }
  ];

  const statusOptions = ['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const canCancelOrder = (status: string) => {
    return status === 'Processing';
  };

  const cancelOrder = (orderId: string) => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      console.log('Cancelling order:', orderId);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
        <p className="text-gray-600">Track and manage your orders</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                <p className="text-sm text-gray-600">Ordered on {order.date}</p>
              </div>
              <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  <span className="ml-1">{order.status}</span>
                </span>
                <span className="text-lg font-semibold text-gray-900">${order.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-2 sm:mb-0">
                {order.status === 'Delivered' && order.deliveredDate && (
                  <span>Delivered on {order.deliveredDate}</span>
                )}
                {order.status === 'Shipped' && order.estimatedDelivery && (
                  <span>Estimated delivery: {order.estimatedDelivery}</span>
                )}
                {order.status === 'Processing' && order.estimatedDelivery && (
                  <span>Estimated delivery: {order.estimatedDelivery}</span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                </button>
                {order.trackingNumber && (
                  <button className="flex items-center space-x-1 text-green-600 hover:text-green-700 text-sm font-medium">
                    <Truck className="w-4 h-4" />
                    <span>Track</span>
                  </button>
                )}
                {canCancelOrder(order.status) && (
                  <button
                    onClick={() => cancelOrder(order.id)}
                    className="flex items-center space-x-1 text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50" onClick={() => setSelectedOrder(null)}></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Order Details - {selectedOrder.id}
                  </h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedOrder.status)}`}>
                    {getStatusIcon(selectedOrder.status)}
                    <span className="ml-1">{selectedOrder.status}</span>
                  </span>
                </div>
                
                <div className="space-y-6">
                  {/* Order Items */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Order Items</h4>
                    <div className="space-y-3">
                      {selectedOrder.items.map((item: any, index: number) => (
                        <div key={index} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-medium text-gray-900">${item.price.toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Information */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Shipping Information</h4>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <p className="text-sm"><span className="font-medium">Address:</span> {selectedOrder.shippingAddress}</p>
                      {selectedOrder.trackingNumber && (
                        <p className="text-sm"><span className="font-medium">Tracking Number:</span> {selectedOrder.trackingNumber}</p>
                      )}
                      {selectedOrder.estimatedDelivery && (
                        <p className="text-sm"><span className="font-medium">Estimated Delivery:</span> {selectedOrder.estimatedDelivery}</p>
                      )}
                      {selectedOrder.deliveredDate && (
                        <p className="text-sm"><span className="font-medium">Delivered:</span> {selectedOrder.deliveredDate}</p>
                      )}
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Order Summary</h4>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Subtotal:</span>
                        <span className="text-sm font-medium">${selectedOrder.total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Shipping:</span>
                        <span className="text-sm font-medium">Free</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-200 pt-2">
                        <span className="font-medium">Total:</span>
                        <span className="font-bold">${selectedOrder.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-6">
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download Invoice</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerOrders;