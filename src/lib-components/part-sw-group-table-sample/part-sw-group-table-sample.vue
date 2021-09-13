<template>
  <div class="part-sw-group-table-sample">
    <h2 class="part-sw-group-table__title">{{title}}</h2>

    <div class="part-sw-group-table__filter">
      <div class="part-sw-group-table__filter-wrapper">
        <label class="part-sw-group-table__filter-label">فیلتر براساس:</label>
        <select class="part-sw-group-table__filter-select" v-model="filterValue" :selected="filterValue">
          <option v-for="(feild, index) in filterBy" :key="index" :value="feild">{{feild}}</option>
        </select>
      </div>

      <input
        class="part-sw-group-table__filter-input"
        type="text" 
        v-model="filterInputValue" 
        @input="handleFilter(filterValue, filterInputValue);" 
        placeholder="جستجو..." 
    />
    </div>

    <table
      class="part-sw-group-table"
      :class="{
        'part-sw-group-table--collapse': borderCollapse === 'collapse',
        'part-sw-group-table--no-collapse': borderCollapse === 'no-collapse',
        'part-sw-group-table--separate': borderCollapse === 'separate',
        'part-sw-group-table--border-spacing': borderSpacing
      }"
    >
      <tr
        class="part-sw-group-table__row"
        :class="{
          'part-sw-group-table__row--bg-even-child': backgroundChild === 'even',
          'part-sw-group-table__row--bg-odd-child': backgroundChild === 'odd'
        }"
      >
        <td
          class="part-sw-group-table__cell part-sw-group-table__cell--head"
          :class="{
            'part-sw-group-table__cell--bordered': bordered,
            'part-sw-group-table__cell--center': textAlign === 'center',
            'part-sw-group-table__cell--right': textAlign === 'right'
          }"
          v-for="(field, index) in newFields"
          :key="index"
        >
          <span>{{isSort ? field.value : field}}</span>
          <span class="part-sw-group-table__sort-icon" @click="handleSort(field.type, field.key)">
            <span v-if="sortIcon">&uarr;&darr;</span>
            <slot name="icon" v-if="!sortIcon"></slot>
          </span>
        </td>
      </tr>

      <tr
        class="part-sw-group-table__row"
        :class="{
          'part-sw-group-table__row--bg-even-child': backgroundChild === 'even',
          'part-sw-group-table__row--bg-odd-child': backgroundChild === 'odd',
          'part-sw-group-table__row--hover': hover
        }"
        v-for="(row, index) in newItems"
        :key="index"
      >
        <td
          class="part-sw-group-table__cell"
          :class="{
              'part-sw-group-table__cell--bordered': bordered,
              'part-sw-group-table__cell--center': textAlign === 'center',
              'part-sw-group-table__cell--right': textAlign === 'right'
            }"
          v-for="(cell, index) in row"
          :key="index"
        >{{cell}}</td>
      </tr>
    </table>
  </div>
</template>

<style src="./part-sw-group-table-sample.css" scoped />
<script src="./part-sw-group-table-sample.js" />
