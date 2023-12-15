export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userPlatformUsagePlan: PlatformUsagePlan;
  chosenPaymentInterval: PaymentInterval;
  paymentPlan: PaymentPlan;
}

export interface Option {
  label: string;
  value: PlatformUsagePlan;
  imagePath: string;
  description: string;
}

export type PlatformUsagePlan = 'team' | 'personal' | 'recruiting';
export type PaymentInterval = 'monthly' | 'annually';
export type PaymentPlan = 'pro' | 'business' | 'enterprise';
export type PaymentMethod = 'credit-card' | 'google-pay';
