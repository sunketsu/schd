<script>
    //https://stackoverflow.com/questions/59629947/how-do-i-load-an-external-js-library-in-svelte-sapper
    import { scheddata, selected_GSName } from "./store";
    import Fa from "svelte-fa";
    import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

    let script;
    let url = "/tableToExcel.js";

    const saveFile = () => {
        // @ts-ignore
        TableToExcel.convert(document.querySelector("#schtable"), {
            name: $selected_GSName + ".xlsx",
            sheet: { name: "Расписание " },
        });
    };
</script>

<svelte:head>
    <script bind:this={script} src={url}></script>
</svelte:head>

<!-- ////disabled={Object.keys($scheddata).length > 0 ? false : true} -->
<button
    on:click={saveFile}
    disabled={$selected_GSName ? false : true}
    class="button is-info  is-normal to-center"
>
    <span class="icon">
        <Fa icon={faFileExcel} color="white" size="1x" />
    </span>
    <span>Сохранить в формате Excel</span>
</button>

<style>
    .to-center {
        display: block;
        margin: 30px auto;
    }
</style>
