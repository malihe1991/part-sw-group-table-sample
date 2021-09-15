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
        textAlign: String,
        direction: {
            type: String,
            default: 'ltr'
        },
        filterPlaceholder: {
            type: String,
            default: 'search...'
        }
    },
    methods: {
        updateData() {
            this.newItems = this.items;
            this.newFields = this.fields;
            this.filterValue = this.filterBy.length ? this.filterBy[0] : '';
            this.filterInputValue = '';
        }
    },
    mounted(){
        this.updateData()
    },
    updated() {
        this.newItems = this.items
    },
};