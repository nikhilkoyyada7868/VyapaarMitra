import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { OTPScreen } from './components/OTPScreen';
import { BusinessDetails } from './components/BusinessDetails';
import { AAConsent } from './components/AAConsent';
import { Dashboard } from './components/Dashboard';
import { LoanApplication } from './components/LoanApplication';
import { CreditSummary } from './components/CreditSummary';
import { LoanOffer } from './components/LoanOffer';
import { SuccessScreen } from './components/SuccessScreen';
import { Repayment } from './components/Repayment';
import { Analytics } from './components/Analytics';
import { Gamification } from './components/Gamification';
import { Settings } from './components/Settings';

export type Screen = 
  | 'welcome'
  | 'otp'
  | 'business-details'
  | 'aa-consent'
  | 'dashboard'
  | 'loan-application'
  | 'credit-summary'
  | 'loan-offer'
  | 'success'
  | 'repayment'
  | 'analytics'
  | 'gamification'
  | 'settings';

export interface UserData {
  mobile?: string;
  businessName?: string;
  gstin?: string;
  pan?: string;
  creditLimit?: number;
  availableLimit?: number;
  creditScore?: number;
  coins?: number;
  level?: string;
  loanAmount?: number;
  tenor?: number;
  emi?: number;
  interestRate?: number;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [userData, setUserData] = useState<UserData>({
    coins: 250,
    level: 'Bronze',
  });

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Mobile Frame Container */}
      <div className="max-w-[390px] mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
        {currentScreen === 'welcome' && (
          <WelcomeScreen onNext={() => navigateToScreen('otp')} />
        )}
        {currentScreen === 'otp' && (
          <OTPScreen 
            onNext={() => navigateToScreen('business-details')}
            onBack={() => navigateToScreen('welcome')}
            updateUserData={updateUserData}
          />
        )}
        {currentScreen === 'business-details' && (
          <BusinessDetails 
            onNext={() => navigateToScreen('aa-consent')}
            onBack={() => navigateToScreen('otp')}
            updateUserData={updateUserData}
          />
        )}
        {currentScreen === 'aa-consent' && (
          <AAConsent 
            onNext={() => {
              updateUserData({
                creditLimit: 1000000,
                availableLimit: 850000,
                creditScore: 762,
              });
              navigateToScreen('dashboard');
            }}
            onBack={() => navigateToScreen('business-details')}
          />
        )}
        {currentScreen === 'dashboard' && (
          <Dashboard 
            userData={userData}
            onNavigate={navigateToScreen}
          />
        )}
        {currentScreen === 'loan-application' && (
          <LoanApplication 
            userData={userData}
            updateUserData={updateUserData}
            onNext={() => navigateToScreen('credit-summary')}
            onBack={() => navigateToScreen('dashboard')}
          />
        )}
        {currentScreen === 'credit-summary' && (
          <CreditSummary 
            userData={userData}
            onNext={() => navigateToScreen('loan-offer')}
            onBack={() => navigateToScreen('loan-application')}
          />
        )}
        {currentScreen === 'loan-offer' && (
          <LoanOffer 
            userData={userData}
            updateUserData={updateUserData}
            onAccept={() => navigateToScreen('success')}
            onBack={() => navigateToScreen('credit-summary')}
          />
        )}
        {currentScreen === 'success' && (
          <SuccessScreen 
            userData={userData}
            onNext={() => navigateToScreen('dashboard')}
          />
        )}
        {currentScreen === 'repayment' && (
          <Repayment 
            userData={userData}
            onBack={() => navigateToScreen('dashboard')}
          />
        )}
        {currentScreen === 'analytics' && (
          <Analytics 
            userData={userData}
            onBack={() => navigateToScreen('dashboard')}
          />
        )}
        {currentScreen === 'gamification' && (
          <Gamification 
            userData={userData}
            onBack={() => navigateToScreen('dashboard')}
          />
        )}
        {currentScreen === 'settings' && (
          <Settings 
            userData={userData}
            onBack={() => navigateToScreen('dashboard')}
          />
        )}
      </div>
    </div>
  );
}
