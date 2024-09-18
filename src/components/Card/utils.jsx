import NoPriorityIcon from '../../Untitled/icons_FEtask/No-priority.svg';
import LowPriorityIcon from '../../Untitled/icons_FEtask/Img - Low Priority.svg';
import MediumPriorityIcon from '../../Untitled/icons_FEtask/Img - Medium Priority.svg';
import HighPriorityIcon from '../../Untitled/icons_FEtask/Img - High Priority.svg';
import UrgentPriorityIcon from '../../Untitled/icons_FEtask/SVG - Urgent Priority colour.svg';
import BacklogIcon from '../../Untitled/icons_FEtask/Backlog.svg';
import TodoIcon from '../../Untitled/icons_FEtask/To-do.svg';
import InProgressIcon from '../../Untitled/icons_FEtask/in-progress.svg';
import DoneIcon from '../../Untitled/icons_FEtask/Done.svg';
import CanceledIcon from "../../Untitled/icons_FEtask/Cancelled.svg";

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <NoPriorityIcon style={{ color: "#797d84", width: 14, height: 14 }} />
        case "Low": return <LowPriorityIcon style={{ color: '#6b6f76', width: 14, height: 14 }} />
        case "Medium": return <MediumPriorityIcon style={{ color: '#6b6f76', width: 14, height: 14 }} />
        case "High": return <HighPriorityIcon style={{ color: '#6b6f76', width: 14, height: 14 }} />
        case "Urgent": return <UrgentPriorityIcon style={{ color: '#fc7840', width: 14, height: 14 }} />
        default: return <UrgentPriorityIcon style={{ color: '#fc7840', width: 14, height: 14 }} />
    }
}

export const getStatusIcon = (status) => {
    switch (status) {
        case "Backlog": return <BacklogIcon style={{ color: '#e2e2e2', width: 24, height: 24 }} />
        case "Todo": return <TodoIcon style={{ color: '#e2e2e2', width: 24, height: 24 }} />
        case "In progress": return <InProgressIcon style={{ color: '#f1ca4b', width: 16, height: 16 }} />
        case "Done": return <DoneIcon style={{ color: '#5e6ad2', width: 16, height: 16 }} />
        case "Canceled": return <CanceledIcon style={{ color: '#94a2b3', width: 16, height: 16 }} />
        default: return <CanceledIcon style={{ color: '#94a2b3', width: 16, height: 16 }} />
    }
}
