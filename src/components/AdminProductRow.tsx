import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Product } from '../types';
import { getOptimizedImageUrl } from '../lib/imageUtils';

interface AdminProductRowProps {
  product: Product;
  onEdit: (p: Product) => void;
  onDeleteStart: (id: string) => void;
  onDeleteConfirm: (id: string) => void;
  onDeleteCancel: () => void;
  isDeleting: boolean;
}

const AdminProductRow = React.memo(({ product: p, onEdit, onDeleteStart, onDeleteConfirm, onDeleteCancel, isDeleting }: AdminProductRowProps) => {
  return (
    <div className="p-4 flex gap-4 items-center flex-wrap sm:flex-nowrap">
      <div className="w-12 h-16 bg-stone-50 rounded-lg overflow-hidden flex-shrink-0 border border-stone-200">
        <img src={getOptimizedImageUrl(p.images[0], 100, 150)} alt="" className="w-full h-full object-cover object-top" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded border border-stone-200 font-bold uppercase">
            {p.id}
          </span>
          <span className="text-[10px] text-stone-400 capitalize">{p.category}</span>
        </div>
        <h4 className="font-serif text-sm font-bold text-stone-900 mt-1 truncate">{p.title}</h4>
        <div className="flex gap-2.5 text-xs text-stone-600 mt-0.5">
          <span className="font-bold text-stone-900">₹{p.price}</span>
          <span className="line-through text-stone-400">₹{p.mrp}</span>
          <span>• {p.fabric}</span>
        </div>
      </div>

      <div className="flex gap-2 w-full sm:w-auto justify-end">
        <button
          onClick={() => onEdit(p)}
          className="p-2 hover:bg-stone-100 rounded-xl text-stone-600 hover:text-stone-900 transition-colors cursor-pointer border border-stone-100"
          title="Edit Product"
        >
          <Edit className="w-4 h-4" />
        </button>
        
        {isDeleting ? (
          <div className="flex items-center gap-1">
            <button
              onClick={() => onDeleteConfirm(p.id)}
              className="px-2.5 py-1.5 bg-red-600 hover:bg-red-700 text-white text-[9px] font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Confirm
            </button>
            <button
              onClick={onDeleteCancel}
              className="px-2 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-700 text-[9px] font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => onDeleteStart(p.id)}
            className="p-2 hover:bg-red-50 rounded-xl text-stone-400 hover:text-red-600 transition-colors cursor-pointer border border-stone-100"
            title="Delete Product"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
});

export default AdminProductRow;
