/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from './types';

export const CATEGORIES = [
  { id: 'all', name: 'All Collections' },
  { id: 'new-arrivals', name: 'New Arrivals' },
  { id: 'kurtis', name: 'Kurtis & Sets' },
  { id: 'tops', name: 'Printed & Embroidered Tops' },
  { id: 'maxi-dresses', name: 'Maxi Dresses' },
  { id: 'bottom-sets', name: 'Plazzo & Bottom Sets' },
  { id: 'unstitched', name: 'Unstitched Dress Materials' },
  { id: 'best-sellers', name: 'Best Sellers' },
  { id: 'sale', name: 'Clearance Sale' }
];

export const FABRICS = ['Rayon', 'Georgette', 'Cotton', 'Printed Silk', 'Chanderi/Silk', 'Organdy Cotton'];
export const SIZES = ['M', 'L', 'XL', 'XXL'];
export const OCCASIONS = ['Daily Wear', 'Office Wear', 'Vacation/Casual', 'Festive'];

export const PRODUCTS: Product[] = [
  {
    id: 'sc-001',
    title: 'Embroidery Work Short Top with Plazzo Set',
    price: 1299,
    mrp: 2499,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'bottom-sets',
    fabric: 'Rayon & Cotton',
    length: 'Top: 32", Plazzo: 38"',
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Elevate your everyday wardrobe with our best-selling Short Top & Plazzo Set. Crafted from heavy rayon with intricate neckline embroidery, paired with highly breathable flex cotton plazzos featuring a convenient one-side pocket.',
    specs: [
      { label: 'Top Fabric', value: 'Heavy Rayon with Heavy Embroidery Work' },
      { label: 'Plazzo Fabric', value: 'Premium Flex Cotton with One Side Pocket' },
      { label: 'Length', value: 'Top 32" | Plazzo 38"' },
      { label: 'Work', value: 'Intricate Resham Thread embroidery' },
      { label: 'Style', value: 'Short top with straight-leg comfort plazzo' },
      { label: 'Occasion', value: 'Daily Wear, Festive, Office Wear' }
    ],
    badges: ['Set', 'Best Seller', '2 Colours'],
    colors: [
      { name: 'Mustard Yellow', hex: '#E1AD01' },
      { name: 'Coral Peach', hex: '#F88379' }
    ],
    rating: 4.8,
    reviewsCount: 142,
    type: 'Set',
    hasBottom: true,
    sizeChart: {
      top: [
        { size: 'M (38)', chestOrWaist: '38"', length: '32"', extra: '15" Shoulder' },
        { size: 'L (40)', chestOrWaist: '40"', length: '32"', extra: '15.5" Shoulder' },
        { size: 'XL (42)', chestOrWaist: '42"', length: '32"', extra: '16" Shoulder' },
        { size: 'XXL (44)', chestOrWaist: '44"', length: '32"', extra: '16.5" Shoulder' }
      ],
      bottom: [
        { size: 'M (38)', chestOrWaist: '28" - 34" (Elastic)', length: '38"', extra: '24" Thigh' },
        { size: 'L (40)', chestOrWaist: '30" - 36" (Elastic)', length: '38"', extra: '25" Thigh' },
        { size: 'XL (42)', chestOrWaist: '32" - 38" (Elastic)', length: '38"', extra: '26" Thigh' },
        { size: 'XXL (44)', chestOrWaist: '34" - 40" (Elastic)', length: '38"', extra: '27" Thigh' }
      ]
    },
    reviews: [
      { id: 'r1', name: 'Priya Sharma', rating: 5, date: '2026-06-15', comment: 'The embroidery is so neat and the rayon top is super soft! Plazzo has pockets too which is a massive win.', verified: true },
      { id: 'r2', name: 'Meenakshi Iyer', rating: 4, date: '2026-06-10', comment: 'Loved the fit, very accurate sizing. The mustard yellow color is exactly as shown in the picture.', verified: true }
    ]
  },
  {
    id: 'sc-002',
    title: 'Full Flair Long Printed Maxi with Fancy Sleeves',
    price: 1599,
    mrp: 2999,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'maxi-dresses',
    fabric: 'Georgette',
    length: '48"',
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Perfect for your upcoming vacation or festive outings, this full-flair long maxi dress features premium floral Georgette print with fancy sleeves and a comfortable inner crepe lining.',
    specs: [
      { label: 'Fabric', value: 'Heavy Georgette Print with Inner Crepe Lining' },
      { label: 'Length', value: '48 inches' },
      { label: 'Sleeve Style', value: 'Fancy flared style' },
      { label: 'Neckline', value: 'Elegant Round Neck' },
      { label: 'Flare', value: '3.5 meters full circular sweep' },
      { label: 'Occasion', value: 'Vacation/Casual, Daily Wear' }
    ],
    badges: ['Top Only', 'New', '2 Colours'],
    colors: [
      { name: 'Indigo Blue', hex: '#00416A' },
      { name: 'Ruby Red', hex: '#9B111E' }
    ],
    rating: 4.9,
    reviewsCount: 88,
    type: 'Top Only',
    hasBottom: false,
    sizeChart: {
      top: [
        { size: 'M (38)', chestOrWaist: '38"', length: '48"', extra: '15" Shoulder' },
        { size: 'L (40)', chestOrWaist: '40"', length: '48"', extra: '15.5" Shoulder' },
        { size: 'XL (42)', chestOrWaist: '42"', length: '48"', extra: '16" Shoulder' },
        { size: 'XXL (44)', chestOrWaist: '44"', length: '48"', extra: '16.5" Shoulder' }
      ]
    },
    reviews: [
      { id: 'r3', name: 'Ayesha Khan', rating: 5, date: '2026-07-02', comment: 'Beautiful flowy material. Received so many compliments when I wore it for my beach vacation!', verified: true }
    ]
  },
  {
    id: 'sc-003',
    title: 'Short Kurti Top with Neck & Sleeve Pattern',
    price: 899,
    mrp: 1799,
    images: [
      'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'kurtis',
    fabric: 'Printed Silk',
    length: '35"',
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'A contemporary printed silk kurti featuring elegant custom neck and cuff patterns. Fully lined with breathable crepe for all-day comfort and luxury texture.',
    specs: [
      { label: 'Fabric', value: 'Printed Silk with Crepe Lining' },
      { label: 'Length', value: '35 inches' },
      { label: 'Sleeve', value: '3/4 Sleeves with Border Trim' },
      { label: 'Neck Design', value: 'V-neck with Contrast Piping' },
      { label: 'Occasion', value: 'Office Wear, Daily Wear' }
    ],
    badges: ['Top Only', '2 Colours'],
    colors: [
      { name: 'Olive Green', hex: '#808000' },
      { name: 'Mustard Yellow', hex: '#E1AD01' }
    ],
    rating: 4.6,
    reviewsCount: 54,
    type: 'Top Only',
    hasBottom: false,
    sizeChart: {
      top: [
        { size: 'M (38)', chestOrWaist: '38"', length: '35"', extra: '15" Shoulder' },
        { size: 'L (40)', chestOrWaist: '40"', length: '35"', extra: '15.5" Shoulder' },
        { size: 'XL (42)', chestOrWaist: '42"', length: '35"', extra: '16" Shoulder' },
        { size: 'XXL (44)', chestOrWaist: '44"', length: '35"', extra: '16.5" Shoulder' }
      ]
    },
    reviews: [
      { id: 'r4', name: 'Ritika Patel', rating: 4, date: '2026-06-25', comment: 'Very professional look. Perfect for office wear during summers. Silk material has a beautiful subtle shine.', verified: true }
    ]
  },
  {
    id: 'sc-004',
    title: 'Cotton Printed Tops',
    price: 699,
    mrp: 1299,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'tops',
    fabric: 'Cotton',
    length: '30"',
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'A collection of ultra-breathable pure cotton printed tops designed for comfort and everyday grace. Pair them effortlessly with jeans, leggings, or plazzos.',
    specs: [
      { label: 'Fabric', value: '100% Pure Printed Jaipur Cotton' },
      { label: 'Length', value: '30 inches' },
      { label: 'Sleeve', value: '3/4 Sleeves' },
      { label: 'Wash Care', value: 'Gentle Hand Wash Separately' },
      { label: 'Occasion', value: 'Daily Wear, Office Wear' }
    ],
    badges: ['Top Only', '3 Colours'],
    colors: [
      { name: 'Indigo Blue', hex: '#00416A' },
      { name: 'Terracotta', hex: '#C04D30' },
      { name: 'Sage Green', hex: '#9CAF88' }
    ],
    rating: 4.7,
    reviewsCount: 210,
    type: 'Top Only',
    hasBottom: false,
    sizeChart: {
      top: [
        { size: 'M (38)', chestOrWaist: '38"', length: '30"', extra: '14.5" Shoulder' },
        { size: 'L (40)', chestOrWaist: '40"', length: '30"', extra: '15" Shoulder' },
        { size: 'XL (42)', chestOrWaist: '42"', length: '30"', extra: '15.5" Shoulder' },
        { size: 'XXL (44)', chestOrWaist: '44"', length: '30"', extra: '16" Shoulder' }
      ]
    },
    reviews: [
      { id: 'r5', name: 'Anjali Desai', rating: 5, date: '2026-07-04', comment: 'Pure cotton material. Perfect for hot summers. Got the terracotta one and the print is very elegant.', verified: true }
    ]
  },
  {
    id: 'sc-005',
    title: 'Cotton Sleeveless Ruffle Maxi Dress',
    price: 1499,
    mrp: 2799,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'maxi-dresses',
    fabric: 'Cotton',
    length: '52"',
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'This gorgeous sleeveless maxi features a 3-tier ruffle flare, crafted in soft, printed Jaipur cotton. Lightweight and breezy, perfect for hot days and beach vacations.',
    specs: [
      { label: 'Fabric', value: '100% Cotton Print' },
      { label: 'Design', value: 'Sleeveless with a 3-tier flare design' },
      { label: 'Length', value: '52 inches' },
      { label: 'Lining', value: 'None (Completely opaque premium cotton)' },
      { label: 'Occasion', value: 'Vacation/Casual, Daily Wear' }
    ],
    badges: ['Top Only', '2 Colours'],
    colors: [
      { name: 'Ivory Teal', hex: '#2E8B57' },
      { name: 'Lavender Blush', hex: '#FFF0F5' }
    ],
    rating: 4.5,
    reviewsCount: 39,
    type: 'Top Only',
    hasBottom: false,
    sizeChart: {
      top: [
        { size: 'M (38)', chestOrWaist: '38"', length: '52"', extra: '14" Shoulder' },
        { size: 'L (40)', chestOrWaist: '40"', length: '52"', extra: '14.5" Shoulder' },
        { size: 'XL (42)', chestOrWaist: '42"', length: '52"', extra: '15" Shoulder' },
        { size: 'XXL (44)', chestOrWaist: '44"', length: '52"', extra: '15.5" Shoulder' }
      ]
    },
    reviews: [
      { id: 'r6', name: 'Surbhi Goel', rating: 5, date: '2026-05-30', comment: 'The tier flare is huge! Perfect dress for summer photoshoots. Fabric is extremely comfortable.', verified: true }
    ]
  },
  {
    id: 'sc-006',
    title: 'Trending Short Top with Fancy Sleeves',
    price: 799,
    mrp: 1499,
    images: [
      'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'tops',
    fabric: 'Rayon',
    length: '31"',
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'An absolute Pinterest favorite! This heavy rayon short top features gorgeous embroidery thread work, fancy designer sleeves, and a flattering fit suitable for office or college wear.',
    specs: [
      { label: 'Fabric', value: 'Heavy Rayon with Fine Thread Embroidery' },
      { label: 'Length', value: '31 inches' },
      { label: 'Sleeve', value: 'Fancy Bell Sleeves with Work' },
      { label: 'Occasion', value: 'Office Wear, Casual, Daily Wear' }
    ],
    badges: ['Top Only', '5 Colours', 'Trending'],
    colors: [
      { name: 'Maroon', hex: '#800000' },
      { name: 'Emerald Green', hex: '#004B49' },
      { name: 'Navy Blue', hex: '#000080' },
      { name: 'Rust Orange', hex: '#B7410E' },
      { name: 'Mustard Yellow', hex: '#E1AD01' }
    ],
    rating: 4.8,
    reviewsCount: 167,
    type: 'Top Only',
    hasBottom: false,
    sizeChart: {
      top: [
        { size: 'M (38)', chestOrWaist: '38"', length: '31"', extra: '15" Shoulder' },
        { size: 'L (40)', chestOrWaist: '40"', length: '31"', extra: '15.5" Shoulder' },
        { size: 'XL (42)', chestOrWaist: '42"', length: '31"', extra: '16" Shoulder' },
        { size: 'XXL (44)', chestOrWaist: '44"', length: '31"', extra: '16.5" Shoulder' }
      ]
    },
    reviews: [
      { id: 'r7', name: 'Nisha Verma', rating: 5, date: '2026-07-01', comment: 'The rust orange shade is stunning. Bell sleeves look so unique. Highly recommend!', verified: true }
    ]
  },
  {
    id: 'sc-007',
    title: '"Charmi Vol 3" (AI Fashion Collection)',
    price: 849,
    mrp: 1599,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'new-arrivals',
    fabric: 'Rayon',
    length: '31"',
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Our most viral Instagram and Pinterest-style collection: "Charmi Vol 3". Combining premium heavy Rayon with gorgeous multi-colored neck embroidery and structured statement sleeves. Available in 9 breathtaking colors.',
    specs: [
      { label: 'Collection Name', value: 'Charmi Vol 3' },
      { label: 'Fabric', value: 'Premium Heavy Liva Rayon' },
      { label: 'Work Type', value: 'Detailed Embroidery Thread Work on Neck' },
      { label: 'Length', value: '31 inches' },
      { label: 'Colourways Available', value: '9 Designer Shades' },
      { label: 'Occasion', value: 'Daily Wear, Festive, Office Wear' }
    ],
    badges: ['Top Only', '9 Colours', 'Pinterest Pick'],
    colors: [
      { name: 'Deep Teal', hex: '#008080' },
      { name: 'Wine Red', hex: '#722F37' },
      { name: 'Sage Green', hex: '#9CAF88' },
      { name: 'Coral Pink', hex: '#F88379' },
      { name: 'Slate Blue', hex: '#4682B4' },
      { name: 'Amber', hex: '#FFBF00' },
      { name: 'Plum', hex: '#8E4585' },
      { name: 'Forest Green', hex: '#228B22' },
      { name: 'Ivory White', hex: '#FFFFF0' }
    ],
    rating: 4.9,
    reviewsCount: 345,
    type: 'Top Only',
    hasBottom: false,
    sizeChart: {
      top: [
        { size: 'M (38)', chestOrWaist: '38"', length: '31"', extra: '15" Shoulder' },
        { size: 'L (40)', chestOrWaist: '40"', length: '31"', extra: '15.5" Shoulder' },
        { size: 'XL (42)', chestOrWaist: '42"', length: '31"', extra: '16" Shoulder' },
        { size: 'XXL (44)', chestOrWaist: '44"', length: '31"', extra: '16.5" Shoulder' }
      ]
    },
    reviews: [
      { id: 'r8', name: 'Tanvi Shah', rating: 5, date: '2026-06-20', comment: 'Unbelievably rich rayon. I ordered the deep teal and wine red. Absolute value for money.', verified: true },
      { id: 'r9', name: 'Kritika M.', rating: 5, date: '2026-06-18', comment: 'I saw this on Instagram and bought immediately. The embroidery looks handmade. Love the sleeves!', verified: true }
    ]
  },
  {
    id: 'sc-008',
    title: 'Short Tops, Heavy Embroidery Multi-Colour',
    price: 749,
    mrp: 1399,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'tops',
    fabric: 'Rayon',
    length: '33"',
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Brighten up your days with our multi-colored thread embroidery rayon short tops. A beautiful traditional twist on modern short kurtas.',
    specs: [
      { label: 'Fabric', value: 'Liva Soft Rayon' },
      { label: 'Embroidery', value: 'Multi-color Bohemian Thread Work' },
      { label: 'Length', value: '33 inches' },
      { label: 'Occasion', value: 'Daily Wear, Casual, College Wear' }
    ],
    badges: ['Top Only', '3 Colours'],
    colors: [
      { name: 'Black Gold', hex: '#1C1C1C' },
      { name: 'Maroon Rose', hex: '#800020' },
      { name: 'Teal Silver', hex: '#005F73' }
    ],
    rating: 4.4,
    reviewsCount: 29,
    type: 'Top Only',
    hasBottom: false,
    sizeChart: {
      top: [
        { size: 'M (38)', chestOrWaist: '38"', length: '33"', extra: '14.5" Shoulder' },
        { size: 'L (40)', chestOrWaist: '40"', length: '33"', extra: '15" Shoulder' },
        { size: 'XL (42)', chestOrWaist: '42"', length: '33"', extra: '15.5" Shoulder' },
        { size: 'XXL (44)', chestOrWaist: '44"', length: '33"', extra: '16" Shoulder' }
      ]
    },
    reviews: [
      { id: 'r10', name: 'Divya Reddy', rating: 4, date: '2026-07-06', comment: 'Very bright color threads used, stands out wonderfully. Soft fabric too.', verified: true }
    ]
  },
  {
    id: 'sc-009',
    title: 'Heavy Embroidery Work Kurti with Plazzo Set',
    price: 1899,
    mrp: 3499,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'bottom-sets',
    fabric: 'Rayon',
    length: 'Top: 40", Plazzo: 38"',
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'A luxurious festive set featuring a full length 40" heavy rayon kurti with exquisite handwork and zardozi detailing, paired with matching heavy rayon straight plazzos.',
    specs: [
      { label: 'Top Fabric', value: 'Ultra Heavy Liva Rayon' },
      { label: 'Plazzo Fabric', value: 'Heavy Rayon Matching Fabric' },
      { label: 'Work', value: 'Intricate Handwork, Zardozi, and Gota Patti' },
      { label: 'Length', value: 'Top 40" | Plazzo 38"' },
      { label: 'Occasion', value: 'Festive, Family Ceremonies, Party Wear' }
    ],
    badges: ['Set', 'Premium', '2 Colours'],
    colors: [
      { name: 'Royal Navy', hex: '#0A1172' },
      { name: 'Maroon Gold', hex: '#800000' }
    ],
    rating: 4.9,
    reviewsCount: 76,
    type: 'Set',
    hasBottom: true,
    sizeChart: {
      top: [
        { size: 'M (38)', chestOrWaist: '38"', length: '40"', extra: '15" Shoulder' },
        { size: 'L (40)', chestOrWaist: '40"', length: '40"', extra: '15.5" Shoulder' },
        { size: 'XL (42)', chestOrWaist: '42"', length: '40"', extra: '16" Shoulder' },
        { size: 'XXL (44)', chestOrWaist: '44"', length: '40"', extra: '16.5" Shoulder' }
      ],
      bottom: [
        { size: 'M (38)', chestOrWaist: '28" - 34" (Elastic)', length: '38"', extra: '24" Thigh' },
        { size: 'L (40)', chestOrWaist: '30" - 36" (Elastic)', length: '38"', extra: '25" Thigh' },
        { size: 'XL (42)', chestOrWaist: '32" - 38" (Elastic)', length: '38"', extra: '26" Thigh' },
        { size: 'XXL (44)', chestOrWaist: '34" - 40" (Elastic)', length: '38"', extra: '27" Thigh' }
      ]
    },
    reviews: [
      { id: 'r11', name: 'Neelam Rawat', rating: 5, date: '2026-06-29', comment: 'The handwork is extremely detailed. Perfect for family events. Fabric is very rich and heavy weight.', verified: true }
    ]
  },
  {
    id: 'sc-010',
    title: 'Long Sleeve Printed Top with Churi-Style Sleeves',
    price: 899,
    mrp: 1699,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'tops',
    fabric: 'Georgette',
    length: '30"',
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'An elegant pure Georgette top featuring premium traditional print, comfortable inner lining, and elegant gathered churi-style long sleeves.',
    specs: [
      { label: 'Fabric', value: 'Pure Georgette Print with Soft Inner Lining' },
      { label: 'Sleeves', value: 'Long Gathered Churi-style Sleeves' },
      { label: 'Length', value: '30 inches' },
      { label: 'Occasion', value: 'Office Wear, Daily Wear' }
    ],
    badges: ['Top Only', '2 Colours'],
    colors: [
      { name: 'Crimson Red', hex: '#DC143C' },
      { name: 'Emerald Peacock', hex: '#004953' }
    ],
    rating: 4.6,
    reviewsCount: 42,
    type: 'Top Only',
    hasBottom: false,
    sizeChart: {
      top: [
        { size: 'M (38)', chestOrWaist: '38"', length: '30"', extra: '15" Shoulder' },
        { size: 'L (40)', chestOrWaist: '40"', length: '30"', extra: '15.5" Shoulder' },
        { size: 'XL (42)', chestOrWaist: '42"', length: '30"', extra: '16" Shoulder' },
        { size: 'XXL (44)', chestOrWaist: '44"', length: '30"', extra: '16.5" Shoulder' }
      ]
    },
    reviews: [
      { id: 'r12', name: 'Kavita Joshi', rating: 4, date: '2026-07-03', comment: 'Sleeves look really beautiful and give a regal look. Lining is soft and of high quality.', verified: true }
    ]
  },
  {
    id: 'sc-011',
    title: 'Unstitched Silk Chanderi Embroidery Dress Material',
    price: 2199,
    mrp: 3999,
    images: [
      'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'unstitched',
    fabric: 'Chanderi/Silk',
    length: 'Top 2.5m, Bottom 2.5m, Dupatta 2.5m',
    sizes: ['Unstitched'],
    description: 'A gorgeous premium handmade Silk Chanderi unstitched salwar suit dress material featuring exquisite Kashmiri-style embroidery, matched with comfortable organdy cotton bottom fabric and a fully embroidered dupatta.',
    specs: [
      { label: 'Top Fabric', value: 'Premium Chanderi Silk with heavy hand embroidery (2.5 meters)' },
      { label: 'Bottom Fabric', value: 'Comfort Organdy Cotton (2.5 meters)' },
      { label: 'Dupatta', value: 'Fully embroidered Organza Silk (2.5 meters)' },
      { label: 'Style', value: 'Unstitched - Customise as salwar, plazzo suit or straight suit' },
      { label: 'Occasion', value: 'Festive, Wedding Ceremonies' }
    ],
    badges: ['Unstitched', 'Premium', 'Handcrafted', '2 Colours'],
    colors: [
      { name: 'Ivory Chanderi', hex: '#FDF6E2' },
      { name: 'Golden Honey', hex: '#E2A76F' }
    ],
    rating: 5.0,
    reviewsCount: 53,
    type: 'Unstitched',
    hasBottom: true,
    sizeChart: {
      top: [
        { size: 'Unstitched Material', chestOrWaist: 'Up to 54" Chest (Tailored)', length: '2.5 meters Fabric', extra: 'Fits all body types' }
      ],
      bottom: [
        { size: 'Unstitched Material', chestOrWaist: 'Up to 50" Waist (Tailored)', length: '2.5 meters Fabric', extra: 'Fits all body types' }
      ]
    },
    reviews: [
      { id: 'r13', name: 'Sapna Mahajan', rating: 5, date: '2026-06-24', comment: 'Extremely elegant and classy. Got this stitched into a plazzo suit. The embroidery and Chanderi material are top notch.', verified: true }
    ]
  }
];

export const TRUST_ANNOUNCEMENTS = [
  "Loved by 50,000+ Women ♡",
  "⚡ Cash On Delivery (COD) Now Available on all orders!",
  "✨ FREE Express Shipping on all orders above ₹999",
  "🔄 Easy 7-Day Hassle-free Returns & Exchanges"
];

export const STORIES_INFO = {
  about: "At Sumera Collections, we blend rich heritage textile crafts with contemporary modern silhouettes. Designed for the multi-faceted lifestyle of today’s modern woman, our collections bring you hand-embroidered rayon tops, flowy georgette maxi dresses, premium silk salwar suits, and everyday cotton wear that makes you feel effortlessly graceful.",
  shipping: "We ship with reliable delivery partners. Metro cities enjoy delivery in 2-4 working days. COD is available for a minor collection fee. Free shipping applies to prepaid and COD orders above ₹999.",
  returns: "We offer a flexible 7-day return and exchange policy. In case the size does not fit or you would like to return the garment, raise an exchange/return request from the menu. We will schedule a hassle-free reverse pickup."
};
