import { motion } from 'motion/react';
import { ArrowLeft, Shield, CheckCircle2, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { UserData } from '../App';

interface CreditSummaryProps {
  userData: UserData;
  onNext: () => void;
  onBack: () => void;
}

export function CreditSummary({ userData, onNext, onBack }: CreditSummaryProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] px-6 py-6 rounded-b-3xl">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-2xl mb-2">AI Credit Assessment</h1>
        <p className="text-white/80 text-sm">Your creditworthiness analyzed</p>
      </div>

      <div className="px-6 py-6">
        {/* Credit Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-[#1D8FE1] to-[#2E8B57] rounded-3xl p-6 mb-6 overflow-hidden"
        >
          {/* Animated Glow */}
          <motion.div
            className="absolute inset-0 bg-white/10"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <p className="text-white/90">Your Credit Score</p>
            </div>
            
            <h2 className="text-white text-6xl mb-2">{userData.creditScore}</h2>
            <p className="text-white/80">Excellent creditworthiness</p>

            <div className="mt-6 h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: '0%' }}
                animate={{ width: '85%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <div className="flex justify-between text-xs text-white/70 mt-2">
              <span>300</span>
              <span>900</span>
            </div>
          </div>
        </motion.div>

        {/* Assessment Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50 rounded-2xl p-5 mb-6"
        >
          <h3 className="text-gray-800 mb-4">Underwriting Summary</h3>
          <p className="text-xs text-gray-600 mb-4">Your score is based on verified data:</p>
          <div className="space-y-3">
            {[
              { icon: CheckCircle2, text: 'Low bounce rate in bank account', color: 'text-green-600' },
              { icon: CheckCircle2, text: 'Steady GST inflows for 12 months', color: 'text-green-600' },
              { icon: CheckCircle2, text: 'Consistent purchase order volume', color: 'text-green-600' },
              { icon: TrendingUp, text: '15% revenue growth YoY', color: 'text-blue-600' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                <span className="text-gray-700 text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Explainable AI Section */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600 mb-2">Why this score?</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-white rounded-lg p-2">
                <span className="text-xs text-gray-700">GST consistency</span>
                <span className="text-xs text-green-600">+120 pts</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-lg p-2">
                <span className="text-xs text-gray-700">Bank stability</span>
                <span className="text-xs text-green-600">+95 pts</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-lg p-2">
                <span className="text-xs text-gray-700">Low bounce rate</span>
                <span className="text-xs text-green-600">+42 pts</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Personalized Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-5 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-[#1D8FE1]" />
            <h3 className="text-gray-800">Tips to Boost Your Limit</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-white rounded-xl p-3">
              <span className="text-xl">📅</span>
              <div>
                <p className="text-sm text-gray-800 mb-1">File GSTR-3B on time</p>
                <p className="text-xs text-gray-600">Potential increase: ₹50K</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-3">
              <span className="text-xl">💰</span>
              <div>
                <p className="text-sm text-gray-800 mb-1">Increase monthly turnover</p>
                <p className="text-xs text-gray-600">Higher sales = Higher credit limit</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-3">
              <span className="text-xl">⏰</span>
              <div>
                <p className="text-sm text-gray-800 mb-1">Pay EMIs 2 days early</p>
                <p className="text-xs text-gray-600">Earn 100 CredMitra coins per EMI</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: 'RBI Regulated', icon: '🏛️' },
            { label: 'Bank Grade Security', icon: '🔒' },
            { label: 'NBFC Partner', icon: '🤝' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-3 text-center"
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="text-xs text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Button
          onClick={onNext}
          className="w-full h-12 bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white rounded-xl"
        >
          View Loan Offer
        </Button>
      </div>
    </div>
  );
}