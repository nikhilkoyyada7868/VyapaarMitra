import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { UserData } from '../App';

interface RepaymentProps {
  userData: UserData;
  onBack: () => void;
}

export function Repayment({ userData, onBack }: RepaymentProps) {
  const [selectedEmi, setSelectedEmi] = useState<number | null>(null);

  const emis = [
    { month: 'Nov 2025', date: '15 Nov', amount: userData.emi || 0, status: 'upcoming', daysLeft: 5 },
    { month: 'Dec 2025', date: '15 Dec', amount: userData.emi || 0, status: 'scheduled', daysLeft: 35 },
    { month: 'Jan 2026', date: '15 Jan', amount: userData.emi || 0, status: 'scheduled', daysLeft: 66 },
    { month: 'Feb 2026', date: '15 Feb', amount: userData.emi || 0, status: 'scheduled', daysLeft: 97 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] px-6 py-6 rounded-b-3xl">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-2xl mb-2">Repayment Schedule</h1>
        <p className="text-white/80 text-sm">Track and manage your EMIs</p>
      </div>

      <div className="px-6 py-6">
        {/* Next Payment Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 mb-6 border-2 border-amber-200"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-amber-800 text-sm mb-1">Next EMI Due</p>
              <h3 className="text-3xl text-amber-900">₹{Math.round(emis[0].amount).toLocaleString('en-IN')}</h3>
              <p className="text-amber-700 text-sm mt-1">{emis[0].date}</p>
            </div>
            <div className="text-right">
              <div className="bg-amber-200 rounded-xl px-3 py-2">
                <p className="text-xs text-amber-800">In {emis[0].daysLeft} days</p>
              </div>
            </div>
          </div>
          <Button className="w-full h-10 bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white rounded-xl">
            Pay Now via UPI
          </Button>
        </motion.div>

        {/* Early Payment Nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-4 mb-6 flex items-start gap-3"
        >
          <Sparkles className="w-5 h-5 text-[#2E8B57] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-gray-800 mb-1">Pay 2 days early, earn bonus coins!</p>
            <p className="text-sm text-gray-600">Get 100 MitraCoins for early payment</p>
          </div>
        </motion.div>

        {/* EMI Schedule */}
        <h3 className="text-gray-800 mb-4">All EMIs</h3>
        <div className="space-y-3 mb-6">
          {emis.map((emi, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedEmi(index)}
              className={`w-full rounded-2xl p-4 transition-all ${
                selectedEmi === index
                  ? 'bg-gradient-to-br from-blue-50 to-green-50 border-2 border-[#1D8FE1]'
                  : 'bg-gray-50 border-2 border-transparent'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    emi.status === 'upcoming' 
                      ? 'bg-orange-100' 
                      : 'bg-gray-200'
                  }`}>
                    {emi.status === 'upcoming' ? (
                      <Clock className="w-6 h-6 text-orange-600" />
                    ) : (
                      <Calendar className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                  <div className="text-left">
                    <p className="text-gray-800">{emi.month}</p>
                    <p className="text-sm text-gray-500">{emi.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-800">₹{Math.round(emi.amount).toLocaleString('en-IN')}</p>
                  <p className="text-xs text-gray-500">
                    {emi.status === 'upcoming' ? `${emi.daysLeft} days` : 'Scheduled'}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Auto-debit Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white border border-gray-200 rounded-2xl p-4"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-800 mb-1">Auto-debit enabled</p>
              <p className="text-sm text-gray-600">
                EMIs will be automatically deducted from HDFC Bank ****4567 on due date
              </p>
            </div>
          </div>
        </motion.div>

        {/* Payment History */}
        <div className="mt-6">
          <h3 className="text-gray-800 mb-4">Payment History</h3>
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <p className="text-gray-500">No payments made yet</p>
            <p className="text-sm text-gray-400 mt-1">Your payment history will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}