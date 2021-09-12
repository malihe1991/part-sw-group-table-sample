# Part-sw-group-table-sample

It is a dynamic table with sorting capability

## Installation

```bash
npm install --save part-sw-group-table-sample

```

## Usage

```javascript
data() {
    return {
      newItems: [
        { weight: 60, age: 20, gender: 'female', name: 'ملیحه',},
        { weight: 40, age: 29, gender: 'male', name: 'میلاد'},
        { weight: 36, age: 14, gender: 'female', name: 'صدف'}
      ]
    };
  }

```

```javascript
<part-sw-group-table-sample
    title="اطلاعات کاربران"
    :fields="['وزن', 'سن', 'جنسیت','نام']"
    :items="newItems"
 />

```

### Default Icon For Sort

```javascript
<part-sw-group-table-sample
    title="اطلاعات کاربران"
    :fields="[
        {key: 'weight', type: 'number', value: 'وزن'},
        {key: 'age', type: 'number',  value: 'سن'},
        {key: 'gender', type: 'string',  value: 'جنسیت'},
        {key: 'name', type: 'string',  value: 'نام'}
      ]"
    :items="newItems"
    :isSort="true"
    :sortIcon="true"
    :handleSort="sort"
    // is a function with two parameter: 1-type [is number or string] 2-fieldName
/>

```

### Different Icon For Sort

```javascript
<part-sw-group-table-sample
    title="اطلاعات کاربران"
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
    >
        <span slot="icon">
            <font-awesome-icon icon="sort" />
        </span>
</part-sw-group-table-sample>

```

### Customize Classes

```javascript
<part-sw-group-table-sample
    title="اطلاعات کاربران"
    :fields="['وزن', 'سن', 'جنسیت','نام']"
    :rowIndex="true" // add index column
    :bordered="true"
    :hover="true"
    :borderSpacing="false"
    borderCollapse="no-collapse" // or collapse or separate
    backgroundChild="odd" // or even
    textAlign="center" // right or left
/>

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)