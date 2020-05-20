module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "airbnb",
        "react-app",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:jsx-a11y/recommended"
    ],
    "plugins": ["react", "jsx-a11y", "optimize-regex", "no-loops"],
    "rules": {
        "react/jsx-filename-extension": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "import/no-extraneous-dependencies": [
            "error",
            {
                "packageDir": "./"
            }
        ],
        "optimize-regex/optimize-regex": "warn",
        "no-loops/no-loops": 2,
        "import/no-cycle": [0, { maxDepth: 1 }],
        "max-len": [1, 120],
        "allowTernary": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "comma-dangle": [2, "never"],
        "linebreak-style": ["error", "windows"],
        "prefer-template": "off",
        "prefer-destructuring": ["error", {"object": false, "array": false}],
        "no-small-switch": 0
    }
};