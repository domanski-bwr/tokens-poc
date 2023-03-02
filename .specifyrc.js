const path = require('path')

const publicPath = './output'
const assetsFolderPath = 'assets'
const vectorsFolderPath = `${publicPath}/${assetsFolderPath}/icons`
const designTokensFolderPath = `${publicPath}/styles`
const fontsFolderPath = `${publicPath}/${assetsFolderPath}/fonts`
const fontFormats = ['woff2', 'woff']

const designTokensRules = [
  {
    name: 'Design Tokens / Theme',
    path: `${designTokensFolderPath}/theme.js`,
    filter: {
      types: ['color', 'font', 'textStyle'],
    },
    parsers: [
      {
        name: 'sort-by',
        options: {
          keys: ['name'],
        },
      },
      {
        name: 'px-to-rem',
        options: {
          keys: ['fontSize'],
        },
      },
      {
        name: 'to-theme-ui',
        options: {
          variants: true,
          formatConfig: {
            exportDefault: true,
          },
          formatTokens: {
            colorFormat: {
              format: 'hsl',
            },
            fontSizeFormat: {
              type: 'string',
              unit: 'rem',
            },
          },
          presets: {
            fontWeights: {
              preset: 'base',
              freeze: true,
            },
          },
        },
      },
    ],
  },
]

const fontRules = [
  {
    name: 'Design Tokens / CSS font imports',
    path: `${designTokensFolderPath}/fonts.css`,
    filter: {
      types: ['font'],
    },
    parsers: [
      {
        name: 'to-css-font-import',
        options: {
          formats: fontFormats,
          fontsPath: path.relative(designTokensFolderPath, fontsFolderPath),
        },
      },
    ],
  },
  {
    name: 'Design Tokens / Export fonts',
    path: fontsFolderPath,
    filter: {
      types: ['font'],
    },
    parsers: [
      {
        name: 'convert-font',
        options: {
          formats: fontFormats,
        },
      },
    ],
  },
]

const vectorRules = [
  {
    name: 'Icons',
    path: vectorsFolderPath,
    filter: {
      types: ['vector'],
    },
    parsers: [
      // Remove everything before the last slash
      {
        name: 'replace-string',
        options: {
          keys: ['name'],
          regex: {
            pattern: '(.*?)\\/',
            flags: 'g',
          },
          trim: true,
        },
      },
      // Transform the name of the vector in kebabcase
      {
        name: 'kebabcasify',
      },
      // Optimise the vector
      {
        name: 'svgo',
        options: {
          svgo: {
            js2svg: {
              pretty: true,
            },
          },
        },
      },
      // Define the name of the file that will be written.
      {
        name: 'name-assets-files-by-pattern',
        options: {
          pattern: '{{name}}.jsx',
        },
      },
      // Wrap vector in a jsx function
      {
        name: 'svg-to-jsx',
        options: {
          prepend: "import React from 'react';",
          variableFormat: 'camelCase',
          wrapper: {
            tag: 'div',
            className: 'icon-{{name}} icon',
          },
        },
      },
    ],
  },
]

/*
 * Finally exports the configuration
 */
module.exports = {
  // Find more about how to target a Specify repository at: https://specifyapp.com/developers/api#heading-parameters
  repository: '@bw/test',
  personalAccessToken: '0b652922ef640bc8c0264c7d5349fa8bd7e6564e8c94293a147345d281604c41',
  rules: [...designTokensRules, ...fontRules, ...vectorRules],
}
