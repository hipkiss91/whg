import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

// https://eslint.org/docs/user-guide/configuring
export default [
    ...pluginVue.configs['flat/recommended'],
    ...vueTsEslintConfig(),
    {
        // root: true,
        // env: {
        //     node: true,
        // },
        // extends: [
        //     'plugin:vue/recommended',
        //     '@vue/standard',
        // ],
        rules: {
            /**
             * General Rules
             * Settings any key to a value of 0 will disable that rule.
             * Such has been done with 'semi': 0,
             * https://eslint.org/docs/rules/
             */
            // Turn off console logs and debug for production.
            'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
            // Disable caring about semicolons.
            'semi': [
                2,
                'always',
            ],
            // Disable caring about assignments in return statements (return loopInt += this.getLiveTimesRouteDetails.previousCallingPoints.length++;)
            'no-return-assign': 0,
            // Set the expected indent for comments, functions, switch cases, and everything else.
            'indent': [
                'warn',
                4,
                {
                    'ignoreComments': true,
                    'SwitchCase': 1,
                    'MemberExpression': 0,
                },
            ],
            // Force dangling commas after lists or objects. Excludes functions.
            'comma-dangle': [
                'error', {
                    'arrays': 'only-multiline',
                    'objects': 'only-multiline',
                    'imports': 'only-multiline',
                    'exports': 'always',
                    'functions': 'only-multiline',
                },
            ],
            // Forces things like && and || in an if statement to be on the next line.
            'operator-linebreak': [
                'error',
                'before',
            ],
            // No tabs allowed. Tabs can be configured to be 4 spaces wide however.
            'no-tabs': [
                'error',
                {
                    'allowIndentationTabs': false,
                },
            ],
            /**
             * Vue specific rules (as part of the @vue/cli-plugin-eslint package)
             * 'vue/return-in-computed-property': https://github.com/vuejs/eslint-plugin-vue/issues/1049,
             * https://eslint.vuejs.org/
             */
            // Template indent size, in spaces. Setting this to error fails due to some interesting concerns in v-if and v-show when multiple conditions present.
            'vue/html-indent': [
                0,
            ],
            // How to handle self closing tags on elements and spacing.
            'vue/html-closing-bracket-spacing': [
                'error', {
                    'selfClosingTag': 'never',
                },
            ],
            // Sets the maximum number of attributes per html element.
            'vue/max-attributes-per-line': [
                'warn', {
                    'singleline': {
                        'max': 4,
                    },
                    'multiline': {
                        'max': 1,
                    },
                },
            ],
            // 'vue/multi-word-component-names': ['error', {
            //     'ignores': [
            //         './src/views/*',
            //         './src/components/global/*',
            //     ],
            // }],
            'vue/no-v-html': 'off',
            'vue/multi-word-component-names': 'off',
            // Turn off forcing new lines for child content of a html element.
            'vue/singleline-html-element-content-newline': 0,
            // Throws error if the order of attributes on elements are inncorrect.
            'vue/attributes-order': [
                'error', {
                    'order': [
                        'DEFINITION',
                        'LIST_RENDERING',
                        'CONDITIONALS',
                        'RENDER_MODIFIERS',
                        'GLOBAL',
                        'UNIQUE',
                        'TWO_WAY_BINDING',
                        'OTHER_DIRECTIVES',
                        'OTHER_ATTR',
                        'EVENTS',
                        'CONTENT',
                    ],
                    'alphabetical': false,
                },
            ],
        },
        // parserOptions: {
        //     parser: 'babel-eslint',
        // },
        // overrides: [
        //     {
        //         files: [
        //             '**/__tests__/*.js',
        //         ],
        //         env: {
        //             jest: true,
        //         },
        //     },
        // ],
    },
];
