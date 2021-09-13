export default {
    name: 'PartSwGroupTableSample',
    data() {
        return {
            newItems: this.items,
            newFields: this.fields,
            filterValue: this.filterBy.length ? this.filterBy[0] : '',
            filterInputValue: '',
        };
    },
    props: {
        title: String,
        items: Array,
        fields: Array,
        isSort: Boolean,
        sortIcon: Boolean,
        handleSort: Function,
        filterBy: Array,
        handleFilter: Function,
        bordered: Boolean,
        borderSpacing: Boolean,
        hover: Boolean,
        borderCollapse: String,
        backgroundChild: String,
        textAlign: String
    },
    updated() {
        this.newItems = this.items
    },
};