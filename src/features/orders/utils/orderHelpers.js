// Date formatting
export const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (error) {
    return "Invalid Date";
  }
};

export const formatDateTime = (dateString) => {
  if (!dateString) return "N/A";
  
  try {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (error) {
    return "Invalid Date";
  }
};

// Price formatting
export const formatPrice = (value) => {
  if (typeof value !== "number") return "$0.00";
  return new Intl.NumberFormat("en-US", { 
    style: "currency", 
    currency: "USD" 
  }).format(value);
};

// Order status management
export const ORDER_STATUSES = {
  PENDING: "pending",
  PROCESSING: "processing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
};

export const STATUS_LABELS = {
  [ORDER_STATUSES.PENDING]: "Pending",
  [ORDER_STATUSES.PROCESSING]: "Processing",
  [ORDER_STATUSES.SHIPPED]: "Shipped",
  [ORDER_STATUSES.DELIVERED]: "Delivered",
  [ORDER_STATUSES.CANCELLED]: "Cancelled",
};

export const STATUS_COLORS = {
  [ORDER_STATUSES.PENDING]: "bg-yellow-100 text-yellow-800",
  [ORDER_STATUSES.PROCESSING]: "bg-blue-100 text-blue-800",
  [ORDER_STATUSES.SHIPPED]: "bg-purple-100 text-purple-800",
  [ORDER_STATUSES.DELIVERED]: "bg-green-100 text-green-800",
  [ORDER_STATUSES.CANCELLED]: "bg-red-100 text-red-800",
};

export const getStatusLabel = (status) => {
  return STATUS_LABELS[status] || status;
};

export const getStatusColor = (status) => {
  return STATUS_COLORS[status] || "bg-gray-100 text-gray-800";
};

// Order calculations
export const calculateOrderTotal = (items) => {
  if (!Array.isArray(items)) return 0;
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};

export const calculateOrderSubtotal = (items) => {
  return calculateOrderTotal(items);
};

export const calculateTax = (subtotal, taxRate = 0.1) => {
  return subtotal * taxRate;
};

export const calculateShipping = (subtotal, freeShippingThreshold = 50) => {
  return subtotal >= freeShippingThreshold ? 0 : 5.99;
};

export const calculateGrandTotal = (items, taxRate = 0.1, freeShippingThreshold = 50) => {
  const subtotal = calculateOrderSubtotal(items);
  const tax = calculateTax(subtotal, taxRate);
  const shipping = calculateShipping(subtotal, freeShippingThreshold);
  return subtotal + tax + shipping;
};

// Order filtering
export const filterOrdersByStatus = (orders, status) => {
  if (!status) return orders;
  return orders.filter(order => order.status === status);
};

export const filterOrdersByDateRange = (orders, startDate, endDate) => {
  if (!startDate && !endDate) return orders;
  
  return orders.filter(order => {
    const orderDate = new Date(order.createdAt);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    
    if (start && end) {
      return orderDate >= start && orderDate <= end;
    } else if (start) {
      return orderDate >= start;
    } else if (end) {
      return orderDate <= end;
    }
    
    return true;
  });
};

export const filterOrdersByCustomer = (orders, customerName) => {
  if (!customerName) return orders;
  
  const searchTerm = customerName.toLowerCase();
  return orders.filter(order => 
    order.customerName?.toLowerCase().includes(searchTerm) ||
    order.customerEmail?.toLowerCase().includes(searchTerm)
  );
};

export const searchOrders = (orders, searchTerm) => {
  if (!searchTerm) return orders;
  
  const term = searchTerm.toLowerCase();
  return orders.filter(order => 
    order.id?.toString().includes(term) ||
    order.customerName?.toLowerCase().includes(term) ||
    order.customerEmail?.toLowerCase().includes(term) ||
    order.status?.toLowerCase().includes(term)
  );
};

// Order sorting
export const sortOrdersByDate = (orders, ascending = false) => {
  return [...orders].sort((a, b) => {
    const dateA = new Date(a.createdAt || 0);
    const dateB = new Date(b.createdAt || 0);
    return ascending ? dateA - dateB : dateB - dateA;
  });
};

export const sortOrdersByTotal = (orders, ascending = false) => {
  return [...orders].sort((a, b) => {
    const totalA = a.total || 0;
    const totalB = b.total || 0;
    return ascending ? totalA - totalB : totalB - totalA;
  });
};

export const sortOrdersByStatus = (orders) => {
  const statusPriority = {
    [ORDER_STATUSES.PENDING]: 1,
    [ORDER_STATUSES.PROCESSING]: 2,
    [ORDER_STATUSES.SHIPPED]: 3,
    [ORDER_STATUSES.DELIVERED]: 4,
    [ORDER_STATUSES.CANCELLED]: 5,
  };
  
  return [...orders].sort((a, b) => {
    const priorityA = statusPriority[a.status] || 999;
    const priorityB = statusPriority[b.status] || 999;
    return priorityA - priorityB;
  });
};

// Order validation
export const validateOrder = (order) => {
  const errors = {};

  if (!order.customerName?.trim()) {
    errors.customerName = "Customer name is required";
  }

  if (!order.customerEmail?.trim()) {
    errors.customerEmail = "Customer email is required";
  } else if (!/\S+@\S+\.\S+/.test(order.customerEmail)) {
    errors.customerEmail = "Email is invalid";
  }

  if (!order.shippingAddress?.trim()) {
    errors.shippingAddress = "Shipping address is required";
  }

  if (!Array.isArray(order.items) || order.items.length === 0) {
    errors.items = "At least one item is required";
  } else {
    order.items.forEach((item, index) => {
      if (!item.productId) {
        errors[`items.${index}.productId`] = "Product is required";
      }
      if (!item.quantity || item.quantity < 1) {
        errors[`items.${index}.quantity`] = "Quantity must be at least 1";
      }
    });
  }

  return errors;
};

// Order statistics
export const getOrderStats = (orders) => {
  const stats = {
    total: orders.length,
    totalRevenue: 0,
    averageOrderValue: 0,
    byStatus: {},
    byMonth: {},
  };

  orders.forEach(order => {
    // Total revenue
    stats.totalRevenue += order.total || 0;

    // By status
    const status = order.status || "unknown";
    stats.byStatus[status] = (stats.byStatus[status] || 0) + 1;

    // By month
    const date = new Date(order.createdAt);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    stats.byMonth[monthKey] = (stats.byMonth[monthKey] || 0) + 1;
  });

  // Average order value
  stats.averageOrderValue = stats.total > 0 ? stats.totalRevenue / stats.total : 0;

  return stats;
};

// Order export helpers
export const exportOrdersToCSV = (orders) => {
  const headers = [
    "Order ID",
    "Customer Name",
    "Customer Email",
    "Status",
    "Total",
    "Items Count",
    "Created Date",
    "Shipping Address"
  ];

  const rows = orders.map(order => [
    order.id,
    order.customerName,
    order.customerEmail,
    order.status,
    formatPrice(order.total),
    order.items?.length || 0,
    formatDate(order.createdAt),
    order.shippingAddress
  ]);

  const csvContent = [headers, ...rows]
    .map(row => row.map(cell => `"${cell}"`).join(","))
    .join("\n");

  return csvContent;
};

// Order tracking
export const getOrderTimeline = (order) => {
  const timeline = [];

  if (order.createdAt) {
    timeline.push({
      date: order.createdAt,
      status: "Order Placed",
      description: "Order was created"
    });
  }

  if (order.processingAt) {
    timeline.push({
      date: order.processingAt,
      status: "Processing",
      description: "Order is being processed"
    });
  }

  if (order.shippedAt) {
    timeline.push({
      date: order.shippedAt,
      status: "Shipped",
      description: "Order has been shipped"
    });
  }

  if (order.deliveredAt) {
    timeline.push({
      date: order.deliveredAt,
      status: "Delivered",
      description: "Order has been delivered"
    });
  }

  return timeline.sort((a, b) => new Date(a.date) - new Date(b.date));
}; 