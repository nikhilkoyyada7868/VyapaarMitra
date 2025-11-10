import { motion } from 'motion/react';
import { ArrowLeft, Award, Zap, Target, Trophy, Gift, Star } from 'lucide-react';
import { Progress } from './ui/progress';
import { UserData } from '../App';

interface GamificationProps {
  userData: UserData;
  onBack: () => void;
}

export function Gamification({ userData, onBack }: GamificationProps) {
  const levels = [
    { name: 'Bronze', min: 0, max: 500, color: 'from-orange-400 to-orange-600' },
    { name: 'Silver', min: 500, max: 1500, color: 'from-gray-400 to-gray-600' },
    { name: 'Gold', min: 1500, max: 3000, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Platinum', min: 3000, max: 5000, color: 'from-purple-400 to-purple-600' },
    { name: 'Diamond', min: 5000, max: 10000, color: 'from-blue-400 to-blue-600' },
  ];

  const currentLevel = levels.find(l => 
    (userData.coins || 0) >= l.min && (userData.coins || 0) < l.max
  ) || levels[0];

  const progressInLevel = ((userData.coins || 0) - currentLevel.min) / (currentLevel.max - currentLevel.min) * 100;
  const coinsToNextLevel = currentLevel.max - (userData.coins || 0);

  const badges = [
    { id: 'gst-champ', name: 'GST Champ', icon: '📊', earned: true, description: 'Filed GST on time for 3 months' },
    { id: 'aa-verified', name: 'AA Verified', icon: '✅', earned: true, description: 'Connected Account Aggregator' },
    { id: 'on-time-payer', name: 'On-time Payer', icon: '⏰', earned: false, description: 'Pay 5 EMIs on time' },
    { id: 'early-bird', name: 'Early Bird', icon: '🌅', earned: false, description: 'Pay EMI 2 days early, 3 times' },
    { id: 'credit-builder', name: 'Credit Builder', icon: '🏗️', earned: true, description: 'Improved credit score by 50 points' },
    { id: 'referral-star', name: 'Referral Star', icon: '⭐', earned: false, description: 'Refer 5 businesses' },
  ];

  const rewards = [
    { coins: 1000, benefit: '0.5% interest rate reduction', available: false },
    { coins: 2000, benefit: '₹500 processing fee waiver', available: false },
    { coins: 500, benefit: 'Free credit score report', available: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] px-6 py-6 rounded-b-3xl">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-2xl mb-2">Rewards & Levels</h1>
        <p className="text-white/80 text-sm">Earn coins, unlock benefits</p>
      </div>

      <div className="px-6 py-6">
        {/* Current Level Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-gradient-to-br ${currentLevel.color} rounded-3xl p-6 mb-6 text-white relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Current Level</p>
                <h2 className="text-3xl">{currentLevel.name}</h2>
              </div>
            </div>

            <div className="bg-white/20 rounded-full h-3 mb-2 overflow-hidden backdrop-blur-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressInLevel}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-white rounded-full"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <span>{userData.coins} coins</span>
              <span>{coinsToNextLevel} coins to next level</span>
            </div>
          </div>
        </motion.div>

        {/* Level Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-5 mb-6"
        >
          <h3 className="text-gray-800 mb-4">Level Journey</h3>
          <div className="space-y-3">
            {levels.map((level, index) => {
              const isCompleted = (userData.coins || 0) >= level.max;
              const isCurrent = level.name === currentLevel.name;
              
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isCompleted 
                      ? `bg-gradient-to-br ${level.color}` 
                      : isCurrent
                      ? `bg-gradient-to-br ${level.color} opacity-50`
                      : 'bg-gray-200'
                  }`}>
                    {isCompleted ? (
                      <Trophy className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-white">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`${isCurrent ? 'text-gray-800' : 'text-gray-600'}`}>
                      {level.name}
                    </p>
                    <p className="text-xs text-gray-500">{level.min} - {level.max} coins</p>
                  </div>
                  {isCurrent && (
                    <div className="bg-gradient-to-r from-[#1D8FE1] to-[#2E8B57] text-white text-xs px-3 py-1 rounded-full">
                      Current
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <h3 className="text-gray-800 mb-4">Achievement Badges</h3>
          <div className="grid grid-cols-2 gap-3">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`rounded-2xl p-4 ${
                  badge.earned
                    ? 'bg-gradient-to-br from-blue-50 to-green-50 border-2 border-[#2E8B57]'
                    : 'bg-gray-100 border-2 border-gray-200 opacity-60'
                }`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="text-sm text-gray-800 mb-1">{badge.name}</p>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Earn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-5 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-[#1D8FE1]" />
            <h3 className="text-gray-800">How to Earn MitraCoins</h3>
          </div>
          <div className="space-y-3">
            {[
              { action: 'Pay EMI on time', coins: 50 },
              { action: 'Pay EMI 2 days early', coins: 100 },
              { action: 'Refer a business', coins: 200 },
              { action: 'File GST on time', coins: 75 },
              { action: 'Complete loan repayment', coins: 500 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-white rounded-xl p-3">
                <span className="text-sm text-gray-700">{item.action}</span>
                <div className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs">🪙</span>
                  </div>
                  <span className="text-sm text-gray-800">+{item.coins}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Redeem Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gray-50 rounded-2xl p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Gift className="w-5 h-5 text-purple-600" />
            <h3 className="text-gray-800">Redeem Rewards</h3>
          </div>
          <div className="space-y-3">
            {rewards.map((reward, index) => (
              <div 
                key={index}
                className={`rounded-xl p-4 ${
                  reward.available
                    ? 'bg-white border-2 border-[#2E8B57]'
                    : 'bg-white border-2 border-gray-200 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-800">{reward.benefit}</p>
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xs">🪙</span>
                    </div>
                    <span className="text-sm text-gray-800">{reward.coins}</span>
                  </div>
                </div>
                {reward.available && (
                  <button className="text-xs text-[#1D8FE1]">
                    Redeem Now →
                  </button>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}