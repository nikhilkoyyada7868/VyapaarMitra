import { motion } from 'motion/react';
import { CheckCircle2, Download, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { UserData } from '../App';

interface SuccessScreenProps {
  userData: UserData;
  onNext: () => void;
}

export function SuccessScreen({ userData, onNext }: SuccessScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D8FE1] to-[#2E8B57] relative overflow-hidden">
      {/* Confetti Animation */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          initial={{
            x: 195,
            y: 200,
            opacity: 1,
          }}
          animate={{
            x: Math.random() * 390,
            y: [200, Math.random() * 800 + 200],
            opacity: [1, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 0.5,
            ease: "easeOut"
          }}
        />
      ))}

      <div className="relative z-10 px-6 py-12 flex flex-col items-center justify-center min-h-screen">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2
          }}
          className="mb-8"
        >
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <CheckCircle2 className="w-16 h-16 text-[#2E8B57]" />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-white text-4xl mb-4">Success! 🎉</h1>
          <p className="text-white/90 text-xl mb-2">₹{(userData.loanAmount! / 100000).toFixed(1)}L credited to your account</p>
          <p className="text-white/70">Loan ID: CM{Date.now().toString().slice(-8)}</p>
        </motion.div>

        {/* Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 mb-8"
        >
          <div className="grid grid-cols-2 gap-4 text-white">
            <div>
              <p className="text-white/70 text-sm mb-1">Disbursed Amount</p>
              <p className="text-xl">₹{(userData.loanAmount! / 100000).toFixed(1)}L</p>
            </div>
            <div>
              <p className="text-white/70 text-sm mb-1">First EMI Due</p>
              <p className="text-xl">15 Dec 2025</p>
            </div>
            <div>
              <p className="text-white/70 text-sm mb-1">Monthly EMI</p>
              <p className="text-xl">₹{Math.round(userData.emi!).toLocaleString('en-IN')}</p>
            </div>
            <div>
              <p className="text-white/70 text-sm mb-1">Tenor</p>
              <p className="text-xl">{userData.tenor} months</p>
            </div>
          </div>
        </motion.div>

        {/* Rewards Earned */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full bg-yellow-400 rounded-2xl p-5 mb-8 text-center"
        >
          <p className="text-yellow-900 mb-2">🎁 Bonus Reward!</p>
          <h3 className="text-yellow-900 text-2xl mb-1">+500 MitraCoins</h3>
          <p className="text-yellow-800 text-sm">For completing on-time KYC & first loan!</p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="w-full space-y-3"
        >
          <Button
            onClick={onNext}
            className="w-full h-12 bg-white text-[#1D8FE1] hover:bg-white/90 rounded-xl"
          >
            Go to Dashboard
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="h-12 bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-xl"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button
              variant="outline"
              className="h-12 bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-xl"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-white/60 text-xs text-center mt-6"
        >
          Track your EMIs and earn rewards on timely payments
        </motion.p>
      </div>
    </div>
  );
}