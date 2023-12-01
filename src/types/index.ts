export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userPlatformUsagePlan: PlatformUsagePlan;
  chosenPaymentInterval: PaymentInterval;
  paymentPlan: PaymentPlan;
}

type PlatformUsagePlan = 'team projects' | 'personal projects' | 'recruiting';
type PaymentInterval = 'monthly' | 'annually';
type PaymentPlan = 'pro' | 'business' | 'enterprise';
