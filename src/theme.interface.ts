export interface ITheme {
  buttonHeight: string;
  action: IActionStyle;
  button: IButtonStyle;
  heading1: IHeadingStyle;
  heading2: IHeadingStyle;
}
export interface IActionStyle {
  primary: string;
  secondary: string;
}
export interface IButtonStyle {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
  padding: string;
}
export interface IHeadingStyle {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
  color: string;
}
