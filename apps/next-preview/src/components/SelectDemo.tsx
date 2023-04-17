"use client";

import { Select } from "@c6r/react";

export const SelectDemo = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Choose some item" />

      <Select.Content>
        <Select.Group label="Group 1">
          <Select.Item value="item-1">Item 1</Select.Item>
          <Select.Item value="item-2">Item 2</Select.Item>
          <Select.Item value="item-3">Item 3</Select.Item>
          <Select.Item value="item-4">Item 4</Select.Item>
          <Select.Item value="item-5">Item 5</Select.Item>
          <Select.Item value="item-6">Item 6</Select.Item>
          <Select.Item value="item-7">Item 7</Select.Item>
          <Select.Item value="item-8">Item 8</Select.Item>
          <Select.Item value="item-9">Item 9</Select.Item>
          <Select.Item value="item-10">Item 10</Select.Item>
          <Select.Item value="item-11">Item 11</Select.Item>
          <Select.Item value="item-12">Item 12</Select.Item>
          <Select.Item value="item-13">Item 13</Select.Item>
        </Select.Group>

        <Select.Divider />

        <Select.Group label="Group 2">
          <Select.Item disabled value="item-14">
            Item 14
          </Select.Item>
          <Select.Item value="item-15">Item 15</Select.Item>
          <Select.Item value="item-16">Item 16</Select.Item>
          <Select.Item value="item-17">Item 17</Select.Item>
          <Select.Item value="item-18">Item 18</Select.Item>
          <Select.Item value="item-19">Item 19</Select.Item>
          <Select.Item value="item-20">Item 20</Select.Item>
          <Select.Item value="item-21">Item 21</Select.Item>
          <Select.Item value="item-22">Item 22</Select.Item>
          <Select.Item value="item-23">Item 23</Select.Item>
          <Select.Item value="item-24">Item 24</Select.Item>
          <Select.Item value="item-25">Item 25</Select.Item>
          <Select.Item value="item-26">Item 26</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
