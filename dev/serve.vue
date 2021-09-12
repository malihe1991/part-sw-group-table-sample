<script>
import Vue from "vue";

export default Vue.extend({
  name: "ServeDev",
  data() {
    return {
      isAsc: false,
      newItems: [
        { weight: 60, age: 20, gender: 'female', name: 'ملیحه',},
        { weight: 40, age: 29, gender: 'male', name: 'میلاد'},
        { weight: 36, age: 14, gender: 'female', name: 'صدف'}
      ]
    };
  },
  methods: {
        sort(type, fieldName) {
            switch (`${type}`) {
                case 'number':
                    this.sortNumber(fieldName);
                    break;
                case 'string':
                    this.sortString(fieldName);
                    break;
                default:
                    this.sortNumber(fieldName);
            }
        },

        sortNumber(fieldName) {
            const isAsc = this.isAsc;

            this.newItems.sort((a, b) => {

                const firstUser = isAsc ? a[fieldName] : b[fieldName];
                const secondUser = isAsc ? b[fieldName] : a[fieldName]

                this.isAsc = !isAsc;

                return firstUser - secondUser;
            })
        },

        sortString(fieldName) {
            const englishRegex = new RegExp(/^[A-Za-z]+$/);
            const persianRegex = new RegExp(/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ ]+$/);

            if (this.newItems[0][fieldName].match(persianRegex)) {
                this.sortPersianAlpha(fieldName);
            }

            else if (this.newItems[0][fieldName].match(englishRegex)) {
                this.sortEnglishAlpha(fieldName);
            }
        },

        sortEnglishAlpha(fieldName) {
            const isAsc = this.isAsc;

            this.newItems.sort((a, b) => {

                const firstUser = isAsc ? a[fieldName].toLowerCase() : b[fieldName].toLowerCase();
                const secondUser = isAsc ? b[fieldName].toLowerCase() : a[fieldName].toLowerCase();

                if (firstUser < secondUser) {
                    this.isAsc = !isAsc;
                    return -1;
                }

                if (firstUser > secondUser) {
                    this.isAsc = !isAsc;
                    return 1;
                }

                this.isAsc = !isAsc;
                return 0;
            })
        },

        sortPersianAlpha(fieldName) {
            const isAsc = this.isAsc;

            this.newItems.sort((a, b) => {

                const firstUser = isAsc ? a[fieldName] : b[fieldName];
                const secondUser = isAsc ? b[fieldName] : a[fieldName];

                this.isAsc = !isAsc;

                return firstUser.localeCompare(secondUser);
            })
        },
    }
});
</script>

<template>
  <div id="app">
    <part-sw-group-table-sample
      title="جدول من"
      :fields="[
        {key: 'weight', type: 'number', value: 'وزن'},
        {key: 'age', type: 'number',  value: 'سن'},
        {key: 'gender', type: 'string',  value: 'جنسیت'},
        {key: 'name', type: 'string',  value: 'نام'}
      ]"
      :items="newItems"
      :isSort="true"
      :sortIcon="false"
      :handleSort="sort"
      :rowIndex="true"
      :bordered="true"
      :hover="true"
      :borderSpacing="false"
      borderCollapse="no-collapse"
      backgroundChild="odd"
      textAlign="center"
    >
      <span slot="icon">>></span>
    </part-sw-group-table-sample>
  </div>
</template>

// :fields="['وزن', 'سن', 'جنسیت','نام']"

/* 
  :fields="[
    {key: 'weight', type: 'number', value: 'وزن'},
    {key: 'age', type: 'number',  value: 'سن'},
    {key: 'gender', type: 'string',  value: 'جنسیت'},
    {key: 'name', type: 'string',  value: 'نام'}
  ]"
*/
