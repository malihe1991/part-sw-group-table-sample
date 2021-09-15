<script>
import Vue from "vue";

export default Vue.extend({
  name: "ServeDev",
  data() {
    return {
      isAsc: false,
      orginalItems: [
        { weight: 60, age: 20, gender: "female", name: "Ruby" },
        { weight: 40, age: 29, gender: "male", name: "James" },
        { weight: 36, age: 14, gender: "female", name: "Jessica" },
      ],
      dublicateItems: [
        { weight: 60, age: 20, gender: "female", name: "Ruby" },
        { weight: 40, age: 29, gender: "male", name: "James" },
        { weight: 36, age: 14, gender: "female", name: "Jessica" },
      ],
    };
  },
  methods: {
    filter(fieled, inputValue) {
      this.list = [];
      this.dublicateItems.forEach((item) => {
        const itemValue = item[fieled].toString().toLowerCase();
        const value = inputValue.toString().toLowerCase();

        if (itemValue.includes(value)) {
          this.list.push(item);
          this.orginalItems = this.list;
        } else {
          this.orginalItems = this.list;
        }

        if (inputValue === "") {
          this.orginalItems = this.dublicateItems;
        }
      });
    },

    sort(type, fieldName) {
      switch (`${type}`) {
        case "number":
          this.sortNumber(fieldName);
          break;
        case "string":
          this.sortString(fieldName);
          break;
        default:
          this.sortNumber(fieldName);
      }
    },

    sortNumber(fieldName) {
      const isAsc = this.isAsc;

      this.orginalItems.sort((a, b) => {
        const firstUser = isAsc ? a[fieldName] : b[fieldName];
        const secondUser = isAsc ? b[fieldName] : a[fieldName];

        this.isAsc = !isAsc;

        return firstUser - secondUser;
      });
    },

    sortString(fieldName) {
      const englishRegex = new RegExp(/^[A-Za-z]+$/);
      const persianRegex = new RegExp(
        /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ ]+$/
      );

      if (this.orginalItems[0][fieldName].match(persianRegex)) {
        this.sortPersianAlpha(fieldName);
      } else if (this.orginalItems[0][fieldName].match(englishRegex)) {
        this.sortEnglishAlpha(fieldName);
      }
    },

    sortEnglishAlpha(fieldName) {
      const isAsc = this.isAsc;

      this.orginalItems.sort((a, b) => {
        const firstUser = isAsc
          ? a[fieldName].toLowerCase()
          : b[fieldName].toLowerCase();
        const secondUser = isAsc
          ? b[fieldName].toLowerCase()
          : a[fieldName].toLowerCase();

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
      });
    },

    sortPersianAlpha(fieldName) {
      const isAsc = this.isAsc;

      this.orginalItems.sort((a, b) => {
        const firstUser = isAsc ? a[fieldName] : b[fieldName];
        const secondUser = isAsc ? b[fieldName] : a[fieldName];

        this.isAsc = !isAsc;

        return firstUser.localeCompare(secondUser);
      });
    },
  },
});
</script>

<template>
  <div id="app">
    <part-sw-group-table-sample
      title="User Information"
      :fields="[
        {key: 'weight', type: 'number', value: 'Weight'},
        {key: 'age', type: 'number',  value: 'Age'},
        {key: 'gender', type: 'string',  value: 'Gender'},
        {key: 'name', type: 'string',  value: 'Name'}
      ]"
      :items="orginalItems"
      :isSort="true"
      :sortIcon="false"
      :handleSort="sort"
      :filterBy="['name', 'age']"
      :handleFilter="filter"
      :bordered="true"
      :hover="true"
      :borderSpacing="false"
      borderCollapse="no-collapse"
      backgroundChild="odd"
      textAlign="center"
      direction="ltr"
      filterPlaceholder="serach..."
    >
      <span slot="icon">^</span>
    </part-sw-group-table-sample>
  </div>
</template>

// :fields="['Weight', 'Age', 'Gender','Name']"

/* 
  :fields="[
    {key: 'weight', type: 'number', value: 'Weight'},
    {key: 'age', type: 'number',  value: 'Age'},
    {key: 'gender', type: 'string',  value: 'Gender'},
    {key: 'name', type: 'string',  value: 'Name'}
  ]"
*/
