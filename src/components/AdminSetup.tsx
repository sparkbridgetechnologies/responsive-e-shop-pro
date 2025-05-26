
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { mockProducts } from '@/data/mockData';

export const AdminSetup = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const setupDatabase = async () => {
    setLoading(true);
    try {
      // Insert mock products into database
      const { error } = await supabase
        .from('products')
        .upsert(mockProducts, { onConflict: 'id' });

      if (error) throw error;

      toast({
        title: "Database setup complete!",
        description: "Products have been added to the database.",
      });
    } catch (error) {
      console.error('Setup error:', error);
      toast({
        title: "Setup failed",
        description: "There was an error setting up the database.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Admin Setup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Quick Setup</h3>
            <p className="text-sm text-gray-600 mb-4">
              Initialize the database with sample products and data.
            </p>
            <Button 
              onClick={setupDatabase}
              disabled={loading}
              className="bg-yellow-400 hover:bg-yellow-500 text-black"
            >
              {loading ? 'Setting up...' : 'Setup Database'}
            </Button>
          </div>
          
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Admin Credentials</h3>
            <div className="bg-gray-50 p-3 rounded-lg text-sm">
              <p><strong>Email:</strong> admin@glowskin.com</p>
              <p><strong>Note:</strong> Create this account via the signup page</p>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">SMTP Setup</h3>
            <div className="bg-blue-50 p-3 rounded-lg text-sm">
              <p>Configure SMTP in Supabase:</p>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>Go to Supabase Dashboard → Authentication → Settings</li>
                <li>Configure SMTP settings with your email provider</li>
                <li>Enable email confirmations if needed</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
