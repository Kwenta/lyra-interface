import { Theme } from 'theme-ui'

const lightColors = {
  // background
  background: '#F7F3F9',
  bgGradient: 'linear-gradient(270deg, #EBFBF8 0%, #F7F3F9 100%)',
  hover: '#E8E8E880', // 50%
  active: '#E8E8E8CC', // 80%
  cardBg: '#FEFEFE73', // 45%
  cardElevatedBg: '#FEFEFE',
  cardHoverBg: '#eeeeee',
  cardOutline: '#C4CED7',

  // default button
  buttonBg: '#E8E8E899', // 60%
  buttonHover: '#E8E8E8CC', // 80%
  buttonActive: '#E8E8E8',
  disabledButtonBg: '#E8E8E899',

  // primary button
  primaryButtonBg: '#3E2D00E6', // 90%
  primaryButtonHover: '#3E2D00', // 100%
  primaryButtonActive: '#FFCC00',

  // warning button
  warningButtonBg: '#F7931A',
  warningButtonHover: '#de8417',
  warningButtonActive: '#c87715',

  // error button
  errorButtonBg: '#FC4D95',
  errorButtonHover: '#e34586',
  errorButtonActive: '#cc3e79',

  // dark button
  elevatedButtonBg: '#E8E8E8',
  elevatedButtonHover: '#DCDCDC',
  elevatedButtonActive: '#D1D1D1',

  // toggle button
  toggleButtonBg: '#E8E8E899', // #E8E8E8 50%
  toggleButtonActive: '#FEFEFE', // #FEFEFE

  // tokens + alerts
  defaultTokenBg: '#E8E8E899',
  primaryTokenBg: '#57B29C33',
  errorTokenBg: '#FC4D9533',
  warningTokenBg: '#F7931A33',

  // charts
  primaryLine: '#3CAA8F',
  primaryArea: '#57B29C33',
  errorLine: '#FC4D95',
  errorArea: '#FC4D9533',
  axis: '#C4CED7',
  crosshair: '#6B7D94',

  // spinner
  lightSpinner: '#a2a2a2',
  lightSpinnerBg: '#a2a2a233',
  primarySpinner: '#3CAA8F',
  primarySpinnerBg: '#3CAA8F33',
  errorSpinner: '#FC4D95',
  errorSpinnerBg: '#FC4D9533',
  warningSpinner: '#de8417',
  warningSpinnerBg: '#de841733',

  // scroll
  scrollBg: '#a2a2a233',

  // text
  text: '#052822',
  secondaryText: '#6B7D94',
  disabledText: '#95A4B5',
  primaryText: '#3CAA8F',
  errorText: '#FC4D95',
  warningText: '#de8417',

  // link
  primaryLink: '#3CAA8F',
  primaryLinkHover: '#72E1C6',

  // input
  inputBg: '#E8E8E899',
  inputHoverBg: '#E8E8E880',
  inputSuccess: '#57B29C',
  inputError: '#D86969',
  inputDisabledBg: '#E8E8E899',

  // modal
  modalBg: '#FEFEFE',
  modalOverlayBg: 'rgba(15, 15, 15, 0.65)',

  // trade sharing
  tradeShareBg: '#FFFFFF',
  tradeShareHoverBg: '#FFFFFFE6',

  // shimmer
  shimmerBg: '#e8e8e8',
  shimmerBgNested: '#D1CBCB',

  // shadows
  elevatedShadowBg: 'rgba(0, 0, 0, 0.1)',
}

const darkColors = {
  // backgrounds
  background: '#131312',
  hover: '#3A445033', // 20%
  active: '#3A445066', // 40%
  cardBg: '#181818', // 75%
  cardElevatedBg: '#1D1D1D',
  cardHoverBg: '#2D3741',
  cardOutline: '#FFFFFF1a',

  // primary button
  primaryButtonBg: '#FFB80088',
  primaryButtonHover: '#2B2A2A',
  primaryButtonActive: '#FFB800',

  // error button
  errorButtonBg: '#FC4D95',
  errorButtonHover: '#e34586',
  errorButtonActive: '#c73c75',

  // warning button
  warningButtonBg: '#F7931A',
  warningButtonHover: '#de8417',
  warningButtonActive: '#c27414',

  // default button
  buttonBg: '#131312', // 60%
  buttonHover: '#252525', // 80%
  buttonActive: '#252525', // 100%
  disabledButtonBg: '#3A445099',

  // dark button
  elevatedButtonBg: '#1B252D',
  elevatedButtonHover: '#233039',
  elevatedButtonActive: '#2B3A47',

  // toggle button
  toggleButtonBg: '#3A445099', // #3A4450 60%
  toggleButtonActive: '#B1B1B1', // #151F26 60%

  // tokens + alerts
  defaultTokenBg: '#3A445066',
  primaryTokenBg: '#57B29C26',
  warningTokenBg: '#F7931A26',
  errorTokenBg: '#FC4D9526',

  // charts
  primaryLine: '#B1B1B1',
  primaryArea: '#57B29C26',
  errorLine: '#FC4D95',
  errorArea: '#FC4D9526',
  axis: '#95A4B580',
  crosshair: '#95A4B5',

  // spinner
  lightSpinner: '#3A445099',
  lightSpinnerBg: '#3A445033',
  primarySpinner: '#B1B1B1',
  primarySpinnerBg: '#B1B1B133',
  errorSpinner: '#FC4D95',
  errorSpinnerBg: '#FC4D9533',
  warningSpinner: '#de8417',
  warningSpinnerBg: '#de841733',

  // scroll
  scrollBg: '#3A445033',

  // text
  text: '#FFFFFF',
  secondaryText: '#95A4B5',
  disabledText: '#6B7D94',
  primaryText: '#FFFFFF',
  errorText: '#FC4D95',
  warningText: '#de8417',

  // link
  primaryLink: '#B1B1B1',
  primaryLinkHover: '#B1B1B1FF',

  // input
  inputBg: '#3A445099',
  inputHoverBg: '#3A4450BF',
  inputSuccess: '#57B29C',
  inputError: '#D86969',
  inputDisabledBg: '#3A445099',

  // modal
  modalBg: '#27303A',
  modalOverlayBg: 'rgba(0, 0, 0, 0.4)',

  // trade sharing
  tradeShareBg: '#232B36',
  tradeShareHoverBg: '#05080AE6',

  // shimmer
  shimmerBg: '#3a424b',
  shimmerBgNested: '#4a5767',

  // shadows
  elevatedShadowBg: 'rgba(0, 0, 0, 0.1)',
}

const theme = {
  fonts: {
    body: "'Inter var', sans-serif",
    heading: "'Sohne', sans-serif",
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    light: 300,
    body: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    strong: 800,
    black: 900,
  },
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],
  breakpoints: ['860px', '2000px'],
  radii: {
    token: '8px',
    text: '8px',
    alert: 18,
    list: 18,
    card: 21,
    circle: 99999,
  },
  text: {
    title: {
      fontFamily: 'heading',
      fontWeight: 'medium',
      fontSize: ['42px', '52px'],
      lineHeight: ['50px', '60px'],
      letterSpacing: '0px',
    },
    subtitle: {
      fontFamily: 'heading',
      fontWeight: 'light',
      fontSize: ['24px', '28px'],
      lineHeight: ['32px', '36px'],
      letterSpacing: '0px',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'medium',
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '0px',
    },
    cardHeading: {
      fontFamily: 'heading',
      fontWeight: 'medium',
      fontSize: '21px',
      lineHeight: '29px',
      letterSpacing: '0px',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0px',
    },
    // TODO: Rename bodyHeading
    bodyMedium: {
      fontFamily: 'body',
      fontWeight: 'medium',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0px',
    },
    small: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: '14px',
      lineHeight: '22px',
      letterSpacing: '0px',
    },
  },
  variants: {
    cardDefault: {
      borderRadius: 'card',
      overflow: 'hidden',
      bg: 'cardBg',
    },
    cardShadowBg: {
      borderRadius: 'card',
      overflow: 'hidden',
      boxShadow: (theme: Theme) => `0px -4px 72px -16px ${theme.colors ? theme.colors['elevatedShadowBg'] : ''}`,
      bg: 'cardBg',
    },
    cardElevated: {
      borderRadius: 'card',
      overflow: 'hidden',
      boxShadow: (theme: Theme) => `0px 0px 40px ${theme.colors ? theme.colors['elevatedShadowBg'] : ''}`,
      bg: 'cardElevatedBg',
    },
    cardModal: {
      borderRadius: [0, 'card'],
      overflow: 'hidden',
      boxShadow: (theme: Theme) => `0px 0px 40px ${theme.colors ? theme.colors['elevatedShadowBg'] : ''}`,
      bg: 'modalBg',
    },
    cardOutlined: {
      borderRadius: 'card',
      overflow: 'hidden',
      bg: 'transparent',
      border: `1px solid`,
      borderColor: 'cardOutline',
    },
    cardSeparator: {
      bg: 'background',
    },
    tableRow: {
      borderSpacing: 0,
      ':hover': {
        bg: 'hover',
      },
    },
    list: {
      bg: 'transparent',
      paddingInlineStart: 0,
      marginBlockStart: 0,
      marginBlockEnd: 0,
      marginInlineStart: 0,
      marginInlineEnd: 0,
      overflow: 'hidden',
      listStyleType: 'none',
      p: 0,
    },
    listItem: {
      color: 'text',
      textDecoration: 'none',
      textAlign: 'left',
      '&:not(.disabled):hover': {
        bg: 'hover',
      },
      '&:not(.disabled):active': {
        bg: 'active',
      },
      '&:(.disabled)': {
        cursor: 'not-allowed',
      },
    },
    inputContainer: {
      fontFamily: 'body',
      bg: 'inputBg',
      borderRadius: ['22px', '18px'],
      border: '1px solid',
      borderColor: 'inputBg',
      minHeight: ['41px', '35px'],
      ':hover': {
        bg: 'inputHoverBg',
      },
    },
    inputContainerDisabled: {
      variant: 'inputContainer',
      bg: 'inputDisabledBg',
      ':hover': 'none',
    },
    toast: {
      cursor: 'pointer',
    },
    toastDefault: {
      variant: 'toast',
      bg: 'modalBg',
      color: 'text',
    },
    toastError: {
      variant: 'toast',
      bg: 'errorButtonBg',
      color: 'white',
    },
    toastSuccess: {
      variant: 'toast',
      bg: 'primaryButtonBg',
      color: 'white',
    },
    toastWarning: {
      variant: 'toast',
      bg: 'warningButtonBg',
      color: 'white',
    },
    token: {
      fontSize: '14px',
      lineHeight: ['42px', '36px'],
      height: ['42px', '36px'],
      fontWeight: 'medium',
      borderRadius: 'token',
      textTransform: 'uppercase',
      px: 3,
    },
    tokenDefault: {
      variant: 'variants.token',
      bg: 'defaultTokenBg',
      color: 'secondaryText',
    },
    tokenError: {
      variant: 'variants.token',
      bg: 'errorTokenBg',
      color: 'errorText',
    },
    tokenPrimary: {
      variant: 'variants.token',
      bg: 'primaryTokenBg',
      color: 'primaryText',
    },
    tokenWarning: {
      variant: 'variants.token',
      bg: 'warningTokenBg',
      color: 'warningText',
    },
    alert: {
      borderRadius: 'alert',
      p: 3,
    },
    alertInfo: {
      variant: 'variants.alert',
      bg: 'defaultTokenBg',
      color: 'secondaryText',
    },
    alertError: {
      variant: 'variants.alert',
      bg: 'errorTokenBg',
      color: 'errorText',
    },
    alertPrimary: {
      variant: 'variants.alert',
      bg: 'primaryTokenBg',
      color: 'primaryText',
    },
    alertWarning: {
      variant: 'variants.alert',
      bg: 'warningTokenBg',
      color: 'warningText',
    },
    link: {
      textDecoration: 'none',
      color: 'text',
      cursor: 'pointer',
      ':hover': {
        color: 'text',
      },
    },
    linkSecondary: {
      textDecoration: 'none',
      color: 'secondaryText',
      cursor: 'pointer',
      ':hover': {
        color: 'text',
      },
    },
    linkPrimary: {
      textDecoration: 'none',
      color: 'primaryLink',
      cursor: 'pointer',
      ':hover': {
        color: 'primaryLinkHover',
      },
    },
    linkError: {
      textDecoration: 'none',
      color: 'errorText',
      cursor: 'pointer',
      ':hover': {
        color: 'text',
      },
    },
    linkWarning: {
      textDecoration: 'none',
      color: 'warningText',
      cursor: 'pointer',
      ':hover': {
        color: 'text',
      },
    },
  },
  buttons: {
    base: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'buttonBg',
      cursor: 'pointer',
      ':focus': {
        outlineWidth: '0px',
      },
    },
    disabled: {
      variant: 'buttons.base',
      borderColor: 'transparent',
      color: 'disabledText',
      cursor: 'not-allowed',
      bg: 'disabledButtonBg',
      '&:not(.disabled):hover': {
        bg: 'disabledButtonBg',
        borderColor: 'transparent',
      },
    },
    primary: {
      variant: 'buttons.base',
      borderColor: 'primaryButtonBg',
      bg: 'primaryButtonBg',
      color: 'white',
      '&:not(.disabled):hover': {
        borderColor: 'primaryButtonHover',
        bg: 'primaryButtonHover',
      },
      '&:not(.disabled):active': {
        bg: 'primaryButtonActive',
        borderColor: 'primaryButtonActive',
      },
    },
    primaryTransparent: {
      variant: 'buttons.base',
      bg: 'transparent',
      color: 'primaryButtonBg',
      borderColor: 'transparent',
      '&:not(.disabled):hover': {
        bg: 'buttonBg',
        borderColor: 'transparent',
      },
      '&:not(.disabled):active': {
        bg: 'buttonHover',
        borderColor: 'transparent',
      },
    },
    primaryOutline: {
      variant: 'buttons.base',
      bg: 'transparent',
      color: 'primaryButtonBg',
      borderColor: 'primaryButtonBg',
      '&:not(.disabled):hover': {
        bg: 'buttonBg',
        borderColor: 'primaryButtonHover',
      },
      '&:not(.disabled):active': {
        bg: 'buttonHover',
        borderColor: 'primaryButtonActive',
      },
    },
    error: {
      variant: 'buttons.base',
      borderColor: 'errorButtonBg',
      bg: 'errorButtonBg',
      color: 'white',
      '&:not(.disabled):hover': {
        borderColor: 'errorButtonHover',
        bg: 'errorButtonHover',
      },
      '&:not(.disabled):active': {
        bg: 'errorButtonActive',
        borderColor: 'errorButtonActive',
      },
    },
    errorTransparent: {
      variant: 'buttons.base',
      bg: 'transparent',
      color: 'errorButtonBg',
      borderColor: 'transparent',
      '&:not(.disabled):hover': {
        bg: 'buttonBg',
        borderColor: 'transparent',
      },
      '&:not(.disabled):active': {
        bg: 'buttonHover',
        borderColor: 'transparent',
      },
    },
    errorOutline: {
      variant: 'buttons.base',
      bg: 'transparent',
      color: 'errorButtonBg',
      borderColor: 'errorButtonBg',
      '&:not(.disabled):hover': {
        bg: 'buttonBg',
        borderColor: 'errorButtonHover',
      },
      '&:not(.disabled):active': {
        bg: 'errorHover',
        borderColor: 'errorButtonActive',
      },
    },
    warning: {
      variant: 'buttons.base',
      borderColor: 'warningButtonBg',
      bg: 'warningButtonBg',
      color: 'white',
      '&:not(.disabled):hover': {
        borderColor: 'warningButtonHover',
        bg: 'warningButtonHover',
      },
      '&:not(.disabled):active': {
        bg: 'warningButtonActive',
        borderColor: 'warningButtonActive',
      },
    },
    warningTransparent: {
      variant: 'buttons.base',
      bg: 'transparent',
      color: 'warningButtonBg',
      borderColor: 'transparent',
      '&:not(.disabled):hover': {
        bg: 'buttonBg',
        borderColor: 'transparent',
      },
      '&:not(.disabled):active': {
        bg: 'buttonHover',
        borderColor: 'transparent',
      },
    },
    warningOutline: {
      variant: 'buttons.base',
      bg: 'transparent',
      color: 'warningButtonBg',
      borderColor: 'warningButtonBg',
      '&:not(.disabled):hover': {
        bg: 'buttonBg',
        borderColor: 'warningButtonHover',
      },
      '&:not(.disabled):active': {
        bg: 'warningHover',
        borderColor: 'warningButtonActive',
      },
    },
    default: {
      variant: 'buttons.base',
      borderColor: 'transparent',
      bg: 'buttonBg',
      color: 'text',
      '&:not(.disabled):hover': {
        bg: 'buttonHover',
        borderColor: 'buttonHover',
      },
      '&:not(.disabled):active': {
        bg: 'buttonActive',
        borderColor: 'buttonActive',
      },
    },
    defaultOutline: {
      variant: 'buttons.base',
      borderColor: 'buttonHover',
      bg: 'transparent',
      color: 'text',
      '&:not(.disabled):hover': {
        bg: 'hover',
        borderColor: 'buttonHover',
      },
      '&:not(.disabled):active': {
        bg: 'active',
        borderColor: 'buttonActive',
      },
    },
    defaultTransparent: {
      variant: 'buttons.base',
      borderColor: 'transparent',
      bg: 'transparent',
      color: 'text',
      '&:not(.disabled):hover': {
        bg: 'buttonHover',
        borderColor: 'transparent',
      },
      '&:not(.disabled):active': {
        bg: 'active',
        borderColor: 'transparent',
      },
    },
    light: {
      variant: 'buttons.default',
      color: 'secondaryText',
      borderColor: 'transparent',
      '&:not(.disabled):hover': {
        color: 'text',
      },
      '&:not(.disabled):active': {
        color: 'text',
      },
    },
    lightOutline: {
      variant: 'buttons.defaultOutline',
      color: 'secondaryText',
      borderColor: 'secondaryText',
      '&:not(.disabled):hover': {
        color: 'text',
        borderColor: 'secondaryText',
      },
      '&:not(.disabled):active': {
        color: 'text',
        borderColor: 'secondaryText',
      },
    },
    lightTransparent: {
      variant: 'buttons.defaultTransparent',
      color: 'secondaryText',
      '&:not(.disabled):hover': {
        color: 'text',
      },
    },
    white: {
      variant: 'buttons.base',
      bg: '#FFFFFFE6',
      color: lightColors.text,
      borderColor: '#FFFFFFE6',
      '&:not(.disabled):hover': {
        bg: lightColors.buttonHover,
        borderColor: 'transparent',
      },
      '&:not(.disabled):active': {
        bg: lightColors.buttonActive,
        borderColor: 'transparent',
      },
    },
    static: {
      variant: 'buttons.base',
      bg: 'buttonBg',
      color: 'secondaryText',
      borderColor: 'transparent',
      '&:not(.disabled):hover': {
        bg: 'buttonBg',
        color: 'text',
        borderColor: 'transparent',
      },
      '&:not(.disabled):active': {
        bg: 'buttonBg',
        color: 'text',
        borderColor: 'transparent',
      },
    },
    staticTransparent: {
      variant: 'buttons.base',
      bg: 'transparent',
      color: 'secondaryText',
      borderColor: 'transparent',
      '&:not(.disabled):hover': {
        bg: 'transparent',
        color: 'text',
        borderColor: 'transparent',
      },
      '&:not(.disabled):active': {
        bg: 'transparent',
        color: 'text',
        borderColor: 'transparent',
      },
    },
    elevated: {
      variant: 'buttons.base',
      bg: 'elevatedButtonBg',
      borderColor: 'transparent',
      color: 'text',
      boxShadow: (theme: Theme) => `0px 4px 24px ${theme.colors ? theme.colors['elevatedShadowBg'] : ''}`,
      '&:not(.disabled):hover': {
        bg: 'elevatedButtonHover',
        borderColor: 'transparent',
      },
      '&:not(.disabled):active': {
        bg: 'elevatedButtonActive',
        borderColor: 'transparent',
      },
    },
  },
  forms: {
    input: {
      variant: 'text.body',
      borderWidth: 1,
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderRadius: 0,
      color: 'text',
      px: 0,
      py: 0,
      ':hover,:focus,.active': {
        outline: 0,
      },
      '::placeholder': {
        color: 'secondaryText',
        fontWeight: 'body',
      },
      '::-webkit-outer-spin-button,::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        margin: 0,
      },
    },
    textarea: {
      variant: 'text.body',
      borderWidth: 1,
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderRadius: 0,
      color: 'text',
      px: 0,
      py: 0,
      ':hover,:focus,.active': {
        outline: 0,
      },
      '::placeholder': {
        color: 'secondaryText',
        fontWeight: 'body',
      },
      '::-webkit-outer-spin-button,::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        margin: 0,
      },
    },
    slider: {
      color: 'secondaryText',
      ':focus': {
        color: 'primary',
      },
      bg: 'buttonBg',
    },
  },
  styles: {
    root: {
      variant: 'text.body',
    },
  },
  zIndex: {
    popover: 1000,
    modal: 101,
    bottomNav: 100,
    topNavBar: 5,
    chart: 2,
    desktopHeader: 1,
  },
}

export const getThemePreset = (isRoot: boolean, isLightMode: boolean = false): Theme => ({
  useColorSchemeMediaQuery: isRoot ? true : false,
  initialColorModeName: 'dark',
  colors: {
    ...(isLightMode ? lightColors : darkColors),
    modes: isLightMode
      ? {
          dark: darkColors,
        }
      : { light: lightColors },
  },
  ...theme,
})

export const defaultPreset = getThemePreset(true)

export const darkTheme = {
  colors: darkColors,
  ...theme,
}

export const lightTheme = {
  colors: lightColors,
  ...theme,
}

export default defaultPreset
