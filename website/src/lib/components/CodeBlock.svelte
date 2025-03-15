<script lang="ts">
    import CopyButton from './CopyButton.svelte';

    let {
        code,
        language,
        version = $bindable('v3'),
        showVersion = true,
    }: {
        code: string,
        language: string,
        version: 'v3' | 'v4',
        showVersion?: boolean
    } = $props();

    const toggleVersion = (newVersion: 'v3' | 'v4') => {
        console.log("Setting version to", newVersion);
        version = newVersion;
    }
</script>

<div class="p-3 sm:p-6 bg-white-black rounded-xl shadow-lg border-2 border-stone-200-800 max-w-3xl mx-auto text-sm md:text-base">
    <div class="font-mono text-xs sm:text-sm md:text-base overflow-x-auto relative">
        <div class="hidden sm:block absolute right-0 top-14">
            <CopyButton text={code} />
        </div>
        <div class="flex items-center justify-between mb-8">
            <div class="flex items-center space-x-2">
                <div class="h-3 w-3 rounded-full bg-red-400-600"></div>
                <div class="h-3 w-3 rounded-full bg-yellow-400-600"></div>
                <div class="h-3 w-3 rounded-full bg-green-400-600"></div>
                <span class="text-stone-500-400">{language}</span>
            </div>
            {#if showVersion}
                <div class="flex items-center space-x-2">
                    <span class="text-stone-500-400">Tailwind Version:</span>
                    <button class={`cursor-pointer text-stone-500-400 hover:text-stone-600-500 ${version === 'v3' ? 'underline' : ''}`} onclick={() => toggleVersion('v3')}>
                        v3
                    </button>
                    <button class={`cursor-pointer text-stone-500-400 hover:text-stone-600-500 ${version === 'v4' ? 'underline' : ''}`} onclick={() => toggleVersion('v4')}>
                        v4
                    </button>
                </div>
            {/if}
        </div>
        <pre class="text-stone-800-200"><code>{code}</code></pre>
    </div>
</div>