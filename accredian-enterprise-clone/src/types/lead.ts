export type LeadRequest = {
  fullName: string;
  workEmail: string;
  company: string;
  teamSize: string;
  message?: string;
};

export type LeadRecord = LeadRequest & {
  id: string;
  createdAt: string;
};
