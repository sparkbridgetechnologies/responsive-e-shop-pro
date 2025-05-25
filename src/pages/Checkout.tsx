
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Checkout = () => {
  const { items, totalAmount, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const createOrder = async () => {
    if (!user) return null;

    try {
      const { data: order, error } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          total_amount: totalAmount,
          status: 'pending',
          payment_status: 'pending',
          shipping_address: formData,
        })
        .select()
        .single();

      if (error) throw error;

      // Insert order items
      const orderItems = items.map(item => ({
        order_id: order.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.products.price,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      return order;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  const handleRazorpayPayment = async () => {
    setLoading(true);
    
    try {
      const order = await createOrder();
      if (!order) return;

      const options = {
        key: 'rzp_test_1DP5mmOlF5G5ag', // Replace with your Razorpay key
        amount: totalAmount * 100, // Amount in paise
        currency: 'INR',
        name: 'GlowSkin',
        description: 'Order Payment',
        order_id: order.id,
        handler: async (response: any) => {
          try {
            // Update order with payment details
            await supabase
              .from('orders')
              .update({
                payment_status: 'completed',
                status: 'confirmed',
                payment_method: 'razorpay',
                razorpay_payment_id: response.razorpay_payment_id,
              })
              .eq('id', order.id);

            await clearCart();
            toast({
              title: "Payment successful!",
              description: "Your order has been placed successfully.",
            });
            navigate(`/order-confirmation/${order.id}`);
          } catch (error) {
            console.error('Error updating payment:', error);
            toast({
              title: "Payment error",
              description: "There was an issue processing your payment.",
              variant: "destructive",
            });
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: '#FBBF24',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process order.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGooglePay = async () => {
    // Implement Google Pay integration
    toast({
      title: "Google Pay",
      description: "Google Pay integration coming soon!",
    });
  };

  const handleUPIPayment = async () => {
    // Implement UPI QR code payment
    toast({
      title: "UPI Payment",
      description: "UPI payment integration coming soon!",
    });
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-light text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="sm:col-span-2"
                />
                <Input
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">
                Payment Methods
              </h2>
              <div className="space-y-3">
                <Button
                  onClick={handleRazorpayPayment}
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Pay with Razorpay
                </Button>
                <Button
                  onClick={handleGooglePay}
                  disabled={loading}
                  variant="outline"
                  className="w-full"
                >
                  Google Pay
                </Button>
                <Button
                  onClick={handleUPIPayment}
                  disabled={loading}
                  variant="outline"
                  className="w-full"
                >
                  UPI Payment
                </Button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-6 h-fit">
            <h2 className="text-xl font-medium text-gray-900 mb-4">
              Order Summary
            </h2>
            
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span className="text-gray-600">
                    {item.products.name} × {item.quantity}
                  </span>
                  <span>₹{(item.products.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-medium text-lg mt-2">
                  <span>Total</span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
