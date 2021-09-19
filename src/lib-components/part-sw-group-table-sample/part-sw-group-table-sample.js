export default {
    name: 'PartSwGroupTableSample',
    data() {
        return {
            newItems: this.items,
            newFields: this.fields,
            filterValue: this.filterBy?.length ? this.filterBy[0] : '',
            filterInputValue: '',
        };
    },
    props: {
        title: String,
        items: Array,
        fields: Array,
        isSort: Boolean,
        sortIcon: Boolean,
        filterBy: {
            type: [Array, String],
            default: ''
        },
        bordered: Boolean,
        borderSpacing: Boolean,
        hover: Boolean,
        borderCollapse: String,
        backgroundChild: String,
        textAlign: String,
        direction: {
            type: String,
            default: 'ltr'
        },
        filterPlaceholder: {
            type: String,
            default: 'search...'
        },
        filterLabel: {
            type: String,
            default: 'Filter By:'
        }
    },
    methods: {
        updateData() {
            this.newItems = this.items;
            this.newFields = this.fields;
            this.filterValue = this.filterBy?.length ? this.filterBy[0] : '';
            this.filterInputValue = '';
        },
        handleFilter() {
            this.$emit('handleFilter', {
                filterFieled : this.filterValue,
                inputValue: this.filterInputValue
            })
        },
        handleSort(type, key) {
            this.$emit('handleSort', {
                type,
                key
            })
        }
    },
    mounted() {
        this.updateData()
    },
    updated() {
        this.newItems = this.items
    },
};