<script>
    import { scheddata, sched_data_loaded } from "./store";
    import Noschedule from "./noschedule.svelte";
    import { isToday, toEnDate } from "./utils";
    import { fade } from "svelte/transition";

    const PairCount = (daysArr) => {
        //считает кол-во пар в мес.
        let pcount = 0;
        daysArr.forEach((day) => {
            pcount += day["mainSchedule"].length;
        });
        return pcount;
    };
    let shows = [true, true];
    // if ($scheddata) {
    //     shows = Array($scheddata.Month.length).fill(true);
    // }
</script>

<div>
    {#if Object.keys($scheddata).length}
        <div style="margin-top:7px;">
            {#each $scheddata.Month as month, i}
                <div
                    id={i + "-month"}
                    on:click={() => (shows[i] = !shows[i])}
                    class="month"
                >
                    <span> {month.Name}</span>
                    <span>
                        Пар: {PairCount(month.Sched)}; дней: {month.Sched
                            .length}
                    </span>
                </div>

                {#if shows[i]}
                    <div in:fade={{ duration: 1000 }} out:fade>
                        {#each month.Sched as day, i}
                            <div
                                id={toEnDate(day.datePair)}
                                class="day {day.dayWeek == 'Суббота'
                                    ? 'sbt'
                                    : ''}  {isToday(day.datePair)
                                    ? 'today'
                                    : ''}"
                            >
                                <span>
                                    {day.datePair}
                                    <span style="margin-left:10px;">
                                        {day.dayWeek}</span
                                    >
                                </span>

                                {#if isToday(day.datePair) == true}
                                    <span class="today-lbl">Сегодня</span>
                                {/if}
                            </div>

                            {#each day.mainSchedule as pair, i}
                                <div class="pair-wrapper">
                                    <div class="time-start">
                                        {pair.TimeStart}
                                    </div>
                                    <div class="subj-name">
                                        <span> {pair.SubjName} </span>
                                    </div>
                                    <div class="kind">
                                        <span>
                                            {pair.LoadKindSN}
                                        </span>
                                    </div>
                                    <div class="kv-group">
                                        <span>
                                            {pair.FIO}
                                        </span>
                                    </div>
                                    <div class="aud">
                                        {pair.Aud}
                                    </div>
                                </div>
                            {/each}
                        {/each}
                    </div>
                {/if}
            {/each}
        </div>
    {:else if $sched_data_loaded}
        <Noschedule />
    {/if}
</div>

<style>
    .month:nth-child(odd) {
        margin-top: 3px;
    }
    .sbt {
        color: rgb(234, 249, 252) !important;
    }
    .today {
        font-size: 1.15em;
        background-color: #33e5e8 !important;
    }

    .today-lbl {
        padding-right: 5px;
        color: #202646;
        letter-spacing: 1px;
    }

    .day {
        display: flex;
        justify-content: space-between;
        background-color: #7bdc7f;
        border-bottom: 3px solid rgb(164 115 115);
        color: rgb(80, 55, 55);
        padding: 1px 0 1px 5px;
        letter-spacing: 0.9px;
    }

    .pair-wrapper {
        display: grid;
        grid-template-columns: 65px 1fr 100px 160px 65px;
        gap: 0.8px 0.8px;
        margin-bottom: 1px;
    }

    @media (min-width: 501px) {
        .subj-name {
            min-width: 160px;
        }

        .pair-wrapper div {
            padding: 5px;
            background-color: #f1fff7;
        }
        .pair-wrapper *:not(.subj-name) {
            text-align: left;
        }
        .time-start {
            background-color: #7bdc7f !important;
            color: rgb(53, 11, 11);
        }
    }

    @media (max-width: 500px) {
        .pair-wrapper {
            grid-template-columns: 65px 1fr 65px;
            grid-template-rows: auto;
            gap: 0px 0px;
        }
        .time-start {
            grid-column: 1 / 2;
            grid-row: 1 / 4;

            display: inline-flex;
            justify-content: center;
            align-items: center;

            background-color: rgb(221, 137, 137);
            color: white;
        }
        .subj-name {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
            padding: 5px 5px;
            letter-spacing: 0.2px;
            background-color: #368483;
            color: rgb(231, 228, 228);
        }
        .aud {
            grid-column: 3 / 4;
            grid-row: 1 / 3;

            display: inline-flex;
            justify-content: center;
            align-items: center;

            background-color: rgb(221, 137, 137);
            color: white;
        }
        .kind {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            font-size: 70%;
            font-weight: 600;
            background-color: #dddfff;
            color: #7e7575;
            padding:4px;
        }
        .kv-group {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            margin-left: 80px;
            text-align: right;
            padding-right: 8px;
            font-size: 70%;
            font-weight: 600;
            color: #7e7575;
            padding-top: 5px;
        }
    }
</style>
