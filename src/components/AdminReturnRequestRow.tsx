import React from 'react';
import { Search } from 'lucide-react';
import { ReturnRequest } from '../types';

interface AdminReturnRequestRowProps {
  request: ReturnRequest;
  onUpdateStatus: (req: ReturnRequest, status: string) => void;
  isUpdating: boolean;
  securePin: string;
}

const AdminReturnRequestRow = React.memo(({ request: req, onUpdateStatus, isUpdating, securePin }: AdminReturnRequestRowProps) => {
  return (
    <div key={req.id} className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex justify-between items-start flex-wrap gap-2 pb-3.5 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded text-xs">
              Ticket: {req.id}
            </span>
            <span className="font-mono font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded text-xs">
              Order: {req.orderId}
            </span>
            <span className="text-[10px] text-stone-400 font-sans">
              {new Date(req.createdAt).toLocaleString(undefined, {dateStyle: 'medium', timeStyle: 'short'})}
            </span>
          </div>
          <p className="text-xs text-stone-500 mt-1">Customer Email: <strong className="text-stone-700">{req.email}</strong></p>
        </div>

        {/* Status Select dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Pipeline Status:</span>
          <select
            value={req.status}
            onChange={(e) => onUpdateStatus(req, e.target.value)}
            className="py-1 px-2.5 border border-stone-200 rounded-lg text-xs bg-white font-semibold focus:outline-none focus:ring-1 focus:ring-stone-500 cursor-pointer"
          >
            <option value="pending">Pending Review</option>
            <option value="pickup">Reverse Pickup Scheduled</option>
            <option value="received">Received at Warehouse</option>
            <option value="approved">Completed / Refunded</option>
            <option value="rejected">Declined / Rejected</option>
          </select>
        </div>
      </div>

      {/* Requested Items List */}
      <div className="space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Customer Requested items:</p>
        <div className="space-y-2">
          {req.items?.map((item: any) => (
            <div key={item.id} className="p-3 bg-stone-50 border border-stone-150 rounded-xl flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                {item.image && (
                  <img src={item.image} alt="" className="w-9 h-11 object-cover rounded border border-stone-200" />
                )}
                <div>
                  <p className="font-semibold text-stone-900">{item.title}</p>
                  <p className="text-[10px] text-stone-400 font-sans">Size: {item.size} | Color: {item.color} | Qty: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default AdminReturnRequestRow;
