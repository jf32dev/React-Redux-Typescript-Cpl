import medicalSpecialities from '../assets/images/medical.png';
import regionSpecific from '../assets/images/regionSpecific.png';
import clientSetup from '../assets/images/clientSetup.png';
import itBilling from '../assets/images/itBilling.png';
import cplSolutions from '../assets/images/cplSolutions.png';
import { TabContent } from '../typedef';

export const TAB_DATA: TabContent[] = [
  {
    img: medicalSpecialities,
    case: 'entity',
    entityId: 811408,
    entityType: 'tab',
    background: 'rgba(153, 162, 179, 0.8)',
  },
  {
    img: regionSpecific,
    case: 'entity',
    entityId: 816190,
    entityType: 'tab',
    background: 'rgba(126, 165, 172, 0.8)',
  },
  {
    img: clientSetup,
    case: 'entity',
    entityId: 816191,
    entityType: 'tab',
    background: 'rgba(103, 105, 104, 0.8)',
  },
  {
    img: itBilling,
    case: 'entity',
    entityId: 816192,
    entityType: 'tab',
    background: 'rgba(22, 37, 46, 0.8)',
  },
  {
    img: cplSolutions,
    case: 'entity',
    entityId: 816195,
    entityType: 'tab',
    background: 'rgba(22, 37, 46, 0.8)',
  },
];
