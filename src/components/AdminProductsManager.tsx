import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Product } from '../types';
import AdminProductRow from './AdminProductRow';
// @ts-ignore
import { FixedSizeList } from 'react-window';

interface AdminProductsManagerProps {
  products: Product[];
  isLoading: boolean;
  productData: any;
  productPage: number;
  setProductPage: (page: number | ((prev: number) => number)) => void;
  handleOpenEditForm: (p: Product) => void;
  setIsDeletingId: (id: string | null) => void;
  handleDeleteProduct: (id: string) => void;
  isDeletingId: string | null;
  dashboardSearch: string;
  setDashboardSearch: (s: string) => void;
}

const AdminProductsManager = ({
  products,
  isLoading,
  productData,
  productPage,
  setProductPage,
  handleOpenEditForm,
  setIsDeletingId,
  handleDeleteProduct,
  isDeletingId,
  dashboardSearch,
  setDashboardSearch
}: AdminProductsManagerProps) => {

  const Row = ({ index, style }: { index: number, style: React.CSSProperties }) => {
    const p = productData.products[index];
    return (
      <div style={style}>
        <AdminProductRow
          key={p.id}
          product={p}
          onEdit={handleOpenEditForm}
          onDeleteStart={setIsDeletingId}
          onDeleteConfirm={handleDeleteProduct}
          onDeleteCancel={() => setIsDeletingId(null)}
          isDeleting={isDeletingId === p.id}
        />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h3 className="font-serif text-2xl font-bold text-stone-900">Products Manager</h3>
        <p className="text-xs text-stone-500 font-sans">Manage catalog, pricing, and inventory.</p>
      </div>

      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search products by title, category, or SKU..."
          value={dashboardSearch}
          onChange={(e) => setDashboardSearch(e.target.value)}
          className="w-full bg-white border border-stone-200 rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-stone-800 font-sans"
        />
        <Search className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
      </div>

      {/* Product Rows List */}
      <div className="bg-white border border-stone-200/80 rounded-2xl overflow-hidden shadow-sm">
        {isLoading ? (
          <div className="text-center py-12 text-stone-400 text-xs">Loading products...</div>
        ) : productData?.products.length > 0 ? (
          <>
            <FixedSizeList
              height={500}
              itemCount={productData.products.length}
              itemSize={80} // Adjust based on AdminProductRow height
              width="100%"
            >
              {Row}
            </FixedSizeList>
            <div className="p-4 flex items-center justify-between border-t border-stone-100">
              <button
                disabled={productPage === 1}
                onClick={() => setProductPage(prev => Math.max(prev - 1, 1))}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-xs text-stone-500 font-sans">
                Page {productPage}
              </span>
              <button
                disabled={!productData.lastVisible}
                onClick={() => setProductPage(prev => prev + 1)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12 text-stone-400 text-xs">
            No products found matching "{dashboardSearch}".
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProductsManager;
