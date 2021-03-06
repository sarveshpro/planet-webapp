export interface contactDetailsProps {
  firstName: string;
  lastName: string;
  email: string;
  address: String;
  city: String;
  zipCode: String;
  country: String;
  companyName: String;
}

export interface giftDetailsProps {
  recipientName: String;
  email: String;
  giftMessage: String;
}

export interface TreeDonationProps {
  onClose: any;
  project: any;
  treeCount: number;
  setTreeCount: Function;
  isGift: Boolean;
  setIsGift: Function;
  treeCost: number;
  paymentSetup: any;
  isTaxDeductible: Boolean;
  setIsTaxDeductible: Function;
  currency: String;
  setCurrency: Function;
  country: string;
  setCountry: Function;
  setDonationStep: Function;
  giftDetails: giftDetailsProps;
  setGiftDetails: Function;
  paymentType: String;
  setPaymentType: Function;
}

export interface PaymentDetailsProps {
  project: { id: any };
  paymentSetup: any;
  treeCount: number;
  treeCost: number;
  currency: String;
  setDonationStep: Function;
  contactDetails: contactDetailsProps;
  isGift: Boolean;
  giftDetails: giftDetailsProps;
  paymentType: String;
  setPaymentType: Function;
}

export interface ContactDetailsPageProps {
  treeCount: number;
  treeCost: number;
  currency: String;
  setDonationStep: Function;
  contactDetails: contactDetailsProps;
  setContactDetails: Function;
}

export interface ThankYouProps {
  project: { name: String };
  treeCount: number;
  treeCost: number;
  currency: String;
  setDonationStep: Function;
  contactDetails: Object;
  isGift: Boolean;
  giftDetails: giftDetailsProps;
  onClose: any;
  paymentType: String;
}
