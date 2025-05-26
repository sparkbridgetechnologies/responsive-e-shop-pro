
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Header } from '@/components/Header';
import { AdminSetup } from '@/components/AdminSetup';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Admin = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your GlowSkin store</p>
        </div>

        <Tabs defaultValue="setup" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="setup">Setup</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          
          <TabsContent value="setup" className="mt-6">
            <AdminSetup />
          </TabsContent>
          
          <TabsContent value="products" className="mt-6">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Product Management</h3>
              <p className="text-gray-600">Product management features coming soon.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="orders" className="mt-6">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Order Management</h3>
              <p className="text-gray-600">Order management features coming soon.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="users" className="mt-6">
            <div className="text-center py-20">
              <h3 className="text-lg font-medium text-gray-900 mb-2">User Management</h3>
              <p className="text-gray-600">User management features coming soon.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
