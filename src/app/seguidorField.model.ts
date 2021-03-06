import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

export class SeguidorField {
    spOrientacio: number;
    spInclinacio: number;
    rdOrientacioGeneral: number;
    rdInclinacioGeneral: number;
    estatGeneral: string;
    ssGeneral: string;
    alarmesGeneral: number;
    ventActual: number;
    velocitatMaximaVent: number;
    alarmaVent: number;
    rearmeAlarmes: number;
    ventMaximHistoric: number;
    dtlMaxVent: string;
    latitud: number;
    longitud: number;
    seguidors: Array<Seguidor> = [];


    sunrise: string;
    sunset: string;
    date: string;

    get percentToSunset(): number {
        if (this.sunrise === undefined) {
            return 0;
        }

        const sunriseHours = this.sunrise.replace(' am', '').split(':');
        const sunsetHours = this.sunset.replace(' pm', '').split(':');
        let percentToSunset = 0;
        const today = new Date();

        const sunriseDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(),
            Number(sunriseHours[0]), Number(sunriseHours[1]), 0);

        const sunsetDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(),
            Number(sunsetHours[0]) + 12, Number(sunsetHours[1]), 0);

        const minutesSunAllDay = Math.abs(sunsetDate.getTime() - sunriseDate.getTime());
        const minutesToSunset = today.getTime() - sunsetDate.getTime();

        if (minutesToSunset > 0) {
            return percentToSunset;
        }

        percentToSunset = 50 - ((Math.abs(minutesToSunset) * 50) / minutesSunAllDay);
        return Math.round(percentToSunset);
    }

    get hourMessure(): string {
        if (this.date === undefined) {
            return '';
        }
        const dateMeassure = new Date(this.date.split(', ')[1].substring(0, this.date.split(', ')[1].lastIndexOf(' ')));
        return `${dateMeassure.getHours().toString().padStart(2, '0')}:${dateMeassure.getMinutes().toString().padStart(2, '0')} ${dateMeassure.getHours() > 14 ? 'pm' : 'am'}`;
    }

    constructor() { }
}
export class Seguidor {
    nom: string;
    spOrientacioMan: number;
    spInclinacioMan: number;
    manual: number;
    rdOrientacio: number;
    rdInclinacio: number;
    correccio: number;
    entradaMinOrientacio: number;
    sortidaMinOrientacio: number;
    entradaMaxOrientacio: number;
    sortidaMaxOrientacio: number;
    entradaMinInclinacio: number;
    sortidaMinInclinacio: number;
    entradaMaxInclinacio: number;
    sortidaMaxInclinacio: number;
    limitOrientacioMinim: number;
    limitOrientacioMaxim: number;
    limitInclinacioMinim: number;
    limitInclinacioMaxim: number;
    start: number;
    stop: number;
    alarmes: string;
    dtlAlarmes: string;
    potenciaInv1: number;
    potenciaInv2: number;
    potenciaDiariaInv1: number;
    potenciaDiariaInv2: number;
    constructor() {
    }
}
