export default {
    name: 'PartSwGroupTableSample',
    data() {
        return {
            newItems: this.items,
            newFields: this.fields,
            isAsc: true
        };
    },
    props: {
        title: String,
        items: Array,
        fields: Array,
        rowIndex: Boolean,
        isSort: Boolean,
        sortIcon: Boolean,
        handleSort: Function,
        bordered: Boolean,
        borderSpacing: Boolean,
        hover: Boolean,
        borderCollapse: String,
        backgroundChild: String,
        textAlign: String
    },
    computed: {
        addRowIndex() {
            if (this.rowIndex && !this.newItems[0].row) {
                let counter = 0;
                this.newItems.forEach(item => {
                    counter++;
                    item.row = counter;
                });

                if (this.isSort) {
                    this.fields.push({ key: 'row', type: 'number', value: 'ردیف' });
                } else {
                    this.fields.push('ردیف');
                }

            }
        }
    },
};