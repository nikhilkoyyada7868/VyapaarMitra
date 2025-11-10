import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Building2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { UserData } from '../App';

interface BusinessDetailsProps {
  onNext: () => void;
  onBack: () => void;
  updateUserData: (data: Partial<UserData>) => void;
}

export function BusinessDetails({ onNext, onBack, updateUserData }: BusinessDetailsProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    gstin: '',
    pan: '',
  });

  const handleSubmit = () => {
    if (formData.businessName && formData.gstin && formData.pan) {
      updateUserData(formData);
      onNext();
    }
  };

  const isValid = formData.businessName && formData.gstin.length === 15 && formData.pan.length === 10;

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
              initial={{ width: '50%' }}
              animate={{ width: '75%' }}
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
          <Building2 className="w-8 h-8 text-[#1D8FE1]" />
        </div>

        <h2 className="text-3xl mb-3">Business details</h2>
        <p className="text-gray-600 mb-8">
          Help us understand your business better
        </p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Business Name</label>
            <Input
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              placeholder="e.g., Rajesh Traders Pvt Ltd"
              className="h-12 rounded-xl border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">GSTIN</label>
            <Input
              value={formData.gstin}
              onChange={(e) => setFormData({ ...formData, gstin: e.target.value.toUpperCase() })}
              placeholder="29ABCDE1234F1Z5"
              maxLength={15}
              className="h-12 rounded-xl border-gray-300"
            />
            <p className="text-xs text-gray-500 mt-1">15-character GST Identification Number</p>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">PAN</label>
            <Input
              value={formData.pan}
              onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
              placeholder="ABCDE1234F"
              maxLength={10}
              className="h-12 rounded-xl border-gray-300"
            />
            <p className="text-xs text-gray-500 mt-1">10-character PAN number</p>
          </div>

          <div className="pt-4">
            <Button
              onClick={handleSubmit}
              disabled={!isValid}
              className="w-full h-12 bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white rounded-xl disabled:opacity-50"
            >
              Continue
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            🔒 Your data is encrypted and secure
          </p>
        </div>
      </motion.div>
    </div>
  );
}
