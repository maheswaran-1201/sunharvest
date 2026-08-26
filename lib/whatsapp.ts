import { Product } from './products';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerDetails {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  note?: string;
}

export const WHATSAPP_PHONE_NUMBER = '918778374382'; // +91 8778374382

export function generateWhatsAppOrderMessage(
  customer: CustomerDetails,
  items: CartItem[]
): string {
  let totalAmount = 0;
  const itemsText = items
    .map((item) => {
      const price = item.product.price || 0;
      const subtotal = price * item.quantity;
      totalAmount += subtotal;
      return `${item.product.name} (₹${price} × ${item.quantity}) = ₹${subtotal}`;
    })
    .join('\n');

  const noteBlock = customer.note && customer.note.trim() !== ''
    ? `\nAdditional Note:\n${customer.note.trim()}\n`
    : '';

  const message = `🌞 SUNHARVEST ORDER

Customer Details:
Name: ${customer.fullName.trim()}
Phone: ${customer.phone.trim()}

Delivery Address:
${customer.address.trim()}
${customer.city.trim()}, ${customer.state.trim()} - ${customer.pinCode.trim()}

Order Items:
${itemsText}

Total Amount: ₹${totalAmount}
Delivery: To be confirmed
${noteBlock}
Please confirm this order and share the next steps for payment and delivery.

Thank you for choosing SunHarvest.

A Taste of Indian Summers.`;

  return message;
}

export function generateWhatsAppUrl(
  customer: CustomerDetails,
  items: CartItem[]
): string {
  const message = generateWhatsAppOrderMessage(customer, items);
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedText}`;
}
