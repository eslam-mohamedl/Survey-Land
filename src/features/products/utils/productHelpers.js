// Price formatting
export const formatPrice = (value) => {
  if (typeof value !== "number") return "$0.00";
  return new Intl.NumberFormat("en-US", { 
    style: "currency", 
    currency: "USD" 
  }).format(value);
};

export const getDiscountedPrice = (price, discountPercent) => {
  if (!price || !discountPercent) return price;
  return Math.max(0, price - price * (discountPercent / 100));
};

export const calculateDiscountPercentage = (originalPrice, currentPrice) => {
  if (!originalPrice || !currentPrice || originalPrice <= currentPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

// Stock management
export const getStockStatus = (stock) => {
  if (stock === undefined || stock === null) {
    return { label: "Unknown", color: "bg-gray-100 text-gray-800" };
  }
  
  if (stock <= 0) {
    return { label: "Out of Stock", color: "bg-red-100 text-red-800" };
  } else if (stock <= 5) {
    return { label: "Low Stock", color: "bg-orange-100 text-orange-800" };
  } else if (stock <= 20) {
    return { label: "Limited Stock", color: "bg-yellow-100 text-yellow-800" };
  } else {
    return { label: "In Stock", color: "bg-green-100 text-green-800" };
  }
};

export const isInStock = (stock) => {
  return stock > 0;
};

export const isLowStock = (stock, threshold = 5) => {
  return stock > 0 && stock <= threshold;
};

// Product categories
export const PRODUCT_CATEGORIES = {
  ELECTRONICS: "electronics",
  CLOTHING: "clothing",
  BOOKS: "books",
  HOME: "home",
  SPORTS: "sports",
  BEAUTY: "beauty",
  TOYS: "toys",
  AUTOMOTIVE: "automotive",
  FOOD: "food",
  HEALTH: "health",
};

export const CATEGORY_LABELS = {
  [PRODUCT_CATEGORIES.ELECTRONICS]: "Electronics",
  [PRODUCT_CATEGORIES.CLOTHING]: "Clothing",
  [PRODUCT_CATEGORIES.BOOKS]: "Books",
  [PRODUCT_CATEGORIES.HOME]: "Home & Garden",
  [PRODUCT_CATEGORIES.SPORTS]: "Sports",
  [PRODUCT_CATEGORIES.BEAUTY]: "Beauty",
  [PRODUCT_CATEGORIES.TOYS]: "Toys",
  [PRODUCT_CATEGORIES.AUTOMOTIVE]: "Automotive",
  [PRODUCT_CATEGORIES.FOOD]: "Food & Beverages",
  [PRODUCT_CATEGORIES.HEALTH]: "Health & Wellness",
};

export const getCategoryLabel = (category) => {
  return CATEGORY_LABELS[category] || category;
};

// Product validation
export const validateProduct = (product) => {
  const errors = {};

  if (!product.name?.trim()) {
    errors.name = "Product name is required";
  }

  if (!product.description?.trim()) {
    errors.description = "Product description is required";
  }

  if (!product.price || parseFloat(product.price) <= 0) {
    errors.price = "Valid price is required";
  }

  if (!product.stock || parseInt(product.stock) < 0) {
    errors.stock = "Valid stock quantity is required";
  }

  if (!product.category?.trim()) {
    errors.category = "Category is required";
  }

  if (!product.sku?.trim()) {
    errors.sku = "SKU is required";
  }

  if (product.originalPrice && parseFloat(product.originalPrice) <= parseFloat(product.price)) {
    errors.originalPrice = "Original price must be higher than current price";
  }

  return errors;
};

// Product filtering
export const filterProductsByCategory = (products, category) => {
  if (!category) return products;
  return products.filter(product => product.category === category);
};

export const filterProductsByPriceRange = (products, minPrice, maxPrice) => {
  if (!minPrice && !maxPrice) return products;
  
  return products.filter(product => {
    const price = product.price || 0;
    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;
    
    return price >= min && price <= max;
  });
};

export const filterProductsByStock = (products, inStockOnly = false) => {
  if (!inStockOnly) return products;
  return products.filter(product => isInStock(product.stock));
};

export const searchProducts = (products, searchTerm) => {
  if (!searchTerm) return products;
  
  const term = searchTerm.toLowerCase();
  return products.filter(product => 
    product.name?.toLowerCase().includes(term) ||
    product.description?.toLowerCase().includes(term) ||
    product.sku?.toLowerCase().includes(term) ||
    product.category?.toLowerCase().includes(term) ||
    product.tags?.some(tag => tag.toLowerCase().includes(term))
  );
};

// Product sorting
export const sortProductsByName = (products, ascending = true) => {
  return [...products].sort((a, b) => {
    const nameA = (a.name || "").toLowerCase();
    const nameB = (b.name || "").toLowerCase();
    return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });
};

export const sortProductsByPrice = (products, ascending = true) => {
  return [...products].sort((a, b) => {
    const priceA = a.price || 0;
    const priceB = b.price || 0;
    return ascending ? priceA - priceB : priceB - priceA;
  });
};

export const sortProductsByDate = (products, ascending = false) => {
  return [...products].sort((a, b) => {
    const dateA = new Date(a.createdAt || 0);
    const dateB = new Date(b.createdAt || 0);
    return ascending ? dateA - dateB : dateB - dateA;
  });
};

export const sortProductsByStock = (products, ascending = false) => {
  return [...products].sort((a, b) => {
    const stockA = a.stock || 0;
    const stockB = b.stock || 0;
    return ascending ? stockA - stockB : stockB - stockA;
  });
};

// Product statistics
export const getProductStats = (products) => {
  const stats = {
    total: products.length,
    totalValue: 0,
    averagePrice: 0,
    inStock: 0,
    outOfStock: 0,
    lowStock: 0,
    byCategory: {},
    byPriceRange: {
      under10: 0,
      under50: 0,
      under100: 0,
      over100: 0,
    },
  };

  products.forEach(product => {
    // Total value
    stats.totalValue += (product.price || 0) * (product.stock || 0);

    // Stock status
    if (isInStock(product.stock)) {
      stats.inStock++;
      if (isLowStock(product.stock)) {
        stats.lowStock++;
      }
    } else {
      stats.outOfStock++;
    }

    // By category
    const category = product.category || "uncategorized";
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;

    // By price range
    const price = product.price || 0;
    if (price < 10) stats.byPriceRange.under10++;
    else if (price < 50) stats.byPriceRange.under50++;
    else if (price < 100) stats.byPriceRange.under100++;
    else stats.byPriceRange.over100++;
  });

  // Average price
  stats.averagePrice = stats.total > 0 ? stats.totalValue / stats.total : 0;

  return stats;
};

// SKU generation
export const generateSKU = (category = "PROD", length = 8) => {
  const prefix = category ? category.substring(0, 3).toUpperCase() : "PROD";
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, length - 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
};

// Product export helpers
export const exportProductsToCSV = (products) => {
  const headers = [
    "Product ID",
    "Name",
    "Description",
    "Category",
    "SKU",
    "Price",
    "Original Price",
    "Stock",
    "Status",
    "Created Date"
  ];

  const rows = products.map(product => [
    product.id,
    product.name,
    product.description,
    getCategoryLabel(product.category),
    product.sku,
    formatPrice(product.price),
    product.originalPrice ? formatPrice(product.originalPrice) : "",
    product.stock,
    getStockStatus(product.stock).label,
    new Date(product.createdAt).toLocaleDateString()
  ]);

  const csvContent = [headers, ...rows]
    .map(row => row.map(cell => `"${cell}"`).join(","))
    .join("\n");

  return csvContent;
};

// Product image helpers
export const getProductImage = (product, fallback = null) => {
  if (product.image) return product.image;
  if (fallback) return fallback;
  
  // Return a placeholder image URL or base64
  return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCAxMDBDODAgODkuNTQ0NyA4OC4wMDAxIDgxIDEwMCA4MUMxMTEuMDQ2IDgxIDExOSA4OS41NDQ3IDExOSAxMDBDMTE5IDExMC40NTUgMTExLjA0NiAxMTkgMTAwIDExOUM4OC4wMDAxIDExOSA4MCAxMTAuNDU1IDgwIDEwMFoiIGZpbGw9IiNEM0Q3RDAiLz4KPHBhdGggZD0iTTEwMCAxMjVDMTEwLjQ1NSAxMjUgMTE5IDExNi40NTUgMTE5IDEwNkMxMTkgOTUuNTQ0NyAxMTAuNDU1IDg3IDEwMCA4N0M4OS41NDQ3IDg3IDgxIDk1LjU0NDcgODEgMTA2QzgxIDExNi40NTUgODkuNTQ0NyAxMjUgMTAwIDEyNVoiIGZpbGw9IiNEM0Q3RDAiLz4KPC9zdmc+";
};

// Product comparison
export const compareProducts = (product1, product2) => {
  const comparison = {
    price: {
      difference: (product1.price || 0) - (product2.price || 0),
      percentage: product2.price ? ((product1.price - product2.price) / product2.price) * 100 : 0,
    },
    stock: {
      difference: (product1.stock || 0) - (product2.stock || 0),
    },
    category: product1.category === product2.category,
    inStock: isInStock(product1.stock) === isInStock(product2.stock),
  };

  return comparison;
}; 