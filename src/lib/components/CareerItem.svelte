<script lang="ts">
    import type { Snippet } from "svelte";

    import { Temporal } from "temporal-polyfill";
    import { DurationFormat } from "@formatjs/intl-durationformat";

    type Props = {
        company_name: string;
        position: string;
        location: string;
        career_type: string;
        start_date: Date;
        end_date: Date;
        description: Snippet;
        body?: Snippet;
    };

    const {
        career_type,
        company_name,
        end_date,
        location,
        position,
        start_date,
        description,
        body: _body,
    }: Props = $props();

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
    });
    const durationFormatter = new DurationFormat("en-US", {
        style: "short",
        yearsDisplay: "auto",
        monthsDisplay: "auto",
    });

    let duration = $derived.by(() => {
        const start = Temporal.PlainDate.from({
            year: start_date.getFullYear(),
            month: start_date.getMonth() + 1,
            day: start_date.getDate(),
        });
        const end = Temporal.PlainDate.from({
            year: end_date.getFullYear(),
            month: end_date.getMonth() + 1,
            day: end_date.getDate(),
        });
        switch (Temporal.PlainDate.compare(start, end)) {
            case 1:
                throw new Error("Start date cannot be greater than End date");
            case 0:
                return "Just Started";
            case -1:
                return durationFormatter.format(
                    end.since(start, {
                        largestUnit: "years",
                        smallestUnit: "months",
                        roundingMode: "trunc",
                    })
                );
        }
    });

    let timeSpan = $derived.by(() => {
        const start = Temporal.PlainDate.from({
            year: start_date.getFullYear(),
            month: start_date.getMonth() + 1,
            day: start_date.getDate(),
        });
        const end = Temporal.PlainDate.from({
            year: end_date.getFullYear(),
            month: end_date.getMonth() + 1,
            day: end_date.getDate(),
        });
        const now = Temporal.Now.plainDateISO();

        if (Temporal.PlainDate.compare(start, end) == 0) {
            return `${dateFormatter.formatToParts(start_date)[0].value}`;
        }

        if (Temporal.PlainDate.compare(end, now) == 0) {
            return `${dateFormatter.format(start_date)} - Present`;
        }

        return `${dateFormatter.format(start_date)} - ${dateFormatter.format(end_date)}`;
    });
</script>

{#snippet Divider()}
    <hr class="border-surface-raised border-b-0.5" />
{/snippet}

<li>
    <div class="space-y-2">
        <div class="flex justify-between items-start">
            <h2 class={["block", "italic text-2xl font-serif"]}>
                <span class="font-medium underline underline-offset-1">
                    {company_name}
                </span>
                ,
                <span class="text-text-secondary">
                    {location}
                </span>
            </h2>

            <span class="text-text-muted text-xs text-end">
                {timeSpan}
            </span>
        </div>
        {@render Divider()}

        <div class="flex justify-between items-start">
            <h2 class={["block", "text-xs"]}>
                <div class={["flex md:flex-row flex-col"]}>
                    <span class="">
                        {position}
                    </span>
                    <span class="hidden md:inline">, &nbsp;</span>
                    <span class="text-text-muted"> {career_type}</span>
                </div>
            </h2>

            <span class="text-text-muted text-xs text-nowrap">{duration}</span>
        </div>

        <div class="py-2">
            {@render description()}
        </div>

        {#if _body}
            {@render _body()}
        {/if}
    </div>
</li>
