import { definePreset } from '@primeng/themes';
import Material from '@primeng/themes/material';

const MaterialCyanOrangePreset = definePreset(Material, {
    semantic: {
        primary: {
            50: '{cyan.50}',
            100: '{cyan.100}',
            200: '{cyan.200}',
            300: '{cyan.300}',
            400: '{cyan.400}',
            500: '{cyan.500}', // Cyan
            600: '{cyan.600}',
            700: '{cyan.700}',
            800: '{cyan.800}',
            900: '{cyan.900}',
        },
        accent: {
            50: '{orange.50}',
            100: '{orange.100}',
            200: '{orange.200}',
            300: '{orange.300}',
            400: '{orange.400}',
            500: '{orange.500}', // Orange
            600: '{orange.600}',
            700: '{orange.700}',
            800: '{orange.800}',
            900: '{orange.900}',
        },
    },
    components: {
        button: {
            colorScheme: {
                light: {
                    background: 'linear-gradient(145deg, {primary.400}, {primary.600})',
                    textColor: '#ffffff',
                    hoverBackground: 'linear-gradient(145deg, {primary.500}, {primary.700})',
                    shadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                },
            },
        },
    },
        focusRing: {
            width: '3px',
            style: 'solid',
            color: '{primary.500}',
        },
        surface: {
            0: '#ffffff',
            50: '#f7f9fc',
            100: '#e4e9f2',
            200: '#c5cee0',
            300: '#8f9bb3',
            400: '#2e3a59',
            500: '#222b45',
            shadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        },
    
});

export default MaterialCyanOrangePreset;