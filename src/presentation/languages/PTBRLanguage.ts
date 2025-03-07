import { ILanguage } from "./interfaces";

export class PTBRLanguage implements ILanguage {
  getFutureDateErrorMessage(date: Date): string {
    return "Data não pode estar no futuro";
  }
  getOnboardUserInHabitForLessonCreateHabitMessage(): string {
    return "Clique neste botão para criar um hábito";
  }

  getDropdownInputTitlePropMessage(): string {
    return "Selecione um vício";
  }

  getDropdownInputMessage(): string {
    return "Qual vício você quer enfrentar";
  }

  getDateInputTitlePropMessage(): string {
    return "Dia / Mês / Ano";
  }

  getDateInputMessage(): string {
    return "Última vez que você se rendeu a este vício";
  }

  getUpdateHabitPageTitleMessage(): string {
    return "Editar vício";
  }

  getUpdateHabitPageSubtitleMessage(): string {
    return "Escolha qual opção você quer editar";
  }

  getUpdateHabitButtonMessage(): string {
    return "Editar vício";
  }

  getDeleteHabitButtonMessage(): string {
    return "Excluir vício";
  }

  getCreateHabitPageTitleMessage(): string {
    return "Criar novo vício";
  }

  getCreateHabitPageSubtitleMessage(): string {
    return "Escolha uma das opções de vícios";
  }

  getCreateHabitButtonMessage(): string {
    return "Criar novo vício";
  }

  getHabitPageTitleMessage(): string {
    return "Sobre o vício";
  }

  getHabitPageSubtitleMessage(): string {
    return "Há quanto tempo você está sóbrio";
  }

  getHabitPageDaysMessage(): string {
    return "Dias";
  }

  getHabitPageHoursMessage(): string {
    return "Horas";
  }

  getHabitPageMinutesMessage(): string {
    return "Minutos";
  }

  getHabitPageSecondsMessage(): string {
    return "Segundos";
  }

  getHabitPageResetTimeButtonMessage(): string {
    return "Restar Tempo";
  }

  getHomePageTitleMessage(): string {
    return "Seja bem vindo";
  }

  getHomePageSubtitleMessage(habitsAmount: number): string {
    return `Você tem ${habitsAmount} habitos a serem quebrados`;
  }

  getHabitComponentTitleMessage(habitName: string): string {
    return `Você está livre de ${habitName} há`;
  }

  getCurrentNameParamMessage(): string {
    return "nome atual";
  }

  getHabitUpdatedSuccessfullyMessage(): string {
    return "Vício editado com sucesso";
  }

  getHabitNotUpdatedMessage(): string {
    return "Vício não pôde ser editado";
  }

  getNewNameIsEqualToOldOneErrorMessage(): string {
    return "Novo nome é igual ao nome atual";
  }

  getHabitLoadedSuccessfullyMessage(name: string): string {
    return "Vício carregado com sucesso";
  }

  getHabitNotLoadedMessage(name: string): string {
    return "Vício não pôde ser encontrado";
  }

  getHabitRemovedSuccessfullyMessage(_name: string): string {
    return "Vício removido com sucesso";
  }

  getHabitNotRemovedMessage(_name: string): string {
    return "Vício não pôde ser removido";
  }

  getNoHabitFoundErrorMessage(): string {
    return "Nenhum vício foi encontrado";
  }

  getHabitsLoadedSuccessfullyMessage(): string {
    return "Vícios listados com sucesso";
  }

  getHabitsNotLoadedMessage(): string {
    return "Houve um problema ao listar seus vícios";
  }

  getSuccessToastTitle(): string {
    return "Sucesso";
  }

  getErrorToastTitle(): string {
    return "Error";
  }

  getHabitCreatedSuccessfullyMessage(_name: string): string {
    return "Vício criado com sucesso";
  }

  getHabitNotCreatedMessage(_name: string): string {
    return "Vício não pôde ser criado";
  }

  getHabitAlreadyExistsErrorMessage(name: string): string {
    return `Vício '${name}' já existe`;
  }

  getMissingParamsErrorMessage(params: string[]): string {
    return `Você precisa especificar: ${params.join(", ")}`;
  }

  getHabitNameParamMessage(): string {
    return "nome";
  }

  getPerformedLastDateParamMessage(): string {
    return "última data";
  }
}
