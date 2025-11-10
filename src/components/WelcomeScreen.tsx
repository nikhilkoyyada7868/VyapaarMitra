import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from './ui/button';

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D8FE1] via-[#2E8B57] to-[#1D8FE1] relative overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 px-6 pt-20 pb-10 flex flex-col min-h-screen">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl mb-4 shadow-lg">
            <Sparkles className="w-10 h-10 text-[#1D8FE1]" />
          </div>
          <h1 className="text-white text-4xl mb-2">VyapaarMitra</h1>
          <p className="text-white/90 text-sm">Your Growth Partner</p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="text-white text-3xl mb-4 leading-snug">
            Empowering MSMEs with data-driven credit
          </h2>
          <p className="text-white/80 mb-12">
            Get instant working capital loans using verified GST filings, bank data, and purchase orders.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-12">
            {[
              { icon: Zap, text: 'Instant approval in minutes' },
              { icon: Shield, text: 'Secure & transparent process' },
              { icon: TrendingUp, text: 'Flexible repayment options' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            onClick={onNext}
            className="w-full h-14 bg-white text-[#1D8FE1] hover:bg-white/90 rounded-2xl shadow-lg"
          >
            Get Started
          </Button>
          <p className="text-white/60 text-xs text-center mt-4">
            Trusted by 50,000+ MSMEs across India
          </p>
        </motion.div>
      </div>
    </div>
  );
}