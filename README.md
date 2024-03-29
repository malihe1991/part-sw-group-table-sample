# Part-sw-group-table-sample

It is a dynamic table with sorting and filtering and RTL capability for Vue.js

## Installation

```bash
npm install --save part-sw-group-table-sample

```

## Usage


```javascript
// in main.js file

import Vue from 'vue';
import PartSwGroupTable from 'part-sw-group-table-sample';

Vue.use(PartSwGroupTable);

```

```javascript
// in your component

data() {
    return {
      newItems: [
        { weight: 60, age: 20, gender: 'female', name: 'Ruby',},
        { weight: 40, age: 29, gender: 'male', name: 'James'},
        { weight: 36, age: 14, gender: 'female', name: 'Jessica'}
      ]
    };
  }

```

```javascript
<part-sw-group-table-sample
    title="User Information"
    :fields="['Weight', 'Age', 'Gender','Name']"
    :items="newItems"
 />

```

### Default Icon For Sort

```javascript
<part-sw-group-table-sample
    title="User Information"
    :fields="[
        {key: 'weight', type: 'number', value: 'Weight'},
        {key: 'age', type: 'number',  value: 'Age'},
        {key: 'gender', type: 'string',  value: 'Gender'},
        {key: 'name', type: 'string',  value: 'Name'}
      ]"
    :items="newItems"
    :isSort="true"
    :sortIcon="true"
    @handleSort="sort($event.type, $event.key)"
    // sort is your function that passed to handleSort function.
    // sort should have two string parameters: 1-type [is number or string] 2-fieldName
/>

```

### Different Icon For Sort

```javascript
<part-sw-group-table-sample
    title="User Information"
    :fields="[
        {key: 'weight', type: 'number', value: 'Weight'},
        {key: 'age', type: 'number',  value: 'Age'},
        {key: 'gender', type: 'string',  value: 'Gender'},
        {key: 'name', type: 'string',  value: 'Name'}
    ]"
    :items="newItems"
    :isSort="true"
    :sortIcon="false"
    @handleSort="sort($event.type, $event.key)"
    // sort is your function that passed to handleSort function.
    // sort should have two string parameters: 1-type [is number or string] 2-fieldName
    >
        <span slot="icon">
            <font-awesome-icon icon="sort" />
        </span>
</part-sw-group-table-sample>

```

### Filtering

```javascript
    <part-sw-group-table-sample
      title="User Information"
      :fields="['Weight', 'Age', 'Gender','Name']"
      :items="newItems"
      :filterBy="['name', 'age']"
      filterLabel='Filter By:' // this is by default
      filterPlaceholder="search..." // this is by default
      @handleFilter="filter($event.filterFieled, $event.inputValue)"
      // filter is your function that passed to handleFilter function.
      // filter should have two string parameters: 1-filterFieled 2-inputValue.
    />
```

### Customize Classes

```javascript
<part-sw-group-table-sample
    title="User Information"
    :fields="['Weight', 'Age', 'Gender','Name']"
    :bordered="true"
    :hover="true"
    :borderSpacing="false"
    borderCollapse="no-collapse" // or collapse or separate
    backgroundChild="odd" // or even
    textAlign="center" // right or left
    direction="ltr" // or rtl
/>

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Repository
[Gtihub](https://github.com/malihe1991/part-sw-group-table-sample)

## License
[MIT](https://choosealicense.com/licenses/mit/)