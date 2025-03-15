<script>
	import CopyButton from "$lib/components/CopyButton.svelte";
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import { ArrowDown } from "lucide-svelte";

    const tailwindConfigCode = `// Add the plugin to your Tailwind config
import lightDarkPlugin from 'tailwind-light-dark';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    // ...
    plugins: [
        lightDarkPlugin,
    ],
}
    `;

    const addTailwindConfigCode = `
// tailwind.config.js
import lightDarkPlugin from 'tailwind-light-dark';

export default {
    darkMode: 'class',
    // ...
    plugins: [
        lightDarkPlugin,
    ],
}
    `;

    const toggleDarkMode = `
// Toggle dark mode

function toggleDarkMode() {
    document.body.classList.toggle('dark');

    // Save preference
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
    `;

    const customColors = `
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        avocado: {
          50: 'oklch(0.99 0 0)',
          100: 'oklch(0.99 0 0)',
          200: 'oklch(0.98 0.04 113.22)',
          300: 'oklch(0.94 0.11 115.03)',
          400: 'oklch(0.92 0.19 114.08)',
          500: 'oklch(0.84 0.18 117.33)',
          600: 'oklch(0.53 0.12 118.34)',
          700: 'oklch(0.42 0.11 118.34)',
          800: 'oklch(0.32 0.09 118.34)',
          900: 'oklch(0.22 0.06 118.34)',
          950: 'oklch(0.12 0.03 118.34)',
        }
      }
    }
  }
}
    `;

</script>

<ThemeToggle />


<main class="min-h-screen bg-stone-50-900 text-stone-900-50 pb-32">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-16 px-4 md:px-8">
        <div class="max-w-6xl mx-auto">
            <div class="text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-4 pb-8 bg-clip-text bg-gradient-to-r from-blue-500-700 to-purple-500-700">
                    TailwindCSS Light-Dark Plugin
                </h1>
                <div class="flex flex-col gap-4 justify-center items-center px-4 py-2 mb-8 w-fit mx-auto">
                    <div class="flex justify-center px-4 py-2 bg-white-black rounded-xl shadow-lg border-2 border-stone-200-800 w-fit mx-auto">
                        <pre><code>bg-emerald-100 dark:bg-emerald-900</code></pre>
                    </div>
                        <ArrowDown size={24} />
                    <div class="flex justify-center px-4 py-2 bg-white-black rounded-xl shadow-lg border-2 border-stone-200-800 w-fit mx-auto">
                        <pre><code>bg-emerald-100-900</code></pre>
                    </div>
                </div>
                <div class="flex justify-center gap-4 flex-wrap">
                    <a href="#install" class="px-6 py-3 rounded-lg font-medium bg-blue-500-700 text-white hover:bg-blue-600-800 transition-colors">
                        Get Started
                    </a>
                    <a href="#examples" class="px-6 py-3 rounded-lg font-medium bg-stone-200-700 text-stone-900-100 hover:bg-stone-300-600 transition-colors">
                        See Examples
                    </a>
                </div>
            </div>
            
            <div class="mt-12 p-6 bg-white-black rounded-xl shadow-lg border-2 border-stone-200-800 max-w-3xl mx-auto">
                <div class="font-mono text-sm md:text-base overflow-x-auto">
                    <div class="flex items-center space-x-2 mb-4">
                        <div class="h-3 w-3 rounded-full bg-red-400-600"></div>
                        <div class="h-3 w-3 rounded-full bg-yellow-400-600"></div>
                        <div class="h-3 w-3 rounded-full bg-green-400-600"></div>
                        <span class="ml-2 text-stone-500-400">tailwind.config.js</span>
                    </div>
                    <pre class="text-stone-800-200"><code>{tailwindConfigCode}</code></pre>
                </div>
            </div>
            
            <div class="mt-8 flex justify-center space-x-4">
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-stone-100-800 text-stone-700-200">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
                    </svg>
                    Zero config required
                </div>
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-stone-100-800 text-stone-700-200">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    All color utilities supported
                </div>
            </div>
        </div>
    </section>
    
    <!-- What It Does -->
    <section id="features" class="py-16 px-4 md:px-8 bg-white-black">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold mb-12 text-center">Simplify Your Dark Mode Workflow</h2>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div class="p-6 bg-stone-100-800 rounded-lg border border-stone-200-700">
                    <h3 class="text-xl font-semibold mb-4">Traditional Approach</h3>
                    <div class="font-mono text-sm p-4 bg-stone-200-700 rounded text-stone-800-200 overflow-x-auto">
                        <pre><code>&lt;div class="bg-blue-200
    dark:bg-blue-800 
    text-blue-800
    dark:text-blue-200 
    border-gray-300
    dark:border-gray-700"&gt;
    Content
&lt;/div&gt;</code></pre>
                    </div>
                </div>
                
                <div class="p-6 bg-stone-100-800 rounded-lg border border-stone-200-700">
                    <h3 class="text-xl font-semibold mb-4">With Light-Dark Plugin</h3>
                    <div class="font-mono text-sm p-4 bg-stone-200-700 rounded text-stone-800-200 overflow-x-auto">
                        <pre><code>&lt;div class="bg-blue-200-800 
    text-blue-800-200 
    border-gray-300-700"&gt;
    Content
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Examples -->
    <section id="examples" class="py-16 px-4 md:px-8">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold mb-2 text-center">Examples</h2>
            <p class="text-center text-stone-700-300 mb-12">Toggle dark mode to see the magic happen</p>
            
            <!-- Background Colors -->
            <div class="mb-16">
                <h3 class="text-2xl font-semibold mb-6 border-b border-stone-200-700 pb-2">Background Colors</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="p-4 rounded-lg bg-red-100-900 text-center font-medium">
                        bg-red-100-900
                    </div>
                    <div class="p-4 rounded-lg bg-blue-200-800 text-center font-medium">
                        bg-blue-200-800
                    </div>
                    <div class="p-4 rounded-lg bg-green-300-700 text-center font-medium">
                        bg-green-300-700
                    </div>
                    <div class="p-4 rounded-lg bg-purple-400-600 text-center font-medium">
                        bg-purple-400-600
                    </div>
                </div>
            </div>
            
            <!-- Text Colors -->
            <div class="mb-16">
                <h3 class="text-2xl font-semibold mb-6 border-b border-stone-200-700 pb-2">Text Colors</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="p-4 rounded-lg bg-stone-100-800 text-red-700-300 text-center font-medium">
                        text-red-700-300
                    </div>
                    <div class="p-4 rounded-lg bg-stone-100-800 text-blue-600-300 text-center font-medium">
                        text-blue-600-300
                    </div>
                    <div class="p-4 rounded-lg bg-stone-100-800 text-green-800-200 text-center font-medium">
                        text-green-800-200
                    </div>
                    <div class="p-4 rounded-lg bg-stone-100-800 text-purple-900-100 text-center font-medium">
                        text-purple-900-100
                    </div>
                </div>
            </div>
            
            <!-- Border Colors -->
            <div class="mb-16">
                <h3 class="text-2xl font-semibold mb-6 border-b border-stone-200-700 pb-2">Border Colors</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="p-4 rounded-lg bg-stone-100-800 border-2 border-red-500-300 text-center font-medium">
                        border-red-500-300
                    </div>
                    <div class="p-4 rounded-lg bg-stone-100-800 border-2 border-blue-600-200 text-center font-medium">
                        border-blue-600-200
                    </div>
                    <div class="p-4 rounded-lg bg-stone-100-800 border-2 border-green-700-100 text-center font-medium">
                        border-green-700-100
                    </div>
                    <div class="p-4 rounded-lg bg-stone-100-800 border-2 border-yellow-400-600 text-center font-medium">
                        border-yellow-400-600
                    </div>
                </div>
            </div>

            <!-- Gradient Colors -->
            <!--
            <div class="mb-16">
                <h3 class="text-2xl font-semibold mb-6 border-b border-stone-200-700 pb-2">Gradient Colors</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="p-4 rounded-lg bg-gradient-to-l from-blue-500-700 to-purple-500-700 text-center font-medium">
                        bg-gradient-to-l from-blue-500-700 to-purple-500-700
                    </div>
                    <div class="p-4 rounded-lg bg-gradient-to-r from-yellow-200-400 to-green-500-700 text-center font-medium">
                        bg-gradient-to-r from-yellow-200-400 to-green-500-700
                    </div>
                    <div class="p-4 rounded-lg text-white-black bg-gradient-to-bl from-black-white to-white-black text-center font-medium">
                        bg-gradient-to-bl from-black-white to-white-black
                    </div>
                </div>
            </div>
            -->

            <!-- Ring and Shadow -->
            <div class="mb-16">
                <h3 class="text-2xl font-semibold mb-6 border-b border-stone-200-700 pb-2">Ring & Shadow Colors</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="p-8 rounded-lg bg-stone-100-800 flex justify-center">
                        <button class="px-6 py-3 rounded-md bg-white-black text-stone-900-100 ring-2 ring-blue-500-300 focus:ring-4">
                            ring-blue-500-300
                        </button>
                    </div>
                    <div class="p-8 rounded-lg bg-stone-100-800 flex justify-center">
                        <div class="px-6 py-3 rounded-md bg-white-black text-stone-900-100 shadow-lg shadow-purple-600-400">
                            shadow-purple-600-400
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- SVG Fill and Stroke -->
            <div class="mb-16">
                <h3 class="text-2xl font-semibold mb-6 border-b border-stone-200-700 pb-2">SVG Fill & Stroke</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="p-8 rounded-lg bg-stone-100-800 flex justify-center">
                        <svg class="w-24 h-24 fill-amber-500-300" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    </div>
                    <div class="p-8 rounded-lg bg-stone-100-800 flex justify-center">
                        <svg class="w-24 h-24 stroke-teal-600-200 fill-none stroke-2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v4l3 3" />
                        </svg>
                    </div>
                </div>
            </div>
            
            <!-- Form Elements -->
            <div class="mb-16">
                <h3 class="text-2xl font-semibold mb-6 border-b border-stone-200-700 pb-2">Form Elements</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-stone-100-800 rounded-lg">
                    <div>
                        <label for="text-input" class="block mb-2 font-medium">Text Input</label>
                        <input 
                            id="text-input"
                            type="text" 
                            class="w-full px-4 py-2 rounded-md border border-stone-300-600 bg-stone-100-800 text-stone-800-200 caret-blue-600-300 focus:ring-2 focus:ring-blue-500-300 focus:border-blue-500-300 cursor-text"
                            placeholder="Focus me..."
                        />
                    </div>
                    <div>
                        <label for="checkbox" class="block mb-2 font-medium">Checkbox</label>
                        <div class="flex items-center">
                            <input 
                                id="checkbox"
                                type="checkbox" 
                                class="h-5 w-5 rounded accent-green-600-300 mr-2 cursor-pointer"
                            />
                            <span>Accent color changes</span>
                        </div>
                    </div>
                    <div>
                        <label for="select" class="block mb-2 font-medium">Select Input</label>
                        <select 
                            id="select"
                            class="w-full px-4 py-2 rounded-md border border-stone-300-600 bg-stone-100-800 text-stone-800-200 cursor-pointer"
                        >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <!-- Complete UI Example -->
            <div class="mb-16">
                <h3 class="text-2xl font-semibold mb-6 border-b border-stone-200-700 pb-2">UI Component Example</h3>
                <div class="p-6 bg-stone-100-800 rounded-lg">
                    <div class="max-w-md mx-auto bg-stone-100-900 rounded-xl shadow-md overflow-hidden">
                        <div class="p-4 bg-blue-500-700">
                            <h4 class="text-lg font-bold text-white">Notification</h4>
                        </div>
                        <div class="p-4 border-t border-stone-200-700">
                            <p class="text-stone-800-200 mb-4">Your profile has been updated successfully. All changes have been saved.</p>
                            <div class="flex justify-end space-x-3">
                                <button class="px-4 py-2 text-stone-700-300 bg-stone-200-800 hover:bg-stone-300-700 rounded cursor-pointer">
                                    Dismiss
                                </button>
                                <button class="px-4 py-2 bg-blue-500-700 hover:bg-blue-600 text-white rounded cursor-pointer">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Custom Colors -->
            <div>
                <h3 class="text-2xl font-semibold mb-6 border-b border-stone-200-700 pb-2">Custom Colors</h3>
                <p class="mb-6 text-stone-700-300">The plugin works seamlessly with your custom color palette. Define colors in your theme and use the same shorthand syntax.</p>
                
                <div class="mb-8">
                    <h4 class="text-lg font-medium mb-4">Define custom colors in your theme:</h4>
                    <div class="font-mono text-sm p-4 bg-stone-200-700 rounded text-stone-800-200 overflow-x-auto">
                        <pre><code>{customColors}</code></pre>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h4 class="text-lg font-medium mb-4">Custom color examples:</h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="p-4 rounded-lg bg-avocado-100-900 text-black-white text-center font-medium">
                            bg-avocado-100-900
                        </div>
                        <div class="p-4 rounded-lg bg-avocado-200-800 text-black-white text-center font-medium">
                            bg-avocado-200-800
                        </div>
                        <div class="p-4 rounded-lg bg-avocado-300-700 text-black-white text-center font-medium">
                            bg-avocado-300-700
                        </div>
                        <div class="p-4 rounded-lg bg-avocado-400-600 text-black-white text-center font-medium">
                            bg-avocado-400-600
                        </div>
                    </div>
                </div>
                
                <div class="p-6 bg-stone-100-800 rounded-lg">
                    <h4 class="text-lg font-medium mb-4">Custom UI component with avocado theme:</h4>
                    <div class="max-w-md mx-auto rounded-xl overflow-hidden border border-avocado-300-700">
                        <div class="p-4 bg-avocado-400-600 text-black-white">
                            <h5 class="text-lg font-bold">Avocado Notification</h5>
                        </div>
                        <div class="p-4 bg-avocado-100-900">
                            <p class="text-avocado-900-100 mb-4">Avocados are fruits, not vegetables.</p>
                            <div class="flex justify-end space-x-3">
                                <button class="px-4 py-2 bg-stone-200-800 text-stone-800-200 rounded-md hover:bg-stone-300-700 cursor-pointer">
                                    Close
                                </button>
                                <button class="px-4 py-2 bg-avocado-500-700 text-black-white rounded-md border border-avocado-600-400 hover:bg-avocado-400-800 cursor-pointer">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 class="text-lg font-medium mb-4">Color spectrum:</h4>
                        <div class="space-y-1">
                            <div class="bg-avocado-50-950 text-center text-black-white py-2">
                                bg-avocado-50-950
                            </div>
                            <div class="bg-avocado-100-900 text-center text-black-white py-2">
                                bg-avocado-100-900
                            </div>
                            <div class="bg-avocado-200-800 text-center text-black-white py-2">
                                bg-avocado-200-800
                            </div>
                            <div class="bg-avocado-300-700 text-center text-black-white py-2">
                                bg-avocado-300-700
                            </div>
                            <div class="bg-avocado-400-600 text-center text-black-white py-2">
                                bg-avocado-400-600
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="h-11"></div>
                        <div class="space-y-1">
                            <div class="bg-avocado-950-50 text-center text-white-black py-2">
                                bg-avocado-950-50
                            </div>
                            <div class="bg-avocado-900-100 text-center text-white-black py-2">
                                bg-avocado-900-100
                            </div>
                            <div class="bg-avocado-800-200 text-center text-white-black py-2">
                                bg-avocado-800-200
                            </div>
                            <div class="bg-avocado-700-300 text-center text-white-black py-2">
                                bg-avocado-700-300
                            </div>
                            <div class="bg-avocado-600-400 text-center text-white-black py-2">
                                bg-avocado-600-400
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Installation -->
    <section id="install" class="py-16 px-4 md:px-8 bg-white-black">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold mb-8 text-center">Installation & Setup</h2>
            
            <div class="grid md:grid-cols-3 gap-8 mb-12">
                <div class="p-6 bg-stone-100-800 rounded-lg border border-stone-200-700">
                    <div class="flex items-center mb-4">
                        <div class="h-10 w-10 rounded-full bg-blue-100-900 flex items-center justify-center text-blue-900-100 font-bold mr-3">1</div>
                        <h3 class="text-xl font-semibold">Install the package</h3>
                    </div>
                    <div class="font-mono text-sm p-4 bg-stone-200-700 rounded text-stone-800-200">
                        <pre><code>npm install tailwind-light-dark
# or
yarn add tailwind-light-dark</code></pre>
                    </div>
                </div>
                
                <div class="p-6 bg-stone-100-800 rounded-lg border border-stone-200-700">
                    <div class="flex items-center mb-4">
                        <div class="h-10 w-10 rounded-full bg-blue-100-900 flex items-center justify-center text-blue-900-100 font-bold mr-3">2</div>
                        <h3 class="text-xl font-semibold">Add to Tailwind config</h3>
                    </div>
                    <div class="font-mono text-sm p-4 bg-stone-200-700 rounded text-stone-800-200">
                        <pre><code>{addTailwindConfigCode}</code></pre>
                    </div>
                </div>
                
                <div class="p-6 bg-stone-100-800 rounded-lg border border-stone-200-700">
                    <div class="flex items-center mb-4">
                        <div class="h-10 w-10 rounded-full bg-blue-100-900 flex items-center justify-center text-blue-900-100 font-bold mr-3">3</div>
                        <h3 class="text-xl font-semibold mr-3">Add dark mode toggle</h3>
                    </div>
                    <div class="font-mono text-sm p-4 bg-stone-200-700 rounded text-stone-800-200 relative">
                        <div class="absolute right-3 top-3">
                            <CopyButton text={toggleDarkMode} />
                        </div>
                        <pre>
                            <code class="overflow-x-scroll">{toggleDarkMode}</code>
                        </pre>
                    </div>
                </div>
            </div>
            
            <div class="p-6 bg-stone-100-800 rounded-lg">
                <h3 class="text-xl font-semibold mb-4">Usage Examples</h3>
                <div class="font-mono text-sm p-4 bg-stone-200-700 rounded text-stone-800-200 overflow-x-auto">
                    <pre><code>&lt;!-- Background colors -->
&lt;div class="bg-gray-100-900">&lt;/div>

&lt;!-- Text colors -->
&lt;p class="text-blue-700-300">&lt;/p>

&lt;!-- Border colors -->
&lt;div class="border border-red-300-700">&lt;/div>

&lt;!-- Combine with other utilities -->
&lt;button class="
  px-4 py-2 
  bg-blue-500-700 
  text-white 
  rounded 
  hover:bg-blue-600-800 
  focus:ring-2 
  focus:ring-blue-400-500"
>
  Click me
&lt;/button></code></pre>
                </div>
            </div>
        </div>
    </section>
    
    <!-- CTA -->
    <section class="py-16 px-4 md:px-8">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4">Ready to simplify your dark mode workflow?</h2>
            <p class="text-xl mb-8 text-stone-700-300">Get started with tailwind-light-dark today and write less code for beautiful dark mode experiences.</p>
            
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://github.com/username/tailwind-light-dark" class="px-6 py-3 rounded-lg font-medium bg-stone-800-200 text-stone-100-800 hover:bg-stone-900-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                </a>
                <a href="#install" class="px-6 py-3 rounded-lg font-medium bg-blue-500-700 text-white hover:bg-blue-600-800 flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                    </svg>
                    Install Now
                </a>
                <a href="#examples" class="px-6 py-3 rounded-lg font-medium bg-stone-100-800 text-stone-900-100 border border-stone-300-600 hover:bg-stone-200-700 flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                    </svg>
                    Explore Examples
                </a>
            </div>
        </div>
    </section>
</main>

<footer class="bg-stone-800-100 text-stone-100-900 py-12 px-4 md:px-8">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
            <h3 class="text-xl font-bold mb-4">tailwind-light-dark</h3>
            <p class="mb-4 text-stone-300-700">A Tailwind CSS plugin that simplifies dark mode workflow with intuitive shorthand syntax.</p>
            <div class="flex space-x-4">
                <a href="#" class="text-stone-300-600 hover:text-stone-100-900">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
                <a href="#" class="text-stone-300-600 hover:text-stone-100-900">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.028 10.028 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.094 4.067 6.13 1.64 3.1a4.936 4.936 0 001.524 6.574 4.903 4.903 0 01-2.229-.618v.06a4.926 4.926 0 003.95 4.827 4.931 4.931 0 01-2.224.085 4.933 4.933 0 004.6 3.42 9.877 9.877 0 01-6.111 2.107c-.39 0-.78-.022-1.17-.066a13.995 13.995 0 007.557 2.21c9.054 0 14-7.496 14-14 0-.21 0-.42-.015-.63A10.016 10.016 0 0024 4.59z"/>
                    </svg>
                </a>
                <a href="#" class="text-stone-300-600 hover:text-stone-100-900">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.993 14.7H7.593v-5.8h2.414v5.8zm-1.207-6.586c-.775 0-1.405-.63-1.405-1.405s.63-1.404 1.405-1.404 1.405.63 1.405 1.404-.63 1.405-1.405 1.405zm8.793 6.586h-2.412v-3.9c0-2.417-2.415-2.226-2.415 0v3.9h-2.413v-5.8h2.413v1.387c1.054-1.954 4.827-2.097 4.827 1.871v2.542z"/>
                    </svg>
                </a>
            </div>
        </div>
        
        <div class="grid grid-cols-2 gap-8">
            <div>
                <h4 class="font-semibold mb-3">Resources</h4>
                <ul class="space-y-2">
                    <li><a href="#" class="text-stone-300-700 hover:text-stone-100-900">Documentation</a></li>
                    <li><a href="#" class="text-stone-300-700 hover:text-stone-100-900">GitHub</a></li>
                    <li><a href="#" class="text-stone-300-700 hover:text-stone-100-900">npm Package</a></li>
                    <li><a href="#" class="text-stone-300-700 hover:text-stone-100-900">Examples</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold mb-3">Support</h4>
                <ul class="space-y-2">
                    <li><a href="#" class="text-stone-300-700 hover:text-stone-100-900">FAQ</a></li>
                    <li><a href="#" class="text-stone-300-700 hover:text-stone-100-900">Issues</a></li>
                    <li><a href="#" class="text-stone-300-700 hover:text-stone-100-900">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="max-w-6xl mx-auto mt-8 pt-8 border-t border-stone-700-300">
        <p class="text-center text-stone-400-600">&copy; 2023 tailwind-light-dark. All rights reserved.</p>
    </div>
</footer>
