import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp, Users, Building, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { UserData } from '../App';

interface LoanApplicationProps {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function LoanApplication({ userData, updateUserData, onNext, onBack }: LoanApplicationProps) {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenor, setTenor] = useState(6);

  const maxLoan = 750000;
  const interestRate = 14.5;
  const emi = (loanAmount * (interestRate / 1200) * Math.pow(1 + interestRate / 1200, tenor)) / 
                (Math.pow(1 + interestRate / 1200, tenor) - 1);

  const handleApply = () => {
    updateUserData({
      loanAmount,
      tenor,
      emi: Math.round(emi),
      interestRate,
    });
    onNext();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] px-6 py-6 rounded-b-3xl">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-2xl mb-2">Apply for Working Capital</h1>
        <p className="text-white/80 text-sm">Get instant approval based on your business data</p>
      </div>

      <div className="px-6 py-6">
        {/* Auto-fetched Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-4 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#1D8FE1]" />
            <h3 className="text-gray-800">Your Business Snapshot</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <p className="text-xs text-gray-600">Monthly GST Revenue</p>
              </div>
              <p className="text-lg">₹12.5L</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <Building className="w-4 h-4 text-blue-600" />
                <p className="text-xs text-gray-600">Avg. Bank Inflow</p>
              </div>
              <p className="text-lg">₹15.2L</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-purple-600" />
                <p className="text-xs text-gray-600">Top Buyers</p>
              </div>
              <p className="text-lg">8 Active</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-orange-600" />
                <p className="text-xs text-gray-600">Credit Score</p>
              </div>
              <p className="text-lg">{userData.creditScore}</p>
            </div>
          </div>
        </motion.div>

        {/* Suggested Loan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] rounded-2xl p-4 mb-6 text-white"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5" />
            <p className="text-sm">AI Recommendation</p>
          </div>
          <h3 className="text-xl mb-1">You're eligible for up to ₹7.5L</h3>
          <p className="text-sm text-white/80">Based on your GST filings and bank statements</p>
        </motion.div>

        {/* Loan Amount Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <label className="text-gray-700">Loan Amount</label>
            <div className="text-right">
              <p className="text-2xl text-[#1D8FE1]">₹{(loanAmount / 100000).toFixed(1)}L</p>
            </div>
          </div>
          <Slider
            value={[loanAmount]}
            onValueChange={(values) => setLoanAmount(values[0])}
            min={100000}
            max={maxLoan}
            step={50000}
            className="mb-2"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>₹1L</span>
            <span>₹7.5L</span>
          </div>
        </motion.div>

        {/* Tenor Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <label className="text-gray-700">Repayment Period</label>
            <div className="text-right">
              <p className="text-2xl text-[#1D8FE1]">{tenor} months</p>
            </div>
          </div>
          <Slider
            value={[tenor]}
            onValueChange={(values) => setTenor(values[0])}
            min={1}
            max={12}
            step={1}
            className="mb-2"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>1 month</span>
            <span>12 months</span>
          </div>
        </motion.div>

        {/* EMI Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-50 rounded-2xl p-4 mb-6"
        >
          <h4 className="text-gray-700 mb-4">EMI Breakdown</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly EMI</span>
              <span className="text-lg">₹{Math.round(emi).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Interest Rate</span>
              <span className="text-lg">{interestRate}% p.a.</span>
            </div>
            <div className="h-px bg-gray-300" />
            <div className="flex justify-between">
              <span className="text-gray-700">Total Payable</span>
              <span className="text-xl text-[#1D8FE1]">₹{Math.round(emi * tenor).toLocaleString('en-IN')}</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <Button
          onClick={handleApply}
          className="w-full h-12 bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white rounded-xl"
        >
          Get Instant Offer
        </Button>

        <p className="text-xs text-gray-500 text-center mt-4">
          No hidden charges • Powered by licensed NBFC partner
        </p>
      </div>
    </div>
  );
}