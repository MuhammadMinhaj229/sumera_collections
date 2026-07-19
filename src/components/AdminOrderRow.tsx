import React from 'react';
import { Calendar, User, Phone, MapPin, Mail } from 'lucide-react';
import { getOptimizedImageUrl } from '../lib/imageUtils';

interface AdminOrderRowProps {
  order: any;
  onUpdateStatus: (order: any, status: string) => void;
}

const AdminOrderRow = React.memo(({ order, onUpdateStatus }: AdminOrderRowProps) => {
  return (
    <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-sm space-y-4">
      
      {/* Order Metadata Row */}
      <div className="flex justify-between items-start flex-wrap gap-2 pb-3.5 border-b border-stone-100">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-stone-950 text-xs tracking-wider uppercase bg-stone-100 border border-stone-200 px-2 py-0.5 rounded">
              {order.id}
            </span>
            <span className="text-[10px] text-stone-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {order.date}
            </span>
          </div>
          <p className="text-[10px] text-stone-400">Payment: {order.paymentMethod} | Status: <span className="font-bold text-stone-800">{order.status}</span></p>
        </div>

        {/* Status Switcher Dropdown */}
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400">Set Status:</span>
          <select
            value={order.status}
            onChange={(e) => onUpdateStatus(order, e.target.value)}
            className="bg-stone-50 border border-stone-250 rounded-lg text-[10px] font-bold p-1 px-2 focus:outline-none cursor-pointer"
          >
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Customer Profile Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-stone-50 p-3 rounded-xl border border-stone-150/60 font-sans">
        <div className="space-y-1.5 text-stone-700">
          <p className="font-bold text-stone-900 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-stone-400" />
            <span>{order.shippingDetails?.name || 'Walk-in Customer'}</span>
          </p>
          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            <Phone className="w-3.5 h-3.5 text-stone-400" />
            <span>{order.shippingDetails?.phone}</span>
          </p>
          <p className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-stone-400" />
            <span>{order.shippingDetails?.email}</span>
          </p>
        </div>

        <div className="space-y-1 text-stone-700 flex items-start gap-1.5 md:border-l md:border-stone-200/80 md:pl-4">
          <MapPin className="w-3.5 h-3.5 text-stone-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="leading-relaxed">{order.shippingDetails?.address}</p>
            <p className="font-semibold text-stone-900 mt-0.5">{order.shippingDetails?.city} - {order.shippingDetails?.pincode}</p>
          </div>
        </div>
      </div>

      {/* Ordered Items Row */}
      <div className="divide-y divide-stone-100">
        {order.items?.map((it: any, index: number) => (
          <div key={index} className="py-2.5 flex justify-between items-center text-xs first:pt-0 last:pb-0">
            <div className="flex gap-2.5 items-center">
              <img src={getOptimizedImageUrl(it.image, 64, 80)} alt="" className="w-8 h-10 object-cover rounded-lg border border-stone-200" />
              <div>
                <p className="font-semibold text-stone-850 truncate max-w-sm">{it.title}</p>
                <p className="text-[10px] text-stone-400 font-sans">Size: {it.size} | Color: {it.color} | Qty: {it.quantity}</p>
              </div>
            </div>
            <span className="font-bold text-stone-950 font-mono">₹{it.price * it.quantity}</span>
          </div>
        ))}
      </div>

      {/* Order Total Line */}
      <div className="flex justify-between items-center pt-2.5 border-t border-stone-100 text-xs font-bold text-stone-900">
        <span className="text-stone-400 font-normal">Method: {order.paymentMethod}</span>
        <span className="font-serif text-sm">Total Value: ₹{order.total}</span>
      </div>

    </div>
  );
});

export default AdminOrderRow;
