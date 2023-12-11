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
type PaymentInterval = 'monthly' | 'annually';
type PaymentPlan = 'pro' | 'business' | 'enterprise';
