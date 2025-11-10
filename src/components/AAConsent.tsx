import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Database, Building, CheckCircle2, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

interface AAConsentProps {
  onNext: () => void;
  onBack: () => void;
}

export function AAConsent({ onNext, onBack }: AAConsentProps) {
  const [consented, setConsented] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [milestones, setMilestones] = useState({
    dataFetched: false,
    creditScoreReady: false,
  });

  const handleConsent = async () => {
    setLoading(true);
    
    // Simulate data fetching
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProgress(33);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProgress(66);
    setMilestones({ ...milestones, dataFetched: true });
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProgress(100);
    setMilestones({ dataFetched: true, creditScoreReady: true });
    
    await new Promise(resolve => setTimeout(resolve, 500));
    onNext();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1D8FE1] to-[#2E8B57] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          {/* Animated Shield */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Shield className="w-12 h-12 text-white" />
          </motion.div>

          <h3 className="text-white text-2xl mb-2">Securing your data</h3>
          <p className="text-white/80 mb-8">Fetching details securely...</p>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-6">
            <motion.div
              className="h-full bg-white"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: milestones.dataFetched ? 1 : 0.5, x: 0 }}
              className="flex items-center justify-center gap-2 text-white"
            >
              <CheckCircle2 className={`w-5 h-5 ${milestones.dataFetched ? 'text-white' : 'text-white/40'}`} />
              <span>Data fetched {milestones.dataFetched && '✅'}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: milestones.creditScoreReady ? 1 : 0.5, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 text-white"
            >
              <CheckCircle2 className={`w-5 h-5 ${milestones.creditScoreReady ? 'text-white' : 'text-white/40'}`} />
              <span>Credit Score Ready {milestones.creditScoreReady && '✅'}</span>
            </motion.div>
          </div>

          {milestones.creditScoreReady && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-white text-xl"
            >
              🎉 You've unlocked your business credit score!
            </motion.div>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <div className="flex-1">
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57]"
              initial={{ width: '75%' }}
              animate={{ width: '90%' }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-[#1D8FE1]/10 to-[#2E8B57]/10 rounded-2xl flex items-center justify-center mb-6">
          <Database className="w-8 h-8 text-[#1D8FE1]" />
        </div>

        <h2 className="text-3xl mb-3">Account Aggregator Consent</h2>
        <p className="text-gray-600 mb-8">
          We need your consent to securely access your verified financial data
        </p>

        {/* Data Flow Animation */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1D8FE1]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Building className="w-6 h-6 text-[#1D8FE1]" />
              </div>
              <p className="text-xs text-gray-600">Your Bank</p>
            </div>

            <div className="flex-1 mx-4">
              <div className="relative">
                <div className="h-0.5 bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57]" />
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1D8FE1] rounded-full"
                  animate={{
                    left: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#2E8B57]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-[#2E8B57]" />
              </div>
              <p className="text-xs text-gray-600">VyapaarMitra</p>
            </div>
          </div>
          <p className="text-xs text-center text-gray-500">
            Encrypted & secure data transfer via RBI-approved Account Aggregator
          </p>
        </div>

        {/* DPDP Compliance Tooltip */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4 flex items-start gap-2">
          <Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-blue-800">
            Your data is secure & consent-based. DPDP 2023 compliant. You can revoke access anytime.
          </p>
        </div>

        {/* What we'll access */}
        <div className="space-y-3 mb-6">
          <p className="text-sm">We will access:</p>
          {[
            'Bank account balance & transaction history (last 12 months)',
            'GST filing data & revenue trends',
            'Outstanding purchase orders',
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
              <CheckCircle2 className="w-5 h-5 text-[#2E8B57] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3 mb-6 p-4 bg-blue-50 rounded-xl">
          <Checkbox
            id="consent"
            checked={consented}
            onCheckedChange={(checked) => setConsented(checked as boolean)}
          />
          <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
            I consent to share my financial data securely via Account Aggregator. I understand I can revoke this consent anytime.
          </label>
        </div>

        <Button
          onClick={handleConsent}
          disabled={!consented}
          className="w-full h-12 bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white rounded-xl disabled:opacity-50"
        >
          Grant Access
        </Button>
      </motion.div>
    </div>
  );
}