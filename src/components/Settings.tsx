import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  User, 
  FileText, 
  Shield, 
  Bell,
  HelpCircle,
  LogOut,
  ChevronRight,
  MessageCircle,
  Database
} from 'lucide-react';
import { UserData } from '../App';

interface SettingsProps {
  userData: UserData;
  onBack: () => void;
}

export function Settings({ userData, onBack }: SettingsProps) {
  const settingsSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Profile & KYC', value: userData.businessName || 'Complete your profile' },
        { icon: FileText, label: 'GST Details', value: userData.gstin || 'Not linked' },
        { icon: Database, label: 'Account Aggregator', value: 'Connected' },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', value: 'Enabled' },
        { icon: Shield, label: 'Security & Privacy', value: '' },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', value: '' },
        { icon: MessageCircle, label: 'Chat with Mitra', value: 'AI Assistant' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] px-6 py-6 rounded-b-3xl">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-2xl mb-2">Settings</h1>
        <p className="text-white/80 text-sm">Manage your account and preferences</p>
      </div>

      <div className="px-6 py-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-5 mb-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1D8FE1] to-[#2E8B57] rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl">{userData.businessName?.charAt(0) || 'B'}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-gray-800 text-lg">{userData.businessName || 'Business Name'}</h3>
              <p className="text-sm text-gray-600">Credit Score: {userData.creditScore}</p>
              <p className="text-xs text-gray-500 mt-1">Member since Nov 2025</p>
            </div>
          </div>
        </motion.div>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (sectionIndex + 1) }}
            className="mb-6"
          >
            <h3 className="text-gray-600 text-sm mb-3 px-2">{section.title}</h3>
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  className={`w-full p-4 flex items-center gap-3 hover:bg-gray-100 transition-colors ${
                    itemIndex !== section.items.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-gray-800">{item.label}</p>
                    {item.value && (
                      <p className="text-sm text-gray-500">{item.value}</p>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Consent Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-gray-600 text-sm mb-3 px-2">Data Privacy Center</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-gray-800 mb-2">Your Data Stays in India</h4>
                <p className="text-sm text-gray-600 mb-3">
                  All your data is encrypted and stored within India in compliance with DPDP 2023. We never sell or share your data without consent.
                </p>
                <button className="text-sm text-blue-700 mb-3">
                  View Consent History →
                </button>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-white rounded-lg p-3">
                    <div>
                      <p className="text-sm text-gray-800">GST Data Access</p>
                      <p className="text-xs text-gray-500">Granted on 10 Nov 2025</p>
                    </div>
                    <button className="text-xs text-blue-700">Revoke</button>
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3">
                    <div>
                      <p className="text-sm text-gray-800">Bank Data via AA</p>
                      <p className="text-xs text-gray-500">Granted on 10 Nov 2025</p>
                    </div>
                    <button className="text-xs text-blue-700">Revoke</button>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full h-10 bg-white border border-blue-300 text-blue-700 rounded-xl text-sm">
              Download My Data
            </button>
          </div>
        </motion.div>

        {/* Help Center with Chatbot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 mb-6"
        >
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-gray-800 mb-1">Hi, I'm Mitra 🤖</h4>
              <p className="text-sm text-gray-600 mb-3">
                Your credit assistant. Ask me anything about loans, credit score, or repayments.
              </p>
              <button className="text-sm text-purple-700">
                Start Chat →
              </button>
            </div>
          </div>
        </motion.div>

        {/* App Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-50 rounded-2xl p-4 mb-6"
        >
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-gray-600">App Version</span>
            <span className="text-sm text-gray-800">1.0.0</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-gray-600">Terms & Conditions</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-gray-600">Privacy Policy</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </motion.div>

        {/* Logout */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center gap-2 hover:bg-red-100 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </motion.button>

        <p className="text-xs text-gray-500 text-center mt-4">
          🔒 Your data is secure and encrypted
        </p>
      </div>
    </div>
  );
}