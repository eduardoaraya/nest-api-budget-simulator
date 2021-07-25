import ProfessionalInterface from '../../professional/interface/professional.interface';
import BudgetInterface from './bugdet.interface';

export default interface BudgetProfessionalInterface {
  id?: number;
  budgetId: number;
  professionalId: number;
  amount: number;
  budget?: BudgetInterface;
  professional?: ProfessionalInterface;
}
