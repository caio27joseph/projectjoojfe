import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Poppins`,
		'--theme-font-family-heading': `Poppins`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '0px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #A2EFE1
		'--color-primary-50': '241 253 251', // #f1fdfb
		'--color-primary-100': '236 252 249', // #ecfcf9
		'--color-primary-200': '232 251 248', // #e8fbf8
		'--color-primary-300': '218 249 243', // #daf9f3
		'--color-primary-400': '190 244 234', // #bef4ea
		'--color-primary-500': '162 239 225', // #A2EFE1
		'--color-primary-600': '146 215 203', // #92d7cb
		'--color-primary-700': '122 179 169', // #7ab3a9
		'--color-primary-800': '97 143 135', // #618f87
		'--color-primary-900': '79 117 110', // #4f756e
		// secondary | #53389E
		'--color-secondary-50': '229 225 240', // #e5e1f0
		'--color-secondary-100': '221 215 236', // #ddd7ec
		'--color-secondary-200': '212 205 231', // #d4cde7
		'--color-secondary-300': '186 175 216', // #baafd8
		'--color-secondary-400': '135 116 187', // #8774bb
		'--color-secondary-500': '83 56 158', // #53389E
		'--color-secondary-600': '75 50 142', // #4b328e
		'--color-secondary-700': '62 42 119', // #3e2a77
		'--color-secondary-800': '50 34 95', // #32225f
		'--color-secondary-900': '41 27 77', // #291b4d
		// tertiary | #0EA5E9
		'--color-tertiary-50': '219 242 252', // #dbf2fc
		'--color-tertiary-100': '207 237 251', // #cfedfb
		'--color-tertiary-200': '195 233 250', // #c3e9fa
		'--color-tertiary-300': '159 219 246', // #9fdbf6
		'--color-tertiary-400': '86 192 240', // #56c0f0
		'--color-tertiary-500': '14 165 233', // #0EA5E9
		'--color-tertiary-600': '13 149 210', // #0d95d2
		'--color-tertiary-700': '11 124 175', // #0b7caf
		'--color-tertiary-800': '8 99 140', // #08638c
		'--color-tertiary-900': '7 81 114', // #075172
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #303A3A
		'--color-surface-50': '224 225 225', // #e0e1e1
		'--color-surface-100': '214 216 216', // #d6d8d8
		'--color-surface-200': '203 206 206', // #cbcece
		'--color-surface-300': '172 176 176', // #acb0b0
		'--color-surface-400': '110 117 117', // #6e7575
		'--color-surface-500': '48 58 58', // #303A3A
		'--color-surface-600': '43 52 52', // #2b3434
		'--color-surface-700': '36 44 44', // #242c2c
		'--color-surface-800': '29 35 35', // #1d2323
		'--color-surface-900': '24 28 28' // #181c1c
	}
};
