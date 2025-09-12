import React from "react";
import { formatPrice, getStockStatus } from "../utils/productHelpers";

const ProductCard = ({ product, onEdit, onDelete, onView, showActions = true }) => {
  const stockStatus = getStockStatus(product.stock);

  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Stock Status Badge */}
        <div className="absolute top-2 right-2">
          <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${stockStatus.color}`}>
            {stockStatus.label}
          </span>
        </div>

        {/* Actions */}
        {showActions && (
          <div className="absolute top-2 left-2 flex space-x-1">
            {onView && (
              <button
                onClick={() => onView(product)}
                className="p-1.5 bg-white bg-opacity-90 text-blue-600 rounded-md hover:bg-opacity-100 transition-all"
                title="View product"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            )}
            
            {onEdit && (
              <button
                onClick={() => onEdit(product)}
                className="p-1.5 bg-white bg-opacity-90 text-orange-600 rounded-md hover:bg-opacity-100 transition-all"
                title="Edit product"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
            )}
            
            {onDelete && (
              <button
                onClick={() => onDelete(product.id)}
                className="p-1.5 bg-white bg-opacity-90 text-red-600 rounded-md hover:bg-opacity-100 transition-all"
                title="Delete product"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-green-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          <div className="text-sm text-gray-500">
            Stock: {product.stock || 0}
          </div>
        </div>

        {/* Category */}
        {product.category && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Category:</span>
            <span className="font-medium text-gray-700">{product.category}</span>
          </div>
        )}

        {/* SKU */}
        {product.sku && (
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-gray-500">SKU:</span>
            <span className="font-mono text-gray-700">{product.sku}</span>
          </div>
        )}

        {/* Created Date */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Added: {new Date(product.createdAt).toLocaleDateString()}</span>
            {product.isActive !== undefined && (
              <span className={product.isActive ? "text-green-600" : "text-red-600"}>
                {product.isActive ? "Active" : "Inactive"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 