import plugin from 'tailwindcss/plugin'

export default plugin.withOptions(
    (options = { version: 4 }) => {
        return function({ addUtilities, theme }) {
            // Generate utilities for common color scales
            const colors = theme('colors');
            const colorData = {};

        // Detect if we're using Tailwind v3 or v4 based on color structure
        /*
        let isTailwindV4 = false;
        try {
            const tailwindVersion = require('tailwindcss/package.json').version;
            const majorVersion = parseInt(tailwindVersion.split('.')[0]);
            isTailwindV4 = majorVersion >= 4;
        } catch (error) {
            console.error('Error detecting Tailwind version:', error);
        }
        */
        let isTailwindV4 = options.version === 4;
        
        if (isTailwindV4) {
            // Process colors for Tailwind v4 (flattened format)
            Object.entries(colors).forEach(([colorName, colorValue]) => {
                // Skip special values and non-color entries
                if (
                    colorName === '__CSS_VALUES__' || 
                    colorName === 'white' || 
                    colorName === 'black'
                ) {
                    return;
                }

                // Only process keys that follow the color-shade pattern (like "red-500")
                const parts = colorName.split('-');
                // We expect exactly 2 parts: color name and a numeric shade
                if (parts.length === 2 && !isNaN(parts[1])) {
                    const [name, shade] = parts;
                    
                    // Initialize color entry if it doesn't exist
                    if (!colorData[name]) {
                        colorData[name] = {};
                    }
                    
                    // Add the shade
                    colorData[name][shade] = colorValue;
                }
            });
        } else {
            // Process colors for Tailwind v3 (nested format)
            Object.entries(colors).forEach(([colorName, colorShades]) => {
                if (
                    colorName === '__CSS_VALUES__' || 
                    colorName === 'white' || 
                    colorName === 'black'
                ) {
                    return;
                }
                
                // Only include color objects that have numeric shade keys
                const numericShades = Object.keys(colorShades).filter(shade => !isNaN(shade));
                if (numericShades.length > 0) {
                    colorData[colorName] = {};
                    
                    // Only include numeric shades
                    numericShades.forEach(shade => {
                        colorData[colorName][shade] = colorShades[shade];
                    });
                }
            });
        }
        
        const pipeUtilities = {};

        // Generate utility classes for each color and shade pair
        Object.entries(colorData).forEach(([colorName, shades]) => {
            const shadeKeys = Object.keys(shades);

            shadeKeys.forEach((lightShade) => {
                shadeKeys.forEach((darkShade) => {
                    if (lightShade !== darkShade) {
                        // All Utilities
                        // bg-*	Sets the background color of an element
                        // text-*	Sets the text color of an element
                        // border-*	Sets the border color of an element
                        // decoration-*	Sets the text decoration color of an element
                        // outline-*	Sets the outline color of an element
                        // shadow-*	Sets the color of box shadows
                        // inset-shadow-*	Sets the color of inset box shadows
                        // ring-*	Sets the color of ring shadows
                        // inset-ring-*	Sets the color of inset ring shadows
                        // accent-*	Sets the accent color of form controls
                        // caret-*	Sets the caret color in form controls
                        // fill-*	Sets the fill color of SVG elements
                        // stroke-*	Sets the stroke color of SVG elements
                        // from-*	Sets the from color of a gradient
                        // to-*	Sets the to color of a gradient

                        // Background utilities
                        pipeUtilities[`.bg-${colorName}-${lightShade}-${darkShade}`] = {
                            backgroundColor: shades[lightShade],
                            '.dark &': {
                                backgroundColor: shades[darkShade]
                            }
                        };

                        // Text utilities
                        pipeUtilities[`.text-${colorName}-${lightShade}-${darkShade}`] = {
                            color: shades[lightShade],
                            '.dark &': {
                                color: shades[darkShade]
                            }
                        };

                        // Border utilities
                        pipeUtilities[`.border-${colorName}-${lightShade}-${darkShade}`] = {
                            borderColor: shades[lightShade],
                            '.dark &': {
                                borderColor: shades[darkShade]
                            }
                        };

                        // Text decoration utilities
                        pipeUtilities[`.decoration-${colorName}-${lightShade}-${darkShade}`] = {
                            textDecorationColor: shades[lightShade],
                            '.dark &': {
                                textDecorationColor: shades[darkShade]
                            }
                        };

                        // Outline utilities
                        pipeUtilities[`.outline-${colorName}-${lightShade}-${darkShade}`] = {
                            outlineColor: shades[lightShade],
                            '.dark &': {
                                outlineColor: shades[darkShade]
                            }
                        };

                        // Shadow utilities
                        pipeUtilities[`.shadow-${colorName}-${lightShade}-${darkShade}`] = {
                            '--tw-shadow-color': shades[lightShade],
                            '.dark &': {
                                '--tw-shadow-color': shades[darkShade]
                            }
                        };

                        // Inset shadow utilities
                        pipeUtilities[`.inset-shadow-${colorName}-${lightShade}-${darkShade}`] = {
                            '--tw-shadow-color': shades[lightShade],
                            boxShadow: 'inset var(--tw-shadow)',
                            '.dark &': {
                                '--tw-shadow-color': shades[darkShade]
                            }
                        };

                        // Ring utilities
                        pipeUtilities[`.ring-${colorName}-${lightShade}-${darkShade}`] = {
                            '--tw-ring-color': shades[lightShade],
                            '.dark &': {
                                '--tw-ring-color': shades[darkShade]
                            }
                        };

                        // Inset ring utilities
                        pipeUtilities[`.inset-ring-${colorName}-${lightShade}-${darkShade}`] = {
                            '--tw-ring-inset': 'inset',
                            '--tw-ring-color': shades[lightShade],
                            '.dark &': {
                                '--tw-ring-color': shades[darkShade]
                            }
                        };

                        // Accent utilities
                        pipeUtilities[`.accent-${colorName}-${lightShade}-${darkShade}`] = {
                            accentColor: shades[lightShade],
                            '.dark &': {
                                accentColor: shades[darkShade]
                            }
                        };

                        // Caret utilities
                        pipeUtilities[`.caret-${colorName}-${lightShade}-${darkShade}`] = {
                            caretColor: shades[lightShade],
                            '.dark &': {
                                caretColor: shades[darkShade]
                            }
                        };

                        // Fill utilities
                        pipeUtilities[`.fill-${colorName}-${lightShade}-${darkShade}`] = {
                            fill: shades[lightShade],
                            '.dark &': {
                                fill: shades[darkShade]
                            }
                        };

                        // Stroke utilities
                        pipeUtilities[`.stroke-${colorName}-${lightShade}-${darkShade}`] = {
                            stroke: shades[lightShade],
                            '.dark &': {
                                stroke: shades[darkShade]
                            }
                        };

                        // From utilities
                        pipeUtilities[`.from-${colorName}-${lightShade}-${darkShade}`] = {
                            '--tw-gradient-from': shades[lightShade],
                            '--tw-gradient-stops': `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`,
                            '.dark &': {
                                '--tw-gradient-from': shades[darkShade],
                                '--tw-gradient-stops': `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`
                            }
                        };

                        // To utilities
                        pipeUtilities[`.to-${colorName}-${lightShade}-${darkShade}`] = {
                            '--tw-gradient-to': shades[lightShade],
                            '--tw-gradient-stops': `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`,
                            '.dark &': {
                                '--tw-gradient-to': shades[darkShade],
                                '--tw-gradient-stops': `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`
                            }
                        };
                    }
                });
            });
        });

        addWhiteBlackUtilities(pipeUtilities);

        addUtilities(pipeUtilities);
    }
});

function addWhiteBlackUtilities(pipeUtilities) {
    // Background utilities
    pipeUtilities[`.bg-white-black`] = {
        backgroundColor: 'white',
        '.dark &': {
            backgroundColor: 'black'
        }
    };

    pipeUtilities[`.bg-black-white`] = {
        backgroundColor: 'black',
        '.dark &': {
            backgroundColor: 'white'
        }
    };

    // Text utilities
    pipeUtilities[`.text-white-black`] = {
        color: 'white',
        '.dark &': {
            color: 'black'
        }
    };

    pipeUtilities[`.text-black-white`] = {
        color: 'black',
        '.dark &': {
            color: 'white'
        }
    };

    // Border utilities
    pipeUtilities[`.border-white-black`] = {
        borderColor: 'white',
        '.dark &': {
            borderColor: 'black'
        }
    };

    pipeUtilities[`.border-black-white`] = {
        borderColor: 'black',
        '.dark &': {
            borderColor: 'white'
        }
    };

    // Fill utilities
    pipeUtilities[`.fill-white-black`] = {
        fill: 'white',
        '.dark &': {
            fill: 'black'
        }
    };

    pipeUtilities[`.fill-black-white`] = {
        fill: 'black',
        '.dark &': {
            fill: 'white'
        }
    };

    // Stroke utilities
    pipeUtilities[`.stroke-white-black`] = {
        stroke: 'white',
        '.dark &': {
            stroke: 'black'
        }
    };

    pipeUtilities[`.stroke-black-white`] = {
        stroke: 'black',
        '.dark &': {
            stroke: 'white'
        }
    };

    // From utilities
    pipeUtilities[`.from-white-black`] = {
        '--tw-gradient-from': 'white',
        '--tw-gradient-stops': `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`,
        '.dark &': {
            '--tw-gradient-from': 'black',
            '--tw-gradient-stops': `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`
        }
    };

    pipeUtilities[`.from-black-white`] = {
        '--tw-gradient-from': 'black',
        '--tw-gradient-stops': `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`,
        '.dark &': {
            '--tw-gradient-from': 'white',
            '--tw-gradient-stops': `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`
        }
    };

    // To utilities
    pipeUtilities[`.to-white-black`] = {
        '--tw-gradient-to': 'white',
        '--tw-gradient-stops': `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`,
        '.dark &': {
            '--tw-gradient-to': 'black',
            '--tw-gradient-stops': `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`
        }
    };

    pipeUtilities[`.to-black-white`] = {
        '--tw-gradient-to': 'black',
        '--tw-gradient-stops': `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`,
        '.dark &': {
            '--tw-gradient-to': 'white',
            '--tw-gradient-stops': `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`
        }
    };
}