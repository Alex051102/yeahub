import { useNavigate } from 'react-router-dom';

export const useNavigateQuestions = () => {
  const navigate = useNavigate();
  const handleNavigate = (key: string, value: number | string) => {
    navigate(`/questions?${key}=${value}`);
  };

  return { handleNavigate };
};
