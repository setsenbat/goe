<template>
    <div class="flag">
        <b-dropdown variant="link" class="" toggle-class="text-decoration-none" no-caret>
            <template #button-content>
                <h3>
                    <span :class="'flag-icon' + ' ' + getLanguage.flag + ' ' + 'flag-icon-squared'"></span>
                </h3>
            </template>
            <b-dropdown-item @click="changeLanguage({ text: 'mn', flag: 'flag-icon-mn' })">
                MN
                <span class="flag-icon flag-icon-mn flag-icon-squared"></span>
            </b-dropdown-item>
            <b-dropdown-item @click="changeLanguage({ text: 'en', flag: 'flag-icon-gb' })">EN <span
                    class="flag-icon flag-icon-gb flag-icon-squared"></span></b-dropdown-item>
            <b-dropdown-item @click="changeLanguage({ text: 'cn', flag: 'flag-icon-cn' })">CN <span
                    class="flag-icon flag-icon-cn flag-icon-squared"></span></b-dropdown-item>
            <b-dropdown-item @click="changeLanguage({ text: 'ru', flag: 'flag-icon-ru' })">RU <span
                    class="flag-icon flag-icon-ru flag-icon-squared"></span></b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "LanguageBar",
    data() {
        return {
            show: false
        }
    },
    computed: {
        ...mapGetters(["getLanguage"]),
    },
    methods: {
        ...mapActions(["changeLanguage"]),
    },
};
</script>

<style>
.flag {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10%;
}

.flag:hover {
    cursor: pointer;
}
</style>
