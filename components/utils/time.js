export const ONE_SECOND = 1000;
export const ONE_MINUTE = 60 * ONE_SECOND;
export const ONE_HOUR = 60 * ONE_MINUTE;
export const ONE_DAY = 24 * ONE_HOUR;
export const ONE_MONTH = 30 * ONE_DAY;

export class RemainingTimeObject {
  static ZERO = new RemainingTimeObject({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  constructor({
    days, hours, minutes, seconds,
  }) {
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
}

const TimeUtils = {
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
  ONE_DAY,
  ONE_MONTH,

  getRemainingTimeObject(endTime, startTime = new Date()) {
    if (endTime <= startTime) {
      return RemainingTimeObject.ZERO;
    }

    const remainingTime = endTime - startTime;
    return new RemainingTimeObject({
      seconds: parseInt((remainingTime % ONE_DAY % ONE_HOUR % ONE_MINUTE) / ONE_SECOND, 10),
      minutes: parseInt((remainingTime % ONE_DAY % ONE_HOUR) / ONE_MINUTE, 10),
      hours: parseInt((remainingTime % ONE_DAY) / ONE_HOUR, 10),
      days: parseInt(remainingTime / ONE_DAY, 10),
    });
  },
};

export default TimeUtils;
