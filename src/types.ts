/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Colorway {
  name: string;
  hex: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface MeasurementRow {
  size: string;
  chestOrWaist: string; // "Chest" for top, "Waist" for bottom
  length: string;
  extra?: string; // "Shoulder" or "Hip"
}

export interface SizeChartData {
  top: MeasurementRow[];
  bottom?: MeasurementRow[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  mrp: number;
  images: string[];
  category: string;
  fabric: string;
  length: string;
  sizes: string[];
  description: string;
  specs: SpecItem[];
  badges: string[]; // e.g. "Set", "Top Only", "Unstitched", "5 Colours", "Best Seller", "New"
  colors: Colorway[];
  rating: number;
  reviewsCount: number;
  type: 'Set' | 'Top Only' | 'Unstitched';
  hasBottom: boolean;
  sizeChart: SizeChartData;
  reviews: Review[];
  adminPin?: string;
}

export interface CartItem {
  id: string; // Unique ID (product.id + selectedSize + selectedColor)
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface OrderDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  paymentMethod: 'COD' | 'Card';
}

export interface RewardPoints {
  balance: number;
  claimedRewards: string[]; // Track IDs of claimed rewards
  history: {
    id: string;
    description: string;
    points: number;
    date: string;
  }[];
}

export interface ReturnItem {
  id: string;
  title: string;
  price: number;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  image: string;
  requestType: 'return' | 'exchange';
  reason: string;
  exchangeSize?: string | null;
  exchangeColor?: string | null;
}

export interface ReturnRequest {
  id: string;
  orderId: string;
  email: string;
  userId: string;
  items: ReturnItem[];
  refundMethod: 'points' | 'original' | 'n/a';
  refundAmount: number;
  status: 'pending' | 'pickup' | 'received' | 'approved' | 'rejected';
  createdAt: string;
  resolvedAt: string | null;
  image: string | null;
  adminNotes: string;
  adminPin?: string;
}

export interface SelectedItemDetail {
  type: 'return' | 'exchange';
  reason: string;
  exchangeSize?: string;
  exchangeColor?: string;
}

