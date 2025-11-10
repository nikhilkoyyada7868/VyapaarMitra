import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { UserData } from '../App';

interface OTPScreenProps {
  onNext: () => void;
  onBack: () => void;
  updateUserData: (data: Partial<UserData>) => void;
}

export function OTPScreen({ onNext, onBack, updateUserData }: OTPScreenProps) {
  const [step, setStep] = useState<'mobile' | 'otp'>('mobile');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleMobileSubmit = () => {
    if (mobile.length === 10) {
      updateUserData({ mobile });
      setStep('otp');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleOtpSubmit = () => {
    if (otp.every(digit => digit !== '')) {
      onNext();
    }
  };

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
              initial={{ width: '0%' }}
              animate={{ width: step === 'mobile' ? '25%' : '50%' }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {step === 'mobile' ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-[#1D8FE1]/10 to-[#2E8B57]/10 rounded-2xl flex items-center justify-center mb-6">
            <Smartphone className="w-8 h-8 text-[#1D8FE1]" />
          </div>

          <h2 className="text-3xl mb-3">Enter your mobile number</h2>
          <p className="text-gray-600 mb-8">
            We'll send you a verification code to get started
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Mobile Number</label>
              <div className="flex gap-3">
                <div className="w-16 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-gray-700">+91</span>
                </div>
                <Input
                  type="tel"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                  placeholder="9876543210"
                  className="flex-1 h-12 rounded-xl border-gray-300"
                />
              </div>
            </div>

            <Button
              onClick={handleMobileSubmit}
              disabled={mobile.length !== 10}
              className="w-full h-12 bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white rounded-xl disabled:opacity-50"
            >
              Send OTP
            </Button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl mb-3">Enter verification code</h2>
          <p className="text-gray-600 mb-8">
            We sent a code to +91 {mobile}
          </p>

          <div className="space-y-6">
            <div className="flex gap-3 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="tel"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-12 h-14 text-center text-2xl border-2 border-gray-300 rounded-xl focus:border-[#1D8FE1] focus:outline-none transition-colors"
                />
              ))}
            </div>

            <button className="text-[#1D8FE1] text-sm">
              Didn't receive code? Resend
            </button>

            <Button
              onClick={handleOtpSubmit}
              disabled={!otp.every(digit => digit !== '')}
              className="w-full h-12 bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white rounded-xl disabled:opacity-50"
            >
              Verify & Continue
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
