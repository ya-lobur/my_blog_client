import { WizardModeType } from "./PostWizard";

export function getTitle(mode: WizardModeType) {
    if (mode === "create") {
        return 'Добавить пост'
    } else if (mode === "update") {
        return 'Редактировать пост'
    }
    return null;
}

export function getSubmitBtnTitle(mode: WizardModeType) {
    if (mode === "create") {
        return 'Добавить'
    } else if (mode === "update") {
        return 'Сохранить'
    }
    return null;
}