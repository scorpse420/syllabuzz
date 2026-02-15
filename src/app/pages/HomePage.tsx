import { useNavigate } from 'react-router';
import CurriculumFeedbackHome from '../../imports/CurriculumFeedbackHome';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <CurriculumFeedbackHome />
     
    </div>
  );
}