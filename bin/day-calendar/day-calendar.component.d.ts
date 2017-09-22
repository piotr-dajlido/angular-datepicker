import { ECalendarValue } from '../common/types/calendar-value-enum';
import { SingleCalendarValue } from '../common/types/single-calendar-value';
import { ECalendarMode } from '../common/types/calendar-mode-enum';
import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DayCalendarService } from './day-calendar.service';
import * as moment from 'moment';
import { Moment } from 'moment';
import { IDayCalendarConfig } from './day-calendar-config.model';
import { IDay } from './day.model';
import { ControlValueAccessor, FormControl, ValidationErrors, Validator } from '@angular/forms';
import { CalendarValue } from '../common/types/calendar-value';
import { UtilsService } from '../common/services/utils/utils.service';
import { IMonthCalendarConfig } from '../month-calendar/month-calendar-config';
import { IMonth } from '../month-calendar/month.model';
export declare class DayCalendarComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
    dayCalendarService: DayCalendarService;
    utilsService: UtilsService;
    config: IDayCalendarConfig;
    displayDate: SingleCalendarValue;
    minDate: Moment;
    maxDate: Moment;
    theme: string;
    onSelect: EventEmitter<IDay>;
    onMonthSelect: EventEmitter<IMonth>;
    onNavHeaderBtnClick: EventEmitter<ECalendarMode>;
    CalendarMode: typeof ECalendarMode;
    isInited: boolean;
    componentConfig: IDayCalendarConfig;
    _selected: Moment[];
    weeks: IDay[][];
    weekdays: Moment[];
    currentDateView: Moment;
    inputValue: CalendarValue;
    inputValueType: ECalendarValue;
    validateFn: (inputVal: CalendarValue) => {
        [key: string]: any;
    };
    currentCalendarMode: ECalendarMode;
    monthCalendarConfig: IMonthCalendarConfig;
    api: {
        moveCalendarsBy: any;
        toggleCalendar: any;
    };
    selected: Moment[];
    constructor(dayCalendarService: DayCalendarService, utilsService: UtilsService);
    ngOnInit(): void;
    init(): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: CalendarValue): void;
    registerOnChange(fn: any): void;
    onChangeCallback(_: any): void;
    registerOnTouched(fn: any): void;
    validate(formControl: FormControl): ValidationErrors | any;
    processOnChangeCallback(value: Moment[]): CalendarValue;
    initValidators(): void;
    isDisabledDay(day: IDay): boolean;
    dayClicked(day: IDay): void;
    getNavLabel(): string;
    getDayBtnText(day: IDay): string;
    getDayBtnCssClass(day: IDay): {
        [klass: string]: boolean;
    };
    onLeftNav(): void;
    onRightNav(): void;
    shouldShowLeftNav(): boolean;
    shouldShowRightNav(): boolean;
    isNavHeaderBtnClickable(): boolean;
    toggleCalendar(mode: ECalendarMode): void;
    monthSelected(month: IMonth): void;
    moveCalendarsBy(current: Moment, amount: number, granularity?: moment.unitOfTime.Base): void;
}
