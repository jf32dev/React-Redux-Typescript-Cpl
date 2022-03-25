export interface SystemConfig {
  readonly appName: string;
  readonly appVersion: string;
  readonly bridgeVersion: string;
  readonly locale: string;
  readonly mainThemeHexColor: string;
  readonly serverURL: string;
  readonly terminology: any;
  readonly userId: number;
  readonly mdmCustomConfig: unknown;
}
