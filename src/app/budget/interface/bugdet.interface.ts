import BudgetProfessionalInterface from './budget_profesional.interface';

export interface ProfessionalsRequestInterface {
  id: number;
  amount: number;
}
export interface BudgetRequestInterface {
  amountDays: number;
  professionals: ProfessionalsRequestInterface[];
}
export default interface BudgetInterface {
  id?: number;
  userId?: number;
  total?: number;
  amountDays: number;
  status?: string;
  professionals?: BudgetProfessionalInterface[];
  totalPerDay?: number;
}
