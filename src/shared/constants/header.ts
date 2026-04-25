import { ROUTES } from '../config';
export type LINKSObj={
  to:string,
  label:string
}
export const LINKS = [
  { to: ROUTES.QUESTIONS, label: 'База вопросов' },
  { to: ROUTES.TRAINER, label: 'Тренажер' },
  { to: ROUTES.MATERIALS, label: 'Материалы' },
  { to: ROUTES.SKILLS, label: 'Навыки (hh)' },
];
