import BudgetProfessionalInterface from './budget_profesional.interface';

export default interface BudgetInterface {
  id?: number;
  name: string;
  userId?: number;
  total: number;
  totalPerDay: number;
  amountDays: number;
  status?: string;
  professionals?: BudgetProfessionalInterface[];
}
