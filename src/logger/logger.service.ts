export abstract class LoggerService {
  abstract log(message: string): void;
  abstract getLoggerId(): string;
}
