
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Order {
  id: string;
  total_amount: number;
  status: string;
  delivery_status: string;
  tracking_number?: string;
  estimated_delivery?: string;
  created_at: string;
  shipping_address: any;
}

const TrackOrder = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [userOrders, setUserOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (user) {
      fetchUserOrders();
    }
  }, [user]);

  const fetchUserOrders = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      setUserOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const trackOrder = async () => {
    if (!trackingNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter a tracking number",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('tracking_number', trackingNumber.trim())
        .single();

      if (error || !data) {
        toast({
          title: "Order Not Found",
          description: "No order found with this tracking number",
          variant: "destructive",
        });
        setOrder(null);
      } else {
        setOrder(data);
      }
    } catch (error) {
      console.error('Error tracking order:', error);
      toast({
        title: "Error",
        description: "Failed to track order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-yellow-500" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'default';
      case 'shipped':
        return 'secondary';
      case 'processing':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const formatAddress = (address: any) => {
    if (!address) return 'N/A';
    return `${address.street}, ${address.city}, ${address.state} ${address.zipCode}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Track Your Order
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Enter your tracking number to get real-time updates on your delivery
          </p>
        </div>

        {/* Tracking Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Track by Tracking Number</CardTitle>
            <CardDescription>
              Enter the tracking number you received in your confirmation email
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Enter tracking number (e.g., GS123456789)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={trackOrder}
                disabled={loading}
                className="bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                {loading ? 'Tracking...' : 'Track Order'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Order Details */}
        {order && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Order Details
                <Badge variant={getStatusColor(order.delivery_status)}>
                  {order.delivery_status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Order Information</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Order ID:</span> {order.id.slice(0, 8)}...</p>
                    <p><span className="font-medium">Order Date:</span> {new Date(order.created_at).toLocaleDateString()}</p>
                    <p><span className="font-medium">Total Amount:</span> ₹{Number(order.total_amount).toFixed(2)}</p>
                    <p><span className="font-medium">Tracking Number:</span> {order.tracking_number || 'Not assigned yet'}</p>
                    {order.estimated_delivery && (
                      <p><span className="font-medium">Estimated Delivery:</span> {new Date(order.estimated_delivery).toLocaleDateString()}</p>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Shipping Address</h3>
                  <p className="text-sm text-gray-600">
                    {formatAddress(order.shipping_address)}
                  </p>
                </div>
              </div>

              {/* Tracking Timeline */}
              <div className="mt-8">
                <h3 className="font-medium text-gray-900 mb-4">Order Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon('processing')}
                    <span className={order.delivery_status === 'processing' ? 'font-medium' : 'text-gray-500'}>
                      Order Processing
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusIcon('shipped')}
                    <span className={order.delivery_status === 'shipped' ? 'font-medium' : 'text-gray-500'}>
                      Order Shipped
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusIcon('delivered')}
                    <span className={order.delivery_status === 'delivered' ? 'font-medium' : 'text-gray-500'}>
                      Order Delivered
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Orders for Logged In Users */}
        {user && userOrders.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Your Recent Orders</CardTitle>
              <CardDescription>
                Quick access to your recent order tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userOrders.map((userOrder) => (
                  <div key={userOrder.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Order #{userOrder.id.slice(0, 8)}...</p>
                      <p className="text-sm text-gray-500">
                        {new Date(userOrder.created_at).toLocaleDateString()} • ₹{Number(userOrder.total_amount).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={getStatusColor(userOrder.delivery_status)}>
                        {userOrder.delivery_status}
                      </Badge>
                      {userOrder.tracking_number && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setTrackingNumber(userOrder.tracking_number!);
                            setOrder(userOrder);
                          }}
                        >
                          Track
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Help Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Can't find your tracking number or having issues with your order?
          </p>
          <Button variant="outline" onClick={() => window.location.href = '/contact'}>
            Contact Support
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackOrder;
