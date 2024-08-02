import { extendTheme } from '@chakra-ui/react';

const chakraTheme = extendTheme({
  colors: {
    black: '#000000',
    white: '#ffffff',
    primary: '#0A0A0D',
    secondary: '#334155',
    tertiary: '#64748B', //확인필요
    brand: '#10B981',
    brandBold: '#065F46',
    info: '#4F46E5',
    infoBold: '#3730A3',
    success: '#0D9488',
    successBold: '#065F46',
    warning: '#F59E0B',
    warningBold: '#B45309',
    background: '#36e7bd',
    gray: {
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0A0A0D',
    },
    border: {
      primary: '#FFFFFF',
      secondary: '#F1F5F9',
      tertiary: '#E2E8F0',
      brand: '#059669',
      info: '#2563EB',
      infoSubtle: 'EFF6FF',
      infoBold: '#3730A3',
      success: '#059669',
      successSubtle: '#ECFDF5',
      warning: '#F59E0B',
      warningSubtle: '#FFFBEB',
      danger: '#DC2626',
      dangerSubtle: '#FEF2F2',
      inverse: '#1E293B',
      disabled: '#CCD6E3',
    },
    brandColor: {
      50: '#ECFDF5',
      100: '#D1FAE5',
      200: '#A7F3D0',
      300: '#6EE7B7',
      400: '#34D399',
      500: '#10B981',
      600: '#059669',
      700: '#047857',
      800: '#065F46',
      900: '#064E3B',
      950: '#022C22',
    },
    informationColor: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A',
      950: '#172554',
    },
    successColor: {
      50: '#ECFDF5',
      100: '#D1FAE5',
      200: '#A7F3D0',
      300: '#6EE7B7',
      400: '#34D399',
      500: '#10B981',
      600: '#059669',
      700: '#047857',
      800: '#065F46',
      900: '#064E3B',
      950: '#022C22',
    },
    warningColor: {
      50: '#FFFBEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B',
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      900: '#78350F',
      950: '#451A03',
    },
    dangerColor: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#EF4444',
      600: '#DC2626',
      700: '#B91C1C',
      800: '#991B1B',
      900: '#7F1D1D',
      950: '#450A0A',
    },
    neutralColor: {
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0A0A0D',
    },
  },
  components: {
    Button: {
      variants: {
        greenWhite: {
          bg: '#047857',
          color: '#ffffff',
          _hover: {
            bg: '#065f46',
          },
          _active: {
            bg: '#064e3b',
          },
        },
        greenGreen: { bg: '#F0FDFA', color: '#047857' },
        grayWhite: { bg: '#475569', color: '#FFFFFF' },
      },
    },
  },
  breakpoints: {
    sm: '360px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
});

export default chakraTheme;
