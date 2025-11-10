import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp, TrendingDown, Users, Package, Lightbulb } from 'lucide-react';
import { UserData } from '../App';

interface AnalyticsProps {
  userData: UserData;
  onBack: () => void;
}

export function Analytics({ userData, onBack }: AnalyticsProps) {
  const monthlyData = [
    { month: 'Jun', revenue: 850000 },
    { month: 'Jul', revenue: 920000 },
    { month: 'Aug', revenue: 1050000 },
    { month: 'Sep', revenue: 1150000 },
    { month: 'Oct', revenue: 1250000 },
    { month: 'Nov', revenue: 1350000 },
  ];

  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));

  const topCustomers = [
    { name: 'ABC Industries', amount: 450000, share: 35 },
    { name: 'XYZ Enterprises', amount: 380000, share: 29 },
    { name: 'PQR Trading', amount: 270000, share: 21 },
  ];

  const topSuppliers = [
    { name: 'Steel Corp Ltd', amount: 320000 },
    { name: 'Raw Materials Co', amount: 280000 },
    { name: 'Logistics Plus', amount: 190000 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] px-6 py-6 rounded-b-3xl">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-2xl mb-2">Business Analytics</h1>
        <p className="text-white/80 text-sm">Data-driven insights from GST & Bank</p>
      </div>

      <div className="px-6 py-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 border border-green-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-700" />
              <p className="text-sm text-green-800">Revenue Growth</p>
            </div>
            <h3 className="text-3xl text-green-900 mb-1">+15%</h3>
            <p className="text-xs text-green-700">Year over Year</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-5 h-5 text-blue-700" />
              <p className="text-sm text-blue-800">Avg Turnover</p>
            </div>
            <h3 className="text-3xl text-blue-900 mb-1">₹12.5L</h3>
            <p className="text-xs text-blue-700">Per Month</p>
          </motion.div>
        </div>

        {/* Monthly Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-5 mb-6"
        >
          <h3 className="text-gray-800 mb-1">Monthly GST Revenue</h3>
          <p className="text-sm text-gray-600 mb-6">Last 6 months</p>

          <div className="flex items-end justify-between h-40 gap-2">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="w-full bg-gradient-to-t from-[#1D8FE1] to-[#2E8B57] rounded-t-lg mb-2"
                />
                <p className="text-xs text-gray-600">{data.month}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-600">Current Month</p>
              <p className="text-lg text-gray-800">₹13.5L</p>
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">+8% vs last month</span>
            </div>
          </div>
        </motion.div>

        {/* Top Customers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-purple-700" />
            <h3 className="text-gray-800">Top 3 Customers</h3>
          </div>
          <div className="space-y-3">
            {topCustomers.map((customer, index) => (
              <div key={index} className="bg-white rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-800">{customer.name}</p>
                  <p className="text-gray-700">₹{(customer.amount / 100000).toFixed(1)}L</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${customer.share}%` }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                    />
                  </div>
                  <span className="text-xs text-gray-600">{customer.share}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Suppliers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gray-50 rounded-2xl p-5 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Package className="w-5 h-5 text-blue-700" />
            <h3 className="text-gray-800">Top Suppliers</h3>
          </div>
          <div className="space-y-2">
            {topSuppliers.map((supplier, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <p className="text-gray-700">{supplier.name}</p>
                <p className="text-gray-800">₹{(supplier.amount / 100000).toFixed(1)}L</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-[#1D8FE1]" />
            <h3 className="text-gray-800">AI Insights</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-3 flex items-start gap-3">
              <span className="text-xl">📈</span>
              <div>
                <p className="text-sm text-gray-800 mb-1">Increase PO volume by 10%</p>
                <p className="text-xs text-gray-600">This could boost your credit limit to ₹11L</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 flex items-start gap-3">
              <span className="text-xl">💡</span>
              <div>
                <p className="text-sm text-gray-800 mb-1">Diversify customer base</p>
                <p className="text-xs text-gray-600">Top 3 customers make up 85% of revenue</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
