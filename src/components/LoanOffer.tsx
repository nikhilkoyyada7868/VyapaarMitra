import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Building2, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { UserData } from '../App';

interface LoanOfferProps {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
  onAccept: () => void;
  onBack: () => void;
}

export function LoanOffer({ userData, updateUserData, onAccept, onBack }: LoanOfferProps) {
  const [selectedBank, setSelectedBank] = useState('hdfc');
  const [processing, setProcessing] = useState(false);

  const banks = [
    { id: 'hdfc', name: 'HDFC Bank', account: '****4567' },
    { id: 'icici', name: 'ICICI Bank', account: '****8901' },
  ];

  const handleAccept = async () => {
    setProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2500));
    onAccept();
  };

  if (processing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1D8FE1] to-[#2E8B57] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-20 h-20 mx-auto mb-6"
          >
            <Loader2 className="w-20 h-20 text-white" />
          </motion.div>
          
          <h3 className="text-white text-2xl mb-2">Processing securely...</h3>
          <p className="text-white/80 mb-8">Via NBFC partner</p>

          <div className="space-y-2">
            {['Verifying loan details', 'Connecting to bank', 'Initiating transfer'].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.5 }}
                className="text-white/90 text-sm"
              >
                {step}...
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] px-6 py-6 rounded-b-3xl">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-2xl mb-2">Loan Offer</h1>
        <p className="text-white/80 text-sm">Review and accept your offer</p>
      </div>

      <div className="px-6 py-6">
        {/* Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#1D8FE1] to-[#2E8B57] rounded-3xl p-6 mb-6 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6" />
              <p>Congratulations! 🎉</p>
            </div>

            <div className="mb-4">
              <p className="text-white/80 text-sm mb-1">Approved Amount</p>
              <h2 className="text-5xl">₹{(userData.loanAmount! / 100000).toFixed(1)}L</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
              <div>
                <p className="text-white/70 text-xs mb-1">Tenor</p>
                <p className="text-lg">{userData.tenor} months</p>
              </div>
              <div>
                <p className="text-white/70 text-xs mb-1">Interest Rate</p>
                <p className="text-lg">{userData.interestRate}% p.a.</p>
              </div>
              <div>
                <p className="text-white/70 text-xs mb-1">Monthly EMI</p>
                <p className="text-lg">₹{Math.round(userData.emi!).toLocaleString('en-IN')}</p>
              </div>
              <div>
                <p className="text-white/70 text-xs mb-1">Total Payable</p>
                <p className="text-lg">₹{Math.round(userData.emi! * userData.tenor!).toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bank Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h3 className="text-gray-800 mb-4">Select Bank Account</h3>
          <div className="space-y-3">
            {banks.map((bank) => (
              <button
                key={bank.id}
                onClick={() => setSelectedBank(bank.id)}
                className={`w-full p-4 rounded-2xl border-2 transition-all ${
                  selectedBank === bank.id
                    ? 'border-[#1D8FE1] bg-blue-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedBank === bank.id ? 'bg-[#1D8FE1]' : 'bg-gray-100'
                  }`}>
                    <Building2 className={`w-6 h-6 ${
                      selectedBank === bank.id ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-gray-800">{bank.name}</p>
                    <p className="text-sm text-gray-500">{bank.account}</p>
                  </div>
                  {selectedBank === bank.id && (
                    <div className="w-6 h-6 bg-[#1D8FE1] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50 rounded-2xl p-4 mb-6"
        >
          <h4 className="text-gray-800 mb-3">Key Terms</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p>✓ No prepayment charges</p>
            <p>✓ Processing fee: ₹{Math.round(userData.loanAmount! * 0.02).toLocaleString('en-IN')} (2% of loan amount)</p>
            <p>✓ Disbursal within 24 hours</p>
            <p>✓ Auto-debit facility required</p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleAccept}
            className="w-full h-12 bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white rounded-xl"
          >
            Accept Offer
          </Button>
          <Button
            onClick={onBack}
            variant="outline"
            className="w-full h-12 rounded-xl border-gray-300"
          >
            Adjust Tenor
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          By accepting, you agree to the terms and conditions
        </p>
      </div>
    </div>
  );
}
