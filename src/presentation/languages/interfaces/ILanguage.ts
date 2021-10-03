import { ICreateHabitControllerLanguage } from "./ICreateHabitControllerLanguage";
import { ICreateHabitPageLanguage } from "./ICreateHabitPageLanguage";
import { IHabitPageLanguage } from "./IHabitPageLanguage";
import { IHomePageLanguage } from "./IHomePageLanguage";
import { IIndexHabitControllerLanguage } from "./IIndexHabitControllerLanguage";
import { IRemoveHabitControllerLanguage } from "./IRemoveHabitControllerLanguage";
import { IShowHabitControllerLanguage } from "./IShowHabitControllerLanguage";
import { IToastLanguage } from "./IToastLanguage";
import { IUpdateHabitControllerLanguage } from "./IUpdateHabitControllerLanguage";
import { IUpdateHabitPageLanguage } from "./IUpdateHabitPageLanguage";
import { IOnboardUserInHabitForLessonCreateHabit } from "./IOnboardUserInHabitForLessonCreateHabit";

export interface ILanguage
  extends IToastLanguage,
    ICreateHabitControllerLanguage,
    IIndexHabitControllerLanguage,
    IRemoveHabitControllerLanguage,
    IShowHabitControllerLanguage,
    IUpdateHabitControllerLanguage,
    IHomePageLanguage,
    IHabitPageLanguage,
    ICreateHabitPageLanguage,
    IUpdateHabitPageLanguage,
    IOnboardUserInHabitForLessonCreateHabit {}
