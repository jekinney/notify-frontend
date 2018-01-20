<template>
    <table class="table">
        <thead>
            <tr>
                <th colspan="4" class="has-text-right">
                    <router-link :to="{ name: 'MessageCreate' }">New Text Message</router-link>
                </th>
            </tr>
            <tr>
                <th>Name</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Completed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: 'UpcomingMessages'
    }
</script>
